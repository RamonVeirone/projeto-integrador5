import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import './MainLayout.css';

export default function MainLayout() {
  return (
    <div className="layout-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="page-content" id="main-scroll-area">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
