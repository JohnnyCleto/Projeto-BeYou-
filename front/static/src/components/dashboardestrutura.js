










import styled, { createGlobalStyle } from "styled-components";
import React, { useState } from "react";

/* ---------------------- ESTILOS GLOBAIS ---------------------- */
const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 8px;
    max-height: 400px;
    overflow-y: auto;
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

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    overflow-x: hidden; /* Previne scroll horizontal */
  }
`;

/* ---------------------- LAYOUT PRINCIPAL ---------------------- */
const Background = styled.div`
  background-color: rgb(255, 228, 230);
  min-height: 100vh;
  overflow-x: hidden; /* Garante que nada exceda horizontalmente */
`;

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  padding: 20px;
  min-height: 80vh;
  max-width: 100vw;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 10px;
    padding: 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: 1fr 2fr 1fr;
    gap: 15px;
    padding: 15px;
  }

  @media (min-width: 1025px) and (max-width: 1440px) {
    grid-template-columns: 1fr 2fr 1fr;
    gap: 25px;
    padding: 25px;
  }

  @media (min-width: 1441px) {
    grid-template-columns: 1fr 2fr 1fr;
    gap: 30px;
    padding: 30px;
    max-width: 90vw;
    margin: 0 auto;
  }
`;

/* ---------------------- HEADER ---------------------- */
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
  max-width: 100vw;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
    gap: 10px;
  }

  @media (min-width: 1441px) {
    padding: 15px 30px;
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

  @media (max-width: 768px) {
    width: 50px;
  }

  @media (min-width: 1441px) {
    width: 80px;
  }
`;

const SearchBar = styled.input`
  width: 30%;
  padding: 12px 18px;
  border: 2px solid hsl(300, 99%, 64%);
  border-radius: 20px;
  font-size: 16px;
  color: #6c4539;
  outline: none;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(8px);
  box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
  max-width: 100%;

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:focus {
    border: 2px solid hsl(300, 99%, 64%);
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    width: 80%;
    font-size: 14px;
    padding: 10px 15px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 40%;
  }

  @media (min-width: 1441px) {
    width: 25%;
    font-size: 18px;
    padding: 15px 20px;
  }
`;

const Menu = styled.div`
  overflow: hidden;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }
`;

const MenuLink = styled.a`
  float: left;
  font-size: 15px;
  color: #6c4539;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  border: 1px #FFC9E9;
  display: inline-block;
  line-height: normal;
  margin-left: 15px;
  margin-right: 15px;
  &:hover {
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    float: none;
    margin: 0;
    font-size: 14px;
  }

  @media (min-width: 1441px) {
    font-size: 16px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

const Icons = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
  gap: 16px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 10px;
  }

  @media (min-width: 1441px) {
    gap: 20px;
  }
`;

const Perfil = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Noticacao = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const Sair = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const PerfilLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  border: none;
  background-color: transparent;
  color: #6c4539;
  overflow: hidden;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }

  @media (min-width: 1441px) {
    width: 40px;
    height: 40px;
  }
`;

const NoticacaoLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  border: none;
  background-color: transparent;
  color: #6c4539;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }

  @media (min-width: 1441px) {
    width: 40px;
    height: 40px;
  }
`;

const BotaoSair = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  border: none;
  background-color: transparent;
  color: #6c4539;
  
  &:hover {
    transform: scale(1.1);
    text-decoration: underline;
    color: hsl(300, 99%, 64%);
  }

  @media (min-width: 1441px) {
    width: 40px;
    height: 40px;
  }
`;

/* ---------------------- CARD E COLUNAS ---------------------- */
const Card = styled.div`
  background: white;
  border: 2px solid #ffc9e9;
  border-radius: 16px;
  padding: 20px;
  color: #6c4539;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 12px;
  }

  @media (min-width: 1441px) {
    padding: 25px;
    border-radius: 20px;
  }
`;

const ColunaCentral = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (min-width: 1441px) {
    gap: 25px;
  }
`;

const GridInferior = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  @media (min-width: 1441px) {
    gap: 25px;
  }
`;

/* ---------------------- PERFIL ---------------------- */
export const PerfilCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (min-width: 1441px) {
    padding: 25px;
  }
`;

export const FotoPerfil = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #ffe4ec; 
  border: 3px solid #6c4539;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 15px;
  }

  @media (min-width: 1441px) {
    width: 150px;
    height: 150px;
    margin-bottom: 25px;
  }
`;

export const LinhaInfo = styled.div`
  margin: 8px 0;
  font-size: 15px;

  strong {
    color: #6c4539;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1441px) {
    font-size: 16px;
  }
`;

/* ---------------------- FOOTER ---------------------- */
const Footer = styled.div`
  background-color: #FFC9E9;
  display: flex;
  color: white;
  padding: 40px 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 3px solid #6c4539;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 50px;
  max-width: 100vw;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px 10px;
    margin-top: 30px;
  }

  @media (min-width: 1441px) {
    padding: 50px 30px;
    margin-top: 60px;
  }
`;

const ConteudoFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }

  @media (min-width: 1441px) {
    gap: 25px;
  }
`;

const Coluna = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 200px;

  @media (max-width: 768px) {
    min-width: auto;
  }

  @media (min-width: 1441px) {
    min-width: 250px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 22px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 10px;
    font-size: 20px;
  }

  @media (min-width: 1441px) {
    gap: 20px;
    font-size: 25px;
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
    background-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1441px) {
    font-size: 16px;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  color: #6c4539;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 15px;
  }

  @media (min-width: 1441px) {
    gap: 40px;
    margin-top: 25px;
  }
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

  @media (min-width: 1441px) {
    font-size: 14px;
    padding-top: 15px;
  }
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 80px;
    margin-bottom: 15px;
    margin-top: 15px;
  }

  @media (min-width: 1441px) {
    width: 120px;
    margin-bottom: 25px;
    margin-top: 25px;
  }
`;

const TitleFooter = styled.h3`
  text-align: center;
  color: #6c4539;
  font-style: bold;
  list-style: none;
  margin-bottom: 10px;
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1441px) {
    font-size: 45px;
  }
`;

const Texto = styled.p`
  font-size: 12px;
  color: #6c4539;

  @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (min-width: 1441px) {
    font-size: 14px;
  }
`;

/* ---------------------- NOTIFICAÇÕES ---------------------- */
export const FilterContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  gap: 10px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }

  @media (min-width: 1441px) {
    gap: 12px;
    margin-bottom: 20px;
  }
`;

export const FilterButton = styled.button`
  padding: 5px 12px;
  border: none;
  border-radius: 5px;
  background: ${props => (props.active ? "#6c4539" : "#e0e0e0")};
  color: ${props => (props.active ? "#fff" : "#000")};
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;

  &:hover {
    background: #6c4539;
    color: #fff;
  }

  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 14px;
  }

  @media (min-width: 1441px) {
    padding: 6px 14px;
    font-size: 16px;
  }
`;

export const NotificacaoItem = styled.div`
  border: 1px solid #ddd;
  border-left: 5px solid #6c4539;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  font-size: 14px;
  background: #fff;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 13px;
  }

  @media (min-width: 1441px) {
    padding: 12px;
    font-size: 15px;
  }
`;

/* ---------------------- EXPORTAÇÃO ---------------------- */
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
  Layout,
  Card,
  ColunaCentral,
  GridInferior
};






































