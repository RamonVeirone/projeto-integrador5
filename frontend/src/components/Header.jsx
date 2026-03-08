import { useLocation } from 'react-router-dom';
import { Bell } from 'lucide-react';
import './Header.css';

const routeNames = {
  '/dashboard': 'Dashboard',
  '/pacientes': 'Lista de Pacientes',
  '/paciente/detalhes': 'Detalhes do Paciente',
  '/paciente/rotinas': 'Rotinas do Paciente',
  '/execucao': 'Execução de Rotina',
  '/observacao': 'Registrar Observação',
  '/prontuario': 'Prontuário Resumido',
  '/historico': 'Histórico Clínico',
  '/cadastro': 'Cadastro Procedimento',
  '/perfil': 'Perfil do Usuário',
  '/relatorios': 'Relatórios Operacionais',
  '/configuracoes': 'Configurações'
};

export default function Header() {
  const location = useLocation();
  const pathname = location.pathname;
  // Paths com parâmetro (:id ou :patientId) não batem com as chaves; usa prefixo
  const title = routeNames[pathname]
    || (pathname.startsWith('/paciente/detalhes') ? 'Detalhes do Paciente' : null)
    || (pathname.startsWith('/paciente/rotinas') ? 'Rotinas do Paciente' : null)
    || 'CareTrack';

  return (
    <header className="header">
      <div className="header-title">{title}</div>
      <div className="header-actions">
        <button className="notification-btn">
          <Bell size={20} />
          <span className="badge"></span>
        </button>
        <div className="shift-badge">
          Plantão: 12h
        </div>
      </div>
    </header>
  );
}
