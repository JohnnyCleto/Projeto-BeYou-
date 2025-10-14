// gestao.js
import React, { useState, useMemo } from "react";
import {
  GlobalStyle,
  Background,
  Header,
  LogoContainer,
  ImgLogo,
  SearchBar,
  TopRow,
  PromoCard,
  Main,
  Panel,
  PanelHeader,
  PanelTitle,
  ItemRow,
  ItemThumb,
  ItemInfo,
  ItemActions,
  StatBadge,
  RightColumn,
  CalendarBox,
  AppointmentsBox,
  AppointmentItem,
  FloatingActions,
  FloatingButton,
  IconButton,
  Small,
  SmallFooter
} from "./components/gestaoestrutura";

import { FaTrash, FaEdit, FaHeart, FaCalendarAlt } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

/* Formata valores monetários */
function formatMoney(v) {
  return typeof v === "number" ? `R$ ${v.toFixed(2).replace(".", ",")}` : v;
}

/* Small inline editable text */
function InlineEdit({ value, onSave }) {
  const [editing, setEditing] = useState(false);
  const [tmp, setTmp] = useState(value);

  return editing ? (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <input
        value={tmp}
        onChange={(e) => setTmp(e.target.value)}
        style={{ padding: 6, borderRadius: 8, border: "1px solid #e0b6cf" }}
      />
      <button onClick={() => { setEditing(false); onSave(tmp); }} style={{ cursor: "pointer" }}>Salvar</button>
      <button onClick={() => { setTmp(value); setEditing(false); }} style={{ cursor: "pointer" }}>Cancelar</button>
    </div>
  ) : (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <strong>{value}</strong>
      <IconButton aria-label="edit" onClick={() => setEditing(true)}><FaEdit /></IconButton>
    </div>
  );
}

/* Mini calendário com seleção de datas */
function MiniCalendar({ year, month, onSelectDate, selectedDate }) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstWeekDay = new Date(year, month, 1).getDay(); // 0 Sun .. 6 Sat
  const weeks = [];
  let day = 1 - (firstWeekDay === 0 ? 6 : firstWeekDay - 1);

  while (day <= daysInMonth) {
    const week = [];
    for (let i = 0; i < 7; i++, day++) {
      if (day < 1 || day > daysInMonth) week.push(null);
      else week.push(day);
    }
    weeks.push(week);
  }

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6, fontSize: 12, color: "#7a5a5a", marginBottom: 6 }}>
        {["Mo","Tu","We","Th","Fr","Sa","Su"].map((d) => <div key={d} style={{ textAlign:"center" }}>{d}</div>)}
      </div>
      {weeks.map((week, wi) => (
        <div key={wi} style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 6 }}>
          {week.map((d, di) => {
            const isSelected = d && selectedDate && selectedDate.getDate() === d && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
            return (
              <div
                key={di}
                onClick={() => d && onSelectDate(new Date(year, month, d))}
                style={{
                  height: 28,
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: isSelected ? "#ffd9ea" : "transparent",
                  cursor: d ? "pointer" : "default",
                  color: d ? "#6c4539" : "#d8bfd0",
                  border: isSelected ? "1px solid rgba(108,69,57,0.12)" : "1px solid transparent"
                }}
              >
                {d || ""}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default function Gestao() {
  const [promocoes] = useState([
    { id: 1, title: "Promoção de Escova Progressiva", price: 100, img: "/img/promo_escova.jpg" },
    { id: 2, title: "Promoção de Unhas em Gel", price: 80, img: "/img/promo_unha.jpg" },
    { id: 3, title: "Promoção de Luzes + Hidratação", price: 720, img: "/img/promo_luzes.jpg" },
  ]);

  const [services, setServices] = useState([
    { id: 1, title: "Corte de cabelo Feminino", price: 50, likes: 579, views: 5120, bookings: 450, img: "/img/service_corte.jpg" },
    { id: 2, title: "Escova e Tratamento de Cabelo", price: 218, likes: 605, views: 3602, bookings: 375, img: "/img/service_escova.jpg" },
    { id: 3, title: "Unha em Gel", price: 120, likes: 351, views: 2730, bookings: 251, img: "/img/service_unha.jpg" },
    { id: 4, title: "Unha Pé e Mão", price: 60, likes: 520, views: 1980, bookings: 147, img: "/img/service_pe_mao.jpg" },
  ]);

  const [products, setProducts] = useState([
    { id: 1, title: "Kit Capilar Eudora", price: 150, likes: 525, views: 3143, bookings: 369, img: "/img/prod_kit.jpg" },
    { id: 2, title: "Creme de Pentear Elseve", price: 50, likes: 421, views: 2789, bookings: 258, img: "/img/prod_elseve.jpg" },
    { id: 3, title: "Creme de Pentear Salonline", price: 40, likes: 255, views: 1598, bookings: 210, img: "/img/prod_salonline.jpg" },
    { id: 4, title: "Creme Corporal Boticario", price: 50, likes: 201, views: 1100, bookings: 120, img: "/img/prod_boti.jpg" },
  ]);

  const [monthOffset, setMonthOffset] = useState(0);
  const baseDate = new Date();
  const calendarDate = new Date(baseDate.getFullYear(), baseDate.getMonth() + monthOffset, 1);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const [appointments, setAppointments] = useState([
    { id: 1, service: "Corte de Cabelo", date: new Date(), time: "15:00", status: "Pendente", customer: "Mariana" },
    { id: 2, service: "Unha da Mão", date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1), time: "10:00", status: "Pendente", customer: "Luciana" },
    { id: 3, service: "Coloração Capilar", date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 2), time: "16:00", status: "Pendente", customer: "Ana" },
    { id: 4, service: "Corte de Cabelo", date: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 3), time: "12:00", status: "Pendente", customer: "Pedro" },
  ]);

  // Funções de interação
  const handleLike = (type, id) => {
    const setter = type === "service" ? setServices : setProducts;
    const arr = type === "service" ? services : products;
    setter(arr.map(it => it.id === id ? { ...it, likes: it.likes + 1 } : it));
  };

  const handleEditTitle = (type, id, newTitle) => {
    const setter = type === "service" ? setServices : setProducts;
    const arr = type === "service" ? services : products;
    setter(arr.map(it => it.id === id ? { ...it, title: newTitle } : it));
  };

  const handleDelete = (type, id) => {
    if (!window.confirm("Deseja remover este item?")) return;
    if (type === "service") setServices(services.filter(s => s.id !== id));
    else setProducts(products.filter(p => p.id !== id));
  };

  const handleAdd = (type) => {
    const title = window.prompt(`Novo ${type === "service" ? "Serviço" : "Produto"} - nome:`);
    if (!title) return;
    const base = type === "service" ? services : products;
    const setter = type === "service" ? setServices : setProducts;
    const id = Math.max(0, ...base.map(b => b.id)) + 1;
    const newItem = { id, title, price: 50, likes: 0, views: 0, bookings: 0, img: "/img/placeholder.png" };
    setter([newItem, ...base]);
  };

  const prevMonth = () => setMonthOffset(m => m - 1);
  const nextMonth = () => setMonthOffset(m => m + 1);

  const handleSelectAppointment = (appt) => setSelectedAppointment(appt);

  const handleConfirmAppointment = (id) => {
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: "Confirmado" } : a));
    if (selectedAppointment && selectedAppointment.id === id) setSelectedAppointment({ ...selectedAppointment, status: "Confirmado" });
  };

  const handleRecusarAppointment = (id) => {
    if (!window.confirm("Recusar este agendamento?")) return;
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, status: "Recusado" } : a));
    if (selectedAppointment && selectedAppointment.id === id) setSelectedAppointment({ ...selectedAppointment, status: "Recusado" });
  };

  const handleRemarcarAppointment = (id) => {
    const newDateStr = window.prompt("Data nova (YYYY-MM-DD)");
    const newTime = window.prompt("Hora nova (HH:MM)");
    if (!newDateStr || !newTime) return;
    const nd = new Date(newDateStr + "T" + newTime + ":00");
    if (isNaN(nd.getTime())) { alert("Data inválida"); return; }
    setAppointments(prev => prev.map(a => a.id === id ? { ...a, date: nd, time: newTime, status: "Remarcado" } : a));
    if (selectedAppointment && selectedAppointment.id === id) setSelectedAppointment({ ...selectedAppointment, date: nd, time: newTime, status: "Remarcado" });
  };

  const renderShortDate = (d) => `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;

  return (
    <Background>
      <GlobalStyle/>

      <Header>
        <LogoContainer>
          <ImgLogo src="/img/new_logo.jpg" alt="BeYou" />
        </LogoContainer>

        <SearchBar placeholder="Busque por item ou loja" />

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", color: "#6c4539" }}>
            <FaCalendarAlt /> <Small>Gestão</Small>
          </div>
        </div>
      </Header>

      <TopRow>
        {promocoes.map(p => (
          <PromoCard key={p.id}>
            <img src={p.img} alt={p.title} style={{ width: 78, height: 64, objectFit: "cover", borderRadius: 8 }} />
            <div>
              <div style={{ fontWeight: 700, color: "#6c4539" }}>{p.title}</div>
              <div style={{ color: "#b55a77" }}>{formatMoney(p.price)}</div>
            </div>
          </PromoCard>
        ))}
      </TopRow>

      <Main>
        {/* Left: Services */}
        <div>
          <Panel>
            <PanelHeader>
              <PanelTitle>Gerenciamento de Serviços</PanelTitle>
              <button onClick={() => handleAdd("service")} style={{ background: "transparent", border: "none", cursor: "pointer" }}>
                <FiPlus /> Adicionar
              </button>
            </PanelHeader>

            {services.map(s => (
              <ItemRow key={s.id}>
                <ItemThumb src={s.img} alt={s.title} />
                <ItemInfo>
                  <InlineEdit value={s.title} onSave={(v) => handleEditTitle("service", s.id, v)} />
                  <Small>{formatMoney(s.price)}</Small>
                  <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                    <StatBadge title="Reservas">{s.bookings} <Small>reservas</Small></StatBadge>
                    <StatBadge title="Visualizações">{s.views} <Small>views</Small></StatBadge>
                    <StatBadge title="Curtidas">{s.likes} <Small>likes</Small></StatBadge>
                  </div>
                </ItemInfo>
                <ItemActions>
                  <IconButton onClick={() => handleLike("service", s.id)} title="Curtir"><FaHeart color="#ff69b4" /></IconButton>
                  <IconButton onClick={() => handleEditTitle("service", s.id, prompt("Renomear para:", s.title) || s.title)} title="Editar"><FaEdit /></IconButton>
                  <IconButton onClick={() => handleDelete("service", s.id)} title="Remover"><FaTrash /></IconButton>
                </ItemActions>
              </ItemRow>
            ))}
          </Panel>
        </div>

        {/* Middle: Products */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Panel>
            <PanelHeader>
              <PanelTitle>Gerenciamento de Produtos</PanelTitle>
              <button onClick={() => handleAdd("product")} style={{ background: "transparent", border: "none", cursor: "pointer" }}>
                <FiPlus /> Adicionar
              </button>
            </PanelHeader>

            {products.map(p => (
              <ItemRow key={p.id}>
                <ItemThumb src={p.img} alt={p.title} />
                <ItemInfo>
                  <InlineEdit value={p.title} onSave={(v) => handleEditTitle("product", p.id, v)} />
                  <Small>{formatMoney(p.price)}</Small>
                  <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                    <StatBadge title="Reservas">{p.bookings} <Small>reservas</Small></StatBadge>
                    <StatBadge title="Visualizações">{p.views} <Small>views</Small></StatBadge>
                    <StatBadge title="Curtidas">{p.likes} <Small>likes</Small></StatBadge>
                  </div>
                </ItemInfo>
                <ItemActions>
                  <IconButton onClick={() => handleLike("product", p.id)} title="Curtir"><FaHeart color="#ff69b4" /></IconButton>
                  <IconButton onClick={() => handleEditTitle("product", p.id, prompt("Renomear para:", p.title) || p.title)} title="Editar"><FaEdit /></IconButton>
                  <IconButton onClick={() => handleDelete("product", p.id)} title="Remover"><FaTrash /></IconButton>
                </ItemActions>
              </ItemRow>
            ))}
          </Panel>
        </div>

        {/* Right: Calendar + Appointments */}
        <RightColumn>
          <CalendarBox>
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <div style={{ fontWeight: 700, color: "#6c4539" }}>
                {calendarDate.toLocaleString("default", { month: "long" })} {calendarDate.getFullYear()}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={prevMonth} style={{ padding: 6, borderRadius: 8 }}>◀</button>
                <button onClick={nextMonth} style={{ padding: 6, borderRadius: 8 }}>▶</button>
              </div>
            </div>

            <MiniCalendar
              year={calendarDate.getFullYear()}
              month={calendarDate.getMonth()}
              selectedDate={selectedDate}
              onSelectDate={(d) => { setSelectedDate(d); setSelectedAppointment(null); }}
            />
          </CalendarBox>

          <AppointmentsBox>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontWeight: 700 }}>Agendamentos</div>
              <Small>{appointments.length} totais</Small>
            </div>

            <div style={{ marginTop: 10 }}>
              {appointments.length === 0 && <Small>Nenhum agendamento</Small>}
              {appointments.map(a => (
                <AppointmentItem key={a.id} onClick={() => handleSelectAppointment(a)} style={{ cursor: "pointer", borderColor: selectedAppointment && selectedAppointment.id === a.id ? "rgba(255,105,180,0.5)" : "transparent" }}>
                  <div><strong>{a.service}</strong></div>
                  <div>{renderShortDate(a.date)} - {a.time}</div>
                  <Small>{a.customer} | {a.status}</Small>
                </AppointmentItem>
              ))}
            </div>
          </AppointmentsBox>

          {/* Modal Popup */}
          {selectedAppointment && (
            <div style={{
              position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
              background: "rgba(0,0,0,0.3)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999
            }} onClick={() => setSelectedAppointment(null)}>
              <div style={{ background: "#fff", padding: 20, borderRadius: 12, minWidth: 320, position: "relative" }} onClick={e => e.stopPropagation()}>
                <div style={{ fontWeight: 700, marginBottom: 8 }}>{selectedAppointment.service}</div>
                <Small>{selectedAppointment.customer}</Small>
                <Small>{renderShortDate(selectedAppointment.date)} - {selectedAppointment.time}</Small>
                <Small>Status: {selectedAppointment.status}</Small>

                <div style={{ display: "flex", gap: 8, marginTop: 12, justifyContent: "flex-end" }}>
                  <button onClick={() => handleConfirmAppointment(selectedAppointment.id)}>Confirmar</button>
                  <button onClick={() => handleRecusarAppointment(selectedAppointment.id)}>Recusar</button>
                  <button onClick={() => handleRemarcarAppointment(selectedAppointment.id)}>Remarcar</button>
                  <button onClick={() => setSelectedAppointment(null)}>Fechar</button>
                </div>
              </div>
            </div>
          )}

        </RightColumn>
      </Main>
    </Background>
  );
}
