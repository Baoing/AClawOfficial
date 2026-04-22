import type { FaqItem, FaqSection } from '@/src/data/faq-data'

const shopifyCommonQuestionsFaqSection: FaqSection = {
  id: 'shopify-common',
  title: '常見',
  titleHighlight: '問題',
  defaultOpenValue: 'shopify-common-1',
  items: [
    {
      value: 'shopify-common-1',
      question: 'Shopify 是什麼？如何運作？',
      answer:
        'Shopify 是託管式電商平臺：你在 Shopify 後臺管理商品、客戶、訂單與內容，顧客通過網店（以及 POS、社交、市場等可選渠道）下單。平臺負責結帳、安全更新與擴容等基礎設施；你通過主題（Liquid / Online Store 2.0）和應用商店或定製應用擴展店鋪。你向 Shopify 支付平臺訂閱費；其他應用或定製工作可能另計費用。最新產品說明見 Shopify 官網：https://www.shopify.com',
    },
    {
      value: 'shopify-common-2',
      question: 'Shopify 大概多少錢？',
      answer:
        'Shopify 在定價頁公布各方案（Basic、Grow、Advanced，以及面向更大或更複雜商家的 Shopify Plus）：https://www.shopify.com/pricing 實際費用還包括支付手續費（因地區與方案而異）、可選應用訂閱，以及你在平臺費用之外委託主題或服務商的工作。方案與數字會更改——預算前請在 Shopify 官網或與 Shopify 確認最新價格、試用條款與 Plus 銷售信息。',
    },
    {
      value: 'shopify-common-3',
      question: '可以用自己的域名嗎？',
      answer:
        '可以。你可連接已有域名（按 Shopify 說明在註冊商處更新 DNS），或通過 Shopify 或第三方購買。網店可使用該域名作為主站；也可按設置管理子域名與重定向，用於上線或區域店鋪。',
    },
    {
      value: 'shopify-common-4',
      question: '日常運營一定要會設計或開發嗎？',
      answer:
        '日常運營通常不需要寫代碼：商家可用主題、主題編輯器、區塊與應用完成大部分陳列與配置。但在品牌與轉化判斷、以及需要定製主題/應用、結帳擴展、複雜集成或超出模板的性能與 SEO 時，仍需要設計與開發能力。許多團隊由內部運營搭配像我們這樣的夥伴承擔技術重活。',
    },
  ],
}

const generalFaqSection: FaqSection = {
  id: 'general',
  title: '公司與',
  titleHighlight: '匹配度',
  defaultOpenValue: 'general-1',
  items: [
    {
      value: 'general-1',
      question: '智爪（AI Clawers）是做什麼的？',
      answer:
        '智爪（AI Clawers）是專注 Shopify 的技術團隊，幫助品牌在 Shopify 上上線、遷移與增長：主題（Online Store 2.0 / Liquid）、公開與定製應用、適用的結帳擴展、集成（ERP、CRM、3PL、營銷）、技術 SEO 與性能。我們以務實方式使用 AI（草稿、摘要、支持工具、分析等）以節省時間；交付始終對齊 Shopify API、審核規則與您的業務結果。',
    },
    {
      value: 'general-2',
      question: '你們主要服務誰？',
      answer:
        'DTC 與全渠道商家、Shopify Plus 團隊，以及需要資深落地而非堆幻燈片的運營方。常見干係人包括創始人、電商負責人、運營與工程負責人，他們關注轉化、穩定性與路線圖風險。',
    },
    {
      value: 'general-3',
      question: '只做 Shopify 嗎？',
      answer:
        'Shopify 是我們的核心：店鋪、後臺、結帳可擴展性與應用生態。我們也會通過集成接觸相鄰系統（ERP、客服、數據倉庫），但不定位為「任意技術棧」的通用外包。',
    },
    {
      value: 'general-4',
      question: '與通用軟體外包有什麼不同？',
      answer:
        '我們在 Shopify 產品面向上有深度：Liquid 與主題架構、Admin / Storefront API、應用形態、Plus B2B、Markets、性能與 SEO 約束，以及哪些能過審。我們用商家語言討論取捨（轉化、可維護性、交付周期），並把假設寫清楚，便於交接可執行。',
    },
    {
      value: 'general-5',
      question: '能與內部團隊或其他代理協作嗎？',
      answer:
        '可以。我們常作為內部開發或其他代理的補充——明確倉庫、分支、環境與發布窗口的所有權。我們可以主導交付、在風險區（結帳、庫存）結對，或在你們負責日常運營時承接明確工作流。',
    },
  ],
}

const servicesAndFeaturesFaqSection: FaqSection = {
  id: 'services',
  title: 'Shopify',
  titleHighlight: '交付',
  defaultOpenValue: 'services-1',
  items: [
    {
      value: 'services-1',
      question: '什麼時候需要定製應用，而不是改主題或用現成應用？',
      answer:
        '在以下情況定製應用（或主題+應用拆分）更合適：(1) 需要服務端邏輯、密鑰、定時任務或不宜放在瀏覽器的持久寫入；(2) 要擴展後臺、結帳或客戶帳戶工作流，且現成應用無法匹配；(3) 多內部系統需要統一編排、日誌與重試；(4) Liquid/主題在陳列規則、資格或定價邏輯上遇到限制，且需跨渠道一致。若變更純屬視覺、導航或內容，通常主題更新或元對象即可——我們會在調研階段如實說明。',
    },
    {
      value: 'services-2',
      question: '你們做會上架 Shopify 應用商店的應用嗎？',
      answer:
        '若以產品化應用為目標，我們會遵循 Shopify 對嵌入式應用、OAuth、計費與審核的要求。我們也為單一商家或 Plus 組織構建非應用商店分發的定製應用，以在私有分發與速度之間取捨。路逕取決於分發方式、合規以及由誰承擔託管與維護。',
    },
    {
      value: 'services-3',
      question: '能從其他平臺遷移到 Shopify 嗎？',
      answer:
        '可以——目錄、客戶（在政策允許範圍內）、訂單歷史策略、重定向、應用與主題。遷移會圍繞 SEO、庫存真實性與切換風險規劃。我們會記錄哪些可乾淨映射、哪些需分階段（如訂閱、B2B 合同、自定義促銷）。',
    },
    {
      value: 'services-4',
      question: '支持 Shopify Plus 與 B2B 嗎？',
      answer:
        '支持。公司帳戶、目錄、價目表、草稿訂單、結帳規則，以及體量上來後的運營邊界情況都在範圍內。我們會把 Plus 配置對齊銷售團隊的真實售賣方式，而不僅是後臺裡「技術上可行」。',
    },
    {
      value: 'services-5',
      question: '是否覆蓋性能與技術 SEO？',
      answer:
        '會，作為主題工作或專項：關注核心指標的素材策略、腳本衛生、結構化數據、分頁與分面導航控制，以及國際化 / Markets。我們衡量對付費與自然流量真正重要的 URL，而非只看虛榮分數。',
    },
    {
      value: 'services-6',
      question: 'AI 在你們交付裡扮演什麼角色？',
      answer:
        '在能減少重複勞動或帶護欄加速決策時使用 AI，例如基於訂單事實的客服草稿、經人工審核的內容草稿或內部分析。我們不賣與具體 Shopify 交付脫節的「AI 轉型」。面向客戶或合規敏感的內容默認由人負責，除非您書面確認承擔風險。',
    },
  ],
}

const pricingAndBillingFaqSection: FaqSection = {
  id: 'pricing',
  title: '定價與',
  titleHighlight: '合作方式',
  defaultOpenValue: 'pricing-1',
  items: [
    {
      value: 'pricing-1',
      question: 'Shopify 諮詢與開發如何計費？',
      answer:
        '費用取決於範圍、風險與周期。調研後我們通常對邊界清晰的工作給出固定價裡程碑方案（主題切片、應用 MVP、遷移階段），或在不確定仍較大時採用工時+上限封頂。每份報價都綁定交付物、假設與明確排除項。',
    },
    {
      value: 'pricing-2',
      question: '聯合開發如何計費？',
      answer:
        '聯合開發按實際工作計費——結合需求說明、用戶流、集成清單與驗收標準評估工作量（設計、開發、測試、上線、交接）。若貴方承擔部分開發，我們只對自有工作流收費（例如結帳擴展+測試），並對代碼評審與發布責任對齊。費率和結構在開工前確認；範圍變更走簡短變更申請以保持預算可控。',
    },
    {
      value: 'pricing-3',
      question: '要給出可靠估算，需要你們提供什麼？',
      answer:
        '簡要需求：業務目標、當前 Shopify 方案、問題陳述、連結或錄屏、在合適時提供後臺訪問、不可協商的日期與技術約束（ERP、在用的應用、定製結帳）。應用若有用戶故事或線框更佳；若尚無，可先進行付費調研衝刺再報價。',
    },
    {
      value: 'pricing-4',
      question: '是否要求定金或裡程碑付款？',
      answer:
        '多數項目採用定金+與交付物對齊的裡程碑（如主題籤核、應用進入審核、遷移演練）。具體條款見工作說明書。除非範圍真正固定，我們避免大型項目一次性全款。',
    },
    {
      value: 'pricing-5',
      question: '是否提供駐場或上線後支持？',
      answer:
        '提供——上線後常見月度駐場用於小功能、監控、應用/API 維護與事件支持。駐場時間可用於待辦梳理、季節性活動與內部團隊協同。也支持按次；駐場客戶在響應時間上優先。',
    },
    {
      value: 'pricing-6',
      question: '能否只做調研、不做完整建設？',
      answer:
        '可以。當需求模糊或干係人未對齊時，短期調研會產出書面建議：選項、取捨、粗略量級成本與風險。你可持該文檔另尋供應商；許多客戶在路徑清晰後繼續與我們實施。',
    },
  ],
}

const privacyAndSecurityFaqSection: FaqSection = {
  id: 'privacy',
  title: '數據與',
  titleHighlight: '訪問',
  defaultOpenValue: 'privacy-1',
  items: [
    {
      value: 'privacy-1',
      question: '客戶與訂單數據由誰持有？',
      answer:
        '對店鋪運營，除非您另有架構設計，Shopify 仍是客戶與訂單的記錄系統。我們配置 Shopify、應用與集成以按您的政策處理數據。我們不出售商家數據；我們側如何保存聯繫與項目溝通，請見隱私政策。',
    },
    {
      value: 'privacy-2',
      question: '能否籤署 NDA 或填寫供應商安全問卷？',
      answer:
        '在需要時可以。我們常在雙向 NDA 下工作，並可就後臺訪問與集成填寫合理安全問卷。高度定製的企業評審可能增加準備時間——通常在高階匹配通話後安排。',
    },
    {
      value: 'privacy-3',
      question: '如何安全訪問我們的 Shopify 後臺？',
      answer:
        '我們使用協作者或員工帳號並按最小權限原則；避免共享密碼，並記錄接觸的應用與定製。代碼優先使用您的 Git 組織或您可控的分叉流程。項目結束會移除或降級權限，除非駐場協議另有約定。',
    },
    {
      value: 'privacy-4',
      question: '項目郵件與文件保留多久？',
      answer:
        '我們會在質保、爭議解決與連續性所需期限內保留項目往來與產物——通常按合同，常見 12–24 個月，除非您要求更短刪除（受法律保全限制）。入職時可詢問細則。',
    },
  ],
}

const technicalSupportFaqSection: FaqSection = {
  id: 'technical',
  title: '平臺與',
  titleHighlight: '工程',
  defaultOpenValue: 'technical-1',
  items: [
    {
      value: 'technical-1',
      question: '能在我們現有主題或應用代碼庫上工作嗎？',
      answer:
        '可以。我們先做短審計：依賴、技術債、性能熱點與升級路徑。在承諾日期前會標出風險區（結帳、庫存、第三方腳本）。若重寫比持續打補丁更划算，我們會儘早說明。',
    },
    {
      value: 'technical-2',
      question: '如何處理 Shopify API 版本與破壞性變更？',
      answer:
        '在應用中固定 Admin 與 Storefront API 版本，跟蹤發布說明，並安排帶回歸檢查的升級窗口。公開應用對齊 Partner 控制臺要求。主題遵循 Online Store 2.0 與隨 API 演進的區塊兼容性。',
    },
    {
      value: 'technical-3',
      question: '結帳定製怎麼做？',
      answer:
        '使用 Checkout UI 擴展、Functions 與 Shopify 支持的模式——避免依賴會在平臺更新時失效的「黑魔法」。範圍會結合您的方案（Plus 與否）與審核約束校驗；複雜規則在上線前有明確測試矩陣。',
    },
    {
      value: 'technical-4',
      question: '支持 Hydrogen / 無頭嗎，還是只做 Liquid 店鋪？',
      answer:
        '我們主要交付 Online Store 2.0 Liquid 店鋪與定製應用——多數商家性價比最高。當無頭或 Hydrogen 更合適（獨特體驗、嚴格性能、多前端）時，我們會明確範圍，包括託管、SEO 與運維歸屬。默認不會為了「時髦」推薦無頭。',
    },
    {
      value: 'technical-5',
      question: '上線後如何獲得支持？',
      answer:
        '通過聯繫頁郵箱或項目渠道聯繫。駐場客戶有約定響應目標；按次請求按檔期安排。對我們交付系統的關鍵生產問題，按合同質保與支持條款處理。',
    },
  ],
}

const gettingStartedFaqSection: FaqSection = {
  id: 'getting-started',
  title: '如何',
  titleHighlight: '開始',
  defaultOpenValue: 'getting-started-1',
  items: [
    {
      value: 'getting-started-1',
      question: '如何啟動合作？',
      answer:
        '發送簡要需求或使用聯繫表單。我們通常會先回復澄清問題，再安排調研通話。若匹配，會收到書面方案或工作說明書（範圍、裡程碑與費用）。在籤署與 SOW 約定的定金後開始工作。',
    },
    {
      value: 'getting-started-2',
      question: '典型項目周期多長？',
      answer:
        '差異很大：聚焦的主題切片可能數周；完整遷移或多端應用可能數月。周期受審批、第三方（ERP、支付）、內容就緒度與應用審核等影響。調研後會給區間，再隨計劃收窄。',
    },
    {
      value: 'getting-started-3',
      question: '首次工作坊前要準備什麼？',
      answer:
        '目標與成功指標、痛點截圖或錄屏、應用與集成清單、固定上線日期、決策人（電商、運營、法務）。技術負責人可分享倉庫訪問或架構說明（如相關）。',
    },
    {
      value: 'getting-started-4',
      question: '溝通與交付常用哪些工具？',
      answer:
        '通常包括郵件、Slack 或 Teams、GitHub/GitLab/Bitbucket、Figma，以及 Notion 或 Google 文檔記錄決策與手冊。在合理範圍內匹配您的工具棧。',
    },
    {
      value: 'getting-started-5',
      question: '是否跨時區協作？',
      answer:
        '可以。我們通過固定窗口與北美、歐洲及亞太客戶重疊安排站會與評審；關鍵發布在 SOW 中約定明確的「集中值守」時段。',
    },
  ],
}

export {
  generalFaqSection,
  gettingStartedFaqSection,
  pricingAndBillingFaqSection,
  privacyAndSecurityFaqSection,
  servicesAndFeaturesFaqSection,
  shopifyCommonQuestionsFaqSection,
  technicalSupportFaqSection,
}
