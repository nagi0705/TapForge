// Internationalization configuration for TapForge
export const languages = {
  ja: "日本語",
  en: "English",
  zh: "中文",
  es: "Español",
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = "ja";

export const translations = {
  ja: {
    // Hero Section
    hero: {
      title: "タップで世界と繋がる。",
      subtitle: "AI駆動の次世代名刺",
      description: "であなたのビジネスを加速",
      subDescription:
        "アプリ不要、月額無料。NFCタップ一つで多言語プロフィールを共有。\nフリーランサーの海外案件獲得を支援します。",
      cta: "無料トライアル申し込み",
      limited: "50名限定!",
      features: {
        noApp: "アプリ不要",
        free: "月額無料",
        multilingual: "4言語対応",
      },
    },
    // Problems & Solutions
    problems: {
      title: "名刺整理、面倒ですよね？",
      subtitle: "TapForgeなら5分で解決！",
      problems: {
        title: "フリーランサーの悩み",
        cost: {
          title: "紙の名刺にかかるコスト",
          description: "年間300枚で約3,000円の印刷費",
        },
        organization: {
          title: "整理の手間",
          description: "50枚の名刺整理に30分以上",
        },
        language: {
          title: "海外クライアントとの言語の壁",
          description: "英語プロフィール作成に時間がかかる",
        },
        followup: {
          title: "フォローアップ率の低さ",
          description: "名刺交換後の連絡率は15%程度",
        },
      },
      solutions: {
        title: "TapForgeの解決策",
        cost: {
          title: "コストゼロ",
          description: "初期3,000円のみ、月額無料",
        },
        time: {
          title: "5分で完了",
          description: "AI名刺撮影でVCard変換",
        },
        language: {
          title: "4言語対応",
          description: "日英中西で国際ビジネス支援",
        },
        followup: {
          title: "フォロー率40%",
          description: "AIと多言語効果で向上",
        },
      },
    },
  },
  en: {
    // Hero Section
    hero: {
      title: "Connect with the world with a tap.",
      subtitle: "AI-powered next-generation business card",
      description: "to accelerate your business",
      subDescription:
        "No app required, free monthly. Share multilingual profiles with one NFC tap.\nSupporting freelancers in acquiring overseas projects.",
      cta: "Apply for Free Trial",
      limited: "Limited to 50!",
      features: {
        noApp: "No App Required",
        free: "Free Monthly",
        multilingual: "4 Languages",
      },
    },
    // Problems & Solutions
    problems: {
      title: "Business card organization is troublesome, right?",
      subtitle: "TapForge solves it in 5 minutes!",
      problems: {
        title: "Freelancer Problems",
        cost: {
          title: "Cost of paper business cards",
          description: "About 3,000 yen for 300 cards per year",
        },
        organization: {
          title: "Organization hassle",
          description: "30+ minutes to organize 50 business cards",
        },
        language: {
          title: "Language barriers with overseas clients",
          description: "Time-consuming to create English profiles",
        },
        followup: {
          title: "Low follow-up rate",
          description: "Only 15% contact rate after business card exchange",
        },
      },
      solutions: {
        title: "TapForge Solutions",
        cost: {
          title: "Zero Cost",
          description: "Only initial 3,000 yen, free monthly",
        },
        time: {
          title: "Complete in 5 minutes",
          description: "AI business card shooting to VCard conversion",
        },
        language: {
          title: "4 Language Support",
          description:
            "Japanese, English, Chinese, Spanish for international business",
        },
        followup: {
          title: "40% Follow-up Rate",
          description: "Improved with AI and multilingual effects",
        },
      },
    },
  },
  zh: {
    // Hero Section
    hero: {
      title: "轻触连接世界。",
      subtitle: "AI驱动的下一代名片",
      description: "加速您的业务",
      subDescription:
        "无需应用，月费免费。一次NFC轻触即可分享多语言个人资料。\n支持自由职业者获得海外项目。",
      cta: "申请免费试用",
      limited: "限50名！",
      features: {
        noApp: "无需应用",
        free: "月费免费",
        multilingual: "4种语言",
      },
    },
    // Problems & Solutions
    problems: {
      title: "名片整理很麻烦，对吧？",
      subtitle: "TapForge 5分钟解决！",
      problems: {
        title: "自由职业者的烦恼",
        cost: {
          title: "纸质名片的成本",
          description: "每年300张约3,000日元的印刷费",
        },
        organization: {
          title: "整理的麻烦",
          description: "整理50张名片需要30分钟以上",
        },
        language: {
          title: "与海外客户的语言障碍",
          description: "制作英文个人资料很耗时",
        },
        followup: {
          title: "跟进率低",
          description: "名片交换后的联系率只有15%左右",
        },
      },
      solutions: {
        title: "TapForge解决方案",
        cost: {
          title: "零成本",
          description: "仅初始3,000日元，月费免费",
        },
        time: {
          title: "5分钟完成",
          description: "AI名片拍摄到VCard转换",
        },
        language: {
          title: "4语言支持",
          description: "日英中西支持国际业务",
        },
        followup: {
          title: "40%跟进率",
          description: "通过AI和多语言效果提升",
        },
      },
    },
  },
  es: {
    // Hero Section
    hero: {
      title: "Conecta con el mundo con un toque.",
      subtitle: "Tarjeta de presentación de próxima generación",
      description: "impulsada por IA para acelerar tu negocio",
      subDescription:
        "Sin aplicación requerida, mensualidad gratuita. Comparte perfiles multilingües con un toque NFC.\nApoyando a freelancers en la adquisición de proyectos en el extranjero.",
      cta: "Solicitar Prueba Gratuita",
      limited: "¡Limitado a 50!",
      features: {
        noApp: "Sin App Requerida",
        free: "Mensualidad Gratuita",
        multilingual: "4 Idiomas",
      },
    },
    // Problems & Solutions
    problems: {
      title: "Organizar tarjetas de presentación es molesto, ¿verdad?",
      subtitle: "¡TapForge lo resuelve en 5 minutos!",
      problems: {
        title: "Problemas de Freelancers",
        cost: {
          title: "Costo de tarjetas de presentación de papel",
          description: "Aproximadamente 3,000 yenes por 300 tarjetas al año",
        },
        organization: {
          title: "Molestia de organización",
          description: "30+ minutos para organizar 50 tarjetas de presentación",
        },
        language: {
          title: "Barreras de idioma con clientes extranjeros",
          description: "Consume tiempo crear perfiles en inglés",
        },
        followup: {
          title: "Baja tasa de seguimiento",
          description:
            "Solo 15% de tasa de contacto después del intercambio de tarjetas",
        },
      },
      solutions: {
        title: "Soluciones TapForge",
        cost: {
          title: "Costo Cero",
          description: "Solo 3,000 yenes iniciales, mensualidad gratuita",
        },
        time: {
          title: "Completar en 5 minutos",
          description:
            "Fotografía de tarjeta de presentación con IA a conversión VCard",
        },
        language: {
          title: "Soporte de 4 Idiomas",
          description:
            "Japonés, Inglés, Chino, Español para negocios internacionales",
        },
        followup: {
          title: "40% Tasa de Seguimiento",
          description: "Mejorado con efectos de IA y multilingües",
        },
      },
    },
  },
} as const;

export function getTranslation(lang: Language, key: string): string {
  const keys = key.split(".");
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}
