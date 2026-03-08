import { User } from 'lucide-react';
import './UserProfile.css';

export default function UserProfile() {
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            DR
          </div>
          <div className="profile-title">
            <h2>Dr. Roberto Silva</h2>
            <p>CRM/SP 123456 - Cardiologia</p>
            <span className="role-badge">Administrador</span>
          </div>
        </div>
        
        <div className="profile-form">
          <div className="form-group">
            <label>Nome Completo</label>
            <input type="text" value="Roberto Silva" readOnly className="input-readonly" />
          </div>
          
          <div className="form-group">
            <label>Email Corporativo</label>
            <input type="email" value="roberto.silva@hospital.com" readOnly className="input-readonly" />
          </div>
        </div>
        
        <div className="security-section">
          <h3>Segurança</h3>
          <button className="btn btn-secondary">Alterar Senha</button>
        </div>
      </div>
    </div>
  );
}
