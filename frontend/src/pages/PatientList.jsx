import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import './PatientList.css';

export default function PatientList() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/patients`)
      .then(res => res.json())
      .then(data => {
        if (!Array.isArray(data)) {
          console.error('Resposta inesperada da API de pacientes:', data);
          setError('Não foi possível carregar a lista de pacientes.');
          setPatients([]);
        } else {
          setPatients(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao buscar pacientes:', err);
        setError('Erro ao buscar pacientes. Tente novamente mais tarde.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="patient-list-container" style={{padding: '2rem', color: 'var(--text-secondary)'}}>Carregando lista de pacientes...</div>;
  }

  if (error) {
    return <div className="patient-list-container" style={{padding: '2rem', color: 'var(--danger-color)'}}>{error}</div>;
  }

  return (
    <div className="patient-list-container">
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Nome do Paciente</th>
              <th>Quarto/Leito</th>
              <th>Prioridade</th>
              <th>Última Rotina</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(p => {
              const priorityValue = p.priority || 'Estável';
              const priorityClass =
                priorityValue === 'Crítico'
                  ? 'badge-critical'
                  : priorityValue === 'Moderado'
                  ? 'badge-warning'
                  : 'badge-success';
              return (
                <tr key={p.id}>
                  <td className="font-medium">{p.name}</td>
                  <td>{p.room}</td>
                  <td>
                    <span className={`status-badge ${priorityClass}`}>
                      {priorityValue.toUpperCase()}
                    </span>
                  </td>
                  <td>{p.lastRoutine}</td>
                  <td>
                    <Link to={`/paciente/detalhes/${p.id}`} className="action-link">
                      Ver Detalhes
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
