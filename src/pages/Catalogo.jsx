import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, MapPin, Bed, Building } from 'lucide-react';
import { DataContext } from '../context/DataContext';
import './Catalogo.css';

const Catalogo = () => {
  const [filter, setFilter] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const { properties } = useContext(DataContext);

  const filtered = properties.filter(p => {
    const matchType = filter === 'Todos' || p.type === filter;
    const matchSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="catalogo-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Catálogo de Imóveis</h1>
          <p>Encontre a propriedade perfeita para o seu estilo de vida.</p>
        </div>
      </div>

      <div className="container section grid grid-cols-[300px_1fr] gap-lg catalogo-layout">
        {/* Sidebar Filters */}
        <aside className="filters-sidebar">
          <div className="filter-box">
            <h3><Filter size={20}/> Filtros</h3>
            
            <div className="filter-group mt-4">
              <label>Busca por Palavra-chave</label>
              <div className="search-input-wrapper">
                <Search size={18} />
                <input 
                  type="text" 
                  placeholder="Código ou nome..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="filter-group">
              <label>Finalidade</label>
              <div className="radio-group">
                <label>
                  <input type="radio" name="type" checked={filter === 'Todos'} onChange={() => setFilter('Todos')} /> Todos
                </label>
                <label>
                  <input type="radio" name="type" checked={filter === 'Venda'} onChange={() => setFilter('Venda')} /> Comprar
                </label>
                <label>
                  <input type="radio" name="type" checked={filter === 'Aluguel'} onChange={() => setFilter('Aluguel')} /> Alugar
                </label>
              </div>
            </div>

            <div className="filter-group">
              <label>Tipo de Imóvel</label>
              <select className="full-width">
                <option>Todos</option>
                <option>Casa</option>
                <option>Apartamento</option>
                <option>Cobertura</option>
              </select>
            </div>

            <div className="filter-group">
              <label>Faixa de Preço</label>
              <input type="range" min="1000000" max="20000000" className="full-width mb-2" />
              <div className="price-labels flex justify-between">
                <span>R$ 1M</span>
                <span>R$ 20M+</span>
              </div>
            </div>

            <button className="btn btn-primary full-width mt-4">Aplicar Filtros</button>
          </div>
        </aside>

        {/* Properties Grid */}
        <main className="properties-list">
          <div className="list-header flex justify-between items-center mb-4">
            <p>Mostrando <strong>{filtered.length}</strong> imóveis</p>
            <div className="sort-by">
              <label>Ordenar por: </label>
              <select>
                <option>Mais Recentes</option>
                <option>Menor Preço</option>
                <option>Maior Preço</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-md">
            {filtered.map(prop => (
              <Link to={`/imovel/${prop.id}`} key={prop.id} className="property-card">
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
              </Link>
            ))}
          </div>

          <div className="pagination mt-4 flex justify-center gap-sm">
            <button className="btn btn-outline active">1</button>
            <button className="btn btn-outline">2</button>
            <button className="btn btn-outline">3</button>
            <button className="btn btn-outline">Próxima</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Catalogo;
