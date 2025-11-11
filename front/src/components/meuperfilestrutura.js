import styled, { createGlobalStyle } from "styled-components";

/* ===== BACKGROUND ===== */
const Background = styled.div`
  background-color: rgba(255, 255, 255, 1);
`;

/* ===== HEADER ===== */
const Header = styled.header`
  background-image: url("/img/Textura_Rosa.jpg");
  min-height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: #6c4539;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid #6c4539;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImgLogo = styled.img`
  width: 60px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #6c4539;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    width: 50px;
  }
`;

const SearchBar = styled.input`
  width: 30%;
  padding: 10px;
  border: 2px solid hsl(300, 99%, 64%);
  border-radius: 20px;
  font-size: 16px;
  color: #6c4539;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &::placeholder {
    color: #6c4539;
  }

  @media (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const MenuLink = styled.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.2s ease-in-out;

  &:hover {
    color: hsl(300, 99%, 64%);
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  flex-wrap: wrap;
`;

const Perfil = styled.div`
  display: flex;
  align-items: center;
`;

const Noticacao = styled.div`
  display: flex;
  align-items: center;
`;

const Sair = styled.div`
  display: flex;
  align-items: center;
`;

const PerfilLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #6c4539;
  text-decoration: none;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: hsl(300, 99%, 64%);
  }
`;

const NoticacaoLink = styled(PerfilLink)``;

const BotaoSair = styled.button`
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #6c4539;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: hsl(300, 99%, 64%);
  }
`;

const Title = styled.div`
  text-align: center;
  color: #6c4539;
  font-weight: bold;
  font-size: 30px;
  margin: 10px;
`;

/* ===== PERFIL ===== */
const PerfilContainer = styled.div`
  height: 200px;
  background-image: url("/img/perfil_fundo.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 50px;
  margin: 50px auto;
  width: 70%;
  border-radius: 20px;

  @media (max-width: 1024px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
    margin: 20px auto;
  }
`;

const ImgPerfilGrande = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 140px;
    height: 140px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

const NomePerfil = styled.h1`
  color: rgb(78, 50, 41);
  font-size: 40px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: -20px;

  @media (max-width: 1024px) {
    font-size: 32px;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

/* ===== BOTÕES DE PERFIL ===== */
const Icones = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  flex-wrap: wrap;
  gap: 20px;
`;

const IconeConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    margin-right: 50px;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
    gap: 10px;
  }
`;

const IconeTexto = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 50px;
  border: 2px solid ${(props) => (props.$excluir ? "#ff4d6d" : "#ffb6c1")};
  border-radius: 50px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.$excluir ? "#fff" : "#6c4539")};
  background-color: ${(props) => (props.$excluir ? "#ff4d6d" : "#fff")};
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.$excluir ? "#e63950" : "#ffe4ec")};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 90%;
    height: 45px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 85%;
    height: 40px;
    font-size: 13px;
  }
`;

/* ===== DADOS PERFIL EXPANDÍVEIS ===== */
const DadosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1024px) {
    width: 85%;
  }

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Opcoes = styled.div`
  margin-bottom: 20px;
`;

const Titulo = styled.button`
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  color: #6c4539;
  padding: 10px 15px;
  border-radius: 10px;
  border: 1px solid #ffc9e9;
  background-color: #ffe4ec;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ffb6c1;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 8px 12px;
  }
`;

const Descricao = styled.div`
  display: ${(props) => (props.visivel ? "block" : "none")};
  padding: 10px 15px;
  border: 1px solid #ffc9e9;
  border-radius: 10px;
  background-color: #fff0f5;
  transition: all 0.3s ease-in-out;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin: 5px 0;
  color: #6c4539;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ffc9e9;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ffc9e9;
  margin-bottom: 10px;
`;

const BotaoEnviar = styled.button`
  padding: 10px 20px;
  background-color: #ff69b4;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #ff1493;
  }
`;

const BotaoExcluir = styled(BotaoEnviar)`
  background-color: #ff4d6d;

  &:hover {
    background-color: #e63950;
  }
`;

/* ===== GLOBAL STYLE ===== */
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Times New Roman', Times, serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #ffe4ec;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff69b4;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ff1493;
  }
`;

/* ===== NOTIFICAÇÕES ===== */
const NotificacoesContainer = styled.div`
  width: 300px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 10;

  @media (max-width: 480px) {
    width: 90%;
    height: auto;
    top: 20px;
    left: 5%;
  }
`;

const FiltroNotificacoes = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const FiltroBotao = styled.button`
  background-color: #ff69b4;
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #ff1493;
  }
`;

const OpcoesFiltro = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const FiltroOpcao = styled.button`
  padding: 8px 12px;
  border: 1px solid #ff69b4;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  color: #ff69b4;
  font-weight: 500;

  &:hover {
    background-color: #ff69b4;
    color: #fff;
  }
`;

const ListaNotificacoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 250px;
  overflow-y: auto;
`;

const NotificacaoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #ffe4ec;
  padding: 10px 15px;
  border-radius: 10px;
`;

const IconeNotificacao = styled.img`
  width: 35px;
  height: 35px;
`;

const MensagemNotificacao = styled.span`
  font-size: 16px;
  color: #333333ff;
`;

/* ===== FOOTER ===== */
const Footer = styled.div`
  background-color: #ffc9e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 80px;
  border: 3px solid #6c4539;
  width: 100%;
  margin-top: 50px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ConteudoFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
`;

const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  min-width: 200px;
`;

const FooterLink = styled.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;

  &:hover {
    color: hsl(300, 99%, 64%);
    transform: scale(1.1);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  justify-content: center;
`;

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 20px;
`;

const Direitos = styled.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  margin-top: 20px;
`;

const Texto = styled.p`
  font-size: 12px;
  color: #6c4539;
`;

const Logo = styled.img`
  width: 100px;
  margin: 20px 0;
`;

const TitleFooter = styled.h3`
  text-align: center;
  color: #6c4539;
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export {
  Background,
  Header,
  LogoContainer,
  ImgLogo,
  SearchBar,
  Menu,
  MenuLink,
  BotaoSair,
  PerfilLink,
  NoticacaoLink,
  Perfil,
  Noticacao,
  Sair,
  Icons,
  Title,
  PerfilContainer,
  ImgPerfilGrande,
  NomePerfil,
  IconeConteiner,
  IconeTexto,
  Icones,
  Footer,
  ConteudoFooter,
  Coluna,
  SocialIcons,
  FooterLink,
  Links,
  Logo,
  Direitos,
  TitleFooter,
  Texto,
  GlobalStyle,
  NotificacoesContainer,
  FiltroNotificacoes,
  FiltroBotao,
  OpcoesFiltro,
  FiltroOpcao,
  ListaNotificacoes,
  NotificacaoItem,
  IconeNotificacao,
  MensagemNotificacao,
  Opcoes,
  Titulo as TituloOpcoes,
  Descricao,
  DadosContainer,
  Label,
  Input,
  TextArea,
  BotaoEnviar,
  BotaoExcluir,
};
