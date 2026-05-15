import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const initialProperties = [
  { id: 1, title: 'Mansão Alphaville', location: 'Alphaville, São Paulo', price: 'R$ 5.500.000', beds: 5, baths: 6, area: '600m²', type: 'Venda', status: 'disponível', image: '/property_interior_1778811052892.png' },
  { id: 2, title: 'Cobertura Duplex', location: 'Jardins, São Paulo', price: 'R$ 8.200.000', beds: 4, baths: 5, area: '450m²', type: 'Venda', status: 'disponível', image: '/hero_bg_house_1778810813317.png' },
  { id: 3, title: 'Casa em Condomínio', location: 'Tamboré, Barueri', price: 'R$ 3.800.000', beds: 4, baths: 4, area: '380m²', type: 'Venda', status: 'disponível', image: '/property_interior_1778811052892.png' },
  { id: 4, title: 'Apartamento Alto Padrão', location: 'Itaim Bibi, São Paulo', price: 'R$ 25.000/mês', beds: 3, baths: 4, area: '220m²', type: 'Aluguel', status: 'disponível', image: '/property_interior_1778811052892.png' },
];

const initialUsers = [
  { id: 1, name: 'Admin Paula Imob', cpf: '000.000.000-00', email: 'admin@paulaimobiliaria.com.br', phone: '(11) 90000-0000', password: 'admin123', role: 'admin', status: 'approved', bond: 'admin' },
  { id: 2, name: 'Carlos Aprovado', cpf: '111.111.111-11', email: 'carlos@cliente.com', phone: '(11) 91111-1111', password: 'senha', role: 'client', status: 'approved', bond: 'locatário', propertyId: 4 },
  { id: 3, name: 'Maria Pendente', cpf: '222.222.222-22', email: 'maria@cliente.com', phone: '(11) 92222-2222', password: 'senha', role: 'client', status: 'pending', bond: 'comprador', propertyId: null },
  { id: 4, name: 'João Rejeitado', cpf: '333.333.333-33', email: 'joao@cliente.com', phone: '(11) 93333-3333', password: 'senha', role: 'client', status: 'rejected', bond: 'locatário', propertyId: null },
];

const initialBoletos = [
  { id: '1023', userId: 2, propertyId: 4, vencimento: '10/05/2026', valor: 'R$ 25.000,00', status: 'pago' },
  { id: '1024', userId: 2, propertyId: 4, vencimento: '10/06/2026', valor: 'R$ 25.000,00', status: 'pendente' },
  { id: '1025', userId: 2, propertyId: 4, vencimento: '10/07/2026', valor: 'R$ 25.000,00', status: 'a vencer' },
];

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('paula_users');
    return saved ? JSON.parse(saved) : initialUsers;
  });

  const [properties, setProperties] = useState(() => {
    const saved = localStorage.getItem('paula_properties');
    return saved ? JSON.parse(saved) : initialProperties;
  });

  const [boletos, setBoletos] = useState(() => {
    const saved = localStorage.getItem('paula_boletos');
    return saved ? JSON.parse(saved) : initialBoletos;
  });

  useEffect(() => { localStorage.setItem('paula_users', JSON.stringify(users)); }, [users]);
  useEffect(() => { localStorage.setItem('paula_properties', JSON.stringify(properties)); }, [properties]);
  useEffect(() => { localStorage.setItem('paula_boletos', JSON.stringify(boletos)); }, [boletos]);

  const addUser = (user) => setUsers(prev => [...prev, { ...user, id: Date.now() }]);
  const updateUser = (id, data) => setUsers(prev => prev.map(u => u.id === id ? { ...u, ...data } : u));
  const deleteUser = (id) => setUsers(prev => prev.filter(u => u.id !== id));

  const addProperty = (prop) => setProperties(prev => [...prev, { ...prop, id: Date.now() }]);
  const updateProperty = (id, data) => setProperties(prev => prev.map(p => p.id === id ? { ...p, ...data } : p));
  const deleteProperty = (id) => setProperties(prev => prev.filter(p => p.id !== id));

  const addBoleto = (boleto) => setBoletos(prev => [...prev, { ...boleto, id: Date.now().toString() }]);
  const updateBoleto = (id, data) => setBoletos(prev => prev.map(b => b.id === id ? { ...b, ...data } : b));
  const deleteBoleto = (id) => setBoletos(prev => prev.filter(b => b.id !== id));

  return (
    <DataContext.Provider value={{
      users, addUser, updateUser, deleteUser,
      properties, addProperty, updateProperty, deleteProperty,
      boletos, addBoleto, updateBoleto, deleteBoleto
    }}>
      {children}
    </DataContext.Provider>
  );
};
