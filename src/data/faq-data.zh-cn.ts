import type { FaqSection } from '@/src/data/faq-data'

const shopifyCommonQuestionsFaqSection: FaqSection = {
  id: 'shopify-common',
  title: '常见',
  titleHighlight: '问题',
  defaultOpenValue: 'shopify-common-1',
  items: [
    {
      value: 'shopify-common-1',
      question: 'Shopify 是什么？如何运作？',
      answer:
        'Shopify 是托管式电商平台：你在 Shopify 后台管理商品、客户、订单与内容，顾客通过网店（以及 POS、社交、市场等可选渠道）下单。平台负责结账、安全更新与扩容等基础设施；你通过主题（Liquid / Online Store 2.0）和应用商店或定制应用扩展店铺。你向 Shopify 支付平台订阅费；其他应用或定制工作可能另计费用。最新产品说明见 Shopify 官网：https://www.shopify.com',
    },
    {
      value: 'shopify-common-2',
      question: 'Shopify 大概多少钱？',
      answer:
        'Shopify 在定价页公布各方案（Basic、Grow、Advanced，以及面向更大或更复杂商家的 Shopify Plus）：https://www.shopify.com/pricing 实际费用还包括支付手续费（因地区与方案而异）、可选应用订阅，以及你在平台费用之外委托主题或服务商的工作。方案与数字会更改——预算前请在 Shopify 官网或与 Shopify 确认最新价格、试用条款与 Plus 销售信息。',
    },
    {
      value: 'shopify-common-3',
      question: '可以用自己的域名吗？',
      answer:
        '可以。你可连接已有域名（按 Shopify 说明在注册商处更新 DNS），或通过 Shopify 或第三方购买。网店可使用该域名作为主站；也可按设置管理子域名与重定向，用于上线或区域店铺。',
    },
    {
      value: 'shopify-common-4',
      question: '日常运营一定要会设计或开发吗？',
      answer:
        '日常运营通常不需要写代码：商家可用主题、主题编辑器、区块与应用完成大部分陈列与配置。但在品牌与转化判断、以及需要定制主题/应用、结账扩展、复杂集成或超出模板的性能与 SEO 时，仍需要设计与开发能力。许多团队由内部运营搭配像我们这样的伙伴承担技术重活。',
    },
  ],
}

const generalFaqSection: FaqSection = {
  id: 'general',
  title: '公司与',
  titleHighlight: '匹配度',
  defaultOpenValue: 'general-1',
  items: [
    {
      value: 'general-1',
      question: '智爪（AI Clawers）是做什么的？',
      answer:
        '智爪（AI Clawers）是专注 Shopify 的技术团队，帮助品牌在 Shopify 上上线、迁移与增长：主题（Online Store 2.0 / Liquid）、公开与定制应用、适用的结账扩展、集成（ERP、CRM、3PL、营销）、技术 SEO 与性能。我们以务实方式使用 AI（草稿、摘要、支持工具、分析等）以节省时间；交付始终对齐 Shopify API、审核规则与您的业务结果。',
    },
    {
      value: 'general-2',
      question: '你们主要服务谁？',
      answer:
        'DTC 与全渠道商家、Shopify Plus 团队，以及需要资深落地而非堆幻灯片的运营方。常见干系人包括创始人、电商负责人、运营与工程负责人，他们关注转化、稳定性与路线图风险。',
    },
    {
      value: 'general-3',
      question: '只做 Shopify 吗？',
      answer:
        'Shopify 是我们的核心：店铺、后台、结账可扩展性与应用生态。我们也会通过集成接触相邻系统（ERP、客服、数据仓库），但不定位为“任意技术栈”的通用外包。',
    },
    {
      value: 'general-4',
      question: '与通用软件外包有什么不同？',
      answer:
        '我们在 Shopify 产品面向上有深度：Liquid 与主题架构、Admin / Storefront API、应用形态、Plus B2B、Markets、性能与 SEO 约束，以及哪些能过审。我们用商家语言讨论取舍（转化、可维护性、交付周期），并把假设写清楚，便于交接可执行。',
    },
    {
      value: 'general-5',
      question: '能与内部团队或其他代理协作吗？',
      answer:
        '可以。我们常作为内部开发或其他代理的补充——明确仓库、分支、环境与发布窗口的所有权。我们可以主导交付、在风险区（结账、库存）结对，或在你们负责日常运营时承接明确工作流。',
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
      question: '什么时候需要定制应用，而不是改主题或用现成应用？',
      answer:
        '在以下情况定制应用（或主题+应用拆分）更合适：(1) 需要服务端逻辑、密钥、定时任务或不宜放在浏览器的持久写入；(2) 要扩展后台、结账或客户账户工作流，且现成应用无法匹配；(3) 多内部系统需要统一编排、日志与重试；(4) Liquid/主题在陈列规则、资格或定价逻辑上遇到限制，且需跨渠道一致。若变更纯属视觉、导航或内容，通常主题更新或元对象即可——我们会在调研阶段如实说明。',
    },
    {
      value: 'services-2',
      question: '你们做会上架 Shopify 应用商店的应用吗？',
      answer:
        '若以产品化应用为目标，我们会遵循 Shopify 对嵌入式应用、OAuth、计费与审核的要求。我们也为单一商家或 Plus 组织构建非应用商店分发的定制应用，以在私有分发与速度之间取舍。路径取决于分发方式、合规以及由谁承担托管与维护。',
    },
    {
      value: 'services-3',
      question: '能从其他平台迁移到 Shopify 吗？',
      answer:
        '可以——目录、客户（在政策允许范围内）、订单历史策略、重定向、应用与主题。迁移会围绕 SEO、库存真实性与切换风险规划。我们会记录哪些可干净映射、哪些需分阶段（如订阅、B2B 合同、自定义促销）。',
    },
    {
      value: 'services-4',
      question: '支持 Shopify Plus 与 B2B 吗？',
      answer:
        '支持。公司账户、目录、价目表、草稿订单、结账规则，以及体量上来后的运营边界情况都在范围内。我们会把 Plus 配置对齐销售团队的真实售卖方式，而不仅是后台里“技术上可行”。',
    },
    {
      value: 'services-5',
      question: '是否覆盖性能与技术 SEO？',
      answer:
        '会，作为主题工作或专项：关注核心指标的素材策略、脚本卫生、结构化数据、分页与分面导航控制，以及国际化 / Markets。我们衡量对付费与自然流量真正重要的 URL，而非只看虚荣分数。',
    },
    {
      value: 'services-6',
      question: 'AI 在你们交付里扮演什么角色？',
      answer:
        '在能减少重复劳动或带护栏加速决策时使用 AI，例如基于订单事实的客服草稿、经人工审核的内容草稿或内部分析。我们不卖与具体 Shopify 交付脱节的“AI 转型”。面向客户或合规敏感的内容默认由人负责，除非您书面确认承担风险。',
    },
  ],
}

const pricingAndBillingFaqSection: FaqSection = {
  id: 'pricing',
  title: '定价与',
  titleHighlight: '合作方式',
  defaultOpenValue: 'pricing-1',
  items: [
    {
      value: 'pricing-1',
      question: 'Shopify 咨询与开发如何计费？',
      answer:
        '费用取决于范围、风险与周期。调研后我们通常对边界清晰的工作给出固定价里程碑方案（主题切片、应用 MVP、迁移阶段），或在不确定仍较大时采用工时+上限封顶。每份报价都绑定交付物、假设与明确排除项。',
    },
    {
      value: 'pricing-2',
      question: '联合开发如何计费？',
      answer:
        '联合开发按实际工作计费——结合需求说明、用户流、集成清单与验收标准评估工作量（设计、开发、测试、上线、交接）。若贵方承担部分开发，我们只对自有工作流收费（例如结账扩展+测试），并对代码评审与发布责任对齐。费率和结构在开工前确认；范围变更走简短变更申请以保持预算可控。',
    },
    {
      value: 'pricing-3',
      question: '要给出可靠估算，需要你们提供什么？',
      answer:
        '简要需求：业务目标、当前 Shopify 方案、问题陈述、链接或录屏、在合适时提供后台访问、不可协商的日期与技术约束（ERP、在用的应用、定制结账）。应用若有用户故事或线框更佳；若尚无，可先进行付费调研冲刺再报价。',
    },
    {
      value: 'pricing-4',
      question: '是否要求定金或里程碑付款？',
      answer:
        '多数项目采用定金+与交付物对齐的里程碑（如主题签核、应用进入审核、迁移演练）。具体条款见工作说明书。除非范围真正固定，我们避免大型项目一次性全款。',
    },
    {
      value: 'pricing-5',
      question: '是否提供驻场或上线后支持？',
      answer:
        '提供——上线后常见月度驻场用于小功能、监控、应用/API 维护与事件支持。驻场时间可用于待办梳理、季节性活动与内部团队协同。也支持按次；驻场客户在响应时间上优先。',
    },
    {
      value: 'pricing-6',
      question: '能否只做调研、不做完整建设？',
      answer:
        '可以。当需求模糊或干系人未对齐时，短期调研会产出书面建议：选项、取舍、粗略量级成本与风险。你可持该文档另寻供应商；许多客户在路径清晰后继续与我们实施。',
    },
  ],
}

const privacyAndSecurityFaqSection: FaqSection = {
  id: 'privacy',
  title: '数据与',
  titleHighlight: '访问',
  defaultOpenValue: 'privacy-1',
  items: [
    {
      value: 'privacy-1',
      question: '客户与订单数据由谁持有？',
      answer:
        '对店铺运营，除非您另有架构设计，Shopify 仍是客户与订单的记录系统。我们配置 Shopify、应用与集成以按您的政策处理数据。我们不出售商家数据；我们侧如何保存联系与项目沟通，请见隐私政策。',
    },
    {
      value: 'privacy-2',
      question: '能否签署 NDA 或填写供应商安全问卷？',
      answer:
        '在需要时可以。我们常在双向 NDA 下工作，并可就后台访问与集成填写合理安全问卷。高度定制的企业评审可能增加准备时间——通常在高阶匹配通话后安排。',
    },
    {
      value: 'privacy-3',
      question: '如何安全访问我们的 Shopify 后台？',
      answer:
        '我们使用协作者或员工账号并按最小权限原则；避免共享密码，并记录接触的应用与定制。代码优先使用您的 Git 组织或您可控的分叉流程。项目结束会移除或降级权限，除非驻场协议另有约定。',
    },
    {
      value: 'privacy-4',
      question: '项目邮件与文件保留多久？',
      answer:
        '我们会在质保、争议解决与连续性所需期限内保留项目往来与产物——通常按合同，常见 12–24 个月，除非您要求更短删除（受法律保全限制）。入职时可询问细则。',
    },
  ],
}

const technicalSupportFaqSection: FaqSection = {
  id: 'technical',
  title: '平台与',
  titleHighlight: '工程',
  defaultOpenValue: 'technical-1',
  items: [
    {
      value: 'technical-1',
      question: '能在我们现有主题或应用代码库上工作吗？',
      answer:
        '可以。我们先做短审计：依赖、技术债、性能热点与升级路径。在承诺日期前会标出风险区（结账、库存、第三方脚本）。若重写比持续打补丁更划算，我们会尽早说明。',
    },
    {
      value: 'technical-2',
      question: '如何处理 Shopify API 版本与破坏性变更？',
      answer:
        '在应用中固定 Admin 与 Storefront API 版本，跟踪发布说明，并安排带回归检查的升级窗口。公开应用对齐 Partner 控制台要求。主题遵循 Online Store 2.0 与随 API 演进的区块兼容性。',
    },
    {
      value: 'technical-3',
      question: '结账定制怎么做？',
      answer:
        '使用 Checkout UI 扩展、Functions 与 Shopify 支持的模式——避免依赖会在平台更新时失效的“黑魔法”。范围会结合您的方案（Plus 与否）与审核约束校验；复杂规则在上线前有明确测试矩阵。',
    },
    {
      value: 'technical-4',
      question: '支持 Hydrogen / 无头吗，还是只做 Liquid 店铺？',
      answer:
        '我们主要交付 Online Store 2.0 Liquid 店铺与定制应用——多数商家性价比最高。当无头或 Hydrogen 更合适（独特体验、严格性能、多前端）时，我们会明确范围，包括托管、SEO 与运维归属。默认不会为了“时髦”推荐无头。',
    },
    {
      value: 'technical-5',
      question: '上线后如何获得支持？',
      answer:
        '通过联系页邮箱或项目渠道联系。驻场客户有约定响应目标；按次请求按档期安排。对我们交付系统的关键生产问题，按合同质保与支持条款处理。',
    },
  ],
}

const gettingStartedFaqSection: FaqSection = {
  id: 'getting-started',
  title: '如何',
  titleHighlight: '开始',
  defaultOpenValue: 'getting-started-1',
  items: [
    {
      value: 'getting-started-1',
      question: '如何启动合作？',
      answer:
        '发送简要需求或使用联系表单。我们通常会先回复澄清问题，再安排调研通话。若匹配，会收到书面方案或工作说明书（范围、里程碑与费用）。在签署与 SOW 约定的定金后开始工作。',
    },
    {
      value: 'getting-started-2',
      question: '典型项目周期多长？',
      answer:
        '差异很大：聚焦的主题切片可能数周；完整迁移或多端应用可能数月。周期受审批、第三方（ERP、支付）、内容就绪度与应用审核等影响。调研后会给区间，再随计划收窄。',
    },
    {
      value: 'getting-started-3',
      question: '首次工作坊前要准备什么？',
      answer:
        '目标与成功指标、痛点截图或录屏、应用与集成清单、固定上线日期、决策人（电商、运营、法务）。技术负责人可分享仓库访问或架构说明（如相关）。',
    },
    {
      value: 'getting-started-4',
      question: '沟通与交付常用哪些工具？',
      answer:
        '通常包括邮件、Slack 或 Teams、GitHub/GitLab/Bitbucket、Figma，以及 Notion 或 Google 文档记录决策与手册。在合理范围内匹配您的工具栈。',
    },
    {
      value: 'getting-started-5',
      question: '是否跨时区协作？',
      answer:
        '可以。我们通过固定窗口与北美、欧洲及亚太客户重叠安排站会与评审；关键发布在 SOW 中约定明确的“集中值守”时段。',
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
