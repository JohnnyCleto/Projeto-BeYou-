/* inicialestrutura */

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled, { createGlobalStyle } from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* --- TOPO E BACKGROUND --- */
const Topo = styled.div`
  width: 100%;
  height: 80px;
  background-color: #fff;

  @media (max-width: 768px) {
    height: 70px;
  }

  @media (max-width: 480px) {
    height: 60px;
  }
`;

const Background = styled.div`
  background-color: rgba(255, 255, 255, 1);
`;

/* --- HEADER --- */
const Header = styled.header`
  background-image: url("/img/Textura_Rosa.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 0.5px solid #6c4539;
  color: #6c4539;
  padding: 10px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; /* importante para responsividade */
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

/* --- SEARCHBAR --- */
const SearchBar = styled.input`
  width: 30%;
  min-width: 220px;
  padding: 12px 18px;
  border: 2px solid hsl(300, 99%, 64%);
  border-radius: 20px;
  font-size: 16px;
  color: #6c4539;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:hover,
  &:focus {
    border: 3px solid hsl(300, 99%, 64%);
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

/* --- MENU --- */
const Menu = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100%;
    background-color: #ffe4ec;
    padding: 20px 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-120%)")};
    z-index: 20;
  }
`;

const MenuLink = styled.a`
  font-size: 15px;
  color: #6c4539;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin: 5px 15px;
  transition: transform 0.2s;

  &:hover {
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    font-size: 14px;
    margin: 5px;
  }
`;

/* --- MENU HAMBURGUER --- */
const MenuButton = styled.button`
  background: none;
  border: none;
  color: #ff1493;
  font-size: 30px;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

/* --- ÍCONES DO TOPO --- */
const Icons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: center;
  }
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

const IconLink = styled.a`
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
  transition: transform 0.2s ease-in-out, color 0.2s;

  &:hover {
    transform: scale(1.1);
    color: hsl(300, 99%, 64%);
  }
`;

const BotaoSair = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #6c4539;
  transition: transform 0.2s ease-in-out, color 0.2s;

  &:hover {
    transform: scale(1.1);
    color: hsl(300, 99%, 64%);
  }
`;

/* --- CARROSÉIS E IMAGENS --- */
const baseImgStyle = `
  width: 230px;
  height: 200px;
  margin: 10px;
  transition: all 0.3s ease;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    margin: 8px;
  }
`;

const Carrosel1st = styled.img`
  width: 100%;
  max-width: 1500px;
  height: 500px;
  object-fit: cover;
  border-radius: 16px;
  display: block;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    height: 220px;
  }
`;

const CarouselContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 30px auto 70px;
  position: relative;

  .slick-slide {
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }

  .slick-dots {
    display: none !important;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin: 20px auto 50px;
  }
`;

/* --- SETAS PERSONALIZADAS --- */
const ArrowButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
  background-color: rgba(255, 192, 203, 0.4);
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 105, 180, 0.6);
    transform: translateY(-50%) scale(1.15);
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

const PrevArrow = ({ onClick }) => (
  <ArrowButton style={{ left: "-25px" }} onClick={onClick}>
    <FaChevronLeft color="white" size={24} />
  </ArrowButton>
);

const NextArrow = ({ onClick }) => (
  <ArrowButton style={{ right: "-25px" }} onClick={onClick}>
    <FaChevronRight color="white" size={24} />
  </ArrowButton>
);

/* --- OUTROS ELEMENTOS --- */
const Propaganda2 = styled.img`
  width: 100%;
  max-width: 1500px;
  height: 350px;
  object-fit: cover;
  border-radius: 16px;
  display: block;
  margin-top: 35px;

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 480px) {
    height: 180px;
  }
`;

const ProdutosImg = styled.img`${baseImgStyle}`;
const PromocaoImg = styled.img`${baseImgStyle}`;
const ServicoImg = styled.img`${baseImgStyle}`;
const EmpresasImg = styled.img`
  width: 150px;
  height: 150px;
  margin-left: 70px;
  border-radius: 100%;
  border: solid 2px #6c4539;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
    margin-left: 10px;
  }
`;

const Title = styled.div`
  text-align: center;
  color: #6c4539;
  font-weight: bold;
  font-size: 30px;
  margin: 40px 0 25px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

/* --- FOOTER --- */
const Footer = styled.div`
  background-color: #ffc9e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #6c4539;
  padding: 40px 20px;
  border: 3px solid #6c4539;
  width: 100%;
  margin-top: 50px;
`;

const ConteudoFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const FooterLink = styled.a`
  font-size: 15px;
  color: #6c4539;
  text-decoration: none;
  font-weight: bold;
  margin: 10px 0;
  text-align: center;

  &:hover {
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 180px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  justify-content: center;
`;

const Links = styled.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: #6c4539;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
`;

const Direitos = styled.div`
  width: 100%;
  border-top: 1px solid #6c4539;
  text-align: center;
  padding-top: 10px;
  color: #6c4539;
  font-size: 12px;

  @media (max-width: 480px) {
    font-size: 10px;
  }
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
  font-size: 36px;

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Texto = styled.p`
  font-size: 12px;
  color: #6c4539;
`;

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Times New Roman', Times, serif;
  }

  body {
    background-color: rgb(255, 228, 230);
    color: #333;
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

/* --- EXPORTS --- */
export {
  Background,
  Header,
  LogoContainer,
  ImgLogo,
  SearchBar,
  Menu,
  MenuLink,
  BotaoSair,
  IconLink as PerfilLink,
  IconLink as NoticacaoLink,
  Perfil,
  Noticacao,
  Sair,
  Icons,
  Carrosel1st,
  CarouselContainer,
  PromocaoImg,
  Propaganda2,
  ServicoImg,
  Title,
  ProdutosImg,
  EmpresasImg,
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
  Topo,
  PrevArrow,
  NextArrow,
  MenuButton, // novo botão hamburguer
};