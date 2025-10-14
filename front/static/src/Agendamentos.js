import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Importação do axios
import { User, Bell, LogOut } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import "react-calendar/dist/Calendar.css";
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
  MainWrapper,
  DivSelectWrapper,
  NotifAgenda,
  Notifbut,
  Icons,
  Title,
  CustomCalendar,
  TitleHistorico,
  Historico,
  AgendamentoCard,
  AgendamentoInfo,
  Dot,
  Footer,
  ConteudoFooter,
  Coluna,
  SocialIcons,
  FooterLink,
  Links,
  Logo,
  Direitos,
  TitleFooter,
  Texto
} from "./components/agendamentosestrutura";

// URL base da sua API (exemplo)
const API_URL = "http://localhost:8000/api";

function Agendamento() {
  const navigate = useNavigate();
  const handleLogout = () => navigate("/bemvindo");
  const reloadPage = (event) => {
    event.preventDefault();
    navigate('/PaginaInicial');
  };

  // Estados
  const [agendamentos, setAgendamentos] = useState([]); // Histórico de agendamentos
  const [notifications, setNotifications] = useState({ hoje: [] }); // Agendamentos ativos (usado como "Notificações de Agendamento")
  const [date, setDate] = useState(new Date());
  const [horaAgendamento, setHoraAgendamento] = useState("");
  const [servicoSelecionado, setServicoSelecionado] = useState("");
  const [lojaSelecionada, setLojaSelecionada] = useState("");
  const [editandoId, setEditandoId] = useState(null);
  const [lojasPorServico, setLojasPorServico] = useState({}); // Lojas carregadas da API
  const [isLoading, setIsLoading] = useState(true);

  // --- Funções de API ---

  // 1. Carregar dados iniciais (Lojas/Serviços e Histórico)
  const fetchInitialData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Exemplo: Buscar mapeamento de serviços e lojas
      const lojasRes = await axios.get(`${API_URL}/servicos-lojas`);
      setLojasPorServico(lojasRes.data.lojasPorServico || {});

      // Exemplo: Buscar agendamentos ativos (para o calendário e lista de "hoje")
      const ativosRes = await axios.get(`${API_URL}/agendamentos/ativos`);
      setNotifications({ hoje: ativosRes.data.agendamentos || [] });

      // Exemplo: Buscar histórico de agendamentos
      const historicoRes = await axios.get(`${API_URL}/agendamentos/historico`);
      setAgendamentos(historicoRes.data.historico || []);

    } catch (error) {
      console.error("Erro ao carregar dados iniciais:", error);
      // Manter dados mockados ou mostrar erro
      alert("Erro ao carregar dados. Verifique o console.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);


  // 2. Função para AGENDAR / EDITAR
  const handleAgendar = async () => {
    if (!horaAgendamento || !servicoSelecionado || !lojaSelecionada) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
 
    const dataString = formatarData(date);
    
    // Verifica duplicidade (lógica mantida localmente para UX, mas a API deve validar)
    const existe = notifications.hoje.some((n) =>
      n.data === dataString && n.hora === horaAgendamento && n.id !== editandoId
    );
 
    if (existe) {
      alert("Você já tem um agendamento para este horário! Por favor, escolha outro horário.");
      return;
    }
 
    const dadosAgendamento = {
      data: dataString,
      hora: horaAgendamento,
      servico: servicoSelecionado,
      loja: lojaSelecionada,
      // outros campos necessários para a API, ex: userId
    };

    try {
        let response;
        if (editandoId) {
            // Requisição PUT para editar
            response = await axios.put(`${API_URL}/agendamentos/${editandoId}`, dadosAgendamento);
            alert("Agendamento atualizado com sucesso!");
        } else {
            // Requisição POST para novo agendamento
            response = await axios.post(`${API_URL}/agendamentos`, dadosAgendamento);
            alert("Agendamento confirmado!");
        }
        
        // Atualizar estado local com o novo/editado agendamento (idealmente o retorno da API)
        const agendamentoRetorno = response.data.agendamento || { 
            ...dadosAgendamento, 
            id: editandoId || response.data.newId || new Date().getTime(),
            tipo: "agendamento",
            icone: "🗓️",
            titulo: editandoId ? "Agendamento Atualizado" : "Agendamento Confirmado",
            text: `Seu horário para ${servicoSelecionado} foi agendado na ${lojaSelecionada} para ${new Date(dataString).toLocaleDateString()} às ${horaAgendamento}.`,
            lida: false,
        };

        setNotifications((prev) => {
            let atualizados = prev.hoje.filter((n) => n.id !== agendamentoRetorno.id);
            return { ...prev, hoje: [agendamentoRetorno, ...atualizados] };
        });

        setHoraAgendamento("");
        setServicoSelecionado("");
        setLojaSelecionada("");
        setEditandoId(null);

    } catch (error) {
        console.error("Erro ao agendar/editar:", error);
        alert(`Erro ao ${editandoId ? 'atualizar' : 'confirmar'} agendamento. Tente novamente.`);
    }
  };
 
  // 3. Função para CANCELAR
  const handleCancelar = async (id) => {
    if (window.confirm("Deseja cancelar este agendamento?")) {
      try {
        // Requisição DELETE
        await axios.delete(`${API_URL}/agendamentos/${id}`);
        
        // Atualizar estado local
        setNotifications((prev) => ({
          ...prev,
          hoje: prev.hoje.filter((n) => n.id !== id)
        }));
        alert("Agendamento cancelado com sucesso!");

      } catch (error) {
        console.error("Erro ao cancelar agendamento:", error);
        alert("Erro ao cancelar agendamento. Tente novamente.");
      }
    }
  };

  // --- Funções Auxiliares (mantidas) ---

  const gerarHoras = () => {
    const horas = [];
    for (let h = 8; h < 20; h++) {
      for (let m = 0; m < 60; m += 30) {
        horas.push(`${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`);
      }
    }
    return horas;
  };

  const disablePastDates = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const formatarData = (data) => data.toISOString().split("T")[0];

  const handleEditar = (id) => {
    const agendamento = notifications.hoje.find((n) => n.id === id);
    if (agendamento) {
      // Ajustar a data para o objeto Date
      setDate(new Date(agendamento.data)); 
      setHoraAgendamento(agendamento.hora);
      setServicoSelecionado(agendamento.servico);
      setLojaSelecionada(agendamento.loja);
      setEditandoId(id);
    }
  };

  const tileContent = ({ date }) => {
    const dateString = formatarData(date);
    return notifications.hoje.some((n) => n.data === dateString) ? <Dot /> : null;
  };

  if (isLoading) {
    return <Background><MainWrapper style={{textAlign: "center"}}>Carregando dados...</MainWrapper></Background>;
  }


  return (
    <Background>
      {/* Header (mantido) */}
      <Header>
        <LogoContainer>
          <ImgLogo onClick={reloadPage} src="/img/new_logo.jpg" alt="Logo" />
        </LogoContainer>
        <Menu>
          <MenuLink onClick={() => navigate("/PaginaInicial")}>Inicio</MenuLink>
          <MenuLink onClick={() => navigate("/Carrinho")}>Meu Carrinho</MenuLink>
          <MenuLink onClick={() => navigate("/Pesquisar")}>Pesquisar</MenuLink>
          <MenuLink onClick={() => navigate("/Agendamentos")}>**Agendamentos**</MenuLink>
          <MenuLink onClick={() => navigate("/FAvoritos_perfil")}>Favoritos</MenuLink>
        </Menu>
        <SearchBar type="text" placeholder="Busque por item ou loja" />
        <Icons>
          <Perfil><PerfilLink onClick={() => navigate("/MeuPerfil")}><User className="icone" /></PerfilLink></Perfil>
          <Noticacao><NoticacaoLink onClick={() => navigate("/notificacoes_perfil")}><Bell className="icone" /></NoticacaoLink></Noticacao>
          <Sair><BotaoSair onClick={handleLogout}><LogOut className="icone" /></BotaoSair></Sair>
        </Icons>
      </Header>

      {/* Conteúdo Principal (mantido, usando dados dinâmicos) */}
      <MainWrapper>
        <div style={{ textAlign: "center" }}>
          <Title>Agendar Serviço para {date.toLocaleDateString()}</Title>

          <CustomCalendar
            onChange={setDate}
            value={date}
            tileContent={tileContent}
            tileDisabled={({ date }) => disablePastDates(date)}
          />

          <DivSelectWrapper>
            <div>
              <h3>Selecione o horário desejado</h3>
              <select value={horaAgendamento} onChange={(e) => setHoraAgendamento(e.target.value)}>
                <option value="">Selecione</option>
                {gerarHoras().map((hora) => (
                  <option key={hora} value={hora}>{hora}</option>
                ))}
              </select>
            </div>

            <div>
              <h3>Selecione o serviço que precisa</h3>
              <select value={servicoSelecionado} onChange={(e) => {
                setServicoSelecionado(e.target.value);
                setLojaSelecionada("");
              }}>
                <option value="">Selecione</option>
                {Object.keys(lojasPorServico).map((serv) => (
                  <option key={serv} value={serv}>{serv}</option>
                ))}
              </select>
            </div>

            <div>
              <h3>Escolha sua unidade de atendimento</h3>
              <select value={lojaSelecionada} onChange={(e) => setLojaSelecionada(e.target.value)}>
                <option value="">Selecione</option>
                {servicoSelecionado && lojasPorServico[servicoSelecionado]?.map((loja) => (
                  <option key={loja} value={loja}>{loja}</option>
                ))}
              </select>
            </div>

            <h3>{editandoId ? "Atualizar Agendamento" : "Confirme seu agendamento"}</h3>
            <button onClick={handleAgendar}>
              {editandoId ? "Salvar Alterações" : "Confirmar Agendamento"}
            </button>
          </DivSelectWrapper>
        </div>

        {/* Notificações de Agendamento Ativo (usando `notifications.hoje`) */}
        <div>
          {notifications.hoje.length > 0 && <TitleHistorico>Agendamentos Ativos</TitleHistorico>}
          {notifications.hoje.map((notif) => (
            <NotifAgenda key={notif.id}>
              <p>{notif.icone} {notif.titulo}</p>
              <p>{notif.text}</p>
              {/* <p>{notif.time}</p> // 'time' não está sendo usado no objeto, mantido para estrutura */}
              <div>
                <Notifbut onClick={() => handleEditar(notif.id)}>Editar</Notifbut>
                <Notifbut onClick={() => handleCancelar(notif.id)}>Cancelar</Notifbut>
              </div>
            </NotifAgenda>
          ))}
        </div>


        <TitleHistorico>Histórico de agendamentos</TitleHistorico>
        <Historico>
          {agendamentos.map((item, index) => (
            <AgendamentoCard key={index}>
              <AgendamentoInfo><strong>Loja:</strong> {item.loja}</AgendamentoInfo>
              <AgendamentoInfo><strong>Serviço:</strong> {item.metodo || item.servico}</AgendamentoInfo>
              <AgendamentoInfo><strong>Data:</strong> {item.data}</AgendamentoInfo>
              <AgendamentoInfo><strong>Horário:</strong> {item.horario}</AgendamentoInfo>
              <AgendamentoInfo><strong>Endereço:</strong> {item.rua || 'N/A'}</AgendamentoInfo>
              <AgendamentoInfo><strong>Valor:</strong> {item.valor || 'N/A'}</AgendamentoInfo>
              <AgendamentoInfo>
                <strong>Avaliação:</strong>{" "}
                {"⭐".repeat(Math.round((item.avaliar || 0) / 20)) + "☆".repeat(5 - Math.round((item.avaliar || 0) / 20))}
              </AgendamentoInfo>
            </AgendamentoCard>
          ))}
        </Historico>

      </MainWrapper>

      {/* Rodapé (mantido) */}
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
            <FooterLink>Termos e Condições de Uso</FooterLink> | <FooterLink>Codigo de Conduta</FooterLink> | <FooterLink>Privacidade</FooterLink> | <FooterLink>Dicas de Segurança</FooterLink>
          </Links>
        </ConteudoFooter>
      </Footer>
    </Background>
  );
}

export default Agendamento;