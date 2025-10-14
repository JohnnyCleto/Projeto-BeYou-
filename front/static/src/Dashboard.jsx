import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Bell, LogOut } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
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
  Layout,
  ColunaCentral,
  GridInferior,
  Card,
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
  GlobalStyle
} from "./components/dashboardestrutura";

// ----- Estilos adicionais -----
const PerfilCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FotoPerfil = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #ffe4ec;
  border: 3px solid #6c4539;
  margin-bottom: 20px;
`;

const LinhaInfo = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
`;

const BotaoConfig = styled.button`
  background-color: #ff69b4;
  color: white;
  border: 2px solid #6c4539;
  border-radius: 15px;
  width: 350px;
  height: 70px;
  padding: 0 22px;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 8px;
  transition: 0.2s;

  &:hover {
    background-color: #ff1493;
    transform: scale(1.02);
  }
`;

const NotificacaoItem = styled.div`
  margin: 8px 0;
  padding: 12px;
  background-color: #ffe4ec;
  border: 1px solid #ff69b4;
  border-radius: 15px;
  font-size: 14px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const FilterContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  background-color: #ff69b4;
  border: 2px solid #6c4539;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #ff1493;
    transform: scale(1.05);
    transition: 0.2s;
  }
`;

const FilterPopup = styled.div`
  position: absolute;
  top: 45px;
  left: 0;
  background-color: #ffe4ec;
  border: 2px solid #ff69b4;
  border-radius: 15px;
  padding: 10px;
  min-width: 140px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  z-index: 10;
`;

const FilterOption = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: #ffb6d8;
  }
`;

// ----- Notificações filtráveis -----
function NotificacoesFiltraveis({ notificacoes }) {
  const [open, setOpen] = useState(false);
  const [filtro, setFiltro] = useState("Todos");
  const opcoes = ["Todos", "Vendas", "Mensagens", "Alertas"];

  const togglePopup = () => setOpen(!open);
  const selecionarFiltro = (opcao) => {
    setFiltro(opcao);
    setOpen(false);
  };

  const filtradas = notificacoes.filter((n) => {
    if (filtro === "Todos") return true;
    return n.tipo === filtro;
  });

  return (
    <div>
      <FilterContainer>
        <FilterButton onClick={togglePopup}>Filtrar: {filtro} ▼</FilterButton>
        {open && (
          <FilterPopup>
            {opcoes.map((opcao) => (
              <FilterOption key={opcao} onClick={() => selecionarFiltro(opcao)}>
                {opcao}
              </FilterOption>
            ))}
          </FilterPopup>
        )}
      </FilterContainer>
      {filtradas.length === 0 ? (
        <p style={{ textAlign: "center", color: "#999" }}>Nenhuma notificação encontrada.</p>
      ) : (
        filtradas.map((n) => (
          <NotificacaoItem key={n.id}>
            {n.emoji} {n.mensagem} <small style={{ marginLeft: "auto", color: "#666" }}>{n.data}</small>
          </NotificacaoItem>
        ))
      )}
    </div>
  );
}

// ----- Avaliações filtráveis -----
const AvaliacaoItem = styled.div`
  margin: 8px 0;
  padding: 12px;
  background-color: #fff0f5;
  border: 1px solid #ff69b4;
  border-radius: 15px;
  width: 350px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const FilterContainerAval = styled.div`
  position: relative;
  margin-bottom: 15px;
`;

const FilterButtonAval = styled.button`
  padding: 8px 16px;
  background-color: #ff69b4;
  border: 2px solid #6c4539;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  &:hover {
    background-color: #ff1493;
    transform: scale(1.05);
    transition: 0.2s;
  }
`;

const FilterPopupAval = styled.div`
  position: absolute;
  top: 45px;
  left: 0;
  background-color: #ffe4ec;
  border: 2px solid #ff69b4;
  border-radius: 15px;
  padding: 10px;
  min-width: 140px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  z-index: 10;
`;

const FilterOptionAval = styled.div`
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    background-color: #ffb6d8;
  }
`;

function AvaliacoesFiltraveis({ avaliacoes }) {
  const [open, setOpen] = useState(false);
  const [filtro, setFiltro] = useState("Todas");
  const opcoes = ["Todas", "⭐5", "⭐4", "⭐3", "⭐2", "⭐1"];

  const togglePopup = () => setOpen(!open);
  const selecionarFiltro = (opcao) => {
    setFiltro(opcao);
    setOpen(false);
  };

  const opcaoToNumber = (opcao) => Number(opcao.replace("⭐", ""));
  const filtradas = avaliacoes.filter((a) => {
    if (filtro === "Todas") return true;
    return a.nota === opcaoToNumber(filtro);
  });

  return (
    <div>
      <FilterContainerAval>
        <FilterButtonAval onClick={togglePopup}>Filtrar: {filtro} ▼</FilterButtonAval>
        {open && (
          <FilterPopupAval>
            {opcoes.map((opcao) => (
              <FilterOptionAval key={opcao} onClick={() => selecionarFiltro(opcao)}>
                {opcao}
              </FilterOptionAval>
            ))}
          </FilterPopupAval>
        )}
      </FilterContainerAval>

      {filtradas.length === 0 ? (
        <p style={{ textAlign: "center", color: "#999" }}>Nenhuma avaliação encontrada.</p>
      ) : (
        filtradas.map((a) => (
          <AvaliacaoItem key={a.id}>
            <strong>{a.cliente}:</strong> {a.comentario}
            <span style={{ marginTop: "6px", color: "#ffb400", fontSize: "16px" }}>
              {"⭐".repeat(a.nota)}{"☆".repeat(5 - a.nota)}
            </span>
          </AvaliacaoItem>
        ))
      )}
    </div>
  );
}


// ----- Dashboard -----
const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* permite quebrar linha se a tela for pequena */
  gap: 15px;
  margin-top: 10px;
`;

const EstatisticaCard = styled.div`
  flex: 1 1 200px; /* cresce e encolhe, mínimo 200px */
  background-color: #ffe4ec;
  border: 2px solid #ff69b4;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

function Dashboard() {
  const estatisticas = [
    { titulo: "Vendas Hoje", valor: "120" },
    { titulo: "Novos Clientes", valor: "35" },
    { titulo: "Pedidos Pendentes", valor: "8" },
    { titulo: "Faturamento Total", valor: "R$5.200" },
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <DashboardContainer>
        {estatisticas.map((e, index) => (
          <EstatisticaCard key={index}>
            <h3>{e.titulo}</h3>
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>{e.valor}</p>
          </EstatisticaCard>
        ))}
      </DashboardContainer>

      <h3 style={{ marginTop: "20px" }}>Vendas da Semana</h3>
      <div style={{ display: "flex", gap: "8px", alignItems: "flex-end", marginTop: "10px" }}>
        {[100, 80, 100, 90, 60, 120, 70].map((v, i) => (
          <div
            key={i}
            style={{
              height: `${v}px`,
              width: "30px",
              backgroundColor: "#ff69b4",
              borderRadius: "5px",
            }}
            title={`Dia ${i + 1}: ${v} vendas`}
          />
        ))}
      </div>
    </div>
  );
}

// ----- Componente Principal -----
function Inicial() {
  const navigate = useNavigate();

  const handleLogout = () => navigate("/bemvindo");
  const reloadPage = (event) => {
    event.preventDefault();
    navigate("/PaginaInicial");
  };

  const [notificacoes] = useState([
    { id: 1, tipo: "Vendas", mensagem: "Nova venda registrada no produto A", emoji: "🔔", data: "Hoje, 10:30" },
    { id: 2, tipo: "Mensagens", mensagem: "Cliente enviou mensagem sobre pedido #123", emoji: "💬", data: "Hoje, 09:45" },
    { id: 3, tipo: "Alertas", mensagem: "Estoque baixo: Produto X (apenas 5 unidades)", emoji: "⚠️", data: "Ontem, 18:20" },
    { id: 4, tipo: "Vendas", mensagem: "Venda recorrente de cliente fiel", emoji: "🎉", data: "Hoje, 11:15" },
    { id: 5, tipo: "Mensagens", mensagem: "Suporte precisa de aprovação em ticket", emoji: "📧", data: "Hoje, 08:00" },
    { id: 6, tipo: "Alertas", mensagem: "Atualização de sistema disponível", emoji: "🔄", data: "Ontem, 20:00" },
    { id: 7, tipo: "Vendas", mensagem: "Reembolso processado para pedido #456", emoji: "💰", data: "Hoje, 07:30" },
  ]);

  const [avaliacoes] = useState([
    { id: 1, cliente: "Cliente 1", nota: 4, comentario: "Ótimo atendimento, super recomendo!" },
    { id: 2, cliente: "Cliente 2", nota: 5, comentario: "Excelente profissional, adorei o resultado." },
    { id: 3, cliente: "Cliente 3", nota: 3, comentario: "Bom serviço, mas o horário atrasou um pouco." },
    { id: 4, cliente: "Cliente 4", nota: 5, comentario: "Maravilhoso! Voltarei com certeza." },
    { id: 5, cliente: "Cliente 5", nota: 4, comentario: "Serviço ótimo e ambiente agradável." },
  ]);

  return (
    <Background>
      <GlobalStyle />

      {/* Header */}
      <Header>
        <LogoContainer>
          <ImgLogo onClick={reloadPage} src="/img/new_logo.jpg" alt="Logo" />
        </LogoContainer>

        <Menu>
          <MenuLink onClick={() => navigate("/PaginaInicial")}>Inicio</MenuLink>
          <MenuLink onClick={() => navigate("/Carrinho")}>Meu Carrinho</MenuLink>
          <MenuLink onClick={() => navigate("/Pesquisar")}>Pesquisar</MenuLink>
          <MenuLink onClick={() => navigate("/Agendamentos")}>Agendamentos</MenuLink>
          <MenuLink onClick={() => navigate("/FAvoritos_perfil")}>Favoritos</MenuLink>
        </Menu>

        <SearchBar type="text" placeholder="Busque por item ou loja" />

        <Icons>
          <Perfil>
            <PerfilLink onClick={() => navigate("/MeuPerfil")}><User className="icone" /></PerfilLink>
          </Perfil>
          <Noticacao>
            <NoticacaoLink onClick={() => navigate("/notificacoes_perfil")}><Bell className="icone" /></NoticacaoLink>
          </Noticacao>
          <Sair>
            <BotaoSair onClick={handleLogout}><LogOut className="icone" /></BotaoSair>
          </Sair>
        </Icons>
      </Header>

      {/* DASHBOARD */}
      <Layout>
        {/* Notificações */}
        <Card>
          <h2>Notificações ({notificacoes.length})</h2>
          <NotificacoesFiltraveis notificacoes={notificacoes} />
        </Card>

        {/* Centro */}
        <ColunaCentral>
          {/* Dashboard */}
          <Card>
            <Dashboard />
          </Card>

          <GridInferior>
            {/* Avaliações */}
            <Card>
              <h2>Avaliações</h2>
              <AvaliacoesFiltraveis avaliacoes={avaliacoes} />
            </Card>

            {/* Configurações */}
            <Card>
              <h2>Configurações</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <BotaoConfig onClick={() => navigate("/conta-seguranca")}>Conta e Segurança</BotaoConfig>
                <BotaoConfig onClick={() => navigate("/privacidade")}>Privacidade</BotaoConfig>
                <BotaoConfig onClick={() => navigate("/promocoes-marketing")}>Promoções e Marketing</BotaoConfig>
                <BotaoConfig onClick={() => navigate("/config-notificacoes")}>Notificações</BotaoConfig>
                <BotaoConfig onClick={() => navigate("/pagamentos")}>Pagamentos</BotaoConfig>
              </div>
            </Card>
          </GridInferior>
        </ColunaCentral>

        {/* Perfil Proprietário */}
        <PerfilCard>
          <FotoPerfil />
          <LinhaInfo><strong>Nome da Loja:</strong> BeYou Store Exemplo</LinhaInfo>
          <LinhaInfo><strong>CNPJ:</strong> 00.000.000/0000-00</LinhaInfo>
          <LinhaInfo><strong>Telefone:</strong> (21) 99999-9999</LinhaInfo>
          <LinhaInfo><strong>Email:</strong> loja@beyou.com</LinhaInfo>
          <LinhaInfo><strong>Endereço:</strong> Rua Exemplo, 123 - Rio de Janeiro/RJ</LinhaInfo>
        </PerfilCard>
      </Layout>

      {/* Footer */}
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
            <FooterLink>Beyou Shop</FooterLink>
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
            <Texto>© Copyright 2025 - BeYou. Todos os direitos reservados.</Texto>
            <Texto>CNPJ 00.000.000/0000-00 / Endereço fictício - Cidade/Estado - CEP 00000-000</Texto>
          </Direitos>

          <Links>
            <FooterLink>Termos e Condições de Uso</FooterLink> | 
            <FooterLink>Código de Conduta</FooterLink> | 
            <FooterLink>Privacidade</FooterLink> | 
            <FooterLink>Dicas de Segurança</FooterLink>
          </Links>
        </ConteudoFooter>
      </Footer>
    </Background>
  );
}

export default Inicial;
