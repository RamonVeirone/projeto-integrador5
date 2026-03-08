import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PatientList.css';

export default function PatientList() {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/api/patients')
      .then(res => res.json())
      .then(data => {
        setPatients(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erro ao buscar pacientes:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="patient-list-container" style={{padding: '2rem', color: 'var(--text-secondary)'}}>Carregando lista de pacientes...</div>;
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
              const priorityClass = p.priority === 'Crítico' ? 'badge-critical' : p.priority === 'Moderado' ? 'badge-warning' : 'badge-success';
              return (
                <tr key={p.id}>
                  <td className="font-medium">{p.name}</td>
                  <td>{p.room}</td>
                  <td><span className={`status-badge ${priorityClass}`}>{p.priority.toUpperCase()}</span></td>
                  <td>{p.lastRoutine}</td>
                  <td>
                    <Link to={`/paciente/detalhes/${p.id}`} className="action-link">Ver Detalhes</Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
