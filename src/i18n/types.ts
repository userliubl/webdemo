/**
 * 字典结构定义。所有 locale 的字典必须严格匹配此结构，
 * 这样组件里 t.foo.bar 这种调用就能保证类型安全。
 */

export type DictPerson = {
  name: string;
  role: string;
  title?: string;
  focus?: string;
  email?: string;
};

export type DictPaper = {
  title: string;
  authors: string;
  venue: string;
  year: number;
  link?: string;
  tag?: string;
};

export type DictWork = {
  title: string;
  summary: string;
  year: number;
  category: string;
  link?: string;
};

export type DictGroup = {
  name: string;
  summary: string;
  leads: string[];
};

export type Dictionary = {
  meta: {
    title: string;
    description: string;
    keywords: string[];
    logoAlt: string;
  };
  language: {
    /** 切换器按钮的可访问性标签 */
    switcherLabel: string;
    /** 当前语言提示前缀，如 "当前语言：" */
    currentPrefix: string;
  };
  nav: {
    items: Array<{ id: string; href: string; label: string; hint: string }>;
    /** 子页面在 logo 旁的标题 */
    titleByPath: Record<string, string>;
  };
  ctas: {
    seeMore: string;
    more: string;
    learnMore: string;
    meetTeam: string;
    publications: string;
  };
  eyebrows: {
    research: string;
    people: string;
    papers: string;
    work: string;
    publications: string;
    organization: string;
    chiefScientist: string;
    committee: string;
    faculty: string;
    groups: string;
    about: string;
  };
  hero: {
    titleZh: string;
    titleEn: string;
    subtitle: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  research: {
    title: string;
    items: Array<{ name: string; summary: string }>;
  };
  people: {
    sectionTitle: string;
    list: DictPerson[];
  };
  team: {
    pageTitle: string;
    pageDescription: string;
    sectionTitle: string;
    intro: string;
    chiefScientistTitle: string;
    committeeTitle: string;
    facultyTitle: string;
    groupsTitle: string;
    chiefScientist: DictPerson & { note: string };
    committee: DictPerson[];
    faculty: DictPerson[];
    groups: DictGroup[];
    leadsLabel: string;
  };
  works: {
    pageTitle: string;
    pageDescription: string;
    pageHeading: string;
    pageIntro: string;
    papersSectionTitle: string;
    worksSectionTitle: string;
    papers: DictPaper[];
    list: DictWork[];
  };
  footer: {
    headline: string;
    address: string;
    postalCode: string;
    phone: string;
    email: string;
    officeHours: string;
    note: string;
    relatedTitle: string;
    aboutTitle: string;
    keywordsLabel: string;
    addressLabel: string;
    postalCodeLabel: string;
    phoneLabel: string;
    emailLabel: string;
    officeHoursLabel: string;
    siteCredit: string;
    icpNumber: string;
    relatedLinks: Array<{ label: string; href: string }>;
  };
  backToTop: string;
  notFound: {
    pageTitle: string;
    pageDescription: string;
    eyebrow: string;
    title: string;
    description: string;
    homeCta: string;
  };
};
