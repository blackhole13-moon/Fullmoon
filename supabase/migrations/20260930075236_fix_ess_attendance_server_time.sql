create or replace function public.hris_ess_clock_in(
  p_id_karyawan text,
  p_tanggal date,
  p_jam time without time zone,
  p_lat numeric,
  p_long numeric,
  p_accuracy numeric,
  p_selfie text,
  p_lokasi text default 'GPS'::text
)
returns uuid
language plpgsql
set search_path to 'public'
as $function$
declare
  v_id uuid;
  v_now timestamp without time zone;
  v_tanggal date;
  v_jam time without time zone;
begin
  if (select auth.uid()) is null
     or p_id_karyawan is null
     or p_id_karyawan <> (select private.hris_ess_employee_id()) then
    raise exception 'Akses absensi ditolak' using errcode='42501';
  end if;

  v_now := clock_timestamp() at time zone 'Asia/Jakarta';
  v_tanggal := v_now::date;
  v_jam := v_now::time(0);

  if p_tanggal is distinct from v_tanggal then
    raise exception 'Tanggal absensi harus tanggal Jakarta hari ini';
  end if;

  if not exists (
    select 1
    from public.karyawan
    where id_karyawan = p_id_karyawan
      and status_aktif = true
  ) then
    raise exception 'Akun karyawan tidak aktif' using errcode='42501';
  end if;

  if exists (
    select 1
    from public.absensi
    where id_karyawan = p_id_karyawan
      and tanggal = v_tanggal
      and jam_masuk is not null
  ) then
    raise exception 'Anda sudah melakukan clock-in untuk tanggal ini';
  end if;

  insert into public.absensi(
    id_karyawan,tanggal,jam_masuk,status,latitude,longitude,
    lokasi_masuk,akurasi_masuk,selfie_masuk,sumber,keterangan
  )
  values(
    p_id_karyawan,v_tanggal,v_jam,'Hadir',p_lat,p_long,
    p_lokasi,p_accuracy,p_selfie,'ESS','Clock-in ESS'
  )
  returning id into v_id;

  return v_id;
end;
$function$;

create or replace function public.hris_ess_clock_out(
  p_id_karyawan text,
  p_tanggal date,
  p_jam time without time zone,
  p_lat numeric,
  p_long numeric,
  p_accuracy numeric,
  p_selfie text,
  p_lokasi text default 'GPS'::text
)
returns uuid
language plpgsql
set search_path to 'public'
as $function$
declare
  v_id uuid;
  v_now timestamp without time zone;
  v_tanggal date;
  v_jam time without time zone;
begin
  if (select auth.uid()) is null
     or p_id_karyawan is null
     or p_id_karyawan <> (select private.hris_ess_employee_id()) then
    raise exception 'Akses absensi ditolak' using errcode='42501';
  end if;

  v_now := clock_timestamp() at time zone 'Asia/Jakarta';
  v_tanggal := v_now::date;
  v_jam := v_now::time(0);

  if p_tanggal is distinct from v_tanggal then
    raise exception 'Tanggal absensi harus tanggal Jakarta hari ini';
  end if;

  if not exists (
    select 1
    from public.karyawan
    where id_karyawan = p_id_karyawan
      and status_aktif = true
  ) then
    raise exception 'Akun karyawan tidak aktif' using errcode='42501';
  end if;

  select id into v_id
  from public.absensi
  where id_karyawan = p_id_karyawan
    and tanggal = v_tanggal
    and jam_masuk is not null
    and jam_pulang is null
  order by created_at desc
  limit 1;

  if v_id is null then
    raise exception 'Clock-in aktif tidak ditemukan untuk tanggal ini';
  end if;

  update public.absensi
  set jam_pulang=v_jam,
      latitude=coalesce(p_lat,latitude),
      longitude=coalesce(p_long,longitude),
      lokasi_pulang=p_lokasi,
      akurasi_pulang=p_accuracy,
      selfie_pulang=p_selfie,
      sumber='ESS',
      updated_at=now()
  where id=v_id;

  return v_id;
end;
$function$;
