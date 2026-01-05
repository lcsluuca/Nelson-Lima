
import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  UserCheck, 
  Clock, 
  Heart, 
  Star 
} from 'lucide-react';

export const EXPERT_DATA = {
  name: "Nelson Lima",
  role: "Sorrisos transformados com técnica e carinho.",
  specialties: [
    "Facetas em porcelana e resina",
    "Canal | Prótese | Coroas | Ponte fixa",
    "Implante"
  ],
  address: "Avenida Lima e Silva, 1611, Lagoa Nova, Natal RN, 59060-215, Brasil",
  whatsapp: "https://api.whatsapp.com/send/?phone=5584988959595&text=Olá%20Dr.%20Nelson,%20gostaria%20de%20agendar%20minha%20primeira%20consulta%20gratuita!",
  instagram: "https://www.instagram.com/dr.nelsonlimafacetas"
};

export const IMAGES = {
  hero: "https://i.imgur.com/qblMe7Q.jpeg",
  authority1: "https://i.imgur.com/VNdY25I.jpeg",
  authority2: "https://i.imgur.com/DK5v3_2.jpeg", // Corrigido underline no ID caso necessário, mas mantendo o padrão do link fornecido
  results: [
    { url: "https://i.imgur.com/NekQU4b.jpeg", alt: "Resultado Transformação 1" },
    { url: "https://i.imgur.com/moNAXIE.jpeg", alt: "Resultado Transformação 2" },
    { url: "https://i.imgur.com/eDg17UA.jpeg", alt: "Resultado Transformação 3" },
    { url: "https://i.imgur.com/cDAkjKs.jpeg", alt: "Resultado de Facetas 1" },
    { url: "https://i.imgur.com/1o306m3.jpeg", alt: "Resultado de Facetas 2" },
    { url: "https://i.imgur.com/xdOSaBq.jpeg", alt: "Reabilitação Oral 1" },
    { url: "https://i.imgur.com/GluVYXI.jpeg", alt: "Reabilitação Oral 2" },
    { url: "https://i.imgur.com/LbEWNju.jpeg", alt: "Antes e Depois 1" },
    { url: "https://i.imgur.com/4rdmVWB.jpeg", alt: "Antes e Depois 2" }
  ]
};

export const TRUST_CARDS = [
  {
    title: "Avaliação Honestidade",
    desc: "Nada de procedimentos desnecessários. Foco total na sua saúde real e longevidade do sorriso.",
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "Atendimento Direto",
    desc: "Você será atendido por mim do início ao fim. Nada de trocar de dentista no meio do tratamento.",
    icon: <UserCheck className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "Conforto Máximo",
    desc: "Técnicas modernas e ambiente acolhedor para que sua experiência seja totalmente indolor.",
    icon: <Heart className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "Resultados Naturais",
    desc: "Facetas e próteses que respeitam a harmonia do seu rosto e a naturalidade dos seus dentes.",
    icon: <Sparkles className="w-6 h-6 text-emerald-600" />
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Clique no Botão",
    desc: "Você será redirecionado para o meu WhatsApp pessoal para um primeiro contato."
  },
  {
    step: "02",
    title: "Agende seu Horário",
    desc: "Minha equipe entrará em contato para definir o melhor dia e hora para você."
  },
  {
    step: "03",
    title: "Avaliação Gratuita",
    desc: "Faremos um diagnóstico completo e planejaremos seu novo sorriso sem custo inicial."
  }
];
