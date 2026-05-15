import React from 'react';
import { Search, MapPin, Bed, Building, CheckCircle, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  // Extracting the first generated image for the Hero
  const heroImage = '/hero_bg_house_1778810813317.png';

  const featuredProperties = [
    {
      id: 1,
      title: 'Mansão Alphaville',
      location: 'Alphaville, São Paulo',
      price: 'R$ 5.500.000',
      beds: 5,
      baths: 6,
      area: '600m²',
      type: 'Venda',
      image: '/property_interior_1778811052892.png'
    },
    {
      id: 2,
      title: 'Cobertura Duplex',
      location: 'Jardins, São Paulo',
      price: 'R$ 8.200.000',
      beds: 4,
      baths: 5,
      area: '450m²',
      type: 'Venda',
      image: '/hero_bg_house_1778810813317.png'
    },
    {
      id: 3,
      title: 'Casa em Condomínio',
      location: 'Tamboré, Barueri',
      price: 'R$ 3.800.000',
      beds: 4,
      baths: 4,
      area: '380m²',
      type: 'Venda',
      image: '/property_interior_1778811052892.png'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay"></div>
        <div className="container hero-content animate-fade-in">
          <h1>Encontre o seu <span className="text-gold">imóvel dos sonhos</span> com exclusividade e segurança.</h1>
          <p>A Paula Imobiliária oferece o melhor portfólio de imóveis de alto padrão para você e sua família.</p>
          
          <div className="hero-buttons">
            <Link to="/imoveis" className="btn btn-primary">Ver Imóveis</Link>
            <Link to="/fale-conosco" className="btn btn-outline">Falar com Corretor</Link>
          </div>
        </div>

        {/* Search Bar - Glassmorphism */}
        <div className="container search-container-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="search-bar glass">
            <div className="search-group">
              <label>Tipo do Imóvel</label>
              <select>
                <option>Todos</option>
                <option>Casa em Condomínio</option>
                <option>Apartamento</option>
                <option>Cobertura</option>
                <option>Comercial</option>
              </select>
            </div>
            
            <div className="search-group">
              <label>Finalidade</label>
              <select>
                <option>Comprar</option>
                <option>Alugar</option>
              </select>
            </div>
            
            <div className="search-group">
              <label>Localização</label>
              <input type="text" placeholder="Bairro ou Cidade" />
            </div>

            <div className="search-group">
              <label>Faixa de preço</label>
              <select>
                <option>Qualquer valor</option>
                <option>Até R$ 1 Milhão</option>
                <option>R$ 1M a R$ 5M</option>
                <option>Acima de R$ 5M</option>
              </select>
            </div>

            <div className="search-group">
              <label>Quartos</label>
              <select>
                <option>Qualquer</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>

            <div className="search-group search-btn-group">
              <label>&nbsp;</label>
              <button className="btn-search">
                <Search size={20} /> Buscar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section stats-section">
        <div className="container">
          <div className="grid grid-cols-4 gap-md">
            <div className="stat-card">
              <Award className="text-gold" size={40} />
              <h3>15+ Anos</h3>
              <p>De experiência no mercado de luxo</p>
            </div>
            <div className="stat-card">
              <TrendingUp className="text-gold" size={40} />
              <h3>R$ 2Bi+</h3>
              <p>Em volume de vendas realizadas</p>
            </div>
            <div className="stat-card">
              <Users className="text-gold" size={40} />
              <h3>5.000+</h3>
              <p>Clientes satisfeitos e fidelizados</p>
            </div>
            <div className="stat-card">
              <Building className="text-gold" size={40} />
              <h3>800+</h3>
              <p>Imóveis exclusivos no portfólio</p>
            </div>
          </div>
        </div>
      </section>

      {/* Imóveis em Destaque */}
      <section className="section featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Imóveis em <span className="text-gold">Destaque</span></h2>
            <Link to="/imoveis" className="view-all">Ver todos <ArrowRight size={18} /></Link>
          </div>
          
          <div className="grid grid-cols-3 gap-md">
            {featuredProperties.map(prop => (
              <div key={prop.id} className="property-card">
                <div className="property-img">
                  <div className="property-badge">{prop.type}</div>
                  <img src={prop.image} alt={prop.title} />
                </div>
                <div className="property-content">
                  <div className="property-price">{prop.price}</div>
                  <h3 className="property-title">{prop.title}</h3>
                  <div className="property-location">
                    <MapPin size={16} /> {prop.location}
                  </div>
                  <div className="property-features">
                    <span><Bed size={16} /> {prop.beds} Quartos</span>
                    <span><Building size={16} /> {prop.area}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="section how-it-works bg-light">
        <div className="container text-center">
          <h2>Como <span className="text-gold">Funciona</span></h2>
          <p className="subtitle">Um processo simples, transparente e seguro para você.</p>
          
          <div className="grid grid-cols-3 gap-lg" style={{ marginTop: '3rem' }}>
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Busca Personalizada</h3>
              <p>Nossos corretores entendem seu perfil e selecionam os melhores imóveis para você.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Visita Exclusiva</h3>
              <p>Agendamos visitas nos melhores horários, com total discrição e conforto.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Fechamento Seguro</h3>
              <p>Cuidamos de toda a burocracia, documentação e contratos com nossa equipe jurídica.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container text-center">
          <h2>Pronto para encontrar seu novo lar?</h2>
          <p>Fale com um de nossos especialistas agora mesmo.</p>
          <Link to="/fale-conosco" className="btn btn-primary btn-lg mt-4">Entrar em Contato</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
