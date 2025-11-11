import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  BackgroundImage,
  Formulario,
  Title,
  Input,
  Checkbox,
  CheckboxInput,
  CheckboxLabel,
  CheckboxLink,
  BotaoCadastrar
} from "./components/cadastroestrutura";

// ✅ Endpoint correto do backend
const API_URL = "http://localhost:8000/api/auth";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    concordo: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validações front-end
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem.");
      return;
    }

    if (!formData.concordo) {
      alert("Você deve concordar com os termos de uso.");
      return;
    }

    try {
      // ✅ Dados formatados para o backend
      const dadosParaAPI = {
        nome: formData.nome,
        email: formData.email,
        senha: formData.senha,
      };

      // ✅ Envio com JSON e compatibilidade CORS
      const response = await axios.post(
        `${API_URL}/cadastro`,
        dadosParaAPI,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false,
        }
      );

      // ✅ Sucesso no cadastro
      if (response.status === 201 || response.status === 200) {
        alert("Cadastro realizado com sucesso! Redirecionando para o Login.");
        navigate("/login");
      } else {
        alert("Erro inesperado ao cadastrar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro no cadastro:", error);

      if (error.response) {
        switch (error.response.status) {
          case 400:
            alert("Requisição inválida. Verifique os dados e tente novamente.");
            break;
          case 404:
            alert("Endpoint de cadastro não encontrado. Verifique o backend.");
            break;
          case 409:
            alert("E-mail já cadastrado. Tente fazer login.");
            break;
          case 422:
            alert("Dados inválidos. Verifique os campos e tente novamente.");
            break;
          default:
            alert("Erro ao realizar cadastro. Tente novamente.");
        }
      } else {
        alert("Erro de rede ou servidor. Verifique se o backend está rodando.");
      }
    }
  };

  return (
    <BackgroundImage>
      <Formulario>
        <Title>Cadastro</Title>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome"><b>Nome</b></label>
          <Input
            type="text"
            placeholder="Digite seu nome"
            name="nome"
            required
            value={formData.nome}
            onChange={handleChange}
          />

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

          <label htmlFor="confirmarSenha"><b>Confirmar senha</b></label>
          <Input
            type="password"
            placeholder="Confirme sua senha"
            name="confirmarSenha"
            required
            value={formData.confirmarSenha}
            onChange={handleChange}
          />

          <Checkbox>
            <CheckboxInput
              type="checkbox"
              id="concordo"
              name="concordo"
              required
              checked={formData.concordo}
              onChange={handleChange}
            />
            <CheckboxLabel htmlFor="concordo">
              Li e concordo com os{" "}
              <CheckboxLink
                onClick={() => navigate("/TermosdeUso")}
                target="_blank"
              >
                termos de uso
              </CheckboxLink>
            </CheckboxLabel>
          </Checkbox>

          <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
        </form>
      </Formulario>
    </BackgroundImage>
  );
};

export default Cadastro;
