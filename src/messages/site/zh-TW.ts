import { siteEn } from '@/src/messages/site/en'
import { pricingSiteMessagesZhTW } from '@/src/messages/site/pricing-messages-zh-tw'

/** Traditional Chinese — overrides every `siteEn` key for full UI coverage. */
export const siteZhTWPatch: { [K in keyof typeof siteEn]: string } = {
  'brand.name': '智爪（AI Clawers）',
  'brand.footerMark': '智爪',
  'brand.logoAlt': '智爪 AI Clawers',
  'brand.homeAria': '智爪首頁',
  'company.legalEntity': 'AI CLAWERS SOLUTIONS LIMITED',
  'company.legalNameZh': '智爪集成有限公司',
  'company.channelwill': '渠網科技（Channelwill）',

  'footer.tagline':
    '智慧 Shopify 支援——上線、修復與成長，讓你少折騰後台，把時間留給客戶與銷售。',
  'footer.legalNote': '智爪（AI Clawers）品牌的法律主體說明。',
  'footer.col.company': '公司',
  'footer.col.support': '支援',
  'footer.col.legal': '法律政策',
  'footer.link.about': '關於我們',
  'footer.link.cases': '案例研究',
  'footer.link.pricing': '定價',
  'footer.link.blogs': '部落格',
  'footer.link.faq': '常見問題',
  'footer.link.tutorial': 'Shopify 教學',
  'footer.link.terms': '條款與條件',
  'footer.link.privacy': '隱私權政策',
  'footer.link.gdpr': 'GDPR 合規',

  'footer.newsletter.title': '訂閱我們的電子報',
  'footer.newsletter.sub': '取得最新動態與更新。',
  'footer.newsletter.placeholder': '輸入電子郵件',
  'footer.newsletter.submit': '訂閱',
  'footer.newsletter.disclaimer': '訂閱即表示您同意我們的',
  'footer.newsletter.privacy': '隱私權政策',

  'footer.bottom.copyright': '保留所有權利。',
  'footer.bottom.privacy': '隱私權政策',
  'footer.bottom.terms': '服務條款',
  'footer.bottom.cookies': 'Cookie 設定',

  'home.hero.line1': '智慧 Shopify 服務',
  'home.hero.line2': '助力上線與商店成長',
  'home.hero.sub':
    '我們處理架設、速度與修復等硬核工作，讓你專注客戶與銷售。',
  'home.hero.ctaCases': '查看案例',
  'home.hero.imgAlt': 'Shopify 店面、營運後台、分析與自動化示意',

  'home.impact.title1': '新銳團隊，',
  'home.impact.title2': '扎實交付',
  'home.stat.shipped': '已交付的 Shopify 專案',
  'home.stat.reviews': '合作夥伴五星好評',
  'home.stat.hours': '為團隊省下的營運工時',
  'home.stat.shippedAria': '42 個以上已交付的 Shopify 專案',
  'home.stat.reviewsAria': '100% 五星合作夥伴評價',
  'home.stat.hoursAria': '6 萬以上返還給團隊的營運工時',
  'home.impact.ariaGrid': '影響力數據卡片',
  'home.hours.ariaCard': '透過自動化返還的營運工時示意',
  'home.hours.pill.sync': '同步',
  'home.hours.pill.process': '流程',
  'home.hours.pill.flow': '流轉',
  'home.hours.pill.grow': '成長',

  'home.projects.h1': '真實成果',
  'home.projects.h2': '在 Shopify 上的建站、應用與主題',
  'home.projects.sub': '上線、自訂應用與效能優化——真實商家與真實排程，不空談。',
  'home.projects.cta': '查看 Shopify 作品',

  'home.testimonial.h1': '商家如何評價',
  'home.testimonial.h2': '我們的 Shopify 服務',

  'home.blog.h1': 'Shopify 實踐筆記',
  'home.blog.h2': '與務實 AI',
  'home.blog.sub':
    '主題、應用、效能與副駕式工具——寫給商家與並肩交付的團隊。',
  'home.blog.cta': '瀏覽部落格',

  'home.faq.h1': 'Shopify 常見問題，',
  'home.faq.h2': '一次講清',
  'home.faq.sub':
    '關於 Shopify、週期與合作方式的直給回答——聯絡前先了解我們。',
  'home.faq.q1.question': '你們建議我用什麼平台開店？',
  'home.faq.q1.answer':
    '若希望後台直覺、電商能力開箱即用，我們通常推薦 Shopify。它既能服務小眾品牌，也能承載更大目錄，並與行銷、履約與分析工具順暢銜接，便於逐步擴展而無需推倒重來。',
  'home.faq.q2.question': '我的 Shopify 商店在手機上友善嗎？',
  'home.faq.q2.answer':
    '會。我們把響應式版面當作預設而非附加項目。店面在手機與平板上應易讀、易點——多數訪客在此瀏覽，細微摩擦會悄悄拉低轉換。',
  'home.faq.q3.question': '我能輕鬆自己編輯商店嗎？',
  'home.faq.q3.answer':
    '我們盡量讓日常更新留在 Shopify 後台完成——商品、系列、頁面與基礎內容區塊可由團隊自行維護。我們也會說明哪些部分較適合依清單謹慎調整；需要大改或季節性上線時，我們仍可協助。',
  'home.faq.q4.question': '會做哪些基礎 SEO？',
  'home.faq.q4.answer':
    '我們把 SEO 視為健康上線的一部分。通常包括清晰的標題與描述、乾淨的 URL、在我們可控範圍內的快速主題結構、在有助益時使用結構化資料，以及合理的內部連結。若要在內容或站外能見度上更進一步，可在店面基礎穩固後另案規劃範圍。',
  'home.faq.q5.question': '服務大概多少錢？',
  'home.faq.q5.answer':
    '取決於需求——新建、改版、遷移、應用或持續維運。請說明目標與排期，我們會給出訂製報價與分階段方案，避免為尚不需要的工作付費。',
  'home.faq.q6.question': '專案結束後還有持續支援嗎？',
  'home.faq.q6.answer':
    '有。許多團隊希望在上線後有一段輕量維護期處理修復、應用更新與小改進。也可約定簡單節奏——如季節性發布、結帳微調或效能巡檢——讓網站在上線後仍保持鋒利。',
  'home.faq.q7.question': '完成一個 Shopify 網站要多久？',
  'home.faq.q7.answer':
    '週期隨複雜度變化：聚焦的煥新可能數週，而完整改版、遷移或應用較重的搭建通常需要更長週期。我們會 upfront 約定里程碑並保持溝通，讓你清楚下一步交付什麼、為何如此。',

  'home.why.h1': '為什麼需要',
  'home.why.h2': '專業的 Shopify 開發？',
  'home.why.sub':
    '我們打造能吸引使用者並帶動銷售的訂製 Shopify 商店；方案貼合業務目標，並提供出色的購物體驗。',
  'home.subscribe.h1': '即時掌握',
  'home.subscribe.h2': '智爪動態',
  'home.subscribe.sub': '訂閱電子報，取得 AI 與電商領域的趨勢、觀點與案例。',
  'home.subscribe.placeholder': '輸入電子郵件',
  'home.subscribe.label': '輸入電子郵件',
  'home.subscribe.submit': '訂閱',
  'home.subscribe.cta': '立即訂閱',

  'home.empower.aria': '面向商家的 Shopify 主題、效能、應用與 AI 副駕',
  'home.empower.ariaCards': 'Shopify 技術服務展示',
  'home.empower.h1': '主題、應用與',
  'home.empower.h2': '店面最佳化，結合務實 AI',
  'home.empower.sub':
    '可上線的 Liquid、更快的核心指標、安全的結帳改動與後台私有應用——搭配能減負而非添亂的 AI 副駕。',
  'home.innov.title1': '四種方式助力',
  'home.innov.title2': '在 Shopify 上搭建、調校、擴展與成長',
  'home.innov.sub': '店面、主題、應用與克制的 AI——讓團隊高效交付、少噪音。',
  'home.innov.card1.title': '建站與最佳化',
  'home.innov.card1.desc':
    '上線、遷移、按需的 OS 2.0 重構。\n速度、SEO、無障礙與結帳檢查，讓商店在高流量下仍穩。',
  'home.innov.card2.title': '主題與 Liquid',
  'home.innov.card2.desc':
    '區塊庫、中繼資料與多市場體驗，團隊可自行維護。\nLiquid 結構清晰，隨促銷與陳列演進仍可讀。',
  'home.innov.card3.title': '自訂應用',
  'home.innov.card3.desc':
    '面向商家日常後台的私有與嵌入式應用。\n打通目錄、財務與履約，與前台保持一致。',
  'home.innov.card4.title': 'AI 助力成長',
  'home.innov.card4.desc':
    '圍繞你的規則，為陳列、內容與支援提供副駕。\n輸出綁定 Shopify 資料，提速不失品牌控制。',
  'home.innov.cta': '查看全部服務',

  'shared.cta.h1': '打造更快的',
  'shared.cta.h2': 'Shopify 店面。',
  'shared.cta.sub':
    '主題、結帳體驗、應用與 Flow——告訴我們目錄與市場，我們給出可落地的建設方案。',
  'shared.cta.btn': '規劃專案',

  'contact.h1': '與我們',
  'contact.h2': '聯繫',
  'contact.sub': '有想法？一起把它落地。',
  'contact.email': '電子郵件',
  'contact.phone': '電話',
  'contact.phFullName': '姓名',
  'contact.phEmail': '電子郵件地址',
  'contact.phCompany': '公司名稱',
  'contact.phPhone': '電話',
  'contact.phSubject': '主旨',
  'contact.phMessage': '留言內容',
  'contact.submit': '送出',

  'faqContact.title': '還有疑問？',
  'faqContact.sub': '告訴我們商店、排程與市場——我們會回覆下一步。',
  'faqContact.phName': '您的姓名',
  'faqContact.phEmail': '您的電子郵件',
  'faqContact.phSubject': '主旨',
  'faqContact.phQuestions': '您的問題',
  'faqContact.submit': '聯絡我們',

  'pricing.title': '透明定價',
  'pricing.titleMuted': 'Shopify 開發',
  'pricing.sub':
    '美元為稅前起點，不含 Shopify 月費、應用與網域等。具體以溝通後的書面報價為準，卡片數字便於先做預算對齊。',

  'pricingInclude.h1': '各檔一致的',
  'pricingInclude.h2': '交付方式',
  'pricingInclude.sub':
    '範圍隨目錄與設計深度變化，但合作方式不變：清晰里程碑、原生 Shopify 交付、上線後仍可迭代。',
  'pricingInclude.li1': '溝通紀要 + 書面範圍後再開工',
  'pricingInclude.li2': '預演主題、QA 與上線清單',
  'pricingInclude.li3': '面向後台的交接與培訓時間',
  'pricingInclude.li4': '按需連接分析與 Search Console',
  'pricingInclude.li5': '套餐內 30 天上線後支援窗口',
  'pricingInclude.li6': '可按季發布與升級簽訂輕量駐場',

  'nav.platform.blog': '部落格',
  'nav.platform.guides': '指南',
  'nav.platform.card1.title': 'Storefront MCP',
  'nav.platform.card1.sub': '工具鏈、庫存真相與上線前測試要點。',
  'nav.platform.card2.title': 'AI 工具包',
  'nav.platform.card2.sub': '把編輯器接到 Shopify 文件、Schema 與 Dev MCP。',

  'nav.res.pricing': '定價',
  'nav.res.blog': '部落格',
  'nav.res.tutorial': '教學',
  'nav.res.faq': '常見問題',
  'nav.res.support': '支援',
  'nav.res.contact': '聯絡',
  'nav.res.success': '成功案例',

  'nav.plan.termsTitle': '條款與條件',
  'nav.plan.termsDesc': '使用條款與約定',
  'nav.plan.privacyTitle': '隱私權政策',
  'nav.plan.privacyDesc': '我們如何處理您的資料',
  'nav.plan.gdprTitle': 'GDPR',
  'nav.plan.gdprDesc': '資料保護與合規',
  'nav.plan.tutorialTitle': 'Shopify 教學',
  'nav.plan.tutorialDesc': '專業教學與文件',

  'nav.co.aboutTitle': '關於我們',
  'nav.co.aboutDescBefore': '團隊來自 ',
  'nav.co.aboutDescAfter': '，擁有多年 Shopify 實踐背景；專注我們的工作方式與交付結果。',
  'nav.co.whyTitle': '為何選擇我們',
  'nav.co.whyDesc': '深度、涵蓋面、判斷力與以客戶贏為目標',
  'nav.co.manifestoTitle': '我們的主張',
  'nav.co.manifestoDesc': '範圍、交付與交接的原則',
  'nav.co.customersTitle': '客戶',
  'nav.co.customersDesc': '我們服務誰、專案如何啟動',
  'nav.co.testimonialsTitle': '客戶評價',
  'nav.co.testimonialsDesc': '商家如何評價我們的 Shopify 工作',
  'nav.co.casesTitle': '案例研究',
  'nav.co.casesDesc': '主題、應用與整合的成稿',
  'nav.co.servicesTitle': '服務',
  'nav.co.servicesDesc': '主題、應用、遷移與整合',
  'nav.co.usecasesTitle': '使用情境',
  'nav.co.usecasesDesc': '在 Shopify 上反覆解決的問題',
  'nav.co.whatsNew': '最新動態',
  'nav.co.studioTitle': '工作室動態',
  'nav.co.studioSub': 'Shopify 實驗與更新日誌式文章。',
  'nav.co.studioCardAria': '在部落格閱讀工作室動態',

  'about.company.h1The': '關於',
  'about.company.h1Muted': '公司',
  'about.company.subMid': '是本網站呈現的品牌；',
  'about.company.subEnd': '為該品牌背後的法律營運主體。',
  'about.company.cardBrandTitle': '品牌',
  'about.company.cardBrandBody':
    '智爪（AI Clawers）是商家與合作夥伴認識我們工作的方式：Shopify 店面、主題、應用、Flow、整合與效能——結果優先於口號。',
  'about.company.cardLegalTitle': '法律主體',
  'about.company.cardLegalNote': '合約、對公函件與正式往來以該註冊名稱為準。',
  'about.company.cardContactTitle': '聯絡',
  'about.company.cardContactBody': '專案範圍、合作與媒體：我們會閱讀寄至團隊信箱的每一封郵件。',

  'about.team.h2': '重經驗而非堆人頭',
  'about.team.sub': '小而精的資深團隊，深耕頭部 Shopify SaaS——不是占位式履歷牆。',
  'about.team.p1Before': '我們的實踐者來自',
  'about.team.p1After':
    '這家一流 Shopify SaaS 公司。整體上，我們在店面、Liquid 主題、公開與訂製應用、SEO 與效能方面擁有約七年的實操經驗。',
  'about.team.p2':
    '這段背景包含透過產品級工具與實施工作服務數以萬計商家——我們現在把同樣的經驗直接用於需要清晰交付、而非堆簡報的品牌。',
  'about.team.p3':
    '我們堅持「客戶贏」：你的轉換、穩定性、交付速度與可維護性優先。我們在調研、建設、上線與迭代中保持貼近。',

  'about.ai.h2Line1': 'Shopify 交付',
  'about.ai.h2Muted': '以客戶成功為先',
  'about.ai.subBefore': '我們把',
  'about.ai.subAfter':
    '級產品體驗與精品式注意力結合：層級更少、責任更清晰，工作直接映射到收入、可靠性與路線圖速度。',
  'about.ai.cardVisionTitle': '願景',
  'about.ai.cardVisionBody':
    '當 Shopify 實施快速、可維護且對取捨誠實，商家才會贏。我們希望每次上線與迭代都能複利——今天架構乾淨，明天成長更輕鬆——在明顯節省時間或改進決策之處使用 AI，而不是噱頭。',
  'about.ai.cardMissionTitle': '使命',
  'about.ai.cardMissionBody':
    '交付務實的 Shopify 工作：新店與遷移、Online Store 2.0 主題、應用與後台擴充、整合、技術 SEO 與效能。貼近利害關係人、記錄假設，並以你的結果衡量成功——而非我們的 buzzword。',

  'meta.about.title': '關於我們 | 智爪（AI Clawers）— 智爪集成有限公司',
  'meta.about.description':
    '智爪集成有限公司營運智爪（AI Clawers）品牌：專注 Shopify 的交付團隊，來自渠網科技（Channelwill）等實踐背景——店面、主題、應用、SEO 與整合，以商家結果為先。',

  'meta.faq.title': '常見問題 | Shopify 建站、應用與定價 | 智爪（AI Clawers）',
  'meta.faq.description':
    '面向商家與團隊的常見問題：Shopify 是什麼、定價與網域、設計與開發需求、應用與定價、遷移及如何開始合作。',

  'meta.pricing.title': '定價 | Shopify 開發 | 智爪（AI Clawers）',
  'meta.pricing.description': 'Shopify 建設起步區間——在調研後我們會再確認書面報價。',

  'meta.contact.title': '聯絡我們 | 智爪（AI Clawers）',
  'meta.contact.description': '聯絡智爪（AI Clawers）。我們通常在 24 小時內回覆，歡迎諮詢方案與支援。',

  'meta.services.title': 'Shopify 服務 | 智爪（AI Clawers）',
  'meta.services.description':
    '店面建設、設計、主題訂製、訂製應用、技術 SEO、GEO、AI 整合與自動化——以可維護性與商家結果為導向進行範圍界定。',

  'faqPage.h1Strong': '常見',
  'faqPage.h1Muted': '問題',
  'faqPage.sub':
    '關於 Shopify 建站、訂製應用、定價、聯合開發、資料權限與如何啟動的務實說明——聯絡前即可了解預期。',

  ...pricingSiteMessagesZhTW,
}
