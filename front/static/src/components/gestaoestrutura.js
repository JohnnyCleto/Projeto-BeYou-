// dashboard.js (versão unificada)
import styled, { createGlobalStyle } from "styled-components";
import React from "react";

/* ---------------------- ESTILOS GLOBAIS ---------------------- */
export const GlobalStyle = createGlobalStyle`
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

  body {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    background: #ffe4ec;
    color: #6c4539;
  }
`;

/* ---------------------- LAYOUT PRINCIPAL ---------------------- */
export const Background = styled.div`
  min-height: 100vh;
  background: rgb(255, 228, 230);
`;

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;
  padding: 20px;
  min-height: 80vh;
`;

/* ---------------------- HEADER ---------------------- */
export const Header = styled.header`
  background-image: url("/img/Textura_Rosa.jpg");
  min-height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: sticky;
  top: 0;
  color: #6c4539;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.5px solid #6c4539;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ImgLogo = styled.img`
  width: 60px;
  height: auto;
  border-radius: 50%;
  border: 2px solid #6c4539;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;

export const SearchBar = styled.input`
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

  &::placeholder {
    color: #6c4539;
    font-style: italic;
  }

  &:focus { border: 2px solid hsl(300, 99%, 64%); }
  &:hover { box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2); transform: translateY(-2px); }
  &:active { transform: translateY(0); box-shadow: none; }
`;

/* ---------------------- MENU ---------------------- */
export const Menu = styled.div`overflow: hidden;`;

export const MenuLink = styled.a`
  float: left;
  font-size: 15px;
  color: #6c4539;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  line-height: normal;
  margin: 0 15px;

  &:hover {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: hsl(300, 99%, 64%);
    cursor: pointer;
    transform: scale(1.1);
  }
`;

/* ---------------------- ICONS E PERFIL ---------------------- */
export const Icons = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: flex-end;
  gap: 16px;
`;

export const Perfil = styled.div`display: flex; align-items: center; overflow: hidden;`;
export const Noticacao = styled.div`display: flex; align-items: center; overflow: hidden;`;
export const Sair = styled.div`display: flex; align-items: center; overflow: hidden;`;

export const PerfilLink = styled.a`
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px;
  cursor: pointer; border: none;
  background-color: transparent; color: #6c4539;
  transition: transform 0.2s ease-in-out;

  &:hover { transform: scale(1.1); text-decoration: underline; color: hsl(300, 99%, 64%); }
`;

export const NoticacaoLink = styled.a`
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px;
  cursor: pointer; border: none; background-color: transparent;
  color: #6c4539; text-decoration: none;
  transition: transform 0.2s ease-in-out;

  &:hover { transform: scale(1.1); text-decoration: underline; color: hsl(300, 99%, 64%); }
`;

export const BotaoSair = styled.button`
  display: flex; align-items: center; justify-content: center;
  width: 32px; height: 32px; cursor: pointer;
  border: none; background-color: transparent; color: #6c4539;
  transition: transform 0.2s ease-in-out;

  &:hover { transform: scale(1.1); text-decoration: underline; color: hsl(300, 99%, 64%); }
`;

/* ---------------------- CARDS E COLUNAS ---------------------- */
export const Card = styled.div`
  background: white;
  border: 2px solid #ffc9e9;
  border-radius: 16px;
  padding: 20px;
  color: #6c4539;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

export const ColunaCentral = styled.div`display: flex; flex-direction: column; gap: 20px;`;
export const GridInferior = styled.div`display: grid; grid-template-columns: 1fr 1fr; gap: 20px;`;

/* ---------------------- PERFIL ---------------------- */
export const PerfilCard = styled.div`
  display: flex; flex-direction: column; align-items: center;
  text-align: center; padding: 20px; border-radius: 12px;
  background: #fff; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

export const FotoPerfil = styled.div`
  width: 120px; height: 120px;
  border-radius: 50%; background-color: #ffe4ec; border: 3px solid #6c4539;
  margin-bottom: 20px;
`;

export const LinhaInfo = styled.div`
  margin: 8px 0;
  font-size: 15px;
  strong { color: #6c4539; }
`;

/* ---------------------- NOTIFICAÇÕES ---------------------- */
export const FilterContainer = styled.div`display: flex; margin-bottom: 15px; gap: 10px; flex-wrap: wrap;`;
export const FilterButton = styled.button`
  padding: 5px 12px;
  border: none; border-radius: 5px;
  background: ${props => (props.active ? "#6c4539" : "#e0e0e0")};
  color: ${props => (props.active ? "#fff" : "#000")};
  cursor: pointer; font-weight: bold; transition: 0.2s;
  &:hover { background: #6c4539; color: #fff; }
`;
export const NotificacaoItem = styled.div`
  border: 1px solid #ddd;
  border-left: 5px solid #6c4539;
  padding: 10px; margin-bottom: 10px;
  border-radius: 5px; font-size: 14px;
  background: #fff;
`;

/* ---------------------- COMPONENTES DO GESTÃO INTEGRADOS ---------------------- */
export const TopRow = styled.div`
  display:flex; gap: 16px; padding: 18px 24px;
  align-items: center; overflow-x: auto;
`;

export const PromoCard = styled.div`
  min-width: 260px;
  display:flex; gap:12px; align-items:center;
  background: #fff; border-radius: 12px;
  border: 1px solid rgba(108,69,57,0.08);
  padding: 10px; box-shadow: 0 6px 18px rgba(108,69,57,0.04);
`;

export const Main = styled.main`
  display: grid; grid-template-columns: 1fr 1.25fr 0.95fr;
  gap: 18px; padding: 20px 24px 60px; align-items: start;
`;

export const Panel = styled.div`
  background: #fff; border-radius: 14px;
  border: 1px solid rgba(108,69,57,0.06);
  padding: 14px; box-shadow: 0 6px 18px rgba(108,69,57,0.03);
`;

export const PanelHeader = styled.div`
  display:flex; justify-content: space-between; align-items: center;
  margin-bottom: 12px;
`;

export const PanelTitle = styled.h3`
  margin: 0; color: #6c4539;
`;

export const ItemRow = styled.div`
  display:flex; gap: 12px; align-items: center;
  padding: 10px; border-radius: 10px;
  background: #fff8fb; margin-bottom: 10px;
  border: 1px solid rgba(255,105,180,0.06);
`;

export const ItemThumb = styled.img`
  width: 72px; height: 56px; border-radius: 8px;
  object-fit: cover; border: 1px solid rgba(108,69,57,0.06);
`;

export const ItemInfo = styled.div`
  flex: 1; display:flex; flex-direction: column;
`;

export const ItemActions = styled.div`
  display:flex; gap:8px; align-items:center;
`;

export const StatBadge = styled.span`
  display:inline-flex; align-items:center; gap:8px;
  padding:6px 10px; border-radius: 999px;
  background: rgba(255,105,180,0.06);
  border: 1px solid rgba(255,105,180,0.08);
  font-size: 13px; color: #6c4539;
`;

export const RightColumn = styled.div`
  display:flex; flex-direction: column; gap: 16px;
`;

export const CalendarBox = styled(Panel)`
  display:flex; flex-direction: column; gap: 12px; align-items: center;
`;

export const AppointmentsBox = styled(Panel)`padding: 12px;`;

export const AppointmentItem = styled.div`
  display:flex; gap: 10px; align-items:center;
  padding: 10px; border-radius: 10px;
  border: 1px solid rgba(108,69,57,0.04);
  margin-bottom: 8px; background: #fff;
`;

export const FloatingActions = styled.div`
  position: fixed; right: 26px; bottom: 90px;
  display:flex; flex-direction: column; gap: 10px; z-index: 40;
`;

export const FloatingButton = styled.button`
  background: #fff;
  border: 2px solid rgba(108,69,57,0.08);
  padding: 10px 14px; border-radius: 12px;
  box-shadow: 0 10px 24px rgba(108,69,57,0.06);
  cursor: pointer; font-weight: 600;
  display:flex; gap:8px; align-items:center;
`;

export const IconButton = styled.button`
  background: transparent; border: none; cursor: pointer;
  padding: 6px; border-radius: 8px;
  &:hover { background: rgba(108,69,57,0.03); }
`;

export const SmallFooter = styled.footer`
  padding: 18px 24px; text-align: center; color: #9a6b76;
`;

export const Small = styled.small`color: #7a5a5a;`;
