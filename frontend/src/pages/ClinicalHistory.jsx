import './ClinicalHistory.css';

const historyData = [
  { id: 1, date: '09/12 14:05', patient: 'Alberto Souza', procedure: 'Administração Insulina', resp: 'Enf. Ana', status: 'Concluído' },
  { id: 2, date: '09/12 13:30', patient: 'Maria Clara', procedure: 'Troca de Curativo', resp: 'Téc. João', status: 'Concluído' },
  { id: 3, date: '09/12 12:00', patient: 'Alberto Souza', procedure: 'Almoço', resp: 'Copa', status: 'Concluído' },
];

export default function ClinicalHistory() {
  return (
    <div className="history-container">
      <div className="history-header">
        <h3 className="section-title" style={{ padding: 0, border: 'none' }}>Histórico Clínico Global</h3>
        
        <div className="history-filters">
          <input type="date" className="filter-input" defaultValue="2023-12-09" />
          <select className="filter-input">
            <option>Todos os tipos</option>
            <option>Rotinas</option>
            <option>Procedimentos</option>
            <option>Observações</option>
          </select>
        </div>
      </div>
      
      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>Data/Hora</th>
              <th>Paciente</th>
              <th>Procedimento</th>
              <th>Responsável</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {historyData.map(row => (
              <tr key={row.id}>
                <td className="text-secondary">{row.date}</td>
                <td>{row.patient}</td>
                <td className="text-secondary">{row.procedure}</td>
                <td>{row.resp}</td>
                <td><span className="timeline-item success" style={{fontSize: '0.85rem'}}>{row.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
