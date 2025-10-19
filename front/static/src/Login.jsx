import React, { useState } from "react"; 
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

// URL base do backend corrigida para o endpoint correto
const API_URL = "http://localhost:8000/api/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const navigate = useNavigate();

  // Atualiza estado quando usuário digita nos campos
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função de submit do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação básica
    if (!formData.email || !formData.senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      // Envia credenciais para o backend no endpoint correto
      const response = await axios.post(`${API_URL}/login`, {
        email: formData.email,
        senha: formData.senha,
      });

      if (response.status === 200 && response.data.access_token) {
        // Salva token JWT no localStorage
        localStorage.setItem("token", response.data.access_token);
        localStorage.setItem("usuarioEmail", formData.email);

        alert("Login realizado com sucesso!");
        navigate("/PaginaInicial");
      } else {
        alert("Erro inesperado no login. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro no login:", error);

      if (error.response) {
        switch (error.response.status) {
          case 401:
            alert("E-mail ou senha incorretos.");
            break;
          case 404:
            alert("Rota de login não encontrada. Verifique o backend.");
            break;
          case 422:
            alert("Dados inválidos. Verifique os campos e tente novamente.");
            break;
          default:
            alert("Erro ao realizar login. Tente novamente.");
        }
      } else {
        alert("Erro de rede. Verifique se o backend está rodando.");
      }
    }
  };

  return (
    <BackgroundImage>
      <Formulario>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"><b>E-mail</b></label>
          <Input
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <label htmlFor="senha"><b>Senha</b></label>
          <Input
            type="password"
            placeholder="Digite sua senha"
            name="senha"
            required
            value={formData.senha}
            onChange={handleChange}
          />

          <EsqueciSenha>
            <InputLink href="#">Esqueci minha senha</InputLink>
          </EsqueciSenha>

          <BotaoLogin type="submit">Entrar</BotaoLogin>
          <BotaoCadastro type="button" onClick={() => navigate("/Cadastro")}>
            Cadastrar
          </BotaoCadastro>
        </form>
      </Formulario>
    </BackgroundImage>
  );
};

export default Login;
