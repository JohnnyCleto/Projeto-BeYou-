/* PaginaInicial */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { User, Bell, LogOut } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import styled from "styled-components";
import {
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
  Carrosel1st,
  Propaganda2,
  Title,
  ProdutosImg,
  ServicoImg,
  EmpresasImg,
  CarouselContainer,
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
  MenuButton, // adicionado
} from "./components/inicialestrutura.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// --- SETAS PERSONALIZADAS ---
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
  z-index: 3;
  background-color: rgba(255, 192, 203, 0.45);
  transition: all 0.25s ease;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: rgba(255, 105, 180, 0.6);
    transform: translateY(-50%) scale(1.1);
  }
`;

const PrevArrow = ({ onClick }) => (
  <ArrowButton style={{ left: "5px" }} onClick={onClick}>
    <FaChevronLeft color="#6c4539" size={28} />
  </ArrowButton>
);

const NextArrow = ({ onClick }) => (
  <ArrowButton style={{ right: "5px" }} onClick={onClick}>
    <FaChevronRight color="#6c4539" size={28} />
  </ArrowButton>
);

// --- NOVOS ELEMENTOS ---
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  margin: 10px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: translateY(-6px);
  }
`;

const ProdutoNome = styled.h3`
  color: #6c4539;
  font-size: 18px;
  margin-top: 10px;
`;

const ProdutoPreco = styled.p`
  color: hsl(300, 80%, 45%);
  font-weight: bold;
  font-size: 16px;
  margin: 5px 0;
`;

const BotaoCarrinho = styled.button`
  background-color: hsl(300, 99%, 64%);
  border: none;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 5px;
  transition: 0.3s ease;

  &:hover {
    background-color: rgba(255, 105, 180, 0.8);
  }
`;

const LojaDescricao = styled.p`
  color: #6c4539;
  font-size: 14px;
  margin-top: 20px;
`;

// ÍCONE DE FAVORITO
const BotaoFavorito = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

function Inicial() {
  const navigate = useNavigate();
  const [favoritos, setFavoritos] = useState([]);
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleFavorito = (item) => {
    setFavoritos((prev) =>
      prev.includes(item.nome)
        ? prev.filter((f) => f !== item.nome)
        : [...prev, item.nome]
    );
  };

  const handleLogout = () => navigate("/bemvindo");
  const reloadPage = (event) => {
    event.preventDefault();
    navigate("/PaginaInicial");
  };

  // Trava o scroll quando o menu está aberto
  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "auto";
  }, [menuAberto]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  // --- LISTAS ---
  const produtos = [
    { img: "/img/produtobeleza1.webp", nome: "Kit Kérastase Nutritive Routine Duo", preco: "R$49,90" },
    { img: "/img/produtobeleza2.webp", nome: "Maybelline Lash Sensational", preco: "R$39,90" },
    { img: "/img/produtobeleza3.webp", nome: "Wella Professionals", preco: "R$200,90" },
    { img: "/img/produtobeleza4.webp", nome: "Dior Rouge Forever Líquid 959", preco: "R$119,90" },
  ];

  const servicos = [
    { img: "/img/servico1.jpg", nome: "Corte e Hidratação Capilar com Escova", preco: "R$79,90" },
    { img: "/img/servico2.jpg", nome: "Manicure Completa", preco: "R$39,90" },
    { img: "/img/servico3.jpg", nome: "Limpeza de Pele Profunda", preco: "R$69,90" },
    { img: "/img/servico4.jpg", nome: "Tratamento para Cabelos Loiros", preco: "R$99,90" },
  ];

  const lojas = [
    { img: "/img/loja1.jpg", nome: "Studio Bela", desc: "Especialista em cuidados capilares e estética." },
    { img: "/img/loja2.jpg", nome: "Spa Essência", desc: "Ambiente relaxante com serviços de bem-estar." },
    { img: "/img/loja3.jpg", nome: "Beleza Natural", desc: "Produtos e tratamentos com ingredientes naturais." },
    { img: "/img/loja5.jpg", nome: "Estilo & Glamour", desc: "Salão moderno com atendimento personalizado." },
  ];

  return (
    <Background>
      <GlobalStyle />

      <Header>
        <LogoContainer>
          <ImgLogo onClick={reloadPage} src="/img/new_logo.jpg" alt="Logo" />
        </LogoContainer>

        {/* Botão hamburguer (mobile) */}
        <MenuButton onClick={() => setMenuAberto(!menuAberto)}>
          {menuAberto ? <FiX /> : <FiMenu />}
        </MenuButton>

        <Menu open={menuAberto}>
          <MenuLink onClick={() => navigate("/PaginaInicial")}>Início</MenuLink>
          <MenuLink onClick={() => navigate("/Carrinho")}>Meu Carrinho</MenuLink>
          <MenuLink onClick={() => navigate("/Pesquisar")}>Pesquisar</MenuLink>
          <MenuLink onClick={() => navigate("/Agendamentos")}>Agendamentos</MenuLink>
          <MenuLink onClick={() => navigate("/FAvoritosPerfil")}>Favoritos</MenuLink>
        </Menu>

        <SearchBar type="text" placeholder="Busque por item ou loja" />

        <Icons>
          <Perfil>
            <PerfilLink onClick={() => navigate("/MeuPerfil")}>
              <User className="icone" />
            </PerfilLink>
          </Perfil>

          <Noticacao>
            <NoticacaoLink onClick={() => navigate("/notificacoes_perfil")}>
              <Bell className="icone" />
            </NoticacaoLink>
          </Noticacao>

          <Sair>
            <BotaoSair onClick={handleLogout}>
              <LogOut className="icone" />
            </BotaoSair>
          </Sair>
        </Icons>
      </Header>

      <main>
        <Carrosel1st src="/img/carrosel1st.png" alt="Banner principal" />

        {/* --- Produtos --- */}
        <Title>Promoções de Produtos</Title>
        <CarouselContainer>
          <Slider {...settings}>
            {produtos.map((item, index) => (
              <Card key={index}>
                <BotaoFavorito onClick={() => toggleFavorito(item)}>
                  <FaHeart
                    color={favoritos.includes(item.nome) ? "red" : "#ccc"}
                    size={22}
                  />
                </BotaoFavorito>
                <ProdutosImg src={item.img} alt={item.nome} />
                <ProdutoNome>{item.nome}</ProdutoNome>
                <ProdutoPreco>{item.preco}</ProdutoPreco>
                <BotaoCarrinho>Adicionar ao Carrinho</BotaoCarrinho>
              </Card>
            ))}
          </Slider>
        </CarouselContainer>

        <Propaganda2 src="/img/propaganda2.jpg" alt="Propaganda" />

        {/* --- Serviços --- */}
        <Title>Promoções de Serviços</Title>
        <CarouselContainer>
          <Slider {...settings}>
            {servicos.map((item, index) => (
              <Card key={index}>
                <BotaoFavorito onClick={() => toggleFavorito(item)}>
                  <FaHeart
                    color={favoritos.includes(item.nome) ? "red" : "#ccc"}
                    size={22}
                  />
                </BotaoFavorito>
                <ServicoImg src={item.img} alt={item.nome} />
                <ProdutoNome>{item.nome}</ProdutoNome>
                <ProdutoPreco>{item.preco}</ProdutoPreco>
                <BotaoCarrinho>Agendar Serviço</BotaoCarrinho>
              </Card>
            ))}
          </Slider>
        </CarouselContainer>

        {/* --- Lojas --- */}
        <Title>Lojas em Destaque</Title>
        <CarouselContainer>
          <Slider {...settings}>
            {lojas.map((loja, index) => (
              <Card key={index}>
                <BotaoFavorito onClick={() => toggleFavorito(loja)}>
                  <FaHeart
                    color={favoritos.includes(loja.nome) ? "red" : "#ccc"}
                    size={22}
                  />
                </BotaoFavorito>
                <EmpresasImg src={loja.img} alt={loja.nome} />
                <ProdutoNome>{loja.nome}</ProdutoNome>
                <LojaDescricao>{loja.desc}</LojaDescricao>
              </Card>
            ))}
          </Slider>
        </CarouselContainer>
      </main>

      <Footer>
        <ConteudoFooter>
          <Coluna>
            <TitleFooter>BeYou</TitleFooter>
            <FooterLink>Site Institucional</FooterLink>
            <FooterLink>Fale Conosco</FooterLink>
            <FooterLink>Conta e Segurança</FooterLink>
            <FooterLink>Carreiras</FooterLink>
            <FooterLink>Entregadores</FooterLink>
          </Coluna>

          <Coluna>
            <TitleFooter>Descubra</TitleFooter>
            <FooterLink>Cadastre sua loja</FooterLink>
            <FooterLink>BeYou Shop</FooterLink>
            <FooterLink>BeYou Empresas</FooterLink>
            <FooterLink>Blog BeYou Empresas</FooterLink>
          </Coluna>

          <Coluna>
            <TitleFooter>Social</TitleFooter>
            <SocialIcons>
              <FooterLink><FaFacebookF /></FooterLink>
              <FooterLink><FaTwitter /></FooterLink>
              <FooterLink><FaYoutube /></FooterLink>
              <FooterLink><FaInstagram /></FooterLink>
            </SocialIcons>
          </Coluna>

          <Direitos>
            <Logo src="/img/new_logo.jpg" alt="BeYou Logo" />
            <Texto>© 2025 BeYou. Todos os direitos reservados.</Texto>
            <Texto>CNPJ 00.000.000/0000-00 / Endereço fictício - Cidade/Estado - CEP 00000-000</Texto>
          </Direitos>

          <Links>
            <FooterLink>Termos e Condições de Uso</FooterLink> |{" "}
            <FooterLink>Código de Conduta</FooterLink> |{" "}
            <FooterLink>Privacidade</FooterLink> |{" "}
            <FooterLink>Dicas de Segurança</FooterLink>
          </Links>
        </ConteudoFooter>
      </Footer>
    </Background>
  );
}

export default Inicial;
