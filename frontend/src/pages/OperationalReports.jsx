import { TrendingUp, TrendingDown } from 'lucide-react';
import './OperationalReports.css';

export default function OperationalReports() {
  return (
    <div className="reports-container">
      <div className="reports-top-metrics">
        <div className="metric-box">
          <div className="metric-title">Rotinas Concluídas</div>
          <div className="metric-value" style={{color: 'var(--success-color)'}}>1,240</div>
          <div className="metric-trend success">
            <TrendingUp size={14} /> +12% vs mês anterior
          </div>
        </div>
        
        <div className="metric-box">
          <div className="metric-title">Taxa de Atraso</div>
          <div className="metric-value" style={{color: 'var(--warning-color)'}}>4.2%</div>
          <div className="metric-trend success">
            <TrendingDown size={14} /> -1% vs mês anterior
          </div>
        </div>
      </div>
      
      <div className="reports-grid">
        <div className="report-card">
          <h3 className="section-title" style={{padding: '1.25rem'}}>Criticidade por Setor</h3>
          
          <div className="bars-container">
            <div className="bar-group">
              <div className="bar-header">
                <span>UTI</span>
                <span>High</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill critical" style={{width: '85%'}}></div>
              </div>
            </div>
            
            <div className="bar-group">
              <div className="bar-header">
                <span>Emergência</span>
                <span>Med</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill warning" style={{width: '55%'}}></div>
              </div>
            </div>
            
            <div className="bar-group">
              <div className="bar-header">
                <span>Enfermaria</span>
                <span>Low</span>
              </div>
              <div className="bar-track">
                <div className="bar-fill success" style={{width: '30%'}}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="report-card">
          <h3 className="section-title" style={{padding: '1.25rem'}}>Tabela Comparativa (Semanal)</h3>
          
          <table className="data-table" style={{width: '100%'}}>
            <thead>
              <tr>
                <th>Equipe</th>
                <th>Atendimentos</th>
                <th>Eficiência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Manhã</td>
                <td>450</td>
                <td style={{color: 'var(--success-color)'}}>98%</td>
              </tr>
              <tr>
                <td>Tarde</td>
                <td>320</td>
                <td style={{color: 'var(--warning-color)'}}>92%</td>
              </tr>
              <tr>
                <td>Noite</td>
                <td>180</td>
                <td style={{color: 'var(--success-color)'}}>96%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
