import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importação do axios
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

const API_BASE_URL = "http://localhost:8888/api";

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
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem");
      return;
    }
    if (!formData.concordo) {
        alert("Você deve concordar com os termos de uso.");
        return;
    }

    try {
        // Objeto a ser enviado, excluindo 'confirmarSenha' e 'concordo'
        const dadosParaAPI = {
            nome: formData.nome,
            email: formData.email,
            senha: formData.senha,
            // outros campos necessários
        };

        // Requisição POST para cadastro
        await axios.post(`${API_BASE_URL}/cadastro`, dadosParaAPI);

        alert("Cadastro realizado com sucesso! Redirecionando para o Login.");
        navigate("/login");

    } catch (error) {
        console.error("Erro no cadastro:", error);
        // Exemplo de tratamento de erro específico da API
        if (error.response && error.response.status === 409) {
            alert("E-mail já cadastrado. Tente fazer o login.");
        } else {
            alert("Erro ao realizar cadastro. Tente novamente.");
        }
    }
  };

  return (
    <BackgroundImage>
      <Formulario>
      <Title>Cadastro</Title>
      <form onSubmit={handleSubmit}>

        <label htmlFor="nome"><b>Nome</b></label>
        <Input type="text" placeholder="Digite seu nome" name="nome" required value={formData.nome} onChange={handleChange} />

        <label htmlFor="email"><b>E-mail</b></label>
        <Input type="email" placeholder="Digite seu e-mail" name="email" required value={formData.email} onChange={handleChange} />
        
        <label htmlFor="senha"><b>Senha</b></label>
        <Input type="password" placeholder="Digite sua senha" name="senha" required value={formData.senha} onChange={handleChange} />

        <label htmlFor="confirmarSenha"><b>Confirmar senha</b></label>
        <Input type="password" placeholder="Confirme sua senha" name="confirmarSenha" required value={formData.confirmarSenha} onChange={handleChange} />


        <Checkbox>
          <CheckboxInput type="checkbox" id="concordo" name="concordo" required checked={formData.concordo} onChange={handleChange} />
          <CheckboxLabel htmlFor="concordo">Li e concordo com os <CheckboxLink onClick={() => navigate("/TermosdeUso")} target="_blank">termos de uso</CheckboxLink></CheckboxLabel>
        </Checkbox>

        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </form>
      </Formulario>
    </BackgroundImage>
  );
};

export default Cadastro;