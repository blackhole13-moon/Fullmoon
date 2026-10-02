import { supabase } from './supabase/client';

export type OfflineEmployeeCache = {
  id: string;
  id_karyawan: string;
  nama: string;
  email?: string | null;
  jabatan?: string | null;
  departemen?: string | null;
  status_karyawan?: string | null;
  status_aktif?: boolean | null;
  tanggal_masuk?: string | null;
  auth_user_id?: string | null;
};

export type OfflineAttendanceEvent = {
  client_event_id: string;
  action: 'clock_in' | 'clock_out';
  id_karyawan: string;
  tanggal: string;
  jam: string;
  lat: number;
  long: number;
  accuracy: number;
  selfie: string;
  lokasi?: string;
};

const DB_NAME = 'project-tirta-android-offline-v1';
const STORE = 'attendance_events';
const EMPLOYEE_PREFIX = 'project-tirta-offline-employee-v1:';
const ATTENDANCE_PREFIX = 'project-tirta-offline-attendance-v1:';

function openDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB tidak tersedia pada perangkat ini.'));
      return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE)) {
        db.createObjectStore(STORE, { keyPath: 'client_event_id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Database offline gagal dibuka.'));
  });
}

export function cacheEmployee(userId: string, employee: OfflineEmployeeCache) {
  const safe: OfflineEmployeeCache = {
    id: employee.id,
    id_karyawan: employee.id_karyawan,
    nama: employee.nama,
    email: employee.email || null,
    jabatan: employee.jabatan || null,
    departemen: employee.departemen || null,
    status_karyawan: employee.status_karyawan || null,
    status_aktif: employee.status_aktif ?? null,
    tanggal_masuk: employee.tanggal_masuk || null,
    auth_user_id: userId,
  };
  try {
    localStorage.setItem(`${EMPLOYEE_PREFIX}${userId}`, JSON.stringify(safe));
  } catch {
    // Cache hanya pelengkap; jangan menggagalkan aplikasi online.
  }
}

export function getCachedEmployee(userId: string): OfflineEmployeeCache | null {
  try {
    const raw = localStorage.getItem(`${EMPLOYEE_PREFIX}${userId}`);
    return raw ? JSON.parse(raw) as OfflineEmployeeCache : null;
  } catch {
    return null;
  }
}

export function cacheAttendance(userId: string, rows: unknown[]) {
  try {
    localStorage.setItem(`${ATTENDANCE_PREFIX}${userId}`, JSON.stringify((rows || []).slice(0, 90)));
  } catch {
    // Non-critical cache.
  }
}

export function getCachedAttendance(userId: string): any[] {
  try {
    const raw = localStorage.getItem(`${ATTENDANCE_PREFIX}${userId}`);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function enqueueOfflineAttendance(event: OfflineAttendanceEvent) {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put(event);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error || new Error('Antrean absensi offline gagal disimpan.'));
  });
  db.close();
}

export async function listOfflineAttendance(idKaryawan: string): Promise<OfflineAttendanceEvent[]> {
  const db = await openDb();
  const rows = await new Promise<OfflineAttendanceEvent[]>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readonly');
    const req = tx.objectStore(STORE).getAll();
    req.onsuccess = () => resolve((req.result || []).filter((x: OfflineAttendanceEvent) => x.id_karyawan === idKaryawan));
    req.onerror = () => reject(req.error || new Error('Antrean absensi gagal dibaca.'));
  });
  db.close();
  return rows.sort((a, b) => `${a.tanggal} ${a.jam}`.localeCompare(`${b.tanggal} ${b.jam}`));
}

export async function countOfflineAttendance(idKaryawan: string): Promise<number> {
  try {
    return (await listOfflineAttendance(idKaryawan)).length;
  } catch {
    return 0;
  }
}

async function removeOfflineAttendance(clientEventId: string) {
  const db = await openDb();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).delete(clientEventId);
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error || new Error('Antrean gagal dihapus.'));
  });
  db.close();
}

export async function syncOfflineAttendance(idKaryawan: string) {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return { synced: 0, failed: 0 };
  }

  let synced = 0;
  let failed = 0;
  const events = await listOfflineAttendance(idKaryawan);

  for (const item of events) {
    const { error } = await supabase.rpc('hris_ess_sync_offline_attendance', {
      p_client_event_id: item.client_event_id,
      p_action: item.action,
      p_id_karyawan: item.id_karyawan,
      p_tanggal: item.tanggal,
      p_jam: item.jam,
      p_lat: item.lat,
      p_long: item.long,
      p_accuracy: item.accuracy,
      p_selfie: item.selfie,
      p_lokasi: item.lokasi || 'GPS ESS OFFLINE',
    });

    if (error) {
      failed += 1;
      // Stop on the first server/network failure; the remaining queue stays intact.
      break;
    }

    await removeOfflineAttendance(item.client_event_id);
    synced += 1;
  }

  return { synced, failed };
}
