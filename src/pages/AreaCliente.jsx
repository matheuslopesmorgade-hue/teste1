import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, FileText, Download, AlertCircle, Home, FileClock, CheckCircle, XCircle, UserPlus, Clock } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import { DataContext } from '../context/DataContext';
import './AreaCliente.css';

const AreaCliente = () => {
  const { currentUser, login, logout, register } = useContext(AuthContext);
  const { boletos, properties } = useContext(DataContext);
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '', password: '', name: '', cpf: '', phone: '', bond: 'locatário'
  });
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Redirect admin users to admin panel
  useEffect(() => {
    if (currentUser && currentUser.role === 'admin') {
      navigate('/admin');
    }
  }, [currentUser, navigate]);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMsg('');
    const res = login(formData.email, formData.password);
    if (!res.success) {
      setErrorMsg(res.message);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    const res = register(formData);
    if (res.success) {
      setSuccessMsg(res.message);
      setIsLogin(true);
      setFormData({email: '', password: '', name: '', cpf: '', phone: '', bond: 'locatário'});
    } else {
      setErrorMsg(res.message);
    }
  };

  if (!currentUser) {
    return (
      <div className="login-wrapper animate-fade-in">
        <div className="login-box glass-dark">
          <div className="text-center mb-4">
            <h2 className="text-white mb-2">{isLogin ? 'Área do Cliente' : 'Criar Conta'}</h2>
            <p className="text-dash-muted">
              {isLogin ? 'Acesse seu painel financeiro e contratos.' : 'Cadastre-se para acessar nossos serviços.'}
            </p>
          </div>

          {errorMsg && <div className="alert alert-error">{errorMsg}</div>}
          {successMsg && <div className="alert alert-success">{successMsg}</div>}

          {isLogin ? (
            <form className="flex-col gap-sm" onSubmit={handleLogin}>
              <div className="input-group-dark">
                <label>E-mail</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="seu@email.com" required />
              </div>
              <div className="input-group-dark">
                <label>Senha</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="••••••••" required />
              </div>
              <button type="submit" className="btn btn-primary full-width mt-4">
                Entrar <LogIn size={18} className="inline-icon ml-2"/>
              </button>
              <p className="text-center mt-4 text-dash-muted">
                Não tem uma conta? <span className="text-gold cursor-pointer" onClick={() => {setIsLogin(false); setErrorMsg('');}}>Cadastre-se</span>
              </p>
            </form>
          ) : (
            <form className="flex-col gap-sm" onSubmit={handleRegister}>
              <div className="input-group-dark">
                <label>Nome Completo</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="grid grid-cols-2 gap-sm" style={{gridTemplateColumns: '1fr 1fr'}}>
                <div className="input-group-dark">
                  <label>CPF / CNPJ</label>
                  <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required />
                </div>
                <div className="input-group-dark">
                  <label>Telefone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
              </div>
              <div className="input-group-dark">
                <label>E-mail</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="input-group-dark">
                <label>Senha</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
              </div>
              <div className="input-group-dark">
                <label>Tipo de Vínculo</label>
                <select name="bond" value={formData.bond} onChange={handleChange} className="dark-select">
                  <option value="locatário">Locatário</option>
                  <option value="proprietário">Proprietário</option>
                  <option value="comprador">Comprador</option>
                  <option value="interessado">Interessado</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary full-width mt-4">
                Solicitar Cadastro <UserPlus size={18} className="inline-icon ml-2"/>
              </button>
              <p className="text-center mt-4 text-dash-muted">
                Já possui conta? <span className="text-gold cursor-pointer" onClick={() => {setIsLogin(true); setErrorMsg('');}}>Fazer Login</span>
              </p>
            </form>
          )}
        </div>
      </div>
    );
  }

  if (currentUser.role === 'admin') {
    return null; // Will redirect via useEffect
  }

  if (currentUser.status === 'pending') {
    return (
      <div className="login-wrapper animate-fade-in text-center">
        <div className="login-box glass-dark">
          <Clock size={60} className="text-gold mx-auto mb-4" />
          <h2 className="text-white mb-2">Cadastro em Análise</h2>
          <p className="text-dash-muted mb-4">Olá, {currentUser.name}. Seu cadastro está pendente de aprovação pela nossa equipe. Por favor, aguarde.</p>
          <button className="btn btn-outline" onClick={logout}>Sair</button>
        </div>
      </div>
    );
  }

  if (currentUser.status === 'rejected') {
    return (
      <div className="login-wrapper animate-fade-in text-center">
        <div className="login-box glass-dark">
          <XCircle size={60} className="text-red mx-auto mb-4" style={{color: '#ef4444'}} />
          <h2 className="text-white mb-2">Cadastro Rejeitado</h2>
          <p className="text-dash-muted mb-4">Infelizmente seu cadastro não foi aprovado pela nossa equipe. Entre em contato para mais detalhes.</p>
          <button className="btn btn-outline" onClick={logout}>Sair</button>
        </div>
      </div>
    );
  }

  // Dashboard for approved users
  const userBoletos = boletos.filter(b => b.userId === currentUser.id);
  const userProperty = properties.find(p => p.id === currentUser.propertyId);

  return (
    <div className="dashboard-wrapper animate-fade-in">
      <aside className="dash-sidebar">
        <div className="dash-logo">
          <span className="text-white">Paula </span><span className="text-gold">Imobiliária</span>
        </div>
        <nav className="dash-nav">
          <a href="#" className="active"><Home size={20}/> Início</a>
          <a href="#"><FileText size={20}/> Meus Contratos</a>
          <a href="#"><FileClock size={20}/> Histórico Financeiro</a>
          <a href="#"><AlertCircle size={20}/> Suporte</a>
        </nav>
        <div className="dash-user">
          <div className="user-avatar">{currentUser.name.charAt(0)}</div>
          <div className="user-info">
            <strong>{currentUser.name}</strong>
            <span style={{textTransform: 'capitalize'}}>{currentUser.bond}</span>
          </div>
        </div>
      </aside>

      <main className="dash-main">
        <header className="dash-header">
          <div>
            <h1>Dashboard</h1>
            <p className="text-dash-muted">Bem-vindo de volta, {currentUser.name}.</p>
          </div>
          <button className="btn btn-outline" onClick={logout}>Sair</button>
        </header>

        <div className="dash-content">
          <div className="grid grid-cols-3 gap-md mb-lg">
            <div className="dash-card">
              <div className="card-header">
                <h3>Total em Boletos</h3>
                <AlertCircle className="text-gold" size={24}/>
              </div>
              <div className="card-value">{userBoletos.length}</div>
              <p className="text-dash-muted">Registrados no sistema</p>
            </div>
            <div className="dash-card">
              <div className="card-header">
                <h3>Vínculo Atual</h3>
                <CheckCircle className="text-gold" size={24}/>
              </div>
              <div className="card-value" style={{fontSize: '1.5rem', marginTop: '0.5rem'}}>{currentUser.bond.toUpperCase()}</div>
              <p className="text-dash-muted">Status: Ativo</p>
            </div>
            <div className="dash-card">
              <div className="card-header">
                <h3>Imóvel Vinculado</h3>
                <Home className="text-gold" size={24}/>
              </div>
              <div className="card-value" style={{fontSize: '1.2rem', marginTop: '0.5rem'}}>
                {userProperty ? userProperty.title : 'Nenhum imóvel'}
              </div>
              <p className="text-dash-muted">Cod: {userProperty ? userProperty.id : 'N/A'}</p>
            </div>
          </div>

          <div className="dash-card boletos-section">
            <div className="flex justify-between items-center mb-4">
              <h2>Meus Boletos</h2>
            </div>
            <div className="table-responsive">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>Ref</th>
                    <th>Vencimento</th>
                    <th>Valor</th>
                    <th>Status</th>
                    <th>Ação</th>
                  </tr>
                </thead>
                <tbody>
                  {userBoletos.length === 0 ? (
                    <tr><td colSpan="5" className="text-center text-dash-muted">Nenhum boleto encontrado.</td></tr>
                  ) : userBoletos.map((b, i) => (
                    <tr key={i}>
                      <td>{b.id}</td>
                      <td>{b.vencimento}</td>
                      <td>{b.valor}</td>
                      <td>
                        <span className={`status-badge status-${b.status.replace(/ /g, '-')}`}>
                          {b.status.toUpperCase()}
                        </span>
                      </td>
                      <td>
                        <button className="btn-action" title="Baixar PDF">
                          <Download size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default AreaCliente;
