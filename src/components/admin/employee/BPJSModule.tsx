import { useEffect, useState } from 'react';
import { useTranslation } from '../../../locales/LanguageContext';
import { supabase } from '../../../lib/supabase/client';

type EmployeeBPJS = {
  id: string;
  id_karyawan: string;
  nama: string;
  departemen?: string;
  jabatan?: string;
  nomor_bpjs_kesehatan?: string;
  nomor_bpjs_ketenagakerjaan?: string;
  bpjs_kesehatan?: string;
  bpjs_ketenagakerjaan?: string;
};

export default function BPJSModule() {
  const { t } = useTranslation();
  const [employees, setEmployees] = useState<EmployeeBPJS[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({ bpjs_kes: '', bpjs_ket: '' });

  const fetchEmployees = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('karyawan')
      .select('id, id_karyawan, nama, departemen, jabatan, nomor_bpjs_kesehatan, nomor_bpjs_ketenagakerjaan, bpjs_kesehatan, bpjs_ketenagakerjaan')
      .order('nama', { ascending: true });

    if (error) {
      setError(error.message);
    } else {
      setEmployees(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleEdit = (emp: EmployeeBPJS) => {
    setEditingId(emp.id);
    setFormValues({
      bpjs_kes: emp.nomor_bpjs_kesehatan || emp.bpjs_kesehatan || '',
      bpjs_ket: emp.nomor_bpjs_ketenagakerjaan || emp.bpjs_ketenagakerjaan || '',
    });
  };

  const handleSave = async (id: string) => {
    setError('');
    setNotice('');

    const { error: updateError } = await supabase
      .from('karyawan')
      .update({
        nomor_bpjs_kesehatan: formValues.bpjs_kes,
        nomor_bpjs_ketenagakerjaan: formValues.bpjs_ket,
      })
      .eq('id', id);

    if (updateError) {
      setError(updateError.message);
    } else {
      setNotice('Nomor BPJS berhasil diperbarui.');
      setEditingId(null);
      fetchEmployees();
    }
  };

  const filtered = employees.filter(e =>
    `${e.nama} ${e.id_karyawan} ${e.departemen || ''}`.toLowerCase().includes(search.toLowerCase())
  );

  const totalKes = employees.filter(e => (e.nomor_bpjs_kesehatan || e.bpjs_kesehatan)).length;
  const totalKet = employees.filter(e => (e.nomor_bpjs_ketenagakerjaan || e.bpjs_ketenagakerjaan)).length;

  return (
    <div className="bpjs-module web-card-group">
      <div className="page-heading bpjs-page-heading">
        <div>
          <h2>{t('bpjs_compliance_title')}</h2>
          <p>{t('bpjs_compliance_desc')}</p>
        </div>
      </div>

      {/* Ringkasan Statistik BPJS */}
      <div className="mini-kpi-row bpjs-kpi-grid">
        <div className="stat-card bpjs-kpi-card">
          <span>{t('total_employees')}</span>
          <strong>{employees.length}</strong>
        </div>
        <div className="stat-card bpjs-kpi-card bpjs-kpi-card--health">
          <span>{t('bpjs_health_registered')}</span>
          <strong>{totalKes} / {employees.length}</strong>
        </div>
        <div className="stat-card bpjs-kpi-card bpjs-kpi-card--work">
          <span>{t('bpjs_work_registered')}</span>
          <strong>{totalKet} / {employees.length}</strong>
        </div>
      </div>

      {notice && <div className="bpjs-notice">{notice}</div>}
      {error && <div className="bpjs-error">{error}</div>}

      <div className="bpjs-search-row">
        <input
          type="text"
          placeholder={t("search_employee_id_department")}
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="bpjs-search"
        />
      </div>

      {loading ? (
        <p className="bpjs-loading">{t('loading_bpjs')}</p>
      ) : (
        <div className="bpjs-table-wrap">
          <table className="bpjs-table">
            <thead>
              <tr className="bpjs-table-head">
                <th className="bpjs-cell">{t('employee')}</th>
                <th className="bpjs-cell">{t('department_position')}</th>
                <th className="bpjs-cell">{t('bpjs_health_number')}</th>
                <th className="bpjs-cell">{t('bpjs_work_number')}</th>
                <th className="bpjs-cell bpjs-cell--right">{t('actions')}</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(emp => {
                const isEditing = editingId === emp.id;
                const noKes = emp.nomor_bpjs_kesehatan || emp.bpjs_kesehatan;
                const noKet = emp.nomor_bpjs_ketenagakerjaan || emp.bpjs_ketenagakerjaan;

                return (
                  <tr key={emp.id} className="bpjs-table-row">
                    <td className="bpjs-cell">
                      <b>{emp.nama}</b>
                      <small style={{ display: 'block', color: '#667085' }}>{emp.id_karyawan}</small>
                    </td>
                    <td className="bpjs-cell">
                      <span>{emp.departemen || '-'}</span>
                      <small style={{ display: 'block', color: '#667085' }}>{emp.jabatan || '-'}</small>
                    </td>
                    <td className="bpjs-cell">
                      {isEditing ? (
                        <input
                          type="text"
                          value={formValues.bpjs_kes}
                          onChange={e => setFormValues({ ...formValues, bpjs_kes: e.target.value })}
                          placeholder={t("bpjs_health_number")}
                          style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid #d8dee8', width: '100%' }}
                        />
                      ) : (
                        <span style={{ color: noKes ? '#172033' : '#98a2b3' }}>{noKes || 'Belum diisi'}</span>
                      )}
                    </td>
                    <td className="bpjs-cell">
                      {isEditing ? (
                        <input
                          type="text"
                          value={formValues.bpjs_ket}
                          onChange={e => setFormValues({ ...formValues, bpjs_ket: e.target.value })}
                          placeholder={t("bpjs_work_number")}
                          style={{ padding: '6px 10px', borderRadius: '6px', border: '1px solid #d8dee8', width: '100%' }}
                        />
                      ) : (
                        <span style={{ color: noKet ? '#172033' : '#98a2b3' }}>{noKet || 'Belum diisi'}</span>
                      )}
                    </td>
                    <td className="bpjs-cell bpjs-cell--right">
                      {isEditing ? (
                        <div style={{ display: 'flex', gap: '6px', justifyContent: 'flex-end' }}>
                          <button onClick={() => handleSave(emp.id)} className="primary">{t("save")}</button>
                          <button onClick={() => setEditingId(null)} className="secondary">{t("cancel")}</button>
                        </div>
                      ) : (
                        <button onClick={() => handleEdit(emp)} className="secondary">{t("edit_bpjs")}</button>
                      )}
                    </td>
                  </tr>
                );
              })}
              {!filtered.length && (
                <tr>
                  <td colSpan={5} className="bpjs-empty-cell">{t('no_employees_found')}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
