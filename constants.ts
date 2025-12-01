import { ShieldAlert, Scale, FileSpreadsheet, HandCoins, FileWarning, Gavel, TrendingDown, Phone, Search, Lightbulb, UserCheck } from "lucide-react";
import { ContactInfo, NavItem, ServiceItem } from "./types";

export const CONTACT_INFO: ContactInfo = {
  phone: "(55) 3231-3813",
  whatsapp: "(55) 99603-1144",
  email: "joaogustavodeazeredo@gmail.com",
  address: "Rua Riachuelo, nº 2273",
  city: "Rosário do Sul / RS"
};

export const WHATSAPP_MESSAGE = "Olá, encontrei seu contato pelo site e gostaria de saber mais sobre a assessoria tributária.";

export const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "#home" },
  { label: "O Escritório", href: "#about" },
  { label: "Atuação", href: "#services" },
  { label: "Como Funciona", href: "#methodology" },
  { label: "Contato", href: "#contact" },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "Defesa em Execução Fiscal",
    description: "Atuação técnica na Justiça Federal. Apoio jurídico, prescrição e defesa contra cobranças abusivas.",
    icon: Gavel
  },
  {
    title: "Transações e Parcelamentos",
    description: "Negociação de dívidas com redução de juros e multas. Parcelamentos de longo prazo para preservar seu caixa.",
    icon: FileSpreadsheet
  },
  {
    title: "Recuperação de Créditos",
    description: "Identificação de tributos pagos indevidamente e ajuizamento de ações para restituição ou compensação.",
    icon: HandCoins
  },
  {
    title: "Consultoria Tributária",
    description: "Planejamento e orientação preventiva para adequar sua empresa à legislação e reduzir riscos fiscais.",
    icon: Scale
  }
];

export const AUDIENCE_PROBLEMS = [
  {
    icon: FileWarning,
    title: "Notificação da Receita",
    text: "Recebeu aviso de cobrança e não sabe como proceder?"
  },
  {
    icon: ShieldAlert,
    title: "Execução Fiscal",
    text: "Processo judicial aberto contra sua empresa ou pessoa física?"
  },
  {
    icon: FileSpreadsheet,
    title: "Título Protestado",
    text: "Seu nome ou CNPJ está com restrições de crédito?"
  },
  {
    icon: TrendingDown,
    title: "Dívida Crescente",
    text: "Juros e multas tornando o débito impagável?"
  }
];

export const STEPS = [
  {
    id: 1,
    title: "Contato Inicial",
    description: "Você nos chama no WhatsApp ou telefone e relata o problema brevemente.",
    icon: Phone
  },
  {
    id: 2,
    title: "Análise do Caso",
    description: "Avaliamos a origem do débito, documentos e riscos imediatos.",
    icon: Search
  },
  {
    id: 3,
    title: "Estratégia",
    description: "Definimos o plano: defesa judicial, transação tributária ou parcelamento.",
    icon: Lightbulb
  },
  {
    id: 4,
    title: "Acompanhamento",
    description: "Você fica informado sobre cada etapa até a resolução do caso.",
    icon: UserCheck
  }
];

export const LAWYER_NAME = "João Gustavo de Azeredo";
export const OAB_NUMBER = "OAB-RS 35.604";