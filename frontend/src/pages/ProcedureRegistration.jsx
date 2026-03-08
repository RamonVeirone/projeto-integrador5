import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import './Forms.css';

export default function ProcedureRegistration() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [loadingPatients, setLoadingPatients] = useState(true);
  const [formLoading, setFormLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/patients`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setPatients(data);
        } else {
          console.error('Resposta inesperada ao carregar pacientes (procedures):', data);
        }
        setLoadingPatients(false);
      })
      .catch(err => {
        console.error('Erro ao carregar pacientes (procedures):', err);
        setLoadingPatients(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const patientId = formData.get('patient_id');
    const description = formData.get('description');
    const scheduledTime = formData.get('scheduled_time');
    const responsible = formData.get('responsible');

    if (!patientId) {
      setError('Selecione um paciente.');
      return;
    }

    setError(null);
    setFormLoading(true);

    fetch(`${API_BASE_URL}/api/routines`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patient_id: Number(patientId),
        description,
        scheduled_time: scheduledTime,
        responsible,
      }),
    })
      .then(res => res.json())
      .then(() => {
        setFormLoading(false);
        navigate('/pacientes');
      })
      .catch(err => {
        console.error('Erro ao salvar procedimento:', err);
        setError('Não foi possível salvar o procedimento. Tente novamente.');
        setFormLoading(false);
      });
  };

  return (
    <div className="patient-details-container">
      <div className="form-container">
        <h3 className="form-title">Cadastrar Novo Procedimento</h3>
        
        <form onSubmit={handleSubmit} className="custom-form">
          {error && (
            <div className="form-error" style={{ marginBottom: '1rem', color: 'var(--danger-color)' }}>
              {error}
            </div>
          )}

          <div className="form-group">
            <label>Paciente</label>
            <select name="patient_id" required disabled={loadingPatients}>
              <option value="">{loadingPatients ? 'Carregando pacientes...' : 'Selecione...'}</option>
              {patients.map(p => (
                <option key={p.id} value={p.id}>
                  {p.name} - Leito {p.room}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Tipo de Procedimento</label>
            <input name="description" type="text" placeholder="Ex: Raio-X de Tórax" required autoFocus />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div className="form-group">
              <label>Horário Agendado</label>
              <input name="scheduled_time" type="datetime-local" required />
            </div>
            
            <div className="form-group">
              <label>Responsável</label>
              <select name="responsible" required>
                <option value="">Selecione...</option>
                <option value="Dr. Thiago (Radiologia)">Dr. Thiago (Radiologia)</option>
                <option value="Dra. Amanda (Cirurgia)">Dra. Amanda (Cirurgia)</option>
                <option value="Equipe de Enfermagem">Equipe de Enfermagem</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label>Observações / Instruções</label>
            <textarea 
              name="notes"
              placeholder="Instruções de preparo ou materiais necessários..." 
              rows={5}
            ></textarea>
          </div>
          
          <div className="form-actions-single">
            <button type="submit" className="btn btn-primary full-width" disabled={formLoading}>
              {formLoading ? 'Salvando...' : 'Salvar Procedimento'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
