import { AlertCircle, Clock, CheckCircle2 } from 'lucide-react';
import './SystemAlerts.css';

export default function SystemAlerts() {
  return (
    <div className="alerts-container">
      <div className="alert-item critical">
        <div className="alert-content">
          <AlertCircle className="alert-icon" size={20} />
          <div>
            <h4>Medicação Atrasada Criticamente</h4>
            <p>Leito 204 - Insulina (Atraso {'>'} 30min)</p>
          </div>
        </div>
        <button className="btn btn-critical">Resolver</button>
      </div>

      <div className="alert-item warning">
        <div className="alert-content">
          <Clock className="alert-icon" size={20} />
          <div>
            <h4>Avaliação Pendente</h4>
            <p>Leito 301 - Dr. Silva solicitado na UTI</p>
          </div>
        </div>
        <button className="btn btn-warning">Verificar</button>
      </div>

      <div className="alert-item success">
        <div className="alert-content">
          <CheckCircle2 className="alert-icon" size={20} />
          <div>
            <h4>Rotina Concluída com Sucesso</h4>
            <p>Leito 102 - Higienização completa</p>
          </div>
        </div>
        <button className="btn-close">×</button>
      </div>
    </div>
  );
}
