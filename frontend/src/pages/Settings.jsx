import { Users, Map, Activity, BellRing, Settings as SettingsIcon } from 'lucide-react';
import './Settings.css';

export default function Settings() {
  return (
    <div className="settings-container">
      <div className="settings-grid">
        <button className="settings-card">
          <div className="settings-icon-wrapper">
            <Users className="primary-icon" size={24} />
          </div>
          <h3>Gerenciar Usuários</h3>
          <p>Adicionar, remover e editar permissões.</p>
        </button>
        
        <button className="settings-card">
          <div className="settings-icon-wrapper">
            <Map className="primary-icon" size={24} />
          </div>
          <h3>Gerenciar Setores</h3>
          <p>Configurar alas, quartos e leitos.</p>
        </button>
        
        <button className="settings-card">
          <div className="settings-icon-wrapper">
            <Activity className="primary-icon" size={24} />
          </div>
          <h3>Parâmetros Clínicos</h3>
          <p>Ajustar faixas de alerta para sinais vitais.</p>
        </button>
      </div>
      
      <div className="system-adjustments">
        <h3 className="section-title">Ajustes Gerais do Sistema</h3>
        
        <div className="toggle-list">
          <div className="toggle-item">
            <span>Notificações Sonoras</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="toggle-item">
            <span>Modo Manutenção</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
