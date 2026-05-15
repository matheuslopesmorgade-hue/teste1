import React from 'react';
import { Home, Key, FileText, Briefcase, BarChart, Settings, Calculator } from 'lucide-react';
import './Servicos.css';

const Servicos = () => {
  const services = [
    {
      icon: <Home size={40} />,
      title: 'Compra de Imóveis',
      desc: 'Assessoria completa para aquisição de imóveis de alto padrão, desde a busca até a entrega das chaves, garantindo o melhor negócio.',
      benefits: ['Curadoria exclusiva', 'Análise de mercado', 'Assessoria jurídica']
    },
    {
      icon: <Key size={40} />,
      title: 'Venda de Imóveis',
      desc: 'Estratégias de marketing premium e networking para vender seu imóvel com agilidade, discrição e excelente rentabilidade.',
      benefits: ['Avaliação precisa', 'Fotografia profissional', 'Ampla divulgação']
    },
    {
      icon: <FileText size={40} />,
      title: 'Locação',
      desc: 'Gestão eficiente para proprietários e inquilinos, assegurando contratos seguros e tranquilidade durante toda a vigência.',
      benefits: ['Análise de crédito', 'Vistorias detalhadas', 'Garantias sólidas']
    },
    {
      icon: <Briefcase size={40} />,
      title: 'Administração Imobiliária',
      desc: 'Cuidamos de todo o processo administrativo do seu patrimônio, cobranças, manutenções e relacionamento com inquilinos.',
      benefits: ['Repasse garantido', 'Gestão de conflitos', 'Relatórios mensais']
    },
    {
      icon: <Calculator size={40} />,
      title: 'Avaliação Imobiliária',
      desc: 'Precificação baseada em dados reais de mercado e características intrínsecas da propriedade por peritos avaliadores.',
      benefits: ['PTAM Oficial', 'Laudos técnicos', 'Análise mercadológica']
    },
    {
      icon: <Settings size={40} />,
      title: 'Regularização Documental',
      desc: 'Nossa equipe jurídica cuida de averbações, inventários, certidões e toda a documentação necessária para transações seguras.',
      benefits: ['Despachante próprio', 'Agilidade em cartórios', 'Segurança legal']
    }
  ];

  return (
    <div className="servicos-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Nossos Serviços</h1>
          <p>Soluções completas e personalizadas para o seu patrimônio.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="grid grid-cols-3 gap-lg">
            {services.map((srv, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon text-gold">
                  {srv.icon}
                </div>
                <h3>{srv.title}</h3>
                <p className="service-desc">{srv.desc}</p>
                <ul className="service-benefits">
                  {srv.benefits.map((ben, i) => (
                    <li key={i}>
                      <span className="text-gold">✔</span> {ben}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-outline-dark mt-4">Saiba Mais</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultoria CTA */}
      <section className="section cta-consultoria text-center">
        <div className="container">
          <BarChart size={60} className="text-gold mx-auto mb-4" />
          <h2 className="mb-4">Consultoria de Investimentos</h2>
          <p className="mb-lg mx-auto" style={{ maxWidth: '700px', fontSize: '1.2rem', color: 'var(--color-text-light)' }}>
            Deseja diversificar seu portfólio? Oferecemos consultoria especializada em fundos imobiliários, incorporações e properties com alto potencial de valorização.
          </p>
          <a href="/fale-conosco" className="btn btn-primary btn-lg">Agendar Consultoria VIP</a>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
