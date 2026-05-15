import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ProtectedRoute } from './components/ProtectedRoute';

// Pages
import Home from './pages/Home';
import QuemSomos from './pages/QuemSomos';
import Servicos from './pages/Servicos';
import Catalogo from './pages/Catalogo';
import ImovelDetalhe from './pages/ImovelDetalhe';
import AreaCliente from './pages/AreaCliente';
import FaleConosco from './pages/FaleConosco';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <BrowserRouter>
      <div className="flex-col" style={{ minHeight: '100vh', display: 'flex' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/imoveis" element={<Catalogo />} />
            <Route path="/imovel/:id" element={<ImovelDetalhe />} />
            <Route path="/fale-conosco" element={<FaleConosco />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/area-cliente" element={
              <ProtectedRoute>
                <AreaCliente />
              </ProtectedRoute>
            } />
            <Route path="/admin" element={
              <ProtectedRoute requireAdmin={true}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
