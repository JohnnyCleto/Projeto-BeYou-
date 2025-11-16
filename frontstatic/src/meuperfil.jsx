import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { User, Bell, LogOut, Camera } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaCheckCircle, FaBell } from "react-icons/fa";
import axios from "axios";
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
    IconeTexto,
    Footer,
    Footer as FooterComponent,
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
    Title as TituloOpcoes,
    Descricao,
    DadosContainer,
    Label,
    Input,
    TextArea,
    BotaoEnviar,
    BotaoExcluir
} from "./components/meuperfilestrutura"; // e dadosperfilestrutura

function MeuPerfil() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    // ----------------- ESTADOS -----------------
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [filtro, setFiltro] = useState("todas");
    const [userData, setUserData] = useState(null);
    const [imagemPerfil, setImagemPerfil] = useState("/img/perfil_rosa.jpg");
    const [novaImagem, setNovaImagem] = useState(null);

    const [menuVisible, setMenuVisible] = useState(false);
    const API_URL = "http://localhost:8000";

    const notificacoes = [
        { icone: "/img/logo_bolsa.png", mensagem: "Sua compra foi efetuada com sucesso.", tipo: "nao-lidas" },
        { icone: "/img/logo_bolsa.png", mensagem: "Seu agendamento foi confirmado.", tipo: "lidas" },
        { icone: "/img/logo_bolsa.png", mensagem: "Nova promoção disponível na BeYou Shop.", tipo: "nao-lidas" },
    ];
    const [notificacoesState, setNotificacoesState] = useState(notificacoes);

    // ----------------- FUNÇÕES -----------------
    const alternarStatus = (index) => {
        const novas = [...notificacoesState];
        novas[index].tipo = novas[index].tipo === "lidas" ? "nao-lidas" : "lidas";
        setNotificacoesState(novas);
    };

    const filtrar = (tipo) => {
        setFiltro(tipo);
        setMostrarFiltros(false);
    };

    const handleLogout = () => navigate("/bemvindo");
    const reloadPage = (event) => {
        event.preventDefault();
        navigate("/PaginaInicial");
    };
    const toggleMenu = () => setMenuVisible(!menuVisible);

    const abrirSeletorDeImagem = () => fileInputRef.current.click();

    // ----------------- FETCH USUÁRIO -----------------
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`${API_URL}/api/auth/me`);
                const usuario = res.data;

                if (usuario._id) usuario.id = usuario._id.$oid || usuario._id;

                if (usuario.criado_em || usuario.criadoEm) {
                    const data = usuario.criado_em || usuario.criadoEm;
                    usuario.criadoEm = new Date(data).toLocaleDateString("pt-BR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    });
                }

                if (usuario.imagem_url) {
                    setImagemPerfil(`${API_URL}${usuario.imagem_url}`);
                    localStorage.setItem("imagemPerfil", `${API_URL}${usuario.imagem_url}`);
                }

                setUserData(usuario);
            } catch (err) {
                console.error("⚠️ Erro ao carregar usuário:", err);
            }
        };
        fetchUser();
    }, []);

    // ----------------- UPLOAD IMAGEM -----------------
    const handleImagemChange = async (event) => {
        const file = event.target.files[0];
        if (!file || !userData?.id) return;

        setNovaImagem(file);
        const preview = URL.createObjectURL(file);
        setImagemPerfil(preview);

        const formData = new FormData();
        formData.append("imagem", file);

        try {
            const res = await axios.post(`${API_URL}/api/upload-imagem`, formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            const { url } = res.data;
            setImagemPerfil(`${API_URL}${url}`);
            localStorage.setItem("imagemPerfil", `${API_URL}${url}`);

            console.log("✅ Imagem de perfil atualizada com sucesso!");
        } catch (error) {
            console.error("❌ Erro no upload:", error);
            alert("Erro ao enviar imagem. Verifique o console.");
        }
    };

    useEffect(() => {
        const imgSalva = localStorage.getItem("imagemPerfil");
        if (imgSalva) setImagemPerfil(imgSalva);
    }, []);

    // ----------------- SEÇÕES DADOS -----------------
    const DadosPessoais = () => {
        const [visivel, setVisivel] = useState(false);
        return (
            <Opcoes>
                <TituloOpcoes onClick={() => setVisivel(!visivel)}>Dados Pessoais</TituloOpcoes>
                <Descricao visivel={visivel} onClick={(e) => e.stopPropagation()}>
                    <b>📝 Nome completo:</b> {userData?.nome || "Sky Oliveira da Silva"}<br />
                    <b>🌈 Nome social:</b> Sky<br />
                    <b>🎂 Data de nascimento:</b> 12/03/2005<br />
                    <b>🚺 Gênero:</b> Feminino<br /><br />
                    <b>🆔 CPF / CNPJ:</b> 123.456.789-00<br />
                    <b>🪪 RG:</b> 12.345.678-9<br />
                    <b>📸 Foto de perfil:</b> {imagemPerfil}
                </Descricao>
            </Opcoes>
        );
    };

    const Contato = () => {
        const [visivel, setVisivel] = useState(false);
        return (
            <Opcoes>
                <TituloOpcoes onClick={() => setVisivel(!visivel)}>Contato</TituloOpcoes>
                <Descricao visivel={visivel} onClick={(e) => e.stopPropagation()}>
                    <b>📧 E-mail principal:</b> {userData?.email || "usuaria@email.com"}<br />
                    <b>📨 E-mail alternativo:</b> usuaria.alternativo@email.com<br /><br />
                    <b>📱 Telefone celular:</b> {userData?.telefone || "(11) 91234-5678"}<br />
                    <b>☎ Telefone fixo:</b> (11) 3456-7890<br />
                    <b>💬 WhatsApp:</b> (11) 91234-5678
                </Descricao>
            </Opcoes>
        );
    };

    const Endereco = () => {
        const [visivel, setVisivel] = useState(false);
        return (
            <Opcoes>
                <TituloOpcoes onClick={() => setVisivel(!visivel)}>Endereço</TituloOpcoes>
                <Descricao visivel={visivel} onClick={(e) => e.stopPropagation()}>
                    <b>🏠 Endereço principal:</b> Rua das Flores, 123<br />
                    <b>📍 Múltiplos endereços:</b> Av. Central, 456 – Sala 7, Rua Secundária, 789<br />
                    <b>⭐ Endereço padrão:</b> Sim<br /><br />
                    <b>🔢 CEP:</b> 01234-567<br />
                    <b>🏙 Bairro:</b> Jardim das Rosas<br />
                    <b>🌆 Cidade:</b> São Paulo<br />
                    <b>🗺 Estado:</b> SP<br />
                    <b>🌍 País:</b> Brasil
                </Descricao>
            </Opcoes>
        );
    };

    const SegurancaEExclusao = () => {
        const [visivel, setVisivel] = useState(false);
        const [mostrarFormSenha, setMostrarFormSenha] = useState(false);
        return (
            <Opcoes>
                <TituloOpcoes onClick={() => setVisivel(!visivel)}>Segurança da Conta & Exclusão</TituloOpcoes>
                <Descricao visivel={visivel} onClick={(e) => e.stopPropagation()}>
                    {/* ALTERAR SENHA */}
                    <BotaoEnviar type="button" onClick={() => setMostrarFormSenha(!mostrarFormSenha)}>
                        🔒 Alterar senha
                    </BotaoEnviar>

                    {mostrarFormSenha && (
                        <>
                            <Label htmlFor="senhaAtual">Senha atual</Label>
                            <Input type="password" id="senhaAtual" name="senhaAtual" />
                            <Label htmlFor="novaSenha">Nova senha</Label>
                            <Input type="password" id="novaSenha" name="novaSenha" />
                            <Label htmlFor="confirmarSenha">Confirmar nova senha</Label>
                            <Input type="password" id="confirmarSenha" name="confirmarSenha" />
                            <BotaoEnviar type="submit">Salvar nova senha</BotaoEnviar>
                        </>
                    )}

                    <br />
                    <BotaoEnviar type="button">📧 Confirmar e-mail</BotaoEnviar><br />
                    <BotaoEnviar type="button">🔐 Ativar autenticação em dois fatores</BotaoEnviar><br /><br />
                    <b>📅 Histórico de login:</b> <em>último acesso em 10/04/2025</em><br />
                    <b>💻 Dispositivos conectados:</b> <em>2 dispositivos ativos</em>

                    <hr style={{ margin: "15px 0" }} />

                    {/* EXCLUSÃO DE CONTA */}
                    <p>🗑 Solicitação de exclusão de dados pessoais conforme a <b>LGPD</b>.</p><br />
                    <Label htmlFor="senhaConfirmacao">🔒 Confirme sua senha para continuar:</Label>
                    <Input type="password" id="senhaConfirmacao" name="senhaConfirmacao" /><br />
                    <Label htmlFor="motivoSaida">💬 Por que você está saindo?</Label>
                    <TextArea id="motivoSaida" name="motivoSaida" placeholder="Deixe seu feedback (opcional)" /><br />
                    <BotaoExcluir type="submit">🚨 Excluir minha conta</BotaoExcluir>
                </Descricao>
            </Opcoes>
        );
    };

    const TelaMeusDados = () => (
        <DadosContainer>
            <DadosPessoais />
            <Contato />
            <Endereco />
            <SegurancaEExclusao />
        </DadosContainer>
    );

    // ----------------- RENDER -----------------
    return (
        <Background>
            <GlobalStyle />
            <Header>
                <LogoContainer>
                    <ImgLogo onClick={reloadPage} src="/img/new_logo.jpg" alt="Logo" />
                </LogoContainer>

                <Menu>
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
                        <NotificacoesContainer style={{ right: "30px", top: "120px", width: "300px" }}>
                            <FiltroNotificacoes>
                                <Title>Notificações</Title>
                                <FiltroBotao onClick={() => setMostrarFiltros(!mostrarFiltros)}>Filtrar</FiltroBotao>
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
                                    .filter((n) => filtro === "todas" || n.tipo === filtro)
                                    .map((notif, i) => (
                                        <NotificacaoItem key={i}>
                                            <IconeNotificacao src={notif.icone} />
                                            <MensagemNotificacao>{notif.mensagem}</MensagemNotificacao>
                                            <span
                                                onClick={() => alternarStatus(i)}
                                                style={{ marginLeft: "auto", cursor: "pointer", fontSize: "18px" }}
                                                title={notif.tipo === "lidas" ? "Lida" : "Não lida"}
                                            >
                                                {notif.tipo === "lidas" ? <FaCheckCircle color="#6c4539" /> : <FaBell color="#ff1493" />}
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
                {/* PERFIL VISUAL + DADOS */}
                <PerfilContainer style={{ position: "relative" }}>
                    <ImgPerfilGrande
                        src={imagemPerfil}
                        alt="Foto de perfil"
                        style={{ cursor: "pointer", transition: "0.3s" }}
                        onClick={abrirSeletorDeImagem}
                    />
                    <div
                        onClick={abrirSeletorDeImagem}
                        style={{
                            position: "absolute",
                            bottom: "15px",
                            right: "15px",
                            backgroundColor: "rgba(0,0,0,0.6)",
                            borderRadius: "50%",
                            padding: "8px",
                            cursor: "pointer",
                        }}
                    >
                        <Camera size={22} color="white" />
                    </div>

                    <input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleImagemChange}
                        style={{ display: "none" }}
                    />

                    <NomePerfil>{userData ? userData.nome || "Usuário" : "Carregando..."}</NomePerfil>

                    {userData && (
                        <div style={{ marginTop: "10px", textAlign: "center", color: "#6c4539" }}>
                            <p><strong>Email:</strong> {userData.email || "Não informado"}</p>
                            <p><strong>Telefone:</strong> {userData.telefone || "Não informado"}</p>
                            <p><strong>Data de Cadastro:</strong> {userData.criadoEm || "Não disponível"}</p>
                        </div>
                    )}
                </PerfilContainer>

                {/* SEÇÕES DETALHADAS */}
                <TelaMeusDados />
            </main>

            <FooterComponent>
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
                        <FooterLink>Termos e Condições de Uso</FooterLink> | <FooterLink>Codigo de Conduta</FooterLink> | <FooterLink>Privacidade</FooterLink> | <FooterLink>Dicas de Segurança</FooterLink>
                    </Links>
                </ConteudoFooter>
            </FooterComponent>
        </Background>
    );
}

export default MeuPerfil;
