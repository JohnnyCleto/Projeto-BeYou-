import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BemVindo from "./bemvindo.jsx"; 
import Cadastro from "./cadastro.jsx";
import Cadastroloja from "./cadastroloja.jsx";
import Carrinho from "./carrinho.jsx";
import ConfiguracaoPerfil from "./configuracao_perfil.jsx";
import FAvoritosPerfil from './FAvoritosPerfil';
import Login from "./login.jsx";
import Loginloja from "./loginloja.jsx";
import MeuPerfil from "./meuperfil.jsx";
import NotificacoesPerfil from "./notificacoes_perfil.jsx"; 
import Inicial from "./paginainicial.jsx"; 
import SearchPage from "./pesquisar.jsx";
import DadosPerfil from "./dadosperfil.jsx";
import Agendamentos from "./agendamentos.jsx";
import Dashboard from "./dashboard.jsx";
import Gestao from "./gestao.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BemVindo />} />
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
        <Route path="/Pesquisar" element={<SearchPage />} />
        <Route path="/dadosperfil" element={<DadosPerfil />} />
        <Route path="/Agendamentos" element={<Agendamentos />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/gestao" element={<Gestao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
