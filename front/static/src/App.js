import React from 'react';
import { Routes, Route } from "react-router-dom";
import BemVindo from './BemVindo'; 
import Cadastro from "./Cadastro";
import Cadastroloja from './Cadastroloja';
import Carrinho from "./Carrinho";
import ConfiguracaoPerfil from './configuracao_perfil';
import FAvoritosPerfil from './FAvoritosPerfil';
import Login from "./Login";
import Loginloja from './Loginloja';
import MeuPerfil from './MeuPerfil'
import NotificacoesPerfil from './NotificacoesPerfil'; 
import Inicial from "./PaginaInicial"; 
import SearchPage from './Pesquisar';
import DadosPerfil from './DadosPerfil';
import Agendamentos from './Agendamentos';
import Dashboard from './Dashboard';
import Gestao from "./gestao";


function App() {
  return (
    <Routes>
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/PaginaInicial" element={<Inicial />} />
      <Route path="/Carrinho" element={<Carrinho />} />
      <Route path="/MeuPerfil" element={<MeuPerfil />} />
      <Route path="/Cadastroloja" element={<Cadastroloja />} />
      <Route path="/loginloja" element={<Loginloja />} />
      <Route path="/notificacoes_perfil" element={<NotificacoesPerfil />} />
      <Route path="/configuracao_perfil" element={<ConfiguracaoPerfil />} />
      <Route path="/FAvoritosPerfil" element={<FAvoritosPerfil />} />
      <Route path="/BemVindo" element={<BemVindo />} />
      <Route path="/Pesquisar" element={<SearchPage />} />
      <Route path="/dadosperfil" element={<DadosPerfil />} />
      <Route path="/Agendamentos" element={<Agendamentos />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/gestao" element={<Gestao/>} />

    </Routes>
  );
}

export default App;