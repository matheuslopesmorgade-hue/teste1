import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Login.css';

const Cadastro = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    email: '',
    phone: '',
    password: '',
    bond: 'interessado'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    const result = register(formData);
    if (result.success) {
      setSuccess(result.message);
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card large">
        <div className="auth-header">
          <h2>Cadastro de Cliente</h2>
          <p>Preencha os dados abaixo para solicitar acesso</p>
        </div>
        
        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}
        
        <form onSubmit={handleRegister} className="auth-form">
          <div className="grid-2-col">
            <div className="form-group">
              <label>Nome Completo</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label>CPF / CNPJ</label>
              <input 
                type="text" 
                name="cpf"
                value={formData.cpf}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="grid-2-col">
            <div className="form-group">
              <label>E-mail</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label>Telefone</label>
              <input 
                type="text" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="grid-2-col">
            <div className="form-group">
              <label>Senha</label>
              <input 
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label>Tipo de Vínculo</label>
              <select name="bond" value={formData.bond} onChange={handleChange}>
                <option value="locatário">Locatário</option>
                <option value="proprietário">Proprietário</option>
                <option value="comprador">Comprador</option>
                <option value="interessado">Interessado</option>
              </select>
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-100" style={{ marginTop: '1rem' }}>
            Enviar Cadastro
          </button>
        </form>
        
        <div className="auth-footer">
          <p>Já possui conta? <Link to="/login" className="text-gold">Faça login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
