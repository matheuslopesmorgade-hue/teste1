import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Globe, Share2, Mail, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <Building2 size={32} className="text-gold" />
            <span>Paula <span className="text-gold">Imobiliária</span></span>
          </Link>
          <p className="footer-desc">
            Sua parceira de confiança no mercado imobiliário de alto padrão. Encontre, invista e viva com exclusividade.
          </p>
          <div className="footer-social">
            <a href="#"><Globe /></a>
            <a href="#"><Share2 /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Links Rápidos</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/quem-somos">Quem Somos</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/imoveis">Catálogo de Imóveis</Link></li>
            <li><Link to="/area-cliente">Área do Cliente</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contato</h3>
          <ul>
            <li><MapPin size={18} /> Av. Faria Lima, 3000 - São Paulo, SP</li>
            <li><Phone size={18} /> (11) 99999-9999</li>
            <li><Mail size={18} /> contato@paulaimobiliaria.com.br</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Paula Imobiliária. CRECI 12345-J. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
