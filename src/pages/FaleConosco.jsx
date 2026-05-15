import React from 'react';
import { Phone, Mail, MapPin, Clock, Globe, Share2, Send } from 'lucide-react';
import './FaleConosco.css';

const FaleConosco = () => {
  return (
    <div className="fale-conosco animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Fale Conosco</h1>
          <p>Nossa equipe de especialistas está pronta para lhe atender.</p>
        </div>
      </div>

      <div className="container section grid grid-cols-2 gap-lg fale-conosco-layout">
        {/* Contact Info */}
        <div className="contact-info-col">
          <h2 className="mb-4">Entre em <span className="text-gold">Contato</span></h2>
          <p className="mb-4 text-text-light text-lg">
            Seja para encontrar o imóvel perfeito ou vender o seu patrimônio com agilidade e discrição.
          </p>

          <div className="contact-cards grid grid-cols-2 gap-sm mb-4">
            <div className="contact-card">
              <Phone size={32} className="text-gold mb-2" />
              <h3>Telefone</h3>
              <p>+55 (11) 99999-9999</p>
              <p>+55 (11) 3000-0000</p>
            </div>
            <div className="contact-card">
              <Mail size={32} className="text-gold mb-2" />
              <h3>E-mail</h3>
              <p>contato@primeestate.com.br</p>
              <p>vendas@primeestate.com.br</p>
            </div>
          </div>

          <div className="contact-card mb-4">
            <MapPin size={32} className="text-gold mb-2" />
            <h3>Endereço Sede</h3>
            <p>Av. Brigadeiro Faria Lima, 3000 - 15º Andar</p>
            <p>Itaim Bibi, São Paulo - SP, 01451-000</p>
          </div>

          <div className="contact-card">
            <Clock size={32} className="text-gold mb-2" />
            <h3>Horário de Atendimento</h3>
            <p>Segunda a Sexta: 09:00 às 19:00</p>
            <p>Sábado: 09:00 às 13:00</p>
          </div>
          
          <div className="social-links mt-4">
            <h3>Siga-nos</h3>
            <div className="flex gap-sm mt-2">
              <a href="#" className="social-icon"><Globe /></a>
              <a href="#" className="social-icon"><Share2 /></a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-col">
          <div className="form-box glass">
            <h3 className="mb-4">Envie sua Mensagem</h3>
            <form className="flex-col gap-sm">
              <div className="grid grid-cols-2 gap-sm">
                <div className="input-group">
                  <label>Nome Completo</label>
                  <input type="text" placeholder="Seu nome" />
                </div>
                <div className="input-group">
                  <label>Telefone / WhatsApp</label>
                  <input type="tel" placeholder="(11) 90000-0000" />
                </div>
              </div>
              <div className="input-group">
                <label>E-mail</label>
                <input type="email" placeholder="seuemail@exemplo.com" />
              </div>
              <div className="input-group">
                <label>Assunto</label>
                <select>
                  <option>Comprar Imóvel</option>
                  <option>Vender Imóvel</option>
                  <option>Alugar Imóvel</option>
                  <option>Parceria</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="input-group">
                <label>Mensagem</label>
                <textarea placeholder="Como podemos ajudar?" rows="5"></textarea>
              </div>
              <button className="btn btn-primary mt-2 flex justify-center items-center gap-sm">
                Enviar Mensagem <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <div className="map-placeholder">
          <p className="text-white">Google Maps Integrado (Faria Lima, 3000)</p>
        </div>
      </div>
    </div>
  );
};

export default FaleConosco;
