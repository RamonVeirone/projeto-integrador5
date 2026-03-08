import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './PatientDetails.css';

export default function PatientRoutines() {
  const { patientId } = useParams();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(!!patientId);

  useEffect(() => {
    if (!patientId) {
      setLoading(false);
      return;
    }
    setLoading(true);
    fetch(`http://localhost:3000/api/patients/${patientId}`)
      .then(res => res.json())
      .then(data => {
        setPatient(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao buscar rotinas do paciente:', err);
        setLoading(false);
      });
  }, [patientId]);

  if (!patientId) {
    return (
      <div className="patient-details-container">
        <Link to="/pacientes" className="back-link">
          <ArrowLeft size={16} /> Voltar para Lista de Pacientes
        </Link>
        <div className="info-card" style={{ padding: '2rem', textAlign: 'center' }}>
          <h3>Rotinas do Paciente</h3>
          <p className="description-text">Selecione um paciente na lista para ver as rotinas ou acesse os detalhes do paciente.</p>
          <Link to="/pacientes" className="btn btn-primary" style={{ marginTop: '1rem' }}>Ir para Lista de Pacientes</Link>
        </div>
      </div>
    );
  }

  if (loading) {
    return <div className="patient-details-container">Carregando rotinas...</div>;
  }

  if (!patient || patient.error) {
    return (
      <div className="patient-details-container">
        <Link to="/pacientes" className="back-link">
          <ArrowLeft size={16} /> Voltar para Lista
        </Link>
        <p>Paciente não encontrado.</p>
      </div>
    );
  }

  const routines = patient.routines || [];

  return (
    <div className="patient-details-container">
      <Link to={`/paciente/detalhes/${patientId}`} className="back-link">
        <ArrowLeft size={16} /> Voltar para Detalhes do Paciente
      </Link>
      <div className="patient-header">
        <h2>Rotinas – {patient.name}</h2>
        <Link to={`/paciente/detalhes/${patientId}`} className="btn btn-secondary">Ver Detalhes</Link>
      </div>
      <div className="info-card full-width">
        <h3 className="text-secondary">Rotinas e Procedimentos</h3>
        {routines.length > 0 ? (
          <div className="timeline">
            {routines.map(r => (
              <div key={r.id} className={`timeline-item ${r.status === 'Concluído' ? 'success' : 'warning'}`}>
                <span className="time">{r.scheduled_time}</span>
                <span className="event">
                  {r.description} – {r.status} | {r.responsible || '—'}
                </span>
                {r.status === 'Pendente' && (
                  <Link to="/execucao" className="btn btn-primary" style={{ marginLeft: '0.5rem', fontSize: '0.8rem' }}>
                    Executar
                  </Link>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-secondary">Nenhuma rotina registrada.</p>
        )}
      </div>
    </div>
  );
}
