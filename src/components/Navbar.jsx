import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Building2 } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { currentUser, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/login');
  };

  return (
    <header className="navbar glass-dark">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <Building2 size={28} className="text-gold" />
          <span>Paula <span className="text-gold">Imobiliária</span></span>
        </Link>

        <nav className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/quem-somos" onClick={() => setIsOpen(false)}>Quem Somos</Link>
          <Link to="/servicos" onClick={() => setIsOpen(false)}>Serviços</Link>
          <Link to="/imoveis" onClick={() => setIsOpen(false)}>Catálogo</Link>
          <Link to="/fale-conosco" onClick={() => setIsOpen(false)}>Contato</Link>
          
          {!currentUser ? (
            <Link to="/login" className="btn-login" onClick={() => setIsOpen(false)}>Entrar</Link>
          ) : (
            <>
              {currentUser.role === 'admin' ? (
                <Link to="/admin" className="btn-login" onClick={() => setIsOpen(false)}>Painel Admin</Link>
              ) : (
                <Link to="/area-cliente" className="btn-login" onClick={() => setIsOpen(false)}>Área do Cliente</Link>
              )}
              <button className="btn-login" style={{ background: 'transparent', color: 'var(--color-bg)', border: '1px solid var(--color-bg)' }} onClick={handleLogout}>Sair</button>
            </>
          )}
        </nav>

        <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
