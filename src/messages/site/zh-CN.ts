import { siteEn } from '@/src/messages/site/en'
import { pricingSiteMessagesZhCN } from '@/src/messages/site/pricing-messages-zh-cn'

/** Simplified Chinese — overrides every `siteEn` key for full UI coverage. */
export const siteZhCNPatch: { [K in keyof typeof siteEn]: string } = {
  'brand.name': '智爪（AI Clawers）',
  'brand.footerMark': '智爪',
  'brand.logoAlt': '智爪 AI Clawers',
  'brand.homeAria': '智爪首页',
  'company.legalEntity': 'AI CLAWERS SOLUTIONS LIMITED',
  'company.legalNameZh': '智爪集成有限公司',
  'company.channelwill': '渠网科技（Channelwill）',

  'footer.tagline':
    '智能 Shopify 支持——上线、修复与增长，让你少折腾后台，把时间留给客户与销售。',
  'footer.legalNote': '智爪（AI Clawers）品牌的法律主体说明。',
  'footer.col.company': '公司',
  'footer.col.support': '支持',
  'footer.col.legal': '法律政策',
  'footer.link.about': '关于我们',
  'footer.link.cases': '案例研究',
  'footer.link.pricing': '定价',
  'footer.link.blogs': '博客',
  'footer.link.faq': '常见问题',
  'footer.link.tutorial': 'Shopify 教程',
  'footer.link.terms': '条款与条件',
  'footer.link.privacy': '隐私政策',
  'footer.link.gdpr': 'GDPR 合规',

  'footer.newsletter.title': '订阅我们的简报',
  'footer.newsletter.sub': '获取最新动态与更新。',
  'footer.newsletter.placeholder': '输入邮箱',
  'footer.newsletter.submit': '订阅',
  'footer.newsletter.disclaimer': '订阅即表示您同意我们的',
  'footer.newsletter.privacy': '隐私政策',

  'footer.bottom.copyright': '保留所有权利。',
  'footer.bottom.privacy': '隐私政策',
  'footer.bottom.terms': '服务条款',
  'footer.bottom.cookies': 'Cookie 设置',

  'home.hero.line1': '智能 Shopify 服务',
  'home.hero.line2': '助力上线与店铺增长',
  'home.hero.sub':
    '我们处理搭建、速度与修复等硬核工作，让你专注客户与销售。',
  'home.hero.ctaCases': '查看案例',
  'home.hero.imgAlt': 'Shopify 店铺前台、运营后台、分析与自动化示意',

  'home.impact.title1': '新锐团队，',
  'home.impact.title2': '扎实交付',
  'home.stat.shipped': '已交付的 Shopify 项目',
  'home.stat.reviews': '合作伙伴五星好评',
  'home.stat.hours': '为团队省下的运营工时',
  'home.stat.shippedAria': '42 个以上已交付的 Shopify 项目',
  'home.stat.reviewsAria': '100% 五星合作伙伴评价',
  'home.stat.hoursAria': '6 万以上返还给团队的运营工时',
  'home.impact.ariaGrid': '影响力数据卡片',
  'home.hours.ariaCard': '通过自动化返还的运营工时示意',
  'home.hours.pill.sync': '同步',
  'home.hours.pill.process': '流程',
  'home.hours.pill.flow': '流转',
  'home.hours.pill.grow': '增长',

  'home.projects.h1': '真实成果',
  'home.projects.h2': '在 Shopify 上的建站、应用与主题',
  'home.projects.sub': '上线、定制应用与性能优化——真实商家与真实排期，不空谈。',
  'home.projects.cta': '查看 Shopify 作品',

  'home.testimonial.h1': '商家如何评价',
  'home.testimonial.h2': '我们的 Shopify 服务',

  'home.blog.h1': 'Shopify 实践笔记',
  'home.blog.h2': '与务实 AI',
  'home.blog.sub':
    '主题、应用、性能与副驾驶式工具——写给商家与并肩交付的团队。',
  'home.blog.cta': '浏览博客',

  'home.faq.h1': 'Shopify 常见问题，',
  'home.faq.h2': '一次讲清',
  'home.faq.sub':
    '关于 Shopify、周期与合作方式的直给回答——联系前先了解我们。',
  'home.faq.q1.question': '你们建议我用什么平台开店？',
  'home.faq.q1.answer':
    '若希望后台直观、电商能力开箱即用，我们通常推荐 Shopify。它既能服务小众品牌，也能承载更大目录，并与营销、履约与分析工具顺畅衔接，便于逐步扩展而无需推倒重来。',
  'home.faq.q2.question': '我的 Shopify 店铺在手机上友好吗？',
  'home.faq.q2.answer':
    '会。我们把响应式布局当作默认项而非附加项。店铺在手机与平板上应易读、易点——多数访客在此浏览，细微摩擦会悄悄拉低转化。',
  'home.faq.q3.question': '我能轻松自己编辑店铺吗？',
  'home.faq.q3.answer':
    '我们尽量让日常更新留在 Shopify 后台完成——商品、系列、页面与基础内容区块可由团队自行维护。我们也会说明哪些部分更适合按清单谨慎调整；需要大改或季节性上线时，我们仍可协助。',
  'home.faq.q4.question': '会做哪些基础 SEO？',
  'home.faq.q4.answer':
    '我们把 SEO 视为健康上线的一部分。通常包括清晰的标题与描述、干净的 URL、在我们可控范围内的快速主题结构、在有帮助时使用结构化数据，以及合理的内链。若要在内容或站外曝光上更进一步，可在店铺基础稳固后单独规划范围。',
  'home.faq.q5.question': '服务大概多少钱？',
  'home.faq.q5.answer':
    '取决于需求——新建、改版、迁移、应用或持续运维。请说明目标与排期，我们会给出定制报价与分阶段方案，避免为尚不需要的工作付费。',
  'home.faq.q6.question': '项目结束后还有持续支持吗？',
  'home.faq.q6.answer':
    '有。许多团队希望在上线后有一段轻量维护期处理修复、应用更新与小改进。也可约定简单节奏——如季节性发布、结账微调或性能巡检——让站点在上线后仍保持锋利。',
  'home.faq.q7.question': '完成一个 Shopify 网站要多久？',
  'home.faq.q7.answer':
    '周期随复杂度变化：聚焦的焕新可能数周，而完整改版、迁移或应用较重的搭建通常需要更长周期。我们会 upfront 约定里程碑并保持沟通，让你清楚下一步交付什么、为何如此。',

  'home.why.h1': '为什么需要',
  'home.why.h2': '专业的 Shopify 开发？',
  'home.why.sub':
    '我们打造能吸引用户并带动销售的定制 Shopify 店铺；方案贴合业务目标，并提供出色的购物体验。',
  'home.subscribe.h1': '及时了解',
  'home.subscribe.h2': '智爪动态',
  'home.subscribe.sub': '订阅简报，获取 AI 与电商领域的趋势、观点与案例。',
  'home.subscribe.placeholder': '输入邮箱',
  'home.subscribe.label': '输入邮箱',
  'home.subscribe.submit': '订阅',
  'home.subscribe.cta': '立即订阅',

  'home.empower.aria': '面向商家的 Shopify 主题、性能、应用与 AI 副驾驶',
  'home.empower.ariaCards': 'Shopify 技术服务展示',
  'home.empower.h1': '主题、应用与',
  'home.empower.h2': '店铺优化，结合务实 AI',
  'home.empower.sub':
    '可上线的 Liquid、更快的核心指标、安全的结账改动与后台私有应用——搭配能减负而非添乱的 AI 副驾驶。',
  'home.predictive.title': '增长与转化信号',
  'home.predictive.sub':
    '看清客单价、留存与漏斗流失的驱动因素，再优先处理回报最快的 Shopify 修复项。',

  'home.customApps.title': '定制 Shopify 应用',
  'home.customApps.sub':
    '嵌入式后台工具、店面能力与融入商家日常工作的 AI 副驾驶。',
  'home.customApps.imgAlt': '定制 Shopify 应用界面示意，含后台与店面操作',

  'home.intelligent.stepKickoff': '启动',
  'home.intelligent.stepKickoffSub': '范围、技术栈与成功指标已对齐',
  'home.intelligent.stepBuild': '搭建',
  'home.intelligent.stepBuildLine1': '主题、分区与应用块',
  'home.intelligent.stepBuildLine2': 'Liquid 架构与目录及运营流程贯通',
  'home.intelligent.stepReview': '验收',
  'home.intelligent.stepReviewSub': '结账、SEO、无障碍与性能通过检视',
  'home.intelligent.stepShip': '上线',
  'home.intelligent.stepShipSub': '生产发布，含监控与回退预案',
  'home.intelligent.footerTitle': '建站与优化',
  'home.intelligent.footerSub':
    '可上线的主题、性能调优与 SEO 友好的 Liquid——让每次发布都更有把握。',

  'home.dataInsights.title': '店铺健康与运营洞察',
  'home.dataInsights.sub':
    '整合收入、履约与客户体验信号，让管理层看到统一的 Shopify 视图，而不是十个互不关联的标签页。',
  'home.dataInsights.ariaPanel': 'Shopify 店铺指标可视化',
  'home.dataInsights.performance': '性能',
  'home.dataInsights.periodButtonAria': '选择分析的时间范围',
  'home.dataInsights.lastWeek': '上周',
  'home.dataInsights.metricSpeed': '主题速度',
  'home.dataInsights.metricCheckout': '结账',
  'home.dataInsights.metricRetention': '留存',
  'home.dataInsights.kpiRowAria': 'KPI 刻度：基线、目标、挑战',
  'home.dataInsights.baseline': '基线',
  'home.dataInsights.target': '目标',
  'home.dataInsights.stretch': '挑战',

  'home.empower.exploreShopifyServices': '探索 Shopify 服务',
  'home.empower.exploreBlockAria': '探索 Shopify 服务行动号召',

  'home.hero.videoNoSupport': '您的浏览器不支持视频播放。',

  'home.innov.title1': '四种方式助力',
  'home.innov.title2': '在 Shopify 上搭建、调优、扩展与增长',
  'home.innov.sub': '店铺、主题、应用与克制的 AI——让团队高效交付、少噪音。',
  'home.innov.card1.title': '建站与优化',
  'home.innov.card1.desc':
    '上线、迁移、按需的 OS 2.0 重构。\n速度、SEO、无障碍与结账检查，让店铺在高流量下仍稳。',
  'home.innov.card2.title': '主题与 Liquid',
  'home.innov.card2.desc':
    '区块库、元字段与多市场体验，团队可自行维护。\nLiquid 结构清晰，随促销与陈列演进仍可读。',
  'home.innov.card3.title': '定制应用',
  'home.innov.card3.desc':
    '面向商家日常后台的私有与嵌入式应用。\n打通目录、财务与履约，与前台保持一致。',
  'home.innov.card4.title': 'AI 助力增长',
  'home.innov.card4.desc':
    '围绕你的规则，为陈列、内容与支持提供副驾驶。\n输出绑定 Shopify 数据，提速不失品牌控制。',
  'home.innov.cta': '查看全部服务',

  'shared.cta.h1': '打造更快的',
  'shared.cta.h2': 'Shopify 店铺。',
  'shared.cta.sub':
    '主题、结账体验、应用与 Flow——告诉我们目录与市场，我们给出可落地的建设方案。',
  'shared.cta.btn': '规划项目',

  'contact.h1': '与我们',
  'contact.h2': '联系',
  'contact.sub': '有想法？一起把它落地。',
  'contact.email': '邮箱',
  'contact.phone': '电话',
  'contact.phFullName': '姓名',
  'contact.phEmail': '邮箱地址',
  'contact.phCompany': '公司名称',
  'contact.phPhone': '电话',
  'contact.phSubject': '主题',
  'contact.phMessage': '留言内容',
  'contact.submit': '提交',

  'faqContact.title': '还有疑问？',
  'faqContact.sub': '告诉我们店铺、排期与市场——我们会回复下一步。',
  'faqContact.phName': '您的姓名',
  'faqContact.phEmail': '您的邮箱',
  'faqContact.phSubject': '主题',
  'faqContact.phQuestions': '您的问题',
  'faqContact.submit': '联系我们',

  'pricing.title': '透明定价',
  'pricing.titleMuted': 'Shopify 开发',
  'pricing.sub':
    '美元为税前起点，不含 Shopify 月费、应用与域名等。具体以沟通后的书面报价为准，卡片数字便于先做预算对齐。',

  'pricingInclude.h1': '各档一致的',
  'pricingInclude.h2': '交付方式',
  'pricingInclude.sub':
    '范围随目录与设计深度变化，但合作方式不变：清晰里程碑、原生 Shopify 交付、上线后仍可迭代。',
  'pricingInclude.li1': '沟通纪要 + 书面范围后再开工',
  'pricingInclude.li2': '预演主题、QA 与上线清单',
  'pricingInclude.li3': '面向后台的交接与培训时间',
  'pricingInclude.li4': '按需连接分析与 Search Console',
  'pricingInclude.li5': '套餐内 30 天上线后支持窗口',
  'pricingInclude.li6': '可按季发布与升级签订轻量驻场',

  'nav.platform.blog': '博客',
  'nav.platform.guides': '指南',
  'nav.platform.card1.title': 'Storefront MCP',
  'nav.platform.card1.sub': '工具链、库存真相与上线前测试要点。',
  'nav.platform.card2.title': 'AI 工具包',
  'nav.platform.card2.sub': '把编辑器接到 Shopify 文档、Schema 与 Dev MCP。',

  'nav.res.pricing': '定价',
  'nav.res.blog': '博客',
  'nav.res.tutorial': '教程',
  'nav.res.faq': '常见问题',
  'nav.res.support': '支持',
  'nav.res.contact': '联系',
  'nav.res.success': '成功案例',

  'nav.plan.termsTitle': '条款与条件',
  'nav.plan.termsDesc': '使用条款与约定',
  'nav.plan.privacyTitle': '隐私政策',
  'nav.plan.privacyDesc': '我们如何处理您的数据',
  'nav.plan.gdprTitle': 'GDPR',
  'nav.plan.gdprDesc': '数据保护与合规',
  'nav.plan.tutorialTitle': 'Shopify 教程',
  'nav.plan.tutorialDesc': '专业教程与文档',

  'nav.co.aboutTitle': '关于我们',
  'nav.co.aboutDescBefore': '团队来自 ',
  'nav.co.aboutDescAfter': '，拥有多年 Shopify 实践背景；专注我们的工作方式与交付结果。',
  'nav.co.whyTitle': '为何选择我们',
  'nav.co.whyDesc': '深度、覆盖面、判断力与以客户赢为目标',
  'nav.co.manifestoTitle': '我们的主张',
  'nav.co.manifestoDesc': '范围、交付与交接的原则',
  'nav.co.customersTitle': '客户',
  'nav.co.customersDesc': '我们服务谁、项目如何启动',
  'nav.co.testimonialsTitle': '客户评价',
  'nav.co.testimonialsDesc': '商家如何评价我们的 Shopify 工作',
  'nav.co.casesTitle': '案例研究',
  'nav.co.casesDesc': '主题、应用与集成的成稿',
  'nav.co.servicesTitle': '服务',
  'nav.co.servicesDesc': '主题、应用、迁移与集成',
  'nav.co.usecasesTitle': '使用场景',
  'nav.co.usecasesDesc': '在 Shopify 上反复解决的问题',
  'nav.co.whatsNew': '最新动态',
  'nav.co.studioTitle': '工作室动态',
  'nav.co.studioSub': 'Shopify 实验与更新日志式文章。',
  'nav.co.studioCardAria': '在博客阅读工作室动态',

  'about.company.h1The': '关于',
  'about.company.h1Muted': '公司',
  'about.company.subMid': '是本网站呈现的品牌；',
  'about.company.subEnd': '为该品牌背后的法律运营主体。',
  'about.company.cardBrandTitle': '品牌',
  'about.company.cardBrandBody':
    '智爪（AI Clawers）是商家与合作伙伴认识我们工作的方式：Shopify 店铺、主题、应用、Flow、集成与性能——结果优先于口号。',
  'about.company.cardLegalTitle': '法律主体',
  'about.company.cardLegalNote': '合同、对公函件与正式往来以该注册名称为准。',
  'about.company.cardContactTitle': '联系',
  'about.company.cardContactBody': '项目范围、合作与媒体：我们会阅读发送至团队邮箱的每一封邮件。',

  'about.team.h2': '重经验而非堆人头',
  'about.team.sub': '小而精的资深团队，深耕头部 Shopify SaaS——不是占位式简历墙。',
  'about.team.p1Before': '我们的实践者来自',
  'about.team.p1After':
    '这家一流 Shopify SaaS 公司。整体上，我们在店铺、Liquid 主题、公开与定制应用、SEO 与性能方面拥有约七年的实操经验。',
  'about.team.p2':
    '这段背景包含通过产品级工具与实施工作服务数以万计商家——我们现在把同样的经验直接用于需要清晰交付、而非堆幻灯片的品牌。',
  'about.team.p3':
    '我们坚持「客户赢」：你的转化、稳定性、交付速度与可维护性优先。我们在调研、建设、上线与迭代中保持贴近。',

  'about.ai.h2Line1': 'Shopify 交付',
  'about.ai.h2Muted': '以客户成功为先',
  'about.ai.subBefore': '我们把',
  'about.ai.subAfter':
    '级产品体验与精品式注意力结合：层级更少、责任更清晰，工作直接映射到收入、可靠性与路线图速度。',
  'about.ai.cardVisionTitle': '愿景',
  'about.ai.cardVisionBody':
    '当 Shopify 实施快速、可维护且对取舍诚实，商家才会赢。我们希望每次上线与迭代都能复利——今天架构干净，明天增长更轻松——在明显节省时间或改进决策之处使用 AI，而不是噱头。',
  'about.ai.cardMissionTitle': '使命',
  'about.ai.cardMissionBody':
    '交付务实的 Shopify 工作：新店与迁移、Online Store 2.0 主题、应用与后台扩展、集成、技术 SEO 与性能。贴近干系人、记录假设，并以你的结果衡量成功——而非我们的 buzzword。',

  'meta.about.title': '关于我们 | 智爪（AI Clawers）— 智爪集成有限公司',
  'meta.about.description':
    '智爪集成有限公司运营智爪（AI Clawers）品牌：专注 Shopify 的交付团队，来自渠网科技（Channelwill）等实践背景——店铺、主题、应用、SEO 与集成，以商家结果为先。',

  'meta.faq.title': '常见问题 | Shopify 建站、应用与定价 | 智爪（AI Clawers）',
  'meta.faq.description':
    '面向商家与团队的常见问题：Shopify 是什么、定价与域名、设计与开发需求、应用与定价、迁移及如何开始合作。',

  'meta.pricing.title': '定价 | Shopify 开发 | 智爪（AI Clawers）',
  'meta.pricing.description': 'Shopify 建设起步区间——在调研后我们会再确认书面报价。',

  'meta.contact.title': '联系我们 | 智爪（AI Clawers）',
  'meta.contact.description': '联系智爪（AI Clawers）。我们通常在 24 小时内回复，欢迎咨询方案与支持。',

  'meta.services.title': 'Shopify 服务 | 智爪（AI Clawers）',
  'meta.services.description':
    '店铺建设、设计、主题定制、定制应用、技术 SEO、GEO、AI 集成与自动化——以可维护性与商家结果为导向进行范围界定。',

  'faqPage.h1Strong': '常见',
  'faqPage.h1Muted': '问题',
  'faqPage.sub':
    '关于 Shopify 建站、定制应用、定价、联合开发、数据权限与如何启动的务实说明——联系前即可了解预期。',

  ...pricingSiteMessagesZhCN,
}
