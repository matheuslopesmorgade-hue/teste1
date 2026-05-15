import React from 'react';
import { Target, Eye, Heart, Shield, Award } from 'lucide-react';
import './QuemSomos.css';

const QuemSomos = () => {
  const agentImage = '/agent_profile_1778811122848.png';

  return (
    <div className="quem-somos animate-fade-in">
      {/* Page Header */}
      <div className="page-header">
        <div className="container">
          <h1>Quem Somos</h1>
          <p>Tradição, exclusividade e excelência no mercado imobiliário.</p>
        </div>
      </div>

      <section className="section about-history">
        <div className="container grid grid-cols-2 gap-lg items-center">
          <div className="about-text">
            <h2 className="text-gold mb-4">Nossa História</h2>
            <p className="mb-4">
              Fundada há mais de 15 anos, a Paula Imobiliária nasceu do desejo de redefinir o padrão de excelência em transações imobiliárias de alto padrão no Brasil. 
            </p>
            <p>
              Ao longo de nossa trajetória, construímos um portfólio incomparável de propriedades exclusivas e uma carteira de clientes que confiam na nossa discrição, profissionalismo e profunda inteligência de mercado. Somos especialistas em transformar o seu sonho em uma realidade sólida e rentável.
            </p>
            <div className="creci-badge mt-4">
              <Shield className="text-gold" size={24} />
              <span>CRECI 12345-J - Registro Ativo e Regular</span>
            </div>
          </div>
          <div className="about-image">
            <img src="/property_interior_1778811052892.png" alt="História da Paula Imobiliária" className="rounded-lg shadow-gold" />
          </div>
        </div>
      </section>

      {/* MVV */}
      <section className="section bg-light mvv-section">
        <div className="container grid grid-cols-3 gap-md">
          <div className="mvv-card">
            <Target size={40} className="text-gold mb-4" />
            <h3>Missão</h3>
            <p>Conectar pessoas extraordinárias a lares e investimentos igualmente únicos, proporcionando uma experiência impecável do primeiro contato até a assinatura do contrato.</p>
          </div>
          <div className="mvv-card">
            <Eye size={40} className="text-gold mb-4" />
            <h3>Visão</h3>
            <p>Ser reconhecida como a principal, mais seleta e confiável boutique imobiliária do país, liderando o segmento de luxo com inovação e tradição.</p>
          </div>
          <div className="mvv-card">
            <Heart size={40} className="text-gold mb-4" />
            <h3>Valores</h3>
            <p>Ética inegociável, discrição absoluta, excelência no atendimento, transparência e compromisso com o resultado do cliente.</p>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="section team-section">
        <div className="container text-center">
          <h2 className="mb-4">Nossa <span className="text-gold">Liderança</span></h2>
          <p className="mb-lg">Profissionais com vasta experiência e visão de mercado.</p>

          <div className="grid grid-cols-3 gap-md team-grid">
            <div className="team-card">
              <div className="team-img">
                <img src={agentImage} alt="Roberto Almeida" />
              </div>
              <div className="team-info">
                <h3>Roberto Almeida</h3>
                <p className="text-gold">CEO & Founder</p>
              </div>
            </div>
            {/* Adding duplicated images as placeholders for other members */}
            <div className="team-card">
              <div className="team-img">
                <img src={agentImage} alt="Mariana Silva" />
              </div>
              <div className="team-info">
                <h3>Mariana Silva</h3>
                <p className="text-gold">Diretora de Vendas</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-img">
                <img src={agentImage} alt="Carlos Eduardo" />
              </div>
              <div className="team-info">
                <h3>Carlos Eduardo</h3>
                <p className="text-gold">Head de Captação</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QuemSomos;
