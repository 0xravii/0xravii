import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
    Workmode:"Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "security researcher",
    icon: mobile,
  },
  {
    title: "Smart contract Auditor",
    icon: backend,
  },
  {
    title: "Ethical Hacker",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Cyber Security Analyst",
    company_name: "ERsegmaent",
    icon: starbucks,
    iconBg: "#383E56",
    date: "october 2021 - April 2022",
    points: [
      "Develop and enforce security policies and procedures",
      "Conduct regular security audits and risk assessments., Monitor and analyze security alerts for potential threats.",
      "Collaborate with IT and development teams on security integration.",
      "Perform vulnerability assessments and penetration testing",
      "Investigate security incidents and breaches.",
      "Conduct security awareness training for employees.",
      "Stay updated on cybersecurity trends and threats.",
      "Participate in incident response planning and testing."
    ],
  },
  {
    title: "Bug Bountyhunter",
    company_name: "Hackerone",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Freelancer",
    
    points: [
      "Identify and report security vulnerabilities in software and web applications",
      "Conduct penetration testing to find weaknesses in systems",
      "Analyze and exploit vulnerabilities using various tools and techniques",
      "Collaborate with development teams to ensure vulnerabilities are patched",
      "Stay updated on the latest security threats and exploit techniques",
      "Document findings and provide detailed reports to stakeholders",
      "Participate in security forums and contribute to the community",
      "Maintain confidentiality and adhere to ethical hacking standards"
    ],
  },
  {
    title: "Security Resercher",
    company_name: "SwiftSafe",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Research and Analysis: Conduct in-depth research and analysis of security vulnerabilities and threats",
      "Whitepaper Writing: Author technical reports and whitepapers detailing findings and solutions.",
      "Exploit Development: Develop exploits and proof-of-concept code to demonstrate vulnerabilities",
      "Vulnerability Disclosure: Responsible for responsible disclosure of vulnerabilities to affected parties",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Ravi keen eye for vulnerabilities has significantly strengthened our security. Their insights are invaluable",
    name: "Pooja sri",
    designation: "Cyber Security Analyst",
    company: "",
    image: " google.com",
  },
  {
    testimonial:
      "Ravikumar expertise in uncovering critical issues has been a game-changer for our security team.",
    name: "karthik  chanda",
    designation: "CEO",
    company: "ERsegment",
    image: "https://media.licdn.com/dms/image/C4D03AQFcCgTGYZmeSQ/profile-displayphoto-shrink_200_200/0/1598123199011?e=2147483647&v=beta&t=RvLj--cHvDLFlZYH87WiFOY6StuoucO6beCmLWksy0A",
  },
  {
    testimonial:
      "RaviKumar is a standout learner whose curiosity and diligence have greatly enriched our cybersecurity classes",
    name: "Sager",
    designation: "CEO",
    company: "darkrelay",
    image: "https://media.licdn.com/dms/image/D560BAQFf_IyFpy3ZBQ/company-logo_200_200/0/1711727160715/darkrelay_logo?e=2147483647&v=beta&t=hCkrOXAJOqJsYsxf4YpL_H-XrAFtbbJiA2Pn2CMgoMg",
  },
];

const projects = [
  {
    name: "Certified Ethical Hacker(CEH) ",
    description:
      "A comprehensive certification that equipped me with skills to understand and identify the ways hackers think and act. Through this certification, I have gained practical knowledge in ethical hacking methodologies and techniques to protect against cyber threats.",
    tags: [
      {
        name: "Cybersecurity ",
        color: "blue-text-gradient",
      },
      {
        name: "NetworkSecurity",
        color: "green-text-gradient",
      },
      {
        name: "CEHv12",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "carrent",
  },
  {
    name: "Certified AppSec Practitioner (CAP)",
    description:
      "This certification validates proficiency in application security practices, including threat modeling, secure coding, and vulnerability management. It demonstrates expertise in identifying and mitigating security risks in software applications..",
    tags: [
      {
        name: "InfoSec",
        color: "blue-text-gradient",
      },
      {
        name: "AppSec",
        color: "green-text-gradient",
      },
      {
        name: "Hackers",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Solana Blockchain DEV",
    description:
      "the Solana Blockchain Developer Program, demonstrating proficiency in dApp development, smart contracts, DeFi protocols, NFTs, and other blockchain technologies. Their dedication and expertise make them a valuable asset to any blockchain development team..",
    tags: [
      {
        name: "SolanaBlockchain",
        color: "blue-text-gradient",
      },
      {
        name: "SolanaDev ",
        color: "green-text-gradient",
      },
      {
        name: "DeFi",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
