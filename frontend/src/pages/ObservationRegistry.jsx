import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { API_BASE_URL } from '../config';
import '../pages/PatientDetails.css';
import './Forms.css';

export default function ObservationRegistry() {
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
          console.error('Resposta inesperada ao carregar pacientes (observations):', data);
        }
        setLoadingPatients(false);
      })
      .catch(err => {
        console.error('Erro ao carregar pacientes (observations):', err);
        setLoadingPatients(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const patientId = formData.get('patient_id');
    const type = formData.get('type');
    const description = formData.get('description');

    if (!patientId) {
      setError('Selecione um paciente.');
      return;
    }

    setError(null);
    setFormLoading(true);

    fetch(`${API_BASE_URL}/api/observations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        patient_id: Number(patientId),
        type,
        description,
      }),
    })
      .then(res => res.json())
      .then(() => {
        setFormLoading(false);
        navigate('/pacientes');
      })
      .catch(err => {
        console.error('Erro ao salvar observação:', err);
        setError('Não foi possível salvar a observação. Tente novamente.');
        setFormLoading(false);
      });
  };

  return (
    <div className="patient-details-container">
      <Link to="/pacientes" className="back-link">
        <ArrowLeft size={16} /> Voltar para Lista de Pacientes
      </Link>
      
      <div className="form-container">
        <h3 className="form-title">Registrar Nova Observação</h3>
        
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
            <label>Tipo de Observação</label>
            <select name="type">
              <option value="Evolução de Enfermagem">Evolução de Enfermagem</option>
              <option value="Anotação Médica">Anotação Médica</option>
              <option value="Avaliação Multidisciplinar">Avaliação Multidisciplinar</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Descrição Detalhada</label>
            <textarea 
              name="description"
              placeholder="Descreva o ocorrido..." 
              rows={8}
              required
            ></textarea>
          </div>
          
          <div className="form-actions-single">
            <button type="submit" className="btn btn-primary full-width" disabled={formLoading}>
              {formLoading ? 'Salvando...' : 'Salvar Registro'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
