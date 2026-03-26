import { useState } from "react";

const NAVY="#2B4A8B",NAVY_D="#1e3566",NAVY_L="#3a5da8",WHITE="#ffffff",OFF="#f4f6fb",BORDER="#dde4f0",TEXT="#1a2540",SUB="#6b7a99";

function AeroVooLogo({height=44,darkBg=true}){
  return darkBg
    ? <img src="/logo.png" alt="AeroVoo" style={{height,width:"auto",display:"block",objectFit:"contain"}}/>
    : <img src="/logo-dark.png" alt="AeroVoo" style={{height,width:"auto",display:"block",objectFit:"contain"}}/>;
}

const T={
  flight:  {bg:"#eaf0fb",dot:NAVY,     label:"VOO"},
  transfer:{bg:"#f0ebfb",dot:"#6b3db5",label:"TRANSFER"},
  hotel:   {bg:"#eafaf4",dot:"#0e7a5f",label:"HOTEL"},
  activity:{bg:"#fff8ec",dot:"#c47c1a",label:"ATIVIDADE"},
  food:    {bg:"#fef2f2",dot:"#dc2626",label:"RESTAURANTE"},
  train:   {bg:"#f0f9ff",dot:"#0284c7",label:"TREM"},
};

const GUIDES={
  international:{
    title:"Guia da Viagem Internacional",icon:"🌍",color:NAVY,
    subtitle:"POR GABRIELLE · FUNDADORA AEROVOO",
    sections:[
      {heading:"🏠 Em Casa — Antes de Embarcar",tips:[
        "Passaporte com validade mínima de 6 meses além da data de retorno.",
        "Solicite vistos com antecedência: EUA, Canadá, Japão, Inglaterra. Para o Reino Unido, o ETA é obrigatório e pode ser solicitado online.",
        "Confirme vacinas no site da Anvisa. Conexões no Panamá ou Colômbia exigem certificado de febre amarela.",
        "Contrate seguro viagem e guarde a apólice + contatos de emergência.",
        "Baixe o app da companhia aérea para acompanhar seus voos.",
      ]},
      {heading:"💳 Dicas Práticas",tips:[
        "Moeda: use Wise, Nomad ou C6/Inter para câmbio mais barato.",
        "Sala VIP: verifique elegibilidade por cartão de crédito ou milhas.",
        "Apps úteis: Google Translate, Maps, TripIt, XE, Uber.",
        "Melhor app para metrô: CityMapper — favorito da AeroVoo!",
        "Para segurança: leve as reservas de hotéis impressas também.",
      ]},
      {heading:"✅ Checklist — Documentos",tips:[
        "Passaporte com validade + Visto (se necessário)",
        "Seguro viagem com apólice salva",
        "Vacinas exigidas + certificado internacional",
        "Comprovantes financeiros",
        "Contato da AeroVoo e do consulado brasileiro",
      ]},
      {heading:"🧳 Mala Inteligente",tips:[
        "Roupas de acordo com o clima do destino",
        "Medicamentos pessoais + receitas médicas",
        "Eletrônicos com carregadores + adaptador universal",
        "Itens essenciais na bagagem de mão (em caso de extravio)",
        "Cópias físicas e digitais dos documentos",
      ]},
      {heading:"💧 Líquidos na Bagagem de Mão",tips:[
        "Cada frasco: máximo 100ml. Total: 1 litro por passageiro (~10 frascos).",
        "Todos em saco plástico transparente tipo ziploc, fora da mala no raio-X.",
        "Inclui: cremes, géis, sprays, perfumes, shampoos, maquiagem líquida.",
        "Frascos maiores que 100ml, mesmo parcialmente cheios, serão descartados.",
        "Exceções: medicamentos com receita, alimentos de bebê — apresentar separado.",
        "Dica AeroVoo: líquidos maiores vão na despachada. Lacre bem!",
      ]},
      {heading:"✈️ No Aeroporto",tips:[
        "Fique atento aos telões: portão, status do voo e esteiras de bagagem.",
        "Não use fones continuamente — autofalantes notificam mudanças importantes.",
        "Tenha na bagagem de mão: remédios, uma muda de roupa, carregador, documentos.",
        "Faça check-in online → totens ou app → cartão digital ou impresso.",
      ]},
      {heading:"🚨 Problemas — Aja na Hora!",tips:[
        "Mala danificada/extraviada: fotografe → abra PIR no balcão ANTES de sair da área de bagagens.",
        "Voo atrasado/cancelado: vá IMEDIATAMENTE ao balcão → exija reacomodação, alimentação ou reembolso.",
        "Nunca tente resolver com a companhia depois de sair do aeroporto.",
        "Guarde todos os comprovantes: bilhetes, e-mails, recibos de gastos extras.",
        "Acione o suporte AeroVoo via WhatsApp para orientação com nossos advogados.",
      ]},
      {heading:"⚖️ Seus Direitos (ANAC + CDC)",tips:[
        "+1h de atraso: comunicação gratuita (internet, telefone).",
        "+2h de atraso: alimentação (voucher, refeição ou lanche).",
        "+4h de atraso: hospedagem (se necessário) + transporte ao hotel.",
        "Voo cancelado ou overbooking: reacomodação, reembolso integral ou outro meio.",
        "Guarde comprovantes de gastos extras — base para indenização.",
      ]},
      {heading:"🌍 Bagagem em Conexões",tips:[
        "Voltando ao Brasil: retire a bagagem para fiscalização alfandegária.",
        "Brasil → EUA: retire no primeiro pouso americano para imigração, depois redespacha.",
        "Brasil → Europa via Schengen: bagagem geralmente segue automática até o destino final.",
        "Passando pelo Reino Unido: regras podem variar — confirme sempre no check-in.",
      ]},
    ],
  },
  disney:{
    title:"Guia Mágico · Disney & Universal",icon:"🏰",color:"#1a2d8a",
    subtitle:"ORLANDO · PARQUES · DICAS EXCLUSIVAS",
    sections:[
      {heading:"📱 Apps — Instale Antes de Embarcar!",tips:[
        "My Disney Experience — mapas, Lightning Lane e reservas de restaurantes.",
        "Universal Orlando Resort App — filas, mapas e reservas.",
        "Crie todos os cadastros ANTES de embarcar.",
      ]},
      {heading:"🏰 Parques Disney",tips:[
        "Magic Kingdom: chegue no rope drop. TRON Lightcycle Run, Seven Dwarfs Mine Train, Space Mountain.",
        "EPCOT: Guardians Cosmic Rewind (Single Pass), Soarin', Remy's Ratatouille. Show: Luminous.",
        "Hollywood Studios: Rise of the Resistance, Slinky Dog Dash. Reserve Fantasmic! antes.",
        "Animal Kingdom: vá direto pra Pandora ao abrir. Safari é melhor pela manhã.",
      ]},
      {heading:"🌐 Universal Orlando",tips:[
        "Universal Studios: Harry Potter Escape from Gringotts, Transformers.",
        "Islands of Adventure: Hagrid's Motorbike, VelociCoaster, Hulk Coaster.",
        "Epic Universe (2025): Super Nintendo World, Ministério da Magia.",
        "Express Pass incluso nos hotéis: Hard Rock, Royal Pacific e Portofino Bay.",
      ]},
      {heading:"⚡ Lightning Lane — Fura-Fila Disney",tips:[
        "Single Pass: 1 atração · US$10–25. Use em TRON, Guardians, Avatar.",
        "Multi Pass: 3 atrações/dia · US$25–35. Ótimo para Magic Kingdom e HS.",
        "Premier Pass: ilimitado · até US$449. Ideal pra quem tem 1 dia apenas.",
        "Reserve cedo — horários abrem de madrugada no My Disney Experience.",
      ]},
      {heading:"🍽️ Alimentação",tips:[
        "Reserve restaurantes Disney com até 60 dias de antecedência.",
        "Use Mobile Order no app para evitar filas nos Quick Service.",
        "Pode entrar com snacks e garrafinhas de água.",
        "Snacks obrigatórios: Dole Whip, Turkey Leg, Mickey Bar, Blue Milk, Butterbeer.",
        "Água grátis em qualquer quiosque que venda refrigerante.",
      ]},
      {heading:"🌤️ Clima e Dicas Gerais",tips:[
        "Calor úmido com chuvas rápidas — leve capa de chuva compacta.",
        "Tênis confortável: prepare-se para caminhar até 20km/dia.",
        "Powerbank indispensável — os apps consomem muita bateria.",
        "Melhor época: jan–mar, maio, final ago–out, 1ª quinzena novembro.",
        "Leve mala extra para as compras!",
      ]},
    ],
  },
};

function GuideModal({guide,onClose}){
  return(
    <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:100,background:"rgba(10,20,50,0.65)",display:"flex",alignItems:"flex-end",justifyContent:"center",animation:"fadeIn .2s ease"}}>
      <div onClick={e=>e.stopPropagation()} style={{background:WHITE,borderRadius:"26px 26px 0 0",width:"100%",maxWidth:430,maxHeight:"88vh",overflowY:"auto",paddingBottom:48,animation:"slideUp .3s ease"}}>
        <div style={{background:`linear-gradient(140deg,${guide.color}f0,${guide.color})`,borderRadius:"26px 26px 0 0",padding:"26px 22px 20px",position:"relative"}}>
          <button onClick={onClose} style={{position:"absolute",top:14,right:14,background:"rgba(255,255,255,0.2)",border:"none",color:WHITE,borderRadius:"50%",width:32,height:32,fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}}>✕</button>
          <div style={{fontSize:36,marginBottom:8}}>{guide.icon}</div>
          <div style={{color:WHITE,fontSize:19,fontWeight:800}}>{guide.title}</div>
          <div style={{color:"rgba(255,255,255,0.55)",fontSize:10,marginTop:3,fontFamily:"monospace",letterSpacing:1.5}}>{guide.subtitle}</div>
        </div>
        <div style={{padding:"18px 18px 0"}}>
          {guide.sections.map((sec,si)=>(
            <div key={si} style={{marginBottom:20}}>
              <div style={{fontSize:13,fontWeight:800,color:guide.color,marginBottom:10}}>{sec.heading}</div>
              {sec.tips.map((tip,ti)=>(
                <div key={ti} style={{display:"flex",gap:10,marginBottom:8,background:OFF,borderRadius:12,padding:"10px 12px",borderLeft:`3px solid ${guide.color}55`}}>
                  <div style={{color:guide.color,fontWeight:800,fontSize:14,flexShrink:0,marginTop:1}}>›</div>
                  <div style={{fontSize:12.5,color:TEXT,lineHeight:1.6}}>{tip}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TimelineItem({item,isLast}){
  const c=T[item.type]||T.activity;
  return(
    <div style={{display:"flex",gap:8,marginBottom:isLast?0:8,animation:"fadeIn .25s ease"}}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",width:16,flexShrink:0}}>
        <div style={{width:10,height:10,borderRadius:"50%",background:c.dot,marginTop:14,flexShrink:0}}/>
        {!isLast&&<div style={{width:2,flex:1,background:BORDER,marginTop:4}}/>}
      </div>
      <div style={{flex:1,background:c.bg,borderRadius:13,padding:"11px 13px",border:`1px solid ${c.dot}22`}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div style={{flex:1,minWidth:0}}>
            <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:4}}>
              <span style={{fontSize:14}}>{item.icon}</span>
              <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:1.5,color:c.dot,fontWeight:800}}>{c.label}</span>
            </div>
            <div style={{fontSize:13,fontWeight:700,color:TEXT,lineHeight:1.3}}>{item.title}</div>
            {item.sub&&<div style={{fontSize:11.5,color:SUB,marginTop:3,lineHeight:1.4}}>{item.sub}</div>}
            {item.detail&&<div style={{fontSize:11,color:"#8a94ab",marginTop:6,paddingTop:6,borderTop:`1px solid ${c.dot}1a`,lineHeight:1.5}}>{item.detail}</div>}
          </div>
          {item.time&&<div style={{fontSize:11,color:SUB,fontFamily:"monospace",marginLeft:8,marginTop:2,flexShrink:0}}>{item.time}</div>}
        </div>
      </div>
    </div>
  );
}

const trip={
  clientName:"Família Oliveira",destination:"Milão · Florença · Roma",
  emoji:"🇮🇹",dates:"28 Mar – 04 Abr 2026",code:"AV-2026-IT01",isDisney:false,
  days:[
    {date:"28 Mar",weekday:"Sábado",city:"✈ Fortaleza → Milão",items:[
      {type:"flight",time:"23:15",title:"Voo FOR → LIS · TAP Air Portugal",sub:"Voo 36 · C7TA8A · Executiva",detail:"Pinto Martins → Portela · 7h10",icon:"✈️"},
      {type:"flight",time:"13:10",title:"Conexão LIS → MXP · TAP",sub:"Voo 826 · C7TA8A · Executiva",detail:"Espera 3h45 · 2h45 · Chegada 16:55",icon:"✈️"},
      {type:"transfer",time:"17:30",title:"Transfer · Malpensa → Hotel",sub:"Duração ~1h10",detail:"Previsão chegada: ~19h",icon:"🚐"},
      {type:"hotel",time:"19:00",title:"Check-in · The Square Milano Duomo",sub:"Via Alberico Albricci, 2-4 · 28–30/03",detail:"Quarto Duplo Exclusivo · Taxa ~€40 · Caução ~€100",icon:"🏨"},
      {type:"food",time:"19:30",title:"Jantar · The Roof Milano",sub:"Terraço do hotel · Vista panorâmica",detail:"Culinária italiana e mediterrânea.",icon:"🍽️"},
    ]},
    {date:"29 Mar",weekday:"Domingo",city:"🏙 Milão",items:[
      {type:"activity",time:"09:00",title:"Café da manhã no hotel",sub:"",detail:"",icon:"☕"},
      {type:"activity",time:"10:00",title:"Duomo di Milano + Galleria V. Emanuele II",sub:"Visita externa · Subida ao terraço opcional",detail:"Café histórico na Galleria",icon:"⛪"},
      {type:"activity",time:"11:30",title:"Quadrilátero da Moda",sub:"Via Montenapoleone e Via della Spiga",detail:"Lojas emblemáticas",icon:"🛍️"},
      {type:"food",time:"13:00",title:"Almoço · 10_11 Portrait",sub:"Via Sant'Andrea, 10 · +39 345 7279634",detail:"",icon:"🍽️"},
      {type:"activity",time:"16:00",title:"Bairro de Brera",sub:"Boutiques, galerias e cafés",detail:"Aperitivo ao anoitecer",icon:"🌇"},
      {type:"food",time:"19:00",title:"Jantar · Restaurante Maio",sub:"Piazza Del Duomo – La Rinascente 7º",detail:"⚠️ Cancelamento <24h: €25/pessoa. Avise 30h antes.",icon:"🍽️"},
    ]},
    {date:"30 Mar",weekday:"Segunda",city:"🚄 Milão → Florença",items:[
      {type:"transfer",time:"11:00",title:"Transfer · The Square → Milano Centrale",sub:"",detail:"",icon:"🚐"},
      {type:"train",time:"12:40",title:"Trem · Italo 9935 · Prima Business",sub:"Milano Centrale → Firenze S.M. Novella",detail:"1h55 · Chegada 14:35 · Wi-Fi e lanches",icon:"🚄"},
      {type:"hotel",time:"15:30",title:"Check-in · Hotel L'Orologio Firenze",sub:"Piazza S.M. Novella, 24 · 30/03–01/04",detail:"Quarto Duplo Superior · Taxa ~€30 · Academia e sauna 24h",icon:"🏨"},
      {type:"activity",time:"16:30",title:"Caminhada por Florença",sub:"Piazza S.M. Novella → Duomo",detail:"Ruas históricas, cafés e gelaterias",icon:"🗺️"},
      {type:"food",time:"19:00",title:"Jantar · Cosimo Rooftop Restaurant",sub:"Pôr do sol · Reserva na área interna",detail:"⚠️ Cancelamento <24h: €100/pessoa",icon:"🍽️"},
    ]},
    {date:"31 Mar",weekday:"Terça",city:"🎨 Florença",items:[
      {type:"activity",time:"10:30",title:"Cattedrale di Santa Maria del Fiore",sub:"⚠️ 10min antes · Passaporte obrigatório",detail:"Cúpula 463 degraus · Sem mochilas",icon:"⛪"},
      {type:"activity",time:"15:00",title:"Galleria degli Uffizi",sub:"⚠️ Portão nº 1 · 15min antes · Passaporte",detail:"Uma das maiores coleções de arte do mundo",icon:"🖼️"},
      {type:"activity",time:"16:30",title:"Ponte Vecchio + Piazza della Signoria",sub:"Joalherias históricas · Palazzo Vecchio",detail:"",icon:"🌉"},
      {type:"activity",time:"18:30",title:"Piazzale Michelangelo · Pôr do sol",sub:"Vista mais famosa de Florença · Táxi",detail:"",icon:"🌅"},
      {type:"food",time:"20:00",title:"Jantar · A definir",sub:"Enoteca Pinchiorri (3★) ou La Giostra",detail:"Reserva essencial",icon:"🍽️"},
    ]},
    {date:"01 Abr",weekday:"Quarta",city:"🚄 Florença → Roma",items:[
      {type:"train",time:"12:28",title:"Trem · Italo 8902 · Prima Business",sub:"Firenze S.M. Novella → Roma Termini",detail:"1h37 · Chegada 14:05",icon:"🚄"},
      {type:"transfer",time:"14:05",title:"Transfer · Roma Termini → Singer Palace",sub:"Transfer 3",detail:"",icon:"🚐"},
      {type:"hotel",time:"15:00",title:"Check-in · Singer Palace Hotel Roma",sub:"Via Alessandro Specchi, 10 · 01–04/04",detail:"Michelin Key 5★ · Taxa ~€80 · Caução ~€100",icon:"🏨"},
      {type:"activity",time:"16:00",title:"Doria Center Gym & Spa · Cortesia",sub:"Vicolo Doria, 1b · 250m do hotel",detail:"Academia: seg–sex 7h–22h · Spa: 7h30–21h30",icon:"💪"},
      {type:"food",time:"19:30",title:"Jantar · Restaurante Singer Palace",sub:"Cobertura do hotel · Tolerância 20min",detail:"",icon:"🍽️"},
    ]},
    {date:"02 Abr",weekday:"Quinta",city:"🏛 Roma",items:[
      {type:"activity",time:"09:30",title:"Fontana di Trevi · Via del Corso",sub:"Vá cedo — menos movimento",detail:"",icon:"⛲"},
      {type:"food",time:"12:00",title:"Almoço · Pierluigi ou Armando al Pantheon",sub:"Reserva essencial em ambos",detail:"",icon:"🍽️"},
      {type:"activity",time:"15:30",title:"Museus Vaticanos e Capela Sistina",sub:"⚠️ 10min antes · Passaporte · Viale Vaticano s/n",detail:"~3h · Não reembolsável",icon:"🏛️"},
      {type:"food",time:"19:30",title:"Jantar · Livre",sub:"Depende do ritmo no Vaticano",detail:"",icon:"🍴"},
    ]},
    {date:"03 Abr",weekday:"Sexta",city:"🏟 Roma",items:[
      {type:"activity",time:"09:30",title:"Coliseu + Fórum Romano + Palatino",sub:"⚠️ 10min antes · Passaporte · Sperone Valadier",detail:"~4h · Bilhete válido 2 dias · Não reembolsável",icon:"🏟️"},
      {type:"food",time:"13:00",title:"Almoço · Aroma Ristorante",sub:"Via Labicana, 125 — vista para o Coliseu",detail:"⚠️ Menu mín. €170/pessoa · Pré-autorização €360",icon:"🍽️"},
      {type:"food",time:"20:00",title:"Jantar · Pipero Roma ou La Terraza",sub:"Pipero: ⭐ Michelin · La Terraza: Hotel Eden",detail:"Reserva essencial. Cancelar com 24–48h",icon:"🍽️"},
    ]},
    {date:"04 Abr",weekday:"Sábado",city:"✈ Roma → Fortaleza",items:[
      {type:"activity",time:"08:00",title:"Check-out · Singer Palace Hotel",sub:"",detail:"",icon:"🧳"},
      {type:"transfer",time:"09:00",title:"Transfer · Singer Palace → Fiumicino T1",sub:"Transfer 4",detail:"",icon:"🚐"},
      {type:"flight",time:"13:35",title:"Voo FCO → LIS · TAP Air Portugal",sub:"Voo 833 · C7TA8A · Executiva",detail:"3h10 · Chegada Lisboa 15:45",icon:"✈️"},
      {type:"flight",time:"17:40",title:"Conexão LIS → FOR · TAP Air Portugal",sub:"Voo 35 · C7TA8A · Executiva",detail:"Espera 1h55 · 7h40 · Chegada FOR 21:20",icon:"✈️"},
    ]},
  ],
  documents:[
    {name:"Passagens TAP Air Portugal",tag:"PASSAGEM",icon:"🎫",color:NAVY},
    {name:"Voucher The Square Milano Duomo",tag:"VOUCHER",icon:"🏨",color:"#0e7a5f"},
    {name:"Voucher Hotel L'Orologio Firenze",tag:"VOUCHER",icon:"🏨",color:"#0e7a5f"},
    {name:"Voucher Singer Palace Roma",tag:"VOUCHER",icon:"🏨",color:"#0e7a5f"},
    {name:"Ingressos Duomo di Firenze",tag:"INGRESSO",icon:"🎟️",color:"#c47c1a"},
    {name:"Ingressos Galleria degli Uffizi",tag:"INGRESSO",icon:"🎟️",color:"#c47c1a"},
    {name:"Ingressos Museus Vaticanos",tag:"INGRESSO",icon:"🎟️",color:"#c47c1a"},
    {name:"Ingressos Coliseu + Fórum Romano",tag:"INGRESSO",icon:"🎟️",color:"#c47c1a"},
    {name:"Seguro Viagem",tag:"SEGURO",icon:"🛡️",color:"#6b3db5"},
    {name:"Transfers — Confirmações",tag:"TRANSFER",icon:"🚐",color:"#0284c7"},
  ],
};

export default function App(){
  const[tab,setTab]=useState("roteiro");
  const[openDay,setOpenDay]=useState(0);
  const[guide,setGuide]=useState(null);
  const cc=[NAVY,NAVY,"#0e7a5f","#0e7a5f","#dc2626","#dc2626","#dc2626",NAVY];
  const tabs=[{key:"roteiro",label:"Roteiro",icon:"📅"},{key:"docs",label:"Documentos",icon:"📁"},{key:"contato",label:"Contato",icon:"💬"}];

  return(
    <div style={{fontFamily:"'Nunito','Poppins',sans-serif",background:"#d8e0f0",minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"flex-start",padding:"24px 12px 40px"}}>
      {guide&&<GuideModal guide={GUIDES[guide]} onClose={()=>setGuide(null)}/>}
      <div style={{width:"100%",maxWidth:430,background:WHITE,borderRadius:36,boxShadow:"0 40px 100px rgba(43,74,139,0.25),0 2px 10px rgba(0,0,0,0.08)",overflow:"hidden",display:"flex",flexDirection:"column",minHeight:"92vh"}}>

        {/* HERO */}
        <div style={{background:`linear-gradient(160deg,${NAVY_D} 0%,${NAVY} 55%,${NAVY_L} 100%)`,position:"relative",overflow:"hidden",flexShrink:0}}>
          <div style={{position:"absolute",top:-60,right:-60,width:220,height:220,borderRadius:"50%",background:"rgba(255,255,255,0.04)",pointerEvents:"none"}}/>
          <div style={{position:"absolute",bottom:-40,left:-30,width:160,height:160,borderRadius:"50%",background:"rgba(255,255,255,0.03)",pointerEvents:"none"}}/>
          <div style={{display:"flex",flexDirection:"column",alignItems:"center",paddingTop:38,paddingBottom:24,borderBottom:"1px solid rgba(255,255,255,0.1)"}}>
            <AeroVooLogo height={52} darkBg={true}/>
            <div style={{color:"rgba(255,255,255,0.5)",fontSize:9.5,letterSpacing:4,marginTop:7,fontFamily:"monospace"}}>VIAGENS PERSONALIZADAS</div>
          </div>
          <div style={{padding:"20px 24px 26px"}}>
            <div style={{color:"rgba(255,255,255,0.45)",fontSize:9,fontFamily:"monospace",letterSpacing:3,marginBottom:6}}>BEM-VINDO(A)</div>
            <div style={{color:WHITE,fontSize:22,fontWeight:800,letterSpacing:-0.3,lineHeight:1.15,marginBottom:10}}>{trip.clientName}</div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:8}}>
              <span style={{fontSize:17}}>{trip.emoji}</span>
              <span style={{color:WHITE,fontSize:14,fontWeight:600}}>{trip.destination}</span>
            </div>
            <div style={{display:"flex",alignItems:"center",gap:10}}>
              <div style={{color:"rgba(255,255,255,0.55)",fontSize:11,fontFamily:"monospace"}}>{trip.dates}</div>
              <div style={{background:"rgba(255,255,255,0.12)",border:"1px solid rgba(255,255,255,0.2)",borderRadius:6,padding:"3px 10px",color:"rgba(255,255,255,0.75)",fontSize:10,fontFamily:"monospace",letterSpacing:1}}>{trip.code}</div>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div style={{display:"flex",background:WHITE,borderBottom:`1px solid ${BORDER}`,flexShrink:0}}>
          {tabs.map(t=>(
            <button key={t.key} onClick={()=>setTab(t.key)} style={{flex:1,padding:"13px 6px 11px",background:"none",border:"none",borderBottom:tab===t.key?`2.5px solid ${NAVY}`:"2.5px solid transparent",color:tab===t.key?NAVY:SUB,fontSize:10,fontWeight:tab===t.key?800:500,cursor:"pointer",letterSpacing:1,fontFamily:"monospace",transition:"all .18s"}}>
              <div style={{fontSize:18,marginBottom:3}}>{t.icon}</div>
              {t.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div style={{flex:1,overflowY:"auto",padding:"16px 15px 40px",background:OFF}}>

          {tab==="roteiro"&&(
            <div>
              <div style={{display:"flex",gap:3,marginBottom:14}}>
                {trip.days.map((_,i)=>(
                  <div key={i} onClick={()=>setOpenDay(i)} style={{flex:1,height:4,borderRadius:2,background:openDay===i?cc[i]:`${cc[i]}33`,cursor:"pointer",transition:"all .2s"}}/>
                ))}
              </div>
              {trip.days.map((day,di)=>(
                <div key={di} style={{marginBottom:9}}>
                  <button onClick={()=>setOpenDay(openDay===di?-1:di)} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",background:openDay===di?cc[di]:WHITE,border:`1px solid ${openDay===di?cc[di]:BORDER}`,borderRadius:14,padding:"11px 14px",cursor:"pointer",transition:"all .2s",boxShadow:openDay===di?`0 4px 18px ${cc[di]}44`:"0 1px 4px rgba(0,0,0,0.04)"}}>
                    <div style={{display:"flex",alignItems:"center",gap:10}}>
                      <div style={{width:44,height:44,borderRadius:11,background:openDay===di?"rgba(255,255,255,0.15)":OFF,border:`1px solid ${openDay===di?"rgba(255,255,255,0.25)":BORDER}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <div style={{fontSize:15,fontWeight:800,color:openDay===di?WHITE:NAVY,lineHeight:1}}>{day.date.split(" ")[0]}</div>
                        <div style={{fontSize:9,color:openDay===di?"rgba(255,255,255,0.6)":SUB,fontFamily:"monospace"}}>{day.date.split(" ")[1].toUpperCase()}</div>
                      </div>
                      <div style={{textAlign:"left"}}>
                        <div style={{color:openDay===di?WHITE:TEXT,fontWeight:700,fontSize:13}}>Dia {di+1} · {day.weekday}</div>
                        <div style={{color:openDay===di?"rgba(255,255,255,0.7)":SUB,fontSize:11,marginTop:1}}>{day.city}</div>
                      </div>
                    </div>
                    <div style={{color:openDay===di?"rgba(255,255,255,0.7)":SUB,fontSize:24,transform:openDay===di?"rotate(90deg)":"none",transition:"transform .2s"}}>›</div>
                  </button>
                  {openDay===di&&(
                    <div style={{marginTop:8,paddingLeft:4}}>
                      {day.items.map((item,ii)=><TimelineItem key={ii} item={item} isLast={ii===day.items.length-1}/>)}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {tab==="docs"&&(
            <div>
              <div style={{fontSize:10,color:SUB,fontFamily:"monospace",letterSpacing:2,marginBottom:10}}>GUIAS DE VIAGEM</div>
              <button onClick={()=>setGuide("international")} style={{width:"100%",display:"flex",alignItems:"center",gap:14,background:`linear-gradient(130deg,${NAVY_D},${NAVY_L})`,border:"none",borderRadius:15,padding:"16px 18px",cursor:"pointer",marginBottom:8,boxShadow:`0 4px 18px ${NAVY}44`}}>
                <div style={{fontSize:28}}>🌍</div>
                <div style={{textAlign:"left",flex:1}}>
                  <div style={{color:WHITE,fontSize:13.5,fontWeight:700}}>Guia da Viagem Internacional</div>
                  <div style={{color:"rgba(255,255,255,0.6)",fontSize:11,marginTop:1}}>Documentos, malas, aeroporto e seus direitos</div>
                </div>
                <div style={{color:"rgba(255,255,255,0.5)",fontSize:22}}>›</div>
              </button>
              {trip.isDisney&&(
                <button onClick={()=>setGuide("disney")} style={{width:"100%",display:"flex",alignItems:"center",gap:14,background:"linear-gradient(130deg,#1a2d8a,#3a5da8)",border:"none",borderRadius:15,padding:"16px 18px",cursor:"pointer",marginBottom:8,boxShadow:"0 4px 18px #1a2d8a44"}}>
                  <div style={{fontSize:28}}>🏰</div>
                  <div style={{textAlign:"left",flex:1}}>
                    <div style={{color:WHITE,fontSize:13.5,fontWeight:700}}>Guia Mágico Disney & Universal</div>
                    <div style={{color:"rgba(255,255,255,0.6)",fontSize:11,marginTop:1}}>Parques, filas, restaurantes e segredos</div>
                  </div>
                  <div style={{color:"rgba(255,255,255,0.5)",fontSize:22}}>›</div>
                </button>
              )}
              <div style={{fontSize:10,color:SUB,fontFamily:"monospace",letterSpacing:2,margin:"16px 0 10px"}}>SEUS DOCUMENTOS</div>
              {trip.documents.map((doc,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:13,background:WHITE,borderRadius:13,padding:"13px 15px",marginBottom:8,border:`1px solid ${BORDER}`,cursor:"pointer"}}>
                  <div style={{fontSize:22}}>{doc.icon}</div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:13,fontWeight:600,color:TEXT}}>{doc.name}</div>
                    <div style={{display:"inline-block",marginTop:4,background:`${doc.color}15`,border:`1px solid ${doc.color}33`,color:doc.color,fontSize:9,fontFamily:"monospace",letterSpacing:1.5,borderRadius:5,padding:"2px 7px",fontWeight:700}}>{doc.tag}</div>
                  </div>
                  <div style={{background:NAVY,color:WHITE,borderRadius:9,padding:"6px 11px",fontSize:10,fontFamily:"monospace",letterSpacing:1,fontWeight:700}}>VER</div>
                </div>
              ))}
            </div>
          )}

          {tab==="contato"&&(
            <div>
              <div style={{background:`linear-gradient(140deg,${NAVY_D},${NAVY})`,borderRadius:18,padding:"22px",marginBottom:14,boxShadow:`0 8px 28px ${NAVY}44`}}>
                <div style={{fontSize:10,color:"rgba(255,255,255,0.4)",fontFamily:"monospace",letterSpacing:2,marginBottom:12}}>SUA CONSULTORA</div>
                <div style={{display:"flex",alignItems:"center",gap:13}}>
                  <div style={{width:52,height:52,borderRadius:"50%",background:"rgba(255,255,255,0.15)",border:"2px solid rgba(255,255,255,0.25)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,fontWeight:800,color:WHITE}}>G</div>
                  <div>
                    <div style={{fontSize:17,fontWeight:800,color:WHITE}}>Gabrielle</div>
                    <div style={{fontSize:11,color:"rgba(255,255,255,0.55)",marginTop:2}}>Fundadora · CEO AeroVoo Viagens</div>
                  </div>
                </div>
              </div>
              {[
                {icon:"📱",label:"WhatsApp",value:"+55 99163-7381",dot:"#25D366",sub:"Toque para abrir o WhatsApp"},
                {icon:"📧",label:"E-mail",value:"aerovoobr@gmail.com",dot:NAVY,sub:"Toque para enviar e-mail"},
                {icon:"📷",label:"Instagram",value:"@aerovoo",dot:"#e1306c",sub:"Siga para dicas de viagem!"},
                {icon:"🌐",label:"Site",value:"aerovoo.com.br",dot:"#0284c7",sub:"Conheça nossos pacotes"},
              ].map((c,i)=>(
                <div key={i} style={{display:"flex",alignItems:"center",gap:13,background:WHITE,borderRadius:13,padding:"14px 16px",marginBottom:8,border:`1px solid ${BORDER}`,cursor:"pointer"}}>
                  <div style={{fontSize:24}}>{c.icon}</div>
                  <div style={{flex:1}}>
                    <div style={{fontSize:10,color:SUB,fontFamily:"monospace",letterSpacing:1}}>{c.label}</div>
                    <div style={{fontSize:13.5,fontWeight:700,color:TEXT,marginTop:1}}>{c.value}</div>
                    <div style={{fontSize:11,color:SUB,marginTop:1}}>{c.sub}</div>
                  </div>
                  <div style={{width:36,height:36,borderRadius:"50%",background:c.dot,display:"flex",alignItems:"center",justifyContent:"center",color:WHITE,fontSize:18}}>›</div>
                </div>
              ))}
              <div style={{marginTop:10,background:"#f0ebfb",borderRadius:13,padding:"15px",border:"1px solid #d4b8f5"}}>
                <div style={{fontSize:10,color:"#6b3db5",fontFamily:"monospace",letterSpacing:1.5,marginBottom:6}}>🔑 CÓDIGO DA VIAGEM</div>
                <div style={{fontSize:16,fontWeight:800,color:"#6b3db5",fontFamily:"monospace",letterSpacing:2}}>{trip.code}</div>
                <div style={{fontSize:11,color:"#888",marginTop:4}}>Informe em qualquer contato com a AeroVoo</div>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div style={{background:WHITE,borderTop:`1px solid ${BORDER}`,padding:"12px 20px 20px",display:"flex",flexDirection:"column",alignItems:"center",gap:6,flexShrink:0}}>
          <AeroVooLogo height={30} darkBg={false}/>
          <div style={{fontSize:9,color:SUB,fontFamily:"monospace",letterSpacing:1.5}}>VIAGENS PERSONALIZADAS · © 2026</div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:none}}
        @keyframes slideUp{from{transform:translateY(40px);opacity:0}to{transform:none;opacity:1}}
      `}</style>
    </div>
  );
}
