import type { Dictionary } from "@/i18n/types";

const TITLE = "内蒙古大学时空智能研究中心";

export const zh: Dictionary = {
  meta: {
    title: TITLE,
    description:
      "内蒙古大学时空智能研究中心，由内蒙古大学与呼和浩特经济技术开发区共建，面向智慧生态、边防、能源、交通、应急等区域应用场景，融合卫星导航、遥感、地理信息、大数据与人工智能等前沿技术。",
    keywords: [
      "内蒙古大学",
      "时空智能",
      "人工智能",
      "遥感",
      "地理信息",
      "卫星导航",
      "区域协同创新",
    ],
    logoAlt: TITLE,
  },
  language: {
    switcherLabel: "切换语言",
    currentPrefix: "当前语言：",
  },
  nav: {
    items: [
      { id: "about", href: "/#about", label: "中心简介", hint: "了解研究中心定位与简介" },
      { id: "research", href: "/#research", label: "研究方向", hint: "查看核心研究主题与布局" },
      { id: "people", href: "/team", label: "团队成员", hint: "查看组织结构与骨干成员" },
      { id: "papers", href: "/works", label: "论文和工作", hint: "查看论文成果与代表工作" },
      { id: "footer", href: "/#footer", label: "联系合作", hint: "前往页脚查看联系方式" },
    ],
    titleByPath: {
      "/": TITLE,
      "/team": "组织结构",
      "/works": "论文和工作",
    },
  },
  ctas: {
    seeMore: "查看更多",
    more: "更多",
    learnMore: "了解更多",
    meetTeam: "认识团队",
    publications: "论文成果",
  },
  eyebrows: {
    research: "Research",
    people: "People",
    papers: "Papers",
    work: "Work",
    publications: "Publications & Work",
    organization: "Organization",
    chiefScientist: "Chief Scientist",
    committee: "Committee",
    faculty: "Faculty",
    groups: "Groups",
    about: "About",
  },
  hero: {
    titleZh: TITLE,
    titleEn: "IMU · Spatiotemporal Intelligence Research Center",
    subtitle:
      "聚智时空 · 联创未来。以时空智能技术驱动区域高质量发展，融合卫星导航、遥感、地理信息、大数据与人工智能等交叉前沿，服务智慧生态、边防、能源、交通、应急等内蒙古特色应用场景。",
  },
  about: {
    title: "中心简介",
    paragraphs: [
      "内蒙古大学时空智能研究中心成立于 2025 年 12 月 15 日，由内蒙古大学与呼和浩特经济技术开发区联合主办，内蒙古大学人工智能学院与呼和浩特留学人员创业服务中心联合承办，是面向时空智能领域研究与产业落地的科研机构。",
      "中心以「时空智能技术驱动区域高质量发展」为核心导向，融合卫星导航、遥感、地理信息、大数据与人工智能等前沿技术，聚焦内蒙古在智慧生态、边防、能源、交通、应急等领域的特色应用场景，推动政产学研用协同创新。",
      "中心同步建设「内蒙古大学时空智能研究中心成果转化基地」，并联合呼和浩特留学人员创业服务中心设立「鸿雁人才」专家工作站，打通从科研到产业、从实验室到生产线的全链条通道。",
    ],
  },
  research: {
    title: "研究方向",
    items: [
      {
        name: "遥感与地理信息智能解译",
        summary:
          "面向遥感影像与多源地理信息数据，研究语义分割、目标识别与时空变化检测，支撑生态、能源与边防场景。",
      },
      {
        name: "时空大数据与多模态分析",
        summary:
          "融合卫星导航、传感网络与城市数据，研究多模态人群分析、轨迹建模与时空预测方法。",
      },
      {
        name: "无人机与基础设施智能巡检",
        summary:
          "结合机器视觉、智能控制与边缘计算，构建面向能源、交通等关键基础设施的智能巡检方案。",
      },
    ],
  },
  people: {
    sectionTitle: "团队成员",
    list: [
      {
        name: "示例 一",
        role: "中心负责人",
        title: "教授（待补充）",
        focus: "时空智能 · 区域协同创新",
        email: "contact@imu.edu.cn",
      },
      {
        name: "示例 二",
        role: "副主任",
        title: "研究员（待补充）",
        focus: "遥感图像智能解译 · 多模态时空分析",
      },
      {
        name: "示例 三",
        role: "研究骨干",
        title: "副教授（待补充）",
        focus: "时空大数据 · 多模态人群分析",
      },
      {
        name: "示例 四",
        role: "研究骨干",
        title: "助理教授（待补充）",
        focus: "无人机智能巡检 · 边缘计算",
      },
    ],
  },
  team: {
    pageTitle: "组织结构",
    pageDescription: `了解${TITLE}的组织结构、研究骨干与研究小组。`,
    sectionTitle: "组织结构",
    intro:
      "中心由内蒙古大学与呼和浩特经济技术开发区共建，由内蒙古大学人工智能学院承办。下文按首席科学家、中心学术委员会、研究骨干与研究小组分层呈现学术分工与协作结构（具体人员信息以中心官方公布为准）。",
    chiefScientistTitle: "首席科学家",
    committeeTitle: "中心学术委员会",
    facultyTitle: "研究骨干",
    groupsTitle: "研究小组",
    chiefScientist: {
      name: "示例 一",
      role: "中心负责人",
      title: "教授（待补充）",
      focus: "时空智能 · 区域协同创新",
      email: "contact@imu.edu.cn",
      note: "负责中心总体学术方向规划与重大项目统筹，统领时空智能技术研究、成果转化基地建设及校地协同创新事务。",
    },
    committee: [],
    faculty: [],
    groups: [
      {
        name: "遥感与地理信息智能",
        summary: "聚焦遥感图像解译、地理信息分析与生态/边防/能源场景应用，开展智能化技术研究。",
        leads: ["示例 二"],
      },
      {
        name: "时空大数据与多模态分析",
        summary: "围绕时空大数据建模、多模态人群分析与城市计算，构建面向区域治理的研究方法与平台。",
        leads: ["示例 三"],
      },
      {
        name: "无人机与基础设施智能巡检",
        summary: "面向能源、交通等关键基础设施，研究无人机感知、智能巡检与边缘计算系统方案。",
        leads: ["示例 四"],
      },
    ],
    leadsLabel: "负责人：",
  },
  works: {
    pageTitle: "论文和工作",
    pageDescription: `查看${TITLE}的论文成果与代表工作。`,
    pageHeading: `${TITLE}论文和工作`,
    pageIntro:
      "这里集中展示中心的代表论文、系统平台与应用原型，既包含学术产出，也覆盖面向真实问题的工作成果。",
    papersSectionTitle: "论文成果",
    worksSectionTitle: "代表工作",
    papers: [
      {
        title: "面向遥感图像解译的时空智能方法（示例）",
        authors: "中心团队（待补充）",
        venue: "学术会议 / 期刊（待补充）",
        year: 2025,
        tag: "遥感解译",
      },
      {
        title: "多模态人群分析方法及其在区域治理中的应用（示例）",
        authors: "中心团队（待补充）",
        venue: "学术会议 / 期刊（待补充）",
        year: 2025,
        tag: "时空大数据",
      },
      {
        title: "面向基础设施巡检的无人机视觉与智能感知（示例）",
        authors: "中心团队（待补充）",
        venue: "学术会议 / 期刊（待补充）",
        year: 2025,
        tag: "智能巡检",
      },
    ],
    list: [
      {
        title: "多模态人群分析",
        summary:
          "融合视频、传感与时空数据的多模态人群分析能力，服务公共安全、应急管理等区域治理场景。",
        year: 2025,
        category: "技术成果",
      },
      {
        title: "基础设施智能无人机巡检",
        summary:
          "面向电力、交通等关键基础设施，构建无人机自主巡检与智能识别能力，提升运维效率与安全水平。",
        year: 2025,
        category: "技术成果",
      },
      {
        title: "遥感图像解译",
        summary:
          "围绕遥感影像的语义分割、目标识别与时空变化检测，服务于智慧生态、能源与边防场景。",
        year: 2025,
        category: "技术成果",
      },
    ],
  },
  footer: {
    headline: "联系与合作",
    email: "contact@imu.edu.cn",
    address:
      "内蒙古自治区呼和浩特市赛罕区大学西街 235 号 内蒙古大学（具体办公地址以中心公告为准）",
    postalCode: "010021",
    phone: "0471-0000000（示例，待补充）",
    officeHours: "工作日 09:00–12:00，14:00–17:00（示例）",
    note: "合作咨询、媒体联络与招聘请使用同一邮箱，标题注明来意。具体联系方式以内蒙古大学时空智能研究中心官方公告为准。",
    relatedTitle: "相关链接",
    aboutTitle: "关于本站",
    keywordsLabel: "关键词：",
    addressLabel: "地址",
    postalCodeLabel: "邮编",
    phoneLabel: "电话",
    emailLabel: "邮箱",
    officeHoursLabel: "办公时间",
    siteCredit: "本站为静态展示页面，技术栈：Next.js · 部署：CloudBase / Vercel。",
    icpNumber: "蒙ICP备xxxxxxxx号（示例）",
    relatedLinks: [
      { label: "内蒙古大学", href: "https://www.imu.edu.cn/" },
      { label: "内蒙古大学计算机学院", href: "https://ccs.imu.edu.cn/" },
      { label: "呼和浩特经济技术开发区", href: "http://hetdz.huhhot.gov.cn/" },
    ],
  },
  backToTop: "回到顶部",
};

zh.team.committee = [zh.people.list[1], zh.people.list[2]];
zh.team.faculty = zh.people.list;
