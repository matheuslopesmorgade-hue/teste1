import React, { useState, useContext } from 'react';
import { Users, Home, FileText, Settings, CheckCircle, XCircle, Edit, Trash2, Plus, LogOut } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import { DataContext } from '../context/DataContext';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { logout } = useContext(AuthContext);
  const { 
    users, updateUser, deleteUser,
    properties, addProperty, updateProperty, deleteProperty,
    boletos, addBoleto, updateBoleto, deleteBoleto
  } = useContext(DataContext);

  const [activeTab, setActiveTab] = useState('users');

  const handleApprove = (id) => updateUser(id, { status: 'approved' });
  const handleReject = (id) => updateUser(id, { status: 'rejected' });
  const handleDeleteUser = (id) => {
    if(window.confirm('Excluir usuário?')) deleteUser(id);
  };

  const clients = users.filter(u => u.role !== 'admin');

  const renderUsers = () => (
    <div className="admin-card">
      <div className="flex justify-between items-center mb-4">
        <h2>Gestão de Usuários</h2>
      </div>
      <div className="table-responsive">
        <table className="dash-table admin-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>CPF</th>
              <th>Vínculo</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(u => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.cpf}</td>
                <td style={{textTransform: 'capitalize'}}>{u.bond}</td>
                <td>
                  <span className={`status-badge status-${u.status}`}>
                    {u.status === 'approved' ? 'APROVADO' : u.status === 'pending' ? 'PENDENTE' : 'REJEITADO'}
                  </span>
                </td>
                <td>
                  <div className="flex gap-sm">
                    {u.status === 'pending' && (
                      <>
                        <button className="btn-icon text-success" title="Aprovar" onClick={() => handleApprove(u.id)}><CheckCircle size={18}/></button>
                        <button className="btn-icon text-danger" title="Rejeitar" onClick={() => handleReject(u.id)}><XCircle size={18}/></button>
                      </>
                    )}
                    <button className="btn-icon" title="Editar"><Edit size={18}/></button>
                    <button className="btn-icon text-danger" title="Excluir" onClick={() => handleDeleteUser(u.id)}><Trash2 size={18}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderProperties = () => (
    <div className="admin-card">
      <div className="flex justify-between items-center mb-4">
        <h2>Gestão de Imóveis</h2>
        <button className="btn btn-primary flex items-center gap-sm" onClick={() => {
          const title = prompt('Título do Imóvel:');
          if(title) {
            addProperty({ title, location: 'Nova Localização', price: 'Consulte', beds: 0, baths: 0, area: '0m²', type: 'Venda', status: 'disponível', image: '/hero_bg_house_1778810813317.png' });
          }
        }}><Plus size={18}/> Novo Imóvel</button>
      </div>
      <div className="table-responsive">
        <table className="dash-table admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Tipo</th>
              <th>Preço</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {properties.map(p => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.title}</td>
                <td>{p.type}</td>
                <td>{p.price}</td>
                <td>
                  <select 
                    value={p.status} 
                    onChange={(e) => updateProperty(p.id, { status: e.target.value })}
                    className="admin-select"
                  >
                    <option value="disponível">Disponível</option>
                    <option value="indisponível">Indisponível</option>
                    <option value="vendido">Vendido</option>
                    <option value="alugado">Alugado</option>
                  </select>
                </td>
                <td>
                  <div className="flex gap-sm">
                    <button className="btn-icon" title="Editar"><Edit size={18}/></button>
                    <button className="btn-icon text-danger" title="Excluir" onClick={() => {
                      if(window.confirm('Excluir imóvel?')) deleteProperty(p.id);
                    }}><Trash2 size={18}/></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderBoletos = () => (
    <div className="admin-card">
      <div className="flex justify-between items-center mb-4">
        <h2>Gestão de Boletos</h2>
        <button className="btn btn-primary flex items-center gap-sm" onClick={() => {
          const valor = prompt('Valor do Boleto (R$):');
          if(valor) {
            addBoleto({ userId: clients[0]?.id, propertyId: null, vencimento: '30/12/2026', valor: `R$ ${valor}`, status: 'pendente' });
          }
        }}><Plus size={18}/> Novo Boleto</button>
      </div>
      <div className="table-responsive">
        <table className="dash-table admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Valor</th>
              <th>Vencimento</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {boletos.map(b => {
              const u = users.find(u => u.id === b.userId);
              return (
                <tr key={b.id}>
                  <td>{b.id}</td>
                  <td>{u ? u.name : 'Desconhecido'}</td>
                  <td>{b.valor}</td>
                  <td>{b.vencimento}</td>
                  <td>
                    <select 
                      value={b.status} 
                      onChange={(e) => updateBoleto(b.id, { status: e.target.value })}
                      className="admin-select"
                    >
                      <option value="pago">Pago</option>
                      <option value="pendente">Pendente</option>
                      <option value="a vencer">A Vencer</option>
                      <option value="vencido">Vencido</option>
                    </select>
                  </td>
                  <td>
                    <div className="flex gap-sm">
                      <button className="btn-icon text-danger" title="Excluir" onClick={() => {
                        if(window.confirm('Excluir boleto?')) deleteBoleto(b.id);
                      }}><Trash2 size={18}/></button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="admin-wrapper">
      {/* Sidebar Clarinha com fundo escuro - Mistura Elegante */}
      <aside className="admin-sidebar">
        <div className="admin-logo">
          PAULA <span className="text-gold">ADMIN</span>
        </div>
        <nav className="admin-nav">
          <button className={`nav-btn ${activeTab === 'users' ? 'active' : ''}`} onClick={() => setActiveTab('users')}>
            <Users size={20}/> Usuários
          </button>
          <button className={`nav-btn ${activeTab === 'properties' ? 'active' : ''}`} onClick={() => setActiveTab('properties')}>
            <Home size={20}/> Imóveis
          </button>
          <button className={`nav-btn ${activeTab === 'boletos' ? 'active' : ''}`} onClick={() => setActiveTab('boletos')}>
            <FileText size={20}/> Boletos
          </button>
        </nav>
        <div className="admin-logout">
          <button className="nav-btn text-danger" onClick={logout}>
            <LogOut size={20}/> Sair do Painel
          </button>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h1>{activeTab === 'users' ? 'Usuários' : activeTab === 'properties' ? 'Imóveis' : 'Boletos'}</h1>
          <div className="admin-profile">
            <span>Admin</span>
            <div className="admin-avatar">A</div>
          </div>
        </header>

        <div className="admin-content">
          {activeTab === 'users' && renderUsers()}
          {activeTab === 'properties' && renderProperties()}
          {activeTab === 'boletos' && renderBoletos()}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
