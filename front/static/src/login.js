import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
    BackgroundImage,
    Formulario,
    Title,
    Input,
    BotaoCadastro,
    BotaoLogin,
    EsqueciSenha,
    InputLink
} from "./components/loginestrutura";

const API_URL = "http://localhost:8888/api";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/usuarios/login`, formData);
      const token = response.data.token;

      localStorage.setItem("token", token);
      alert("Login realizado com sucesso!");
      navigate("/PaginaInicial");
    } catch (error) {
      alert(error.response?.data?.message || "Falha no login");
    }
  };

  return (
    <BackgroundImage>
      <Formulario>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"><b>E-mail</b></label>
          <Input type="email" placeholder="Digite seu e-mail" name="email" required value={formData.email} onChange={handleChange} />

          <label htmlFor="senha"><b>Senha</b></label>
          <Input type="password" placeholder="Digite sua senha" name="senha" required value={formData.senha} onChange={handleChange} />

          <EsqueciSenha>
            <InputLink href="#">Esqueci minha senha</InputLink>
          </EsqueciSenha>

          <BotaoLogin type="submit">Entrar</BotaoLogin>
          <BotaoCadastro type="button" onClick={() => navigate("/Cadastro")}>Cadastrar</BotaoCadastro>
        </form>
      </Formulario>
    </BackgroundImage>
  );
};

export default Login;
