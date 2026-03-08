import { Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-logo">
          <div className="logo-box">
            <Activity className="logo-icon-login" size={20} />
          </div>
          <h2>CareTrack</h2>
        </div>
        
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email Profissional</label>
            <input type="email" placeholder="nome@hospital.com" required />
          </div>
          
          <div className="form-group">
            <label>Senha</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          
          <button type="submit" className="login-btn">
            Entrar no Sistema
          </button>
        </form>
        
        <div className="login-footer">
          <a href="#">Problemas para acessar?</a>
        </div>
      </div>
    </div>
  );
}
