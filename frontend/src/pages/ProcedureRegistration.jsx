import { useNavigate } from 'react-router-dom';
import './Forms.css';

export default function ProcedureRegistration() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/pacientes');
  };

  return (
    <div className="patient-details-container">
      <div className="form-container">
        <h3 className="form-title">Cadastrar Novo Procedimento</h3>
        
        <form onSubmit={handleSubmit} className="custom-form">
          <div className="form-group">
            <label>Tipo de Procedimento</label>
            <input type="text" placeholder="Ex: Raio-X de Tórax" required autoFocus />
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            <div className="form-group">
              <label>Horário Agendado</label>
              <input type="datetime-local" required />
            </div>
            
            <div className="form-group">
              <label>Responsável</label>
              <select required>
                <option value="">Selecione...</option>
                <option value="1">Dr. Thiago (Radiologia)</option>
                <option value="2">Dra. Amanda (Cirurgia)</option>
                <option value="3">Equipe de Enfermagem</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label>Observações / Instruções</label>
            <textarea 
              placeholder="Instruções de preparo ou materiais necessários..." 
              rows={5}
            ></textarea>
          </div>
          
          <div className="form-actions-single">
            <button type="submit" className="btn btn-primary full-width">Salvar Procedimento</button>
          </div>
        </form>
      </div>
    </div>
  );
}
