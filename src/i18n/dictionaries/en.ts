import type { Dictionary } from "@/i18n/types";

const TITLE = "IMU Spatiotemporal Intelligence Research Center";

export const en: Dictionary = {
  meta: {
    title: TITLE,
    description:
      "The IMU Spatiotemporal Intelligence Research Center, jointly built by Inner Mongolia University and the Hohhot Economic & Technological Development Area, advances integrated research and applications across smart ecology, border defense, energy, transportation and emergency response—combining satellite navigation, remote sensing, GIS, big data and AI.",
    keywords: [
      "Inner Mongolia University",
      "Spatiotemporal Intelligence",
      "Artificial Intelligence",
      "Remote Sensing",
      "GIS",
      "Satellite Navigation",
      "Regional Innovation",
    ],
    logoAlt: TITLE,
  },
  language: {
    switcherLabel: "Switch language",
    currentPrefix: "Current language: ",
  },
  nav: {
    items: [
      { id: "about", href: "/#about", label: "About", hint: "About the research center" },
      { id: "research", href: "/#research", label: "Research", hint: "Core research directions" },
      { id: "people", href: "/team", label: "Team", hint: "Organization & key members" },
      { id: "papers", href: "/works", label: "Publications & Work", hint: "Publications and representative work" },
      { id: "footer", href: "/#footer", label: "Contact", hint: "Find contact details in the footer" },
    ],
    titleByPath: {
      "/": TITLE,
      "/team": "Organization",
      "/works": "Publications & Work",
    },
  },
  ctas: {
    seeMore: "See more",
    more: "More",
    learnMore: "Learn more",
    meetTeam: "Meet the team",
    publications: "Publications",
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
      "Bringing intelligence to space and time. The center drives high-quality regional development through interdisciplinary research across satellite navigation, remote sensing, GIS, big data and AI—serving smart ecology, border defense, energy, transportation and emergency response.",
  },
  about: {
    title: "About the Center",
    paragraphs: [
      "Founded on December 15, 2025, the IMU Spatiotemporal Intelligence Research Center is jointly hosted by Inner Mongolia University and the Hohhot Economic & Technological Development Area, and co-organized by the IMU School of Artificial Intelligence and the Hohhot Returned Overseas Scholars Entrepreneurship Service Center.",
      "Guided by the principle of \"driving high-quality regional development with spatiotemporal intelligence\", the center integrates satellite navigation, remote sensing, GIS, big data and AI, focusing on Inner Mongolia's distinctive scenarios in smart ecology, border defense, energy, transportation and emergency response.",
      "The center also operates an associated Outcome Transformation Base and the Hong Yan Talents expert workstation (in cooperation with the Hohhot Returned Overseas Scholars Service Center), connecting research outcomes to industrial deployment end to end.",
    ],
  },
  research: {
    title: "Research Directions",
    items: [
      {
        name: "Remote Sensing & GIS Intelligence",
        summary:
          "Semantic segmentation, object detection and spatiotemporal change analysis on remote sensing imagery and multi-source GIS data, serving ecology, energy and border-defense scenarios.",
      },
      {
        name: "Spatiotemporal Big Data & Multimodal Analytics",
        summary:
          "Multimodal crowd analytics, trajectory modeling and spatiotemporal forecasting that fuse satellite navigation, sensor networks and urban data.",
      },
      {
        name: "UAV & Infrastructure Smart Inspection",
        summary:
          "Computer vision, intelligent control and edge computing combined into smart inspection solutions for energy, transportation and other critical infrastructure.",
      },
    ],
  },
  people: {
    sectionTitle: "Team",
    list: [
      {
        name: "Member 1",
        role: "Center Director",
        title: "Professor (TBD)",
        focus: "Spatiotemporal intelligence · Regional innovation",
        email: "contact@imu.edu.cn",
      },
      {
        name: "Member 2",
        role: "Deputy Director",
        title: "Senior Researcher (TBD)",
        focus: "Remote sensing interpretation · Multimodal analytics",
      },
      {
        name: "Member 3",
        role: "Researcher",
        title: "Associate Professor (TBD)",
        focus: "Spatiotemporal big data · Multimodal crowd analytics",
      },
      {
        name: "Member 4",
        role: "Researcher",
        title: "Assistant Professor (TBD)",
        focus: "UAV smart inspection · Edge computing",
      },
    ],
  },
  team: {
    pageTitle: "Organization",
    pageDescription:
      "Organization, faculty and research groups of the IMU Spatiotemporal Intelligence Research Center.",
    sectionTitle: "Organization",
    intro:
      "The center is jointly built by Inner Mongolia University and the Hohhot Economic & Technological Development Area, hosted by the IMU School of Artificial Intelligence. The structure below presents Chief Scientist, Academic Committee, Faculty and Research Groups (final names will be confirmed by the center's official announcement).",
    chiefScientistTitle: "Chief Scientist",
    committeeTitle: "Academic Committee",
    facultyTitle: "Faculty",
    groupsTitle: "Research Groups",
    chiefScientist: {
      name: "Member 1",
      role: "Center Director",
      title: "Professor (TBD)",
      focus: "Spatiotemporal intelligence · Regional innovation",
      email: "contact@imu.edu.cn",
      note: "Leads overall academic strategy and major projects, oversees the research agenda, the Outcome Transformation Base and university–industry collaboration.",
    },
    committee: [],
    faculty: [],
    groups: [
      {
        name: "Remote Sensing & GIS Intelligence",
        summary:
          "Remote sensing interpretation, GIS analytics and applications in ecology, border defense and energy.",
        leads: ["Member 2"],
      },
      {
        name: "Spatiotemporal Big Data & Multimodal Analytics",
        summary:
          "Spatiotemporal big-data modeling, multimodal crowd analytics and urban computing for regional governance.",
        leads: ["Member 3"],
      },
      {
        name: "UAV & Infrastructure Smart Inspection",
        summary:
          "UAV perception, smart inspection and edge-computing systems for critical infrastructure.",
        leads: ["Member 4"],
      },
    ],
    leadsLabel: "Leads: ",
  },
  works: {
    pageTitle: "Publications & Work",
    pageDescription:
      "Publications, systems and applied prototypes from the IMU Spatiotemporal Intelligence Research Center.",
    pageHeading: "Publications & Work — IMU Spatiotemporal Intelligence Research Center",
    pageIntro:
      "A curated list of representative papers, platforms and applied prototypes—covering both academic outputs and real-world solutions.",
    papersSectionTitle: "Papers",
    worksSectionTitle: "Representative Work",
    papers: [
      {
        title: "Spatiotemporal Intelligence Methods for Remote Sensing Interpretation (sample)",
        authors: "Center Team (TBD)",
        venue: "Conference / Journal (TBD)",
        year: 2025,
        tag: "Remote Sensing",
      },
      {
        title: "Multimodal Crowd Analytics for Regional Governance (sample)",
        authors: "Center Team (TBD)",
        venue: "Conference / Journal (TBD)",
        year: 2025,
        tag: "Spatiotemporal Big Data",
      },
      {
        title: "UAV Vision and Intelligent Sensing for Infrastructure Inspection (sample)",
        authors: "Center Team (TBD)",
        venue: "Conference / Journal (TBD)",
        year: 2025,
        tag: "Smart Inspection",
      },
    ],
    list: [
      {
        title: "Multimodal Crowd Analytics",
        summary:
          "Multimodal crowd analytics fusing video, sensor and spatiotemporal data for public safety and emergency management.",
        year: 2025,
        category: "Technology",
      },
      {
        title: "Smart UAV Inspection for Infrastructure",
        summary:
          "Autonomous UAV inspection with intelligent recognition for power and transportation infrastructure—improving operations safety and efficiency.",
        year: 2025,
        category: "Technology",
      },
      {
        title: "Remote Sensing Interpretation",
        summary:
          "Semantic segmentation, object detection and spatiotemporal change analysis for ecology, energy and border-defense scenarios.",
        year: 2025,
        category: "Technology",
      },
    ],
  },
  footer: {
    headline: "Contact & Cooperation",
    email: "contact@imu.edu.cn",
    address:
      "Inner Mongolia University, 235 University West Street, Saihan District, Hohhot, Inner Mongolia (final office address subject to the center's announcement)",
    postalCode: "010021",
    phone: "+86 471-0000000 (placeholder, TBD)",
    officeHours: "Mon–Fri 09:00–12:00, 14:00–17:00 (sample)",
    note:
      "For partnerships, media inquiries and recruitment, please use the same email and indicate your purpose in the subject. Final contact details follow the center's official announcement.",
    relatedTitle: "Related Links",
    aboutTitle: "About this site",
    keywordsLabel: "Keywords: ",
    addressLabel: "Address",
    postalCodeLabel: "Postal Code",
    phoneLabel: "Phone",
    emailLabel: "Email",
    officeHoursLabel: "Office Hours",
    siteCredit: "Static showcase site · Built with Next.js · Hosted on CloudBase / Vercel.",
    icpNumber: "Mongolia ICP No. xxxxxxxx (sample)",
    relatedLinks: [
      { label: "Inner Mongolia University", href: "https://www.imu.edu.cn/" },
      { label: "IMU College of Computer Science", href: "https://ccs.imu.edu.cn/" },
      { label: "Hohhot Economic & Technological Development Area", href: "http://hetdz.huhhot.gov.cn/" },
    ],
  },
  backToTop: "Back to top",
  notFound: {
    pageTitle: "Page not found",
    pageDescription:
      "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
    eyebrow: "404",
    title: "Page not found",
    description:
      "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",
    homeCta: "Back to home",
  },
};

en.team.committee = [en.people.list[1], en.people.list[2]];
en.team.faculty = en.people.list;
