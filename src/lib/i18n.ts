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
    // Navigation
    nav: {
      home: "ホーム",
      features: "特徴",
      pricing: "料金",
      testimonials: "レビュー",
      faq: "FAQ",
      contact: "お問合",
    },
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
    // CTA Section
    cta: {
      title: "今すぐ始めませんか？",
      description: "50名限定の無料トライアルで、TapForgeの力を体験してください",
      trialButton: "無料トライアル申し込み",
      contactButton: "お問い合わせ（共創パートナー向け）",
      tapNow: "今すぐタップ!",
      profileDisplay: "プロフィール表示",
      features: {
        noApp: "アプリ不要",
        free: "月額無料",
        multilingual: "4言語対応",
        aiScanning: "AI名刺撮影",
      },
    },
    // Trial Form
    trialForm: {
      title: "無料トライアル申し込み",
      description: "あなたの名刺を1枚無料で作成します。",
      subDescription: "デザイン変更無制限、AI名刺撮影・VCard変換利用可",
      contactFormTitle: "お問い合わせフォーム",
      contactFormDescription: "無料トライアルのお申し込みは、下記のボタンからお問い合わせください。",
      contactFormButton: "お問い合わせフォームへ",
      termsText: "申し込みにより、",
      termsLink: "利用規約",
      andText: "および",
      privacyLink: "プライバシーポリシー",
      agreementText: "に同意したものとみなされます。",
    },
    // Cost Comparison
    costComparison: {
      title: "コスト比較",
      traditional: {
        title: "従来の紙名刺",
        period: "年間300枚",
        printingCost: "印刷費: ¥3,000",
        orgTime: "整理時間: 30分",
        envImpact: "環境負荷: 高",
      },
      tapforge: {
        title: "TapForge",
        period: "初期費用のみ",
        monthlyCost: "月額料金: ¥0",
        orgTime: "整理時間: 5分",
        envImpact: "環境負荷: ゼロ",
      },
      targetAudience: "海外案件を増やしたいフリーランサーに最適",
    },
    // Features Section
    features: {
      title: "TapForgeの特徴",
      subtitle: "最新技術で名刺交換を革新",
      items: {
        aiScan: {
          title: "AI名刺撮影・VCard変換",
          description: "紙の名刺をAIでデータ化（精度95%）、VCardとしてスマートフォンに保存",
        },
        multilingual: {
          title: "多言語対応",
          description: "日本語、英語、中国語（簡体字）、スペイン語の4言語に自動で切り替わり",
        },
        noApp: {
          title: "アプリ不要",
          description: "NFCタップで即座にプロフィールを表示（オンライン環境）",
        },
        paperless: {
          title: "ペーパーレス",
          description: "SDGs目標12に貢献、完全ペーパーレスで環境に配慮",
        },
      },
      pricing: {
        title: "料金体系（税込）",
        plans: {
          initial: {
            title: "初期費用",
            price: "¥3,000",
            description: "1枚目",
          },
          additional: {
            title: "追加カード",
            price: "¥600",
            description: "2枚目以降",
          },
          monthly: {
            title: "月額料金",
            price: "¥0",
            description: "完全無料",
          },
        },
        tagline: "業界最安値で技術を民主化",
      },
      demo: {
        title: "デモ動画",
        description: "AI名刺撮影デモ動画",
        note: "（YouTubeリンク予定）",
      },
    },
    // Benefits Section
    benefits: {
      title: "導入効果",
      subtitle: "フリーランサーのビジネスを加速させる具体的な効果",
      items: {
        costReduction: {
          title: "コスト削減",
          metric: "¥3,000",
          description: "年間300枚の紙名刺コストが0円に",
        },
        timeEfficiency: {
          title: "効率化",
          metric: "5分",
          description: "名刺整理が50枚一括デジタル化で完了",
        },
        businessGrowth: {
          title: "ビジネス拡大",
          metric: "40%",
          description: "フォロー率が15%から向上",
        },
        environmental: {
          title: "環境配慮",
          metric: "300枚",
          description: "年間の紙削減でSDGsに貢献",
        },
      },
      comparison: {
        title: "詳細比較",
        headers: {
          item: "項目",
          traditional: "従来の紙名刺",
          tapforge: "TapForge",
        },
        rows: {
          annualCost: {
            item: "年間コスト",
            traditional: "¥3,000",
            tapforge: "¥0",
            tapforgeNote: "（初期費用のみ）",
          },
          organizationTime: {
            item: "整理時間",
            traditional: "30分/50枚",
            tapforge: "5分",
            tapforgeNote: "/50枚",
          },
          followUpRate: {
            item: "フォロー率",
            traditional: "15%",
            tapforge: "40%",
          },
          multilingual: {
            item: "多言語対応",
            traditional: "なし",
            tapforge: "4言語",
            tapforgeNote: "対応",
          },
          environmentalImpact: {
            item: "環境負荷",
            traditional: "高（紙使用）",
            tapforge: "ゼロ",
            tapforgeNote: "（ペーパーレス）",
          },
          updateEase: {
            item: "更新の容易さ",
            traditional: "再印刷が必要",
            tapforge: "即座",
            tapforgeNote: "更新可能",
          },
        },
      },
      target: {
        title: "海外案件を増やしたいフリーランサーに最適",
        description: "多言語対応とAI機能により、国際的なビジネス展開を強力にサポートします",
        tags: {
          global: "🌍 グローバル対応",
          ai: "🤖 AI活用",
          noApp: "📱 アプリ不要",
          costReduction: "💰 コスト削減",
        },
      },
    },
    // SDGs Section
    sdgs: {
      title: "SDGsへの貢献",
      subtitle: "環境とキャリアを両立",
      goals: {
        goal12: {
          title: "つくる責任 つかう責任",
          items: [
            "ペーパーレス化",
            "年間300枚の紙削減",
            "持続可能な消費"
          ]
        },
        goal10: {
          title: "人や国の不平等をなくそう",
          items: [
            "4言語対応",
            "国際案件での不平等解消",
            "言語バリアの解消"
          ]
        },
        goal17: {
          title: "パートナーシップで目標を達成しよう",
          items: [
            "名刺交換を通じた共創",
            "グローバルなつながり",
            "技術革新の共有"
          ]
        }
      },
      environmental: {
        title: "環境への配慮",
        metrics: {
          paperReduction: {
            value: "300枚",
            description: "年間削減される紙の枚数"
          },
          paperless: {
            value: "100%",
            description: "ペーパーレス化の実現"
          },
          updates: {
            value: "∞",
            description: "更新可能なデジタル名刺"
          }
        },
        summary: "持続可能なビジネス活動で、地球環境とビジネス成長を両立"
      }
    },
    // Partner Program Section
    partnerProgram: {
      title: "共創パートナー優待制度",
      subtitle: "長期的なパートナーシップに基づく特別価格",
      heading: "Cor.株式会社の他のサービスをご利用中のお客様へ",
      description: "Cor.株式会社の他のサービスを利用中の顧客には、長期的なパートナーシップに基づき特別価格で提供いたします。",
      contactNote: "詳細はお問い合わせください。",
      benefits: {
        specialPrice: {
          title: "特別価格での提供",
          description: "既存顧客様限定の優待価格"
        },
        prioritySupport: {
          title: "優先サポート",
          description: "専任担当者によるサポート"
        },
        customization: {
          title: "カスタマイズ対応",
          description: "お客様のニーズに合わせた調整"
        },
        longTermPartnership: {
          title: "長期パートナーシップ",
          description: "継続的な関係構築"
        }
      },
      ctaButton: "お問い合わせ",
      additionalInfo: "この制度は公式サイト（cor-jp.com）の内容に基づいています"
    },
    // Testimonials Section
    testimonials: {
      title: "お客様の声",
      subtitle: "実際にご利用いただいている方々からの声",
      items: [
        {
          name: "鈴木様",
          role: "Webデザイナー",
          message: "紙名刺の整理が5分で完了！英語プロフィールで海外案件が増えました。AI名刺撮影の精度も高く、VCard変換もスムーズです。フリーランサーにとって本当に便利なサービスです。",
          tags: ["効率化", "海外案件", "AI精度"]
        },
        {
          name: "田中様",
          role: "ITコンサルタント",
          message: "アプリ不要で簡単。クライアントに好印象を与えています。多言語対応で海外のクライアントとのコミュニケーションもスムーズになりました。コストパフォーマンスも抜群です。",
          tags: ["簡単操作", "好印象", "コスパ"]
        }
      ],
      note: "これらの声は仮想的なものです。トライアル参加者50名の中から5件の実際のレビューを選抜して差し替える予定です。"
    },
    // FAQ Section
    faq: {
      title: "よくある質問",
      subtitle: "お客様からよくいただくご質問にお答えします",
      items: [
        {
          question: "どのスマホでもNFCは使えますか？",
          answer: "95%のスマホで互換性があります。iPhone 7以降、Android NFC対応機種でご利用いただけます。\n具体的な対応機種については、各スマホメーカーの公式サイトをご確認ください。"
        },
        {
          question: "名刺読み取りの精度は？",
          answer: "AI名刺撮影・VCard変換の精度は95%です。継続的な改善により、さらなる精度向上を目指しています。\n認識に失敗した場合は、手動での修正も可能です。"
        },
        {
          question: "デザイン変更は自分でできるのですか？",
          answer: "管理画面から無制限でデザイン変更が可能です。\nライトカラー（白・ライトブルー・ベージュ）の3種類から選択でき、テキストや連絡先情報も簡単に更新できます。"
        },
        {
          question: "多言語対応の使い方を教えてください",
          answer: "4言語（日本語・英語・中国語・スペイン語）にご自身で切り替えることができます。\nプロフィール画面で表示言語を選択できるため、相手のスマートフォンの言語設定に関わらず、好きな言語でご利用いただけます。"
        },
        {
          question: "オフラインでも使えますか？",
          answer: "現在はオンライン環境でのご利用を推奨しています。\nオフライン機能は今後検討中です。アプリ不要のメリットを活かし、オンライン環境での安定したサービス提供を優先しています。"
        }
      ],
      additionalHelp: {
        title: "その他のご質問はお気軽にお問い合わせください",
        description: "専門スタッフが丁寧にお答えいたします",
        button: "お問い合わせ"
      }
    },
    // Footer Section
    footer: {
      description: "NFCデジタル名刺で世界と繋がる。AI駆動の次世代名刺であなたのビジネスを加速。",
      tagline: "未来を先取る、スマートな出会いをすべての人へ",
      quickLinks: {
        title: "クイックリンク",
        features: "特徴",
        pricing: "料金",
        testimonials: "お客様の声",
        faq: "FAQ"
      },
      contact: {
        title: "お問い合わせ",
        company: "Cor.株式会社",
        trial: "無料トライアル"
      },
      copyright: "© 2025 TapForge by Cor.株式会社. All rights reserved.",
      legal: {
        privacy: "プライバシーポリシー",
        terms: "利用規約"
      }
    },
  },
  en: {
    // Navigation
    nav: {
      home: "Home",
      features: "Features",
      pricing: "Pricing",
      testimonials: "Reviews",
      faq: "FAQ",
      contact: "Contact",
    },
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
    // CTA Section
    cta: {
      title: "Ready to get started?",
      description: "Experience the power of TapForge with our limited free trial for 50 people",
      trialButton: "Apply for Free Trial",
      contactButton: "Contact (For Co-creation Partners)",
      tapNow: "Tap Now!",
      profileDisplay: "Profile Display",
      features: {
        noApp: "No App Required",
        free: "Free Monthly",
        multilingual: "4 Languages",
        aiScanning: "AI Business Card Scanning",
      },
    },
    // Trial Form
    trialForm: {
      title: "Apply for Free Trial",
      description: "We'll create one business card for you for free.",
      subDescription: "Unlimited design changes, AI business card scanning & VCard conversion available",
      contactFormTitle: "Contact Form",
      contactFormDescription: "To apply for the free trial, please contact us through the button below.",
      contactFormButton: "Go to Contact Form",
      termsText: "By applying, you agree to our ",
      termsLink: "Terms of Service",
      andText: " and ",
      privacyLink: "Privacy Policy",
      agreementText: ".",
    },
    // Cost Comparison
    costComparison: {
      title: "Cost Comparison",
      traditional: {
        title: "Traditional Paper Business Cards",
        period: "300 cards per year",
        printingCost: "Printing cost: ¥3,000",
        orgTime: "Organization time: 30 minutes",
        envImpact: "Environmental impact: High",
      },
      tapforge: {
        title: "TapForge",
        period: "Initial cost only",
        monthlyCost: "Monthly fee: ¥0",
        orgTime: "Organization time: 5 minutes",
        envImpact: "Environmental impact: Zero",
      },
      targetAudience: "Perfect for freelancers who want to increase overseas projects",
    },
    // Features Section
    features: {
      title: "TapForge Features",
      subtitle: "Revolutionizing business card exchange with cutting-edge technology",
      items: {
        aiScan: {
          title: "AI Business Card Scanning & VCard Conversion",
          description: "Digitize paper business cards with AI (95% accuracy) and save as VCard to smartphones",
        },
        multilingual: {
          title: "Multilingual Support",
          description: "Automatically switches between 4 languages: Japanese, English, Chinese (Simplified), Spanish",
        },
        noApp: {
          title: "No App Required",
          description: "Instantly display profiles with NFC tap (online environment)",
        },
        paperless: {
          title: "Paperless",
          description: "Contributes to SDGs Goal 12, completely paperless and environmentally conscious",
        },
      },
      pricing: {
        title: "Pricing (Tax Included)",
        plans: {
          initial: {
            title: "Initial Cost",
            price: "¥3,000",
            description: "First card",
          },
          additional: {
            title: "Additional Cards",
            price: "¥600",
            description: "2nd card onwards",
          },
          monthly: {
            title: "Monthly Fee",
            price: "¥0",
            description: "Completely free",
          },
        },
        tagline: "Democratizing technology at industry's lowest price",
      },
      demo: {
        title: "Demo Video",
        description: "AI Business Card Scanning Demo Video",
        note: "(YouTube link coming soon)",
      },
    },
    // Benefits Section
    benefits: {
      title: "Introduction Effects",
      subtitle: "Specific effects that accelerate freelancers' businesses",
      items: {
        costReduction: {
          title: "Cost Reduction",
          metric: "¥3,000",
          description: "Annual cost of 300 paper business cards becomes 0 yen",
        },
        timeEfficiency: {
          title: "Efficiency",
          metric: "5 min",
          description: "Business card organization of 50 cards completed with batch digitalization",
        },
        businessGrowth: {
          title: "Business Growth",
          metric: "40%",
          description: "Follow-up rate improved from 15%",
        },
        environmental: {
          title: "Environmental Consideration",
          metric: "300 cards",
          description: "Annual paper reduction contributes to SDGs",
        },
      },
      comparison: {
        title: "Detailed Comparison",
        headers: {
          item: "Item",
          traditional: "Traditional Paper Business Cards",
          tapforge: "TapForge",
        },
        rows: {
          annualCost: {
            item: "Annual Cost",
            traditional: "¥3,000",
            tapforge: "¥0",
            tapforgeNote: "(Initial cost only)",
          },
          organizationTime: {
            item: "Organization Time",
            traditional: "30 min/50 cards",
            tapforge: "5 min",
            tapforgeNote: "/50 cards",
          },
          followUpRate: {
            item: "Follow-up Rate",
            traditional: "15%",
            tapforge: "40%",
          },
          multilingual: {
            item: "Multilingual Support",
            traditional: "None",
            tapforge: "4 Languages",
            tapforgeNote: "Support",
          },
          environmentalImpact: {
            item: "Environmental Impact",
            traditional: "High (Paper use)",
            tapforge: "Zero",
            tapforgeNote: "(Paperless)",
          },
          updateEase: {
            item: "Update Ease",
            traditional: "Re-printing required",
            tapforge: "Instant",
            tapforgeNote: "Update possible",
          },
        },
      },
      target: {
        title: "Perfect for freelancers who want to increase overseas projects",
        description: "Supports international business expansion with multilingual support and AI features",
        tags: {
          global: "🌍 Global Support",
          ai: "🤖 AI Utilization",
          noApp: "📱 No App Required",
          costReduction: "💰 Cost Reduction",
        },
      },
    },
    // SDGs Section
    sdgs: {
      title: "SDGs Contribution",
      subtitle: "Balancing environment and career",
      goals: {
        goal12: {
          title: "Responsible Consumption and Production",
          items: [
            "Paperless",
            "300 sheets of paper reduced annually",
            "Sustainable consumption"
          ]
        },
        goal10: {
          title: "Reduced Inequalities",
          items: [
            "4-language support",
            "Elimination of inequality in international projects",
            "Elimination of language barriers"
          ]
        },
        goal17: {
          title: "Partnerships for the Goals",
          items: [
            "Co-creation through business card exchange",
            "Global connections",
            "Sharing technological innovation"
          ]
        }
      },
      environmental: {
        title: "Environmental Consideration",
        metrics: {
          paperReduction: {
            value: "300 sheets",
            description: "Annual paper reduction"
          },
          paperless: {
            value: "100%",
            description: "Paperless achievement"
          },
          updates: {
            value: "∞",
            description: "Updatable digital business cards"
          }
        },
        summary: "Sustainable business activities that balance environmental protection and business growth"
      }
    },
    // Partner Program Section
    partnerProgram: {
      title: "Co-creation Partner Program",
      subtitle: "Special pricing based on long-term partnership",
      heading: "To customers using other services of Cor. Co., Ltd.",
      description: "For customers using other services of Cor. Co., Ltd., we provide special pricing based on long-term partnership.",
      contactNote: "Please contact us for details.",
      benefits: {
        specialPrice: {
          title: "Special Pricing",
          description: "Exclusive preferential pricing for existing customers"
        },
        prioritySupport: {
          title: "Priority Support",
          description: "Support by dedicated staff"
        },
        customization: {
          title: "Customization Support",
          description: "Adjustments tailored to customer needs"
        },
        longTermPartnership: {
          title: "Long-term Partnership",
          description: "Continuous relationship building"
        }
      },
      ctaButton: "Contact Us",
      additionalInfo: "This program is based on the content of the official website (cor-jp.com)"
    },
    // Testimonials Section
    testimonials: {
      title: "Customer Testimonials",
      subtitle: "Voices from those who are actually using our service",
      items: [
        {
          name: "Mr. Suzuki",
          role: "Web Designer",
          message: "Paper business card organization completed in 5 minutes! English profiles have increased overseas projects. AI business card shooting accuracy is high, and VCard conversion is smooth. It's really a convenient service for freelancers.",
          tags: ["Efficiency", "Overseas Projects", "AI Accuracy"]
        },
        {
          name: "Mr. Tanaka",
          role: "IT Consultant",
          message: "No app required, simple. It makes a good impression on clients. Multilingual support has made communication with overseas clients smooth. The cost performance is also excellent.",
          tags: ["Easy Operation", "Good Impression", "Cost Performance"]
        }
      ],
      note: "These voices are hypothetical. We plan to select 5 actual reviews from 50 trial participants and replace them."
    },
    // FAQ Section
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "We answer frequently asked questions from our customers",
      items: [
        {
          question: "Can NFC be used on any smartphone?",
          answer: "Compatible with 95% of smartphones. Available on iPhone 7 and later, and Android NFC-compatible models.\nFor specific compatible models, please check the official website of each smartphone manufacturer."
        },
        {
          question: "What is the accuracy of business card reading?",
          answer: "AI business card shooting and VCard conversion accuracy is 95%. We aim for further accuracy improvement through continuous improvement.\nIf recognition fails, manual correction is also possible."
        },
        {
          question: "Can I change the design myself?",
          answer: "Unlimited design changes are possible from the management screen.\nYou can choose from 3 types of light colors (white, light blue, beige), and text and contact information can be easily updated."
        },
        {
          question: "Please tell me how to use multilingual support",
          answer: "You can switch to 4 languages (Japanese, English, Chinese, Spanish) yourself.\nYou can select the display language on the profile screen, so you can use it in your preferred language regardless of the other party's smartphone language settings."
        },
        {
          question: "Can it be used offline?",
          answer: "Currently, we recommend using it in an online environment.\nOffline functionality is under consideration for the future. We prioritize stable service provision in an online environment, taking advantage of the no-app benefit."
        }
      ],
      additionalHelp: {
        title: "Please feel free to contact us for other questions",
        description: "Our professional staff will answer you carefully",
        button: "Contact Us"
      }
    },
    // Footer Section
    footer: {
      description: "Connect with the world through NFC digital business cards. Accelerate your business with AI-powered next-generation business cards.",
      tagline: "Pioneering the future, smart encounters for everyone",
      quickLinks: {
        title: "Quick Links",
        features: "Features",
        pricing: "Pricing",
        testimonials: "Testimonials",
        faq: "FAQ"
      },
      contact: {
        title: "Contact",
        company: "Cor. Co., Ltd.",
        trial: "Free Trial"
      },
      copyright: "© 2025 TapForge by Cor. Co., Ltd. All rights reserved.",
      legal: {
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    },
  },
  zh: {
    // Navigation
    nav: {
      home: "首页",
      features: "特点",
      pricing: "价格",
      testimonials: "评价",
      faq: "FAQ",
      contact: "联系",
    },
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
    // CTA Section
    cta: {
      title: "¿Listo para comenzar?",
      description: "Experimenta el poder de TapForge con nuestra prueba gratuita limitada para 50 personas",
      trialButton: "Solicitar Prueba Gratuita",
      contactButton: "Contacto (Para Socios de Co-creación)",
      tapNow: "¡Toca Ahora!",
      profileDisplay: "Mostrar Perfil",
      features: {
        noApp: "Sin App Requerida",
        free: "Mensualidad Gratuita",
        multilingual: "4 Idiomas",
        aiScanning: "Escaneo de Tarjeta con IA",
      },
    },
    // Trial Form
    trialForm: {
      title: "Solicitar Prueba Gratuita",
      description: "Crearemos una tarjeta de presentación gratis para ti.",
      subDescription: "Cambios de diseño ilimitados, escaneo de tarjeta con IA y conversión VCard disponibles",
      contactFormTitle: "Formulario de Contacto",
      contactFormDescription: "Para solicitar la prueba gratuita, contáctanos a través del botón de abajo.",
      contactFormButton: "Ir al Formulario de Contacto",
      termsText: "Al solicitar, aceptas nuestros ",
      termsLink: "Términos de Servicio",
      andText: " y ",
      privacyLink: "Política de Privacidad",
      agreementText: ".",
    },
    // Cost Comparison
    costComparison: {
      title: "成本比较",
      traditional: {
        title: "传统纸质名片",
        period: "每年300张",
        printingCost: "印刷费: ¥3,000",
        orgTime: "整理时间: 30分钟",
        envImpact: "环境影响: 高",
      },
      tapforge: {
        title: "TapForge",
        period: "仅初始费用",
        monthlyCost: "月费: ¥0",
        orgTime: "整理时间: 5分钟",
        envImpact: "环境影响: 零",
      },
      targetAudience: "适合想要增加海外项目的自由职业者",
    },
    // Features Section
    features: {
      title: "TapForge特点",
      subtitle: "用最新技术革新名片交换",
      items: {
        aiScan: {
          title: "AI名片扫描·VCard转换",
          description: "用AI将纸质名片数字化（精度95%），保存为VCard到智能手机",
        },
        multilingual: {
          title: "多语言支持",
          description: "自动切换4种语言：日语、英语、中文（简体）、西班牙语",
        },
        noApp: {
          title: "无需应用",
          description: "NFC轻触即可立即显示个人资料（在线环境）",
        },
        paperless: {
          title: "无纸化",
          description: "为SDGs目标12做贡献，完全无纸化，环保意识",
        },
      },
      pricing: {
        title: "价格体系（含税）",
        plans: {
          initial: {
            title: "初始费用",
            price: "¥3,000",
            description: "第1张",
          },
          additional: {
            title: "追加卡片",
            price: "¥600",
            description: "第2张起",
          },
          monthly: {
            title: "月费",
            price: "¥0",
            description: "完全免费",
          },
        },
        tagline: "以行业最低价格普及技术",
      },
      demo: {
        title: "演示视频",
        description: "AI名片扫描演示视频",
        note: "（YouTube链接即将推出）",
      },
    },
    // Benefits Section
    benefits: {
      title: "导入效果",
      subtitle: "加速自由职业者业务的具体效果",
      items: {
        costReduction: {
          title: "成本削减",
          metric: "¥3,000",
          description: "每年300张纸质名片成本变为0日元",
        },
        timeEfficiency: {
          title: "效率化",
          metric: "5分钟",
          description: "50张名片整理通过批量数字化完成",
        },
        businessGrowth: {
          title: "业务扩展",
          metric: "40%",
          description: "跟进率从15%提升",
        },
        environmental: {
          title: "环保考虑",
          metric: "300张",
          description: "年度纸张减少为SDGs做贡献",
        },
      },
      comparison: {
        title: "详细比较",
        headers: {
          item: "项目",
          traditional: "传统纸质名片",
          tapforge: "TapForge",
        },
        rows: {
          annualCost: {
            item: "年度成本",
            traditional: "¥3,000",
            tapforge: "¥0",
            tapforgeNote: "（仅初始费用）",
          },
          organizationTime: {
            item: "整理时间",
            traditional: "30分钟/50张",
            tapforge: "5分钟",
            tapforgeNote: "/50张",
          },
          followUpRate: {
            item: "跟进率",
            traditional: "15%",
            tapforge: "40%",
          },
          multilingual: {
            item: "多语言支持",
            traditional: "无",
            tapforge: "4种语言",
            tapforgeNote: "支持",
          },
          environmentalImpact: {
            item: "环境影响",
            traditional: "高（使用纸张）",
            tapforge: "零",
            tapforgeNote: "（无纸化）",
          },
          updateEase: {
            item: "更新便利性",
            traditional: "需要重新印刷",
            tapforge: "即时",
            tapforgeNote: "可更新",
          },
        },
      },
      target: {
        title: "适合想要增加海外项目的自由职业者",
        description: "通过多语言支持和AI功能，强力支持国际业务扩展",
        tags: {
          global: "🌍 全球支持",
          ai: "🤖 AI利用",
          noApp: "📱 无需应用",
          costReduction: "💰 成本削减",
        },
      },
    },
    // SDGs Section
    sdgs: {
      title: "SDGs贡献",
      subtitle: "环境与职业并重",
      goals: {
        goal12: {
          title: "负责任消费和生产",
          items: [
            "无纸化",
            "每年减少300张纸张",
            "可持续消费"
          ]
        },
        goal10: {
          title: "减少不平等",
          items: [
            "4语言支持",
            "消除国际项目中的不平等",
            "消除语言障碍"
          ]
        },
        goal17: {
          title: "促进目标实现的伙伴关系",
          items: [
            "通过名片交换共创",
            "全球连接",
            "分享技术创新"
          ]
        }
      },
      environmental: {
        title: "环境考虑",
        metrics: {
          paperReduction: {
            value: "300张",
            description: "年度纸张减少"
          },
          paperless: {
            value: "100%",
            description: "无纸化实现"
          },
          updates: {
            value: "∞",
            description: "可更新的数字名片"
          }
        },
        summary: "可持续商业活动，平衡环境保护和业务增长"
      }
    },
    // Partner Program Section
    partnerProgram: {
      title: "共创合作伙伴优待制度",
      subtitle: "基于长期合作伙伴关系的特别价格",
      heading: "致使用Cor.株式会社其他服务的客户",
      description: "对于使用Cor.株式会社其他服务的客户，我们将基于长期合作伙伴关系提供特别价格。",
      contactNote: "详情请联系我们。",
      benefits: {
        specialPrice: {
          title: "特别价格提供",
          description: "现有客户专享优待价格"
        },
        prioritySupport: {
          title: "优先支持",
          description: "专职人员支持"
        },
        customization: {
          title: "定制化支持",
          description: "根据客户需求调整"
        },
        longTermPartnership: {
          title: "长期合作伙伴关系",
          description: "持续的关系建设"
        }
      },
      ctaButton: "联系我们",
      additionalInfo: "此制度基于官方网站（cor-jp.com）的内容"
    },
    // Testimonials Section
    testimonials: {
      title: "客户评价",
      subtitle: "来自实际使用我们服务的用户的声音",
      items: [
        {
          name: "铃木先生",
          role: "网页设计师",
          message: "纸质名片整理5分钟完成！英文个人资料增加了海外项目。AI名片拍摄精度高，VCard转换也很流畅。对于自由职业者来说真的是很方便的服务。",
          tags: ["效率化", "海外项目", "AI精度"]
        },
        {
          name: "田中先生",
          role: "IT顾问",
          message: "无需应用，简单易用。给客户留下了好印象。多语言支持使与海外客户的沟通变得顺畅。性价比也很出色。",
          tags: ["简单操作", "好印象", "性价比"]
        }
      ],
      note: "这些评价是假设的。我们计划从50名试用参与者中选择5个实际评价进行替换。"
    },
    // FAQ Section
    faq: {
      title: "常见问题",
      subtitle: "我们回答客户经常提出的问题",
      items: [
        {
          question: "任何智能手机都可以使用NFC吗？",
          answer: "与95%的智能手机兼容。可在iPhone 7及以后版本、Android NFC兼容机型上使用。\n关于具体兼容机型，请查看各智能手机制造商的官方网站。"
        },
        {
          question: "名片读取的精度如何？",
          answer: "AI名片拍摄和VCard转换精度为95%。通过持续改进，我们致力于进一步提高精度。\n如果识别失败，也可以手动修正。"
        },
        {
          question: "可以自己更改设计吗？",
          answer: "可以从管理画面无限制地更改设计。\n可以选择3种浅色（白色、浅蓝色、米色），文本和联系信息也可以轻松更新。"
        },
        {
          question: "请告诉我多语言支持的使用方法",
          answer: "可以自己切换到4种语言（日语、英语、中文、西班牙语）。\n可以在个人资料画面选择显示语言，因此无论对方的智能手机语言设置如何，都可以用自己喜欢的语言使用。"
        },
        {
          question: "离线时也可以使用吗？",
          answer: "目前建议在在线环境下使用。\n离线功能正在考虑中。我们优先在在线环境下提供稳定服务，发挥无需应用的优势。"
        }
      ],
      additionalHelp: {
        title: "如有其他问题请随时联系我们",
        description: "专业工作人员会仔细回答您的问题",
        button: "联系我们"
      }
    },
    // Footer Section
    footer: {
      description: "通过NFC数字名片连接世界。AI驱动的下一代名片加速您的业务。",
      tagline: "开创未来，为每个人提供智能相遇",
      quickLinks: {
        title: "快速链接",
        features: "特点",
        pricing: "价格",
        testimonials: "客户评价",
        faq: "常见问题"
      },
      contact: {
        title: "联系我们",
        company: "Cor.株式会社",
        trial: "免费试用"
      },
      copyright: "© 2025 TapForge by Cor.株式会社. 版权所有。",
      legal: {
        privacy: "隐私政策",
        terms: "服务条款"
      }
    },
  },
  es: {
    // Navigation
    nav: {
      home: "Inicio",
      features: "Características",
      pricing: "Precios",
      testimonials: "Testimonios",
      faq: "FAQ",
      contact: "Contacto",
    },
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
    // CTA Section
    cta: {
      title: "¿Listo para comenzar?",
      description: "Experimenta el poder de TapForge con nuestra prueba gratuita limitada para 50 personas",
      trialButton: "Solicitar Prueba Gratuita",
      contactButton: "Contacto (Para Socios de Co-creación)",
      tapNow: "¡Toca Ahora!",
      profileDisplay: "Mostrar Perfil",
      features: {
        noApp: "Sin App Requerida",
        free: "Mensualidad Gratuita",
        multilingual: "4 Idiomas",
        aiScanning: "Escaneo de Tarjeta con IA",
      },
    },
    // Trial Form
    trialForm: {
      title: "Solicitar Prueba Gratuita",
      description: "Crearemos una tarjeta de presentación gratis para ti.",
      subDescription: "Cambios de diseño ilimitados, escaneo de tarjeta con IA y conversión VCard disponibles",
      contactFormTitle: "Formulario de Contacto",
      contactFormDescription: "Para solicitar la prueba gratuita, contáctanos a través del botón de abajo.",
      contactFormButton: "Ir al Formulario de Contacto",
      termsText: "Al solicitar, aceptas nuestros ",
      termsLink: "Términos de Servicio",
      andText: " y ",
      privacyLink: "Política de Privacidad",
      agreementText: ".",
    },
    // Cost Comparison
    costComparison: {
      title: "Comparación de Costos",
      traditional: {
        title: "Tarjetas de Presentación de Papel Tradicionales",
        period: "300 tarjetas por año",
        printingCost: "Costo de impresión: ¥3,000",
        orgTime: "Tiempo de organización: 30 minutos",
        envImpact: "Impacto ambiental: Alto",
      },
      tapforge: {
        title: "TapForge",
        period: "Solo costo inicial",
        monthlyCost: "Tarifa mensual: ¥0",
        orgTime: "Tiempo de organización: 5 minutos",
        envImpact: "Impacto ambiental: Cero",
      },
      targetAudience: "Perfecto para freelancers que quieren aumentar proyectos en el extranjero",
    },
    // Features Section
    features: {
      title: "Características de TapForge",
      subtitle: "Revolucionando el intercambio de tarjetas de presentación con tecnología de vanguardia",
      items: {
        aiScan: {
          title: "Escaneo de Tarjeta con IA y Conversión VCard",
          description: "Digitaliza tarjetas de presentación de papel con IA (95% precisión) y guarda como VCard en smartphones",
        },
        multilingual: {
          title: "Soporte Multilingüe",
          description: "Cambia automáticamente entre 4 idiomas: Japonés, Inglés, Chino (Simplificado), Español",
        },
        noApp: {
          title: "Sin App Requerida",
          description: "Muestra perfiles instantáneamente con toque NFC (entorno en línea)",
        },
        paperless: {
          title: "Sin Papel",
          description: "Contribuye al Objetivo 12 de los ODS, completamente sin papel y consciente del medio ambiente",
        },
      },
      pricing: {
        title: "Precios (Impuestos Incluidos)",
        plans: {
          initial: {
            title: "Costo Inicial",
            price: "¥3,000",
            description: "Primera tarjeta",
          },
          additional: {
            title: "Tarjetas Adicionales",
            price: "¥600",
            description: "2da tarjeta en adelante",
          },
          monthly: {
            title: "Tarifa Mensual",
            price: "¥0",
            description: "Completamente gratis",
          },
        },
        tagline: "Democratizando la tecnología al precio más bajo de la industria",
      },
      demo: {
        title: "Video Demo",
        description: "Video Demo de Escaneo de Tarjeta con IA",
        note: "(Enlace de YouTube próximamente)",
      },
    },
    // Benefits Section
    benefits: {
      title: "Efectos de Introducción",
      subtitle: "Efectos específicos que aceleran los negocios de freelancers",
      items: {
        costReduction: {
          title: "Reducción de Costos",
          metric: "¥3,000",
          description: "El costo anual de 300 tarjetas de presentación de papel se convierte en 0 yenes",
        },
        timeEfficiency: {
          title: "Eficiencia",
          metric: "5 min",
          description: "Organización de 50 tarjetas de presentación completada con digitalización por lotes",
        },
        businessGrowth: {
          title: "Crecimiento del Negocio",
          metric: "40%",
          description: "Tasa de seguimiento mejorada del 15%",
        },
        environmental: {
          title: "Consideración Ambiental",
          metric: "300 tarjetas",
          description: "Reducción anual de papel contribuye a los ODS",
        },
      },
      comparison: {
        title: "Comparación Detallada",
        headers: {
          item: "Elemento",
          traditional: "Tarjetas de Presentación de Papel Tradicionales",
          tapforge: "TapForge",
        },
        rows: {
          annualCost: {
            item: "Costo Anual",
            traditional: "¥3,000",
            tapforge: "¥0",
            tapforgeNote: "(Solo costo inicial)",
          },
          organizationTime: {
            item: "Tiempo de Organización",
            traditional: "30 min/50 tarjetas",
            tapforge: "5 min",
            tapforgeNote: "/50 tarjetas",
          },
          followUpRate: {
            item: "Tasa de Seguimiento",
            traditional: "15%",
            tapforge: "40%",
          },
          multilingual: {
            item: "Soporte Multilingüe",
            traditional: "Ninguno",
            tapforge: "4 Idiomas",
            tapforgeNote: "Soporte",
          },
          environmentalImpact: {
            item: "Impacto Ambiental",
            traditional: "Alto (Uso de papel)",
            tapforge: "Cero",
            tapforgeNote: "(Sin papel)",
          },
          updateEase: {
            item: "Facilidad de Actualización",
            traditional: "Reimpresión requerida",
            tapforge: "Instantáneo",
            tapforgeNote: "Actualización posible",
          },
        },
      },
      target: {
        title: "Perfecto para freelancers que quieren aumentar proyectos en el extranjero",
        description: "Apoya la expansión de negocios internacionales con soporte multilingüe y características de IA",
        tags: {
          global: "🌍 Soporte Global",
          ai: "🤖 Utilización de IA",
          noApp: "📱 Sin App Requerida",
          costReduction: "💰 Reducción de Costos",
        },
      },
    },
    // SDGs Section
    sdgs: {
      title: "Contribución a los ODS",
      subtitle: "Equilibrando medio ambiente y carrera",
      goals: {
        goal12: {
          title: "Consumo y Producción Responsables",
          items: [
            "Sin papel",
            "300 hojas de papel reducidas anualmente",
            "Consumo sostenible"
          ]
        },
        goal10: {
          title: "Reducción de las Desigualdades",
          items: [
            "Soporte de 4 idiomas",
            "Eliminación de desigualdad en proyectos internacionales",
            "Eliminación de barreras de idioma"
          ]
        },
        goal17: {
          title: "Alianzas para Lograr los Objetivos",
          items: [
            "Co-creación a través del intercambio de tarjetas",
            "Conexiones globales",
            "Compartir innovación tecnológica"
          ]
        }
      },
      environmental: {
        title: "Consideración Ambiental",
        metrics: {
          paperReduction: {
            value: "300 hojas",
            description: "Reducción anual de papel"
          },
          paperless: {
            value: "100%",
            description: "Logro sin papel"
          },
          updates: {
            value: "∞",
            description: "Tarjetas digitales actualizables"
          }
        },
        summary: "Actividades comerciales sostenibles que equilibran la protección ambiental y el crecimiento empresarial"
      }
    },
    // Partner Program Section
    partnerProgram: {
      title: "Programa de Socios de Co-creación",
      subtitle: "Precios especiales basados en asociación a largo plazo",
      heading: "Para clientes que utilizan otros servicios de Cor. Co., Ltd.",
      description: "Para clientes que utilizan otros servicios de Cor. Co., Ltd., ofrecemos precios especiales basados en asociación a largo plazo.",
      contactNote: "Por favor contáctanos para más detalles.",
      benefits: {
        specialPrice: {
          title: "Precios Especiales",
          description: "Precios preferenciales exclusivos para clientes existentes"
        },
        prioritySupport: {
          title: "Soporte Prioritario",
          description: "Soporte por personal dedicado"
        },
        customization: {
          title: "Soporte de Personalización",
          description: "Ajustes adaptados a las necesidades del cliente"
        },
        longTermPartnership: {
          title: "Asociación a Largo Plazo",
          description: "Construcción continua de relaciones"
        }
      },
      ctaButton: "Contáctanos",
      additionalInfo: "Este programa se basa en el contenido del sitio web oficial (cor-jp.com)"
    },
    // Testimonials Section
    testimonials: {
      title: "Testimonios de Clientes",
      subtitle: "Voces de quienes están usando realmente nuestro servicio",
      items: [
        {
          name: "Sr. Suzuki",
          role: "Diseñador Web",
          message: "¡La organización de tarjetas de presentación de papel se completó en 5 minutos! Los perfiles en inglés han aumentado los proyectos en el extranjero. La precisión del disparo de tarjetas de presentación con IA es alta y la conversión VCard es fluida. Es realmente un servicio conveniente para freelancers.",
          tags: ["Eficiencia", "Proyectos Extranjeros", "Precisión IA"]
        },
        {
          name: "Sr. Tanaka",
          role: "Consultor IT",
          message: "Sin aplicación requerida, simple. Da una buena impresión a los clientes. El soporte multilingüe ha hecho que la comunicación con clientes extranjeros sea fluida. La relación costo-beneficio también es excelente.",
          tags: ["Operación Fácil", "Buena Impresión", "Relación Costo-Beneficio"]
        }
      ],
      note: "Estas voces son hipotéticas. Planeamos seleccionar 5 reseñas reales de 50 participantes de prueba y reemplazarlas."
    },
    // FAQ Section
    faq: {
      title: "Preguntas Frecuentes",
      subtitle: "Respondemos preguntas frecuentes de nuestros clientes",
      items: [
        {
          question: "¿Se puede usar NFC en cualquier smartphone?",
          answer: "Compatible con el 95% de los smartphones. Disponible en iPhone 7 y posteriores, y modelos Android compatibles con NFC.\nPara modelos específicos compatibles, consulte el sitio web oficial de cada fabricante de smartphones."
        },
        {
          question: "¿Cuál es la precisión de la lectura de tarjetas de presentación?",
          answer: "La precisión del disparo de tarjetas de presentación con IA y la conversión VCard es del 95%. Buscamos una mayor precisión a través de mejoras continuas.\nSi el reconocimiento falla, también es posible la corrección manual."
        },
        {
          question: "¿Puedo cambiar el diseño yo mismo?",
          answer: "Los cambios de diseño ilimitados son posibles desde la pantalla de administración.\nPuedes elegir entre 3 tipos de colores claros (blanco, azul claro, beige), y el texto y la información de contacto se pueden actualizar fácilmente."
        },
        {
          question: "Por favor, dime cómo usar el soporte multilingüe",
          answer: "Puedes cambiar a 4 idiomas (japonés, inglés, chino, español) tú mismo.\nPuedes seleccionar el idioma de visualización en la pantalla de perfil, por lo que puedes usarlo en tu idioma preferido independientemente de la configuración de idioma del smartphone de la otra parte."
        },
        {
          question: "¿Se puede usar sin conexión?",
          answer: "Actualmente recomendamos usarlo en un entorno en línea.\nLa funcionalidad sin conexión está bajo consideración para el futuro. Priorizamos la provisión de servicios estables en un entorno en línea, aprovechando el beneficio de no requerir aplicación."
        }
      ],
      additionalHelp: {
        title: "Por favor, no dudes en contactarnos para otras preguntas",
        description: "Nuestro personal profesional te responderá cuidadosamente",
        button: "Contáctanos"
      }
    },
    // Footer Section
    footer: {
      description: "Conecta con el mundo a través de tarjetas de presentación digitales NFC. Acelera tu negocio con tarjetas de presentación de próxima generación impulsadas por IA.",
      tagline: "Pioneros del futuro, encuentros inteligentes para todos",
      quickLinks: {
        title: "Enlaces Rápidos",
        features: "Características",
        pricing: "Precios",
        testimonials: "Testimonios",
        faq: "Preguntas Frecuentes"
      },
      contact: {
        title: "Contacto",
        company: "Cor. Co., Ltd.",
        trial: "Prueba Gratuita"
      },
      copyright: "© 2025 TapForge by Cor. Co., Ltd. Todos los derechos reservados.",
      legal: {
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio"
      }
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
