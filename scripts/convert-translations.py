#!/usr/bin/env python3
import json
import re
import os
from pathlib import Path

# Read the i18n.ts file
i18n_path = Path(__file__).parent.parent / 'src' / 'lib' / 'i18n.ts'
with open(i18n_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Create a simple Japanese translations file first
ja_translations = {
    "nav": {
        "home": "ホーム",
        "features": "特徴",
        "pricing": "料金",
        "testimonials": "レビュー",
        "faq": "FAQ",
        "contact": "お問合せ"
    },
    "hero": {
        "title": "タップで世界と繋がる。",
        "subtitle": "AI駆動の次世代名刺",
        "description": "であなたのビジネスを加速",
        "subDescription": "アプリ不要、月額無料。NFCタップ一つで多言語プロフィールを共有。\nフリーランサーの海外案件獲得を支援します。",
        "cta": "無料トライアル申し込み",
        "limited": "50名限定!",
        "features": {
            "noApp": "アプリ不要",
            "free": "月額無料",
            "multilingual": "4言語対応"
        }
    },
    "problems": {
        "title": "名刺整理、面倒ですよね？",
        "subtitle": "TapForgeなら5分で解決！",
        "problems": {
            "title": "フリーランサーの悩み",
            "cost": {
                "title": "紙の名刺にかかるコスト",
                "description": "年間500枚で約5,000円の印刷費"
            },
            "organization": {
                "title": "整理の手間",
                "description": "50枚の名刺整理に30分以上"
            },
            "language": {
                "title": "海外クライアントとの言語の壁",
                "description": "英語プロフィール作成に時間がかかる"
            },
            "followup": {
                "title": "フォローアップ率の低さ",
                "description": "名刺交換後の連絡率は15%程度"
            }
        },
        "solutions": {
            "title": "TapForgeの解決策",
            "cost": {
                "title": "コストゼロ",
                "description": "初期3,000円のみ、月額無料"
            },
            "time": {
                "title": "5分で完了",
                "description": "AI名刺撮影でVCard変換"
            },
            "language": {
                "title": "4言語対応",
                "description": "日英中西で国際ビジネス支援"
            },
            "followup": {
                "title": "フォロー率40%",
                "description": "AIと多言語効果で向上"
            }
        }
    },
    "cta": {
        "title": "今すぐ始めませんか？",
        "description": "50名限定の無料トライアルで、TapForgeの力を体験してください",
        "trialButton": "無料トライアル申し込み",
        "contactButton": "お問い合わせ（共創パートナー向け）",
        "tapNow": "今すぐタップ!",
        "profileDisplay": "プロフィール表示",
        "features": {
            "noApp": "アプリ不要",
            "free": "月額無料",
            "multilingual": "4言語対応",
            "aiScanning": "AI名刺撮影"
        }
    },
    "trialForm": {
        "title": "無料トライアル申し込み",
        "description": "あなたの名刺を1枚無料で作成します。",
        "subDescription": "デザイン変更無制限、AI名刺撮影・VCard変換利用可",
        "contactFormTitle": "お問い合わせフォーム",
        "contactFormDescription": "無料トライアルのお申し込みは、下記のボタンからお問い合わせください。",
        "contactFormButton": "お問い合わせフォームへ",
        "termsText": "申し込みにより、",
        "termsLink": "利用規約",
        "andText": "および",
        "privacyLink": "プライバシーポリシー",
        "agreementText": "に同意したものとみなされます。"
    },
    "costComparison": {
        "title": "コスト比較",
        "traditional": {
            "title": "従来の紙名刺",
            "period": "年間500枚",
            "printingCost": "印刷費: ¥5,000",
            "orgTime": "整理時間: 30分",
            "envImpact": "環境負荷: 高"
        },
        "tapforge": {
            "title": "TapForge",
            "period": "初期費用のみ",
            "monthlyCost": "月額料金: ¥0",
            "orgTime": "整理時間: 5分",
            "envImpact": "環境負荷: ゼロ"
        },
        "targetAudience": "海外案件を増やしたいフリーランサーに最適"
    },
    "features": {
        "title": "TapForgeの特徴",
        "subtitle": "最新技術で名刺交換を革新",
        "items": {
            "aiScan": {
                "title": "OCR名刺読み取り機能付きNFC名刺",
                "description": "通常別アプリで月額500円のOCR機能を無料で統合。紙の名刺をAIでデータ化（精度95%）し、VCardとしてスマートフォンに直接保存"
            },
            "multilingual": {
                "title": "多言語対応",
                "description": "日本語、英語、中国語（簡体字）、スペイン語の4言語に自動で切り替わり"
            },
            "noApp": {
                "title": "アプリ不要",
                "description": "NFCタップで即座にプロフィールを表示（オンライン環境）"
            },
            "paperless": {
                "title": "ペーパーレス",
                "description": "SDGs目標12に貢献、完全ペーパーレスで環境に配慮"
            }
        },
        "pricing": {
            "title": "料金体系（税込）",
            "plans": {
                "initial": {
                    "title": "初期費用",
                    "price": "¥3,000",
                    "description": "1枚目"
                },
                "additional": {
                    "title": "追加カード",
                    "price": "¥600",
                    "description": "2枚目以降"
                },
                "monthly": {
                    "title": "月額料金",
                    "price": "¥0",
                    "description": "完全無料"
                }
            },
            "tagline": "OCR機能付きNFC名刺の業界最安値 - 通常年間11,000円の機能を3,000円で提供"
        },
        "demo": {
            "title": "デモ動画",
            "description": "AI名刺撮影デモ動画",
            "note": "（YouTubeリンク予定）"
        }
    },
    "benefits": {
        "title": "導入効果",
        "subtitle": "フリーランサーのビジネスを加速させる具体的な効果",
        "items": {
            "costReduction": {
                "title": "コスト削減",
                "metric": "¥8,000",
                "description": "従来の紙名刺5,000円+OCRアプリ6,000円→TapForge3,000円で実現"
            },
            "timeEfficiency": {
                "title": "効率化",
                "metric": "5分",
                "description": "名刺整理が50枚一括デジタル化で完了"
            },
            "businessGrowth": {
                "title": "ビジネス拡大",
                "metric": "40%",
                "description": "フォロー率が15%から向上"
            },
            "environmental": {
                "title": "環境配慮",
                "metric": "500枚",
                "description": "年間の紙削減でSDGsに貢献"
            }
        },
        "comparison": {
            "title": "詳細比較",
            "headers": {
                "item": "項目",
                "traditional": "従来の紙名刺+OCRアプリ",
                "tapforge": "TapForge"
            },
            "rows": {
                "annualCost": {
                    "item": "年間コスト",
                    "traditional": "¥11,000",
                    "tapforge": "¥3,000",
                    "tapforgeNote": "（初期費用のみ）"
                },
                "organizationTime": {
                    "item": "整理時間",
                    "traditional": "30分/50枚",
                    "tapforge": "5分",
                    "tapforgeNote": "/50枚"
                },
                "followUpRate": {
                    "item": "フォロー率",
                    "traditional": "15%",
                    "tapforge": "40%"
                },
                "multilingual": {
                    "item": "多言語対応",
                    "traditional": "なし",
                    "tapforge": "4言語",
                    "tapforgeNote": "対応"
                },
                "environmentalImpact": {
                    "item": "環境負荷",
                    "traditional": "高（紙使用）",
                    "tapforge": "ゼロ",
                    "tapforgeNote": "（ペーパーレス）"
                },
                "updateEase": {
                    "item": "更新の容易さ",
                    "traditional": "再印刷が必要",
                    "tapforge": "即座",
                    "tapforgeNote": "更新可能"
                }
            }
        },
        "target": {
            "title": "海外案件を増やしたいフリーランサーに最適",
            "description": "多言語対応とAI機能により、国際的なビジネス展開を強力にサポートします",
            "tags": {
                "global": "🌍 グローバル対応",
                "ai": "🤖 AI活用",
                "noApp": "📱 アプリ不要",
                "costReduction": "💰 コスト削減"
            }
        }
    },
    "sdgs": {
        "title": "SDGsへの貢献",
        "subtitle": "環境とキャリアを両立",
        "goals": {
            "goal12": {
                "title": "つくる責任 つかう責任",
                "items": ["ペーパーレス化", "年間500枚の紙削減", "持続可能な消費"]
            },
            "goal10": {
                "title": "人や国の不平等をなくそう",
                "items": ["4言語対応", "国際案件での不平等解消", "言語バリアの解消"]
            },
            "goal17": {
                "title": "パートナーシップで目標を達成しよう",
                "items": ["名刺交換を通じた共創", "グローバルなつながり", "技術革新の共有"]
            }
        },
        "environmental": {
            "title": "環境への配慮",
            "metrics": {
                "paperReduction": {
                    "value": "500枚",
                    "description": "年間削減される紙の枚数"
                },
                "paperless": {
                    "value": "100%",
                    "description": "ペーパーレス化の実現"
                },
                "updates": {
                    "value": "∞",
                    "description": "更新可能なデジタル名刺"
                }
            },
            "summary": "持続可能なビジネス活動で、地球環境とビジネス成長を両立"
        }
    },
    "partnerProgram": {
        "title": "共創パートナー優待制度",
        "subtitle": "長期的なパートナーシップに基づく特別価格",
        "heading": "Cor.株式会社の他のサービスをご利用中のお客様へ",
        "description": "Cor.株式会社の他のサービスを利用中の顧客には、長期的なパートナーシップに基づき特別価格で提供いたします。",
        "contactNote": "詳細はお問い合わせください。",
        "benefits": {
            "specialPrice": {
                "title": "特別価格での提供",
                "description": "既存顧客様限定の優待価格"
            },
            "prioritySupport": {
                "title": "優先サポート",
                "description": "専任担当者によるサポート"
            },
            "customization": {
                "title": "カスタマイズ対応",
                "description": "お客様のニーズに合わせた調整"
            },
            "longTermPartnership": {
                "title": "長期パートナーシップ",
                "description": "継続的な関係構築"
            }
        },
        "ctaButton": "お問い合わせ",
        "additionalInfo": "この制度は公式サイト（cor-jp.com）の内容に基づいています"
    },
    "testimonials": {
        "title": "お客様の声",
        "subtitle": "実際にご利用いただいている方々からの声",
        "items": [
            {
                "name": "鈴木様",
                "role": "Webデザイナー",
                "message": "紙名刺の整理が5分で完了！英語プロフィールで海外案件が増えました。AI名刺撮影の精度も高く、VCard変換もスムーズです。フリーランサーにとって本当に便利なサービスです。",
                "tags": ["効率化", "海外案件", "AI精度"]
            },
            {
                "name": "田中様",
                "role": "ITコンサルタント",
                "message": "アプリ不要で簡単。クライアントに好印象を与えています。多言語対応で海外のクライアントとのコミュニケーションもスムーズになりました。コストパフォーマンスも抜群です。",
                "tags": ["簡単操作", "好印象", "コスパ"]
            }
        ],
        "note": "これらの声は仮想的なものです。トライアル参加者50名の中から5件の実際のレビューを選抜して差し替える予定です。"
    },
    "faq": {
        "title": "よくある質問",
        "subtitle": "お客様からよくいただくご質問にお答えします",
        "items": [
            {
                "question": "どのスマホでもNFCは使えますか？",
                "answer": "95%のスマホで互換性があります。iPhone 7以降、Android NFC対応機種でご利用いただけます。\n具体的な対応機種については、各スマホメーカーの公式サイトをご確認ください。"
            },
            {
                "question": "名刺読み取りの精度は？",
                "answer": "AI名刺撮影・VCard変換の精度は95%です。継続的な改善により、さらなる精度向上を目指しています。\n認識に失敗した場合は、手動での修正も可能です。"
            },
            {
                "question": "デザイン変更は自分でできるのですか？",
                "answer": "管理画面から無制限でデザイン変更が可能です。\nライトカラー（白・ライトブルー・ベージュ）の3種類から選択でき、テキストや連絡先情報も簡単に更新できます。"
            },
            {
                "question": "多言語対応の使い方を教えてください",
                "answer": "4言語（日本語・英語・中国語・スペイン語）にご自身で切り替えることができます。\nプロフィール画面で表示言語を選択できるため、相手のスマートフォンの言語設定に関わらず、好きな言語でご利用いただけます。"
            },
            {
                "question": "オフラインでも使えますか？",
                "answer": "現在はオンライン環境でのご利用を推奨しています。\nオフライン機能は今後検討中です。アプリ不要のメリットを活かし、オンライン環境での安定したサービス提供を優先しています。"
            }
        ],
        "additionalHelp": {
            "title": "その他のご質問はお気軽にお問い合わせください",
            "description": "専門スタッフが丁寧にお答えいたします",
            "button": "お問い合わせ"
        }
    },
    "footer": {
        "description": "NFCデジタル名刺で世界と繋がる。AI駆動の次世代名刺であなたのビジネスを加速。",
        "tagline": "未来を先取る、スマートな出会いをすべての人へ",
        "quickLinks": {
            "title": "クイックリンク",
            "features": "特徴",
            "pricing": "料金",
            "testimonials": "お客様の声",
            "faq": "FAQ"
        },
        "contact": {
            "title": "お問い合わせ",
            "company": "Cor.株式会社",
            "trial": "無料トライアル"
        },
        "copyright": "© 2025 TapForge by Cor.株式会社. All rights reserved.",
        "legal": {
            "privacy": "プライバシーポリシー",
            "terms": "利用規約"
        }
    }
}

# Create directory and save file
os.makedirs('src/locales/ja', exist_ok=True)
with open('src/locales/ja/translation.json', 'w', encoding='utf-8') as f:
    json.dump(ja_translations, f, ensure_ascii=False, indent=2)

print("✅ Created src/locales/ja/translation.json")

# Create the English translations
en_translations = {
    "nav": {
        "home": "Home",
        "features": "Features",
        "pricing": "Pricing",
        "testimonials": "Reviews",
        "faq": "FAQ",
        "contact": "Contact"
    },
    "hero": {
        "title": "Connect with the world with a tap.",
        "subtitle": "AI-powered next-generation business card",
        "description": "to accelerate your business",
        "subDescription": "No app required, free monthly. Share multilingual profiles with one NFC tap.\nSupporting freelancers in acquiring overseas projects.",
        "cta": "Apply for Free Trial",
        "limited": "Limited to 50!",
        "features": {
            "noApp": "No App Required",
            "free": "Free Monthly",
            "multilingual": "4 Languages"
        }
    },
    "problems": {
        "title": "Business card organization is troublesome, right?",
        "subtitle": "TapForge solves it in 5 minutes!",
        "problems": {
            "title": "Freelancer Problems",
            "cost": {
                "title": "Cost of paper business cards",
                "description": "About 5,000 yen for 500 cards per year"
            },
            "organization": {
                "title": "Organization hassle",
                "description": "30+ minutes to organize 50 business cards"
            },
            "language": {
                "title": "Language barriers with overseas clients",
                "description": "Time-consuming to create English profiles"
            },
            "followup": {
                "title": "Low follow-up rate",
                "description": "Only 15% contact rate after business card exchange"
            }
        },
        "solutions": {
            "title": "TapForge Solutions",
            "cost": {
                "title": "Zero Cost",
                "description": "Only initial 3,000 yen, free monthly"
            },
            "time": {
                "title": "Complete in 5 minutes",
                "description": "AI business card shooting to VCard conversion"
            },
            "language": {
                "title": "4 Language Support",
                "description": "Japanese, English, Chinese, Spanish for international business"
            },
            "followup": {
                "title": "40% Follow-up Rate",
                "description": "Improved with AI and multilingual effects"
            }
        }
    },
    "cta": {
        "title": "Ready to get started?",
        "description": "Experience the power of TapForge with our limited free trial for 50 people",
        "trialButton": "Apply for Free Trial",
        "contactButton": "Contact (For Co-creation Partners)",
        "tapNow": "Tap Now!",
        "profileDisplay": "Profile Display",
        "features": {
            "noApp": "No App Required",
            "free": "Free Monthly",
            "multilingual": "4 Languages",
            "aiScanning": "AI Business Card Scanning"
        }
    },
    "trialForm": {
        "title": "Apply for Free Trial",
        "description": "We'll create one business card for you for free.",
        "subDescription": "Unlimited design changes, AI business card scanning & VCard conversion available",
        "contactFormTitle": "Contact Form",
        "contactFormDescription": "To apply for the free trial, please contact us through the button below.",
        "contactFormButton": "Go to Contact Form",
        "termsText": "By applying, you agree to our ",
        "termsLink": "Terms of Service",
        "andText": " and ",
        "privacyLink": "Privacy Policy",
        "agreementText": "."
    },
    # Continue for all languages...
}

os.makedirs('src/locales/en', exist_ok=True)
with open('src/locales/en/translation.json', 'w', encoding='utf-8') as f:
    json.dump(en_translations, f, ensure_ascii=False, indent=2)

print("✅ Created src/locales/en/translation.json")
print("Add other languages similarly...")