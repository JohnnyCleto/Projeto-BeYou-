import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Bell, LogOut } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaCheckCircle, FaBell } from "react-icons/fa";
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

    Title,
    PerfilContainer,
    ImgPerfilGrande,
    NomePerfil,
    IconeConteiner,
    Icones,
    IconeTexto, // 👈 novo componente de texto

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

    // Notificações
    NotificacoesContainer,
    FiltroNotificacoes,
    FiltroBotao,
    OpcoesFiltro,
    FiltroOpcao,
    ListaNotificacoes,
    NotificacaoItem,
    IconeNotificacao,
    MensagemNotificacao
} from "./components/meuperfilestrutura";

function MeuPerfil() {
    const navigate = useNavigate();

    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [filtro, setFiltro] = useState("todas");

    const notificacoes = [
        { icone: "/img/logo_bolsa.png", mensagem: "Sua compra foi efetuada com sucesso.", tipo: "nao-lidas" },
        { icone: "/img/logo_bolsa.png", mensagem: "Seu agendamento foi confirmado.", tipo: "lidas" },
        { icone: "/img/logo_bolsa.png", mensagem: "Nova promoção disponível na BeYou Shop.", tipo: "nao-lidas" },
    ];

    const [notificacoesState, setNotificacoesState] = useState(notificacoes);

    const alternarStatus = (index) => {
        const novasNotificacoes = [...notificacoesState];
        novasNotificacoes[index].tipo = novasNotificacoes[index].tipo === "lidas" ? "nao-lidas" : "lidas";
        setNotificacoesState(novasNotificacoes);
    };

    const filtrar = (tipo) => {
        setFiltro(tipo);
        setMostrarFiltros(false);
    };

    const handleLogout = () => {
        navigate("/bemvindo");
    };

    const reloadPage = (event) => {
        event.preventDefault();
        navigate("/PaginaInicial");
    };

    return (
        <Background>
            <GlobalStyle />
            <Header>
                <LogoContainer>
                    <ImgLogo onClick={reloadPage} src="/img/new_logo.jpg" alt="Logo" />
                </LogoContainer>

                <Menu>
                    <MenuLink onClick={() => navigate("/PaginaInicial")}>Inicio</MenuLink>
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
                        <NotificacoesContainer style={{ right: "30px", top: "120px", width: "300px" }}>
                            <FiltroNotificacoes>
                                <Title>Notificações</Title>
                                <FiltroBotao onClick={() => setMostrarFiltros(!mostrarFiltros)}>
                                    Filtrar
                                </FiltroBotao>
                                {mostrarFiltros && (
                                    <OpcoesFiltro>
                                        <FiltroOpcao onClick={() => filtrar("todas")}>Todas</FiltroOpcao>
                                        <FiltroOpcao onClick={() => filtrar("lidas")}>Lidas</FiltroOpcao>
                                        <FiltroOpcao onClick={() => filtrar("nao-lidas")}>Não Lidas</FiltroOpcao>
                                    </OpcoesFiltro>
                                )}
                            </FiltroNotificacoes>

                            <ListaNotificacoes>
                                {notificacoesState
                                    .filter((n) => {
                                        if (filtro === "todas") return true;
                                        if (filtro === "lidas") return n.tipo === "lidas";
                                        if (filtro === "nao-lidas") return n.tipo === "nao-lidas";
                                        return true;
                                    })
                                    .map((notif, index) => (
                                        <NotificacaoItem key={index}>
                                            <IconeNotificacao src={notif.icone} />
                                            <MensagemNotificacao>{notif.mensagem}</MensagemNotificacao>
                                            <span
                                                onClick={() => alternarStatus(index)}
                                                style={{ marginLeft: "auto", cursor: "pointer", fontSize: "18px" }}
                                                title={notif.tipo === "lidas" ? "Lida" : "Não lida"}
                                            >
                                                {notif.tipo === "lidas" ? (
                                                    <FaCheckCircle color="#6c4539" />
                                                ) : (
                                                    <FaBell color="#ff1493" />
                                                )}
                                            </span>
                                        </NotificacaoItem>
                                    ))}
                            </ListaNotificacoes>
                        </NotificacoesContainer>

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
                <PerfilContainer>
                    <ImgPerfilGrande src="/img/perfil_rosa.jpg" alt="Foto de perfil" />
                    <NomePerfil>Sara Pereira</NomePerfil>
                </PerfilContainer>

                {/* --- NOVA SEÇÃO DE BOTÕES DE PERFIL --- */}
                <Icones>
                    <IconeConteiner>
                        <IconeTexto href="/DadosPerfil">Dados do Perfil</IconeTexto>
                        <IconeTexto href="/TermosUso">Termos de Uso</IconeTexto>
                        <IconeTexto href="/AlterarSenha">Alterar Senha</IconeTexto>
                        <IconeTexto href="/ExcluirConta" $excluir>Excluir Conta</IconeTexto>
                    </IconeConteiner>
                </Icones>
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
                        <br />
                        <Texto>CNPJ 00.000.000/0000-00 / Endereço fictício - Cidade/Estado - CEP 00000-000</Texto>
                    </Direitos>

                    <Links>
                        <FooterLink>Termos e Condições de Uso</FooterLink> | 
                        <FooterLink>Codigo de Conduta</FooterLink> | 
                        <FooterLink>Privacidade</FooterLink> | 
                        <FooterLink>Dicas de Segurança</FooterLink>
                    </Links>
                </ConteudoFooter>
            </Footer>
        </Background>
    );
}

export default MeuPerfil;
