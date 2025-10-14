import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import BemVindo from "./BemVindo.jsx"; 
import Cadastro from "./Cadastro.jsx";
import Cadastroloja from "./Cadastroloja.jsx";
import Carrinho from "./Carrinho.jsx";
import ConfiguracaoPerfil from "./configuracao_perfil.jsx";
import FAvoritosPerfil from "./FAvoritosPerfil.jsx";
import Login from "./Login.jsx";
import Loginloja from "./Loginloja.jsx";
import MeuPerfil from "./MeuPerfil.jsx";
import NotificacoesPerfil from "./notificacoes_perfil.jsx"; 
import Inicial from "./PaginaInicial.jsx"; 
import SearchPage from "./Pesquisar.jsx";
import DadosPerfil from "./DadosPerfil.jsx";
import Agendamentos from "./Agendamentos.jsx";
import Dashboard from "./Dashboard.jsx";
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
        <Route path="/FAvoritos_perfil" element={<FAvoritosPerfil />} />
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
