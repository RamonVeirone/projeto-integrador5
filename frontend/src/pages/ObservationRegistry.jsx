import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../pages/PatientDetails.css';
import './Forms.css';

export default function ObservationRegistry() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/pacientes');
  };

  return (
    <div className="patient-details-container">
<Link to="/pacientes" className="back-link">
          <ArrowLeft size={16} /> Voltar para Lista de Pacientes
        </Link>
      
      <div className="form-container">
        <h3 className="form-title">Registrar Nova Observação</h3>
        
        <form onSubmit={handleSubmit} className="custom-form">
          <div className="form-group">
            <label>Tipo de Observação</label>
            <select>
              <option>Evolução de Enfermagem</option>
              <option>Anotação Médica</option>
              <option>Avaliação Multidisciplinar</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Descrição Detalhada</label>
            <textarea 
              placeholder="Descreva o ocorrido..." 
              rows={8}
              required
            ></textarea>
          </div>
          
          <div className="form-actions-single">
            <button type="submit" className="btn btn-primary full-width">Salvar Registro</button>
          </div>
        </form>
      </div>
    </div>
  );
}
