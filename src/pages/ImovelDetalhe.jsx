import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Bed, Bath, Car, Maximize, Check, Phone, Calculator, Map } from 'lucide-react';
import { DataContext } from '../context/DataContext';
import './ImovelDetalhe.css';

const ImovelDetalhe = () => {
  const { id } = useParams();
  const { properties } = useContext(DataContext);
  const property = properties.find(p => p.id.toString() === id);

  if (!property) {
    return (
      <div className="container section text-center animate-fade-in" style={{minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h2>Imóvel não encontrado.</h2>
        <p>O imóvel que você está procurando pode ter sido removido ou o link está incorreto.</p>
      </div>
    );
  }

  const handleWhatsApp = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/5511999999999?text=Olá, tenho interesse no imóvel: ${property.title} (Ref: ${property.id})`, '_blank');
  };

  const heroImage = property.image || '/hero_bg_house_1778810813317.png';
  const interiorImage = '/property_interior_1778811052892.png';

  return (
    <div className="imovel-detalhe animate-fade-in">
      {/* Gallery Section */}
      <div className="property-gallery">
        <div className="gallery-main" style={{ backgroundImage: `url(${heroImage})` }}></div>
        <div className="gallery-side">
          <div className="gallery-item" style={{ backgroundImage: `url(${interiorImage})` }}></div>
          <div className="gallery-item" style={{ backgroundImage: `url(${interiorImage})` }}>
            <div className="gallery-more">+8 Fotos</div>
          </div>
        </div>
      </div>

      <div className="container section grid grid-cols-[1fr_350px] gap-lg property-layout">
        {/* Main Content */}
        <div className="property-main-info">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="property-tags">
                <span className="badge badge-primary">{property.type}</span>
                <span className="badge badge-outline">Ref: PAU-{property.id}</span>
              </div>
              <h1 className="mt-2">{property.title}</h1>
              <p className="location-text"><MapPin size={18}/> {property.location}</p>
            </div>
            <div className="price-tag">
              <h2>{property.price}</h2>
              <p>Condomínio: Consulte</p>
            </div>
          </div>

          <div className="property-features-bar">
            <div className="feat-item"><Bed size={24}/> <span>{property.beds || 0} Quartos</span></div>
            <div className="feat-item"><Bath size={24}/> <span>{property.baths || 0} Banheiros</span></div>
            <div className="feat-item"><Car size={24}/> <span>Vagas (consulte)</span></div>
            <div className="feat-item"><Maximize size={24}/> <span>{property.area || 'N/A'}</span></div>
          </div>

          <div className="property-desc mt-4">
            <h3>Descrição do Imóvel</h3>
            <p>
              Exuberante mansão de arquitetura contemporânea assinada por renomado escritório. O projeto valoriza a integração dos ambientes sociais com a espetacular área de lazer, que conta com piscina de borda infinita revestida em pedra hijau, spa aquecido e área gourmet completa.
            </p>
            <p>
              Acabamentos de altíssimo padrão, automação residencial total, piso em mármore travertino na área social e madeira de lei na área íntima. Suíte master com 120m², dois closets e sala de banho com vista panorâmica.
            </p>
          </div>

          <div className="property-amenities mt-4">
            <h3>Características</h3>
            <ul className="amenities-list grid grid-cols-2">
              <li><Check className="text-gold" size={18}/> Automação Residencial</li>
              <li><Check className="text-gold" size={18}/> Ar Condicionado Central</li>
              <li><Check className="text-gold" size={18}/> Elevador</li>
              <li><Check className="text-gold" size={18}/> Piscina Aquecida</li>
              <li><Check className="text-gold" size={18}/> Adega Climatizada</li>
              <li><Check className="text-gold" size={18}/> Energia Solar</li>
              <li><Check className="text-gold" size={18}/> Sistema de Segurança</li>
              <li><Check className="text-gold" size={18}/> Dependência de Empregados</li>
            </ul>
          </div>

          {/* Map Mock */}
          <div className="property-map mt-4">
            <h3><Map className="inline-icon" /> Localização</h3>
            <div className="map-placeholder glass-dark flex items-center justify-center">
              <p className="text-white">Mapa Integrado do Google Maps</p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="property-sidebar">
          {/* Contact Form */}
          <div className="contact-box glass">
            <h3>Falar com Corretor</h3>
            <div className="broker-info flex items-center gap-sm mb-4">
              <img src="/agent_profile_1778811122848.png" alt="Corretor" className="broker-avatar" />
              <div>
                <strong>Roberto Almeida</strong>
                <p className="text-sm text-text-light">Especialista Paula Imob</p>
              </div>
            </div>
            <form className="contact-form flex-col gap-sm">
              <input type="text" placeholder="Seu Nome" />
              <input type="email" placeholder="Seu E-mail" />
              <input type="tel" placeholder="Seu Telefone" />
              <textarea placeholder="Olá, tenho interesse neste imóvel."></textarea>
              <button className="btn btn-primary" onClick={(e) => { e.preventDefault(); alert('Mensagem enviada com sucesso! Logo entraremos em contato.'); }}>Enviar Mensagem</button>
              <button className="btn btn-whatsapp flex justify-center items-center gap-sm" onClick={handleWhatsApp}>
                <Phone size={18} /> Chamar no WhatsApp
              </button>
            </form>
          </div>

          {/* Simulator */}
          <div className="simulator-box mt-4">
            <h3><Calculator size={20}/> Simulador de Financiamento</h3>
            <div className="flex-col gap-sm mt-4">
              <div>
                <label>Entrada (R$)</label>
                <input type="text" value="2.500.000" readOnly className="full-width" />
              </div>
              <div>
                <label>Prazo (Anos)</label>
                <select className="full-width">
                  <option>30 Anos</option>
                  <option>20 Anos</option>
                  <option>10 Anos</option>
                </select>
              </div>
              <div className="simulator-result mt-2">
                <p>Parcela Estimada:</p>
                <strong>R$ 84.500 / mês</strong>
              </div>
              <button className="btn btn-outline-dark full-width mt-2">Simular com Especialista</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImovelDetalhe;
