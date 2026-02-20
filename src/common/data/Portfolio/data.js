import { mail } from 'react-icons-kit/feather/mail';
import { telegram } from 'react-icons-kit/fa/telegram';
import { whatsapp } from 'react-icons-kit/fa/whatsapp';
import { github } from 'react-icons-kit/fa/github';

import Awardee1 from '../../assets/image/portfolio/awardee-1.png';
import Awardee2 from '../../assets/image/portfolio/awardee-2.png';
import Awardee3 from '../../assets/image/portfolio/awardee-3.png';
import Awardee4 from '../../assets/image/portfolio/awardee-4.png';
import AwardImage1 from '../../assets/image/portfolio/award-1.png';
import AwardImage2 from '../../assets/image/portfolio/award-2.png';
import AwardImage3 from '../../assets/image/portfolio/award-3.png';
import AwardImage4 from '../../assets/image/portfolio/award-4.png';

import PortfolioImage1 from '../../assets/image/portfolio/portfolio-1.jpg';
import PortfolioImage2 from '../../assets/image/portfolio/portfolio-2.jpg';

import HealthMakerImage from '../../assets/image/portfolio/HEALTH-MAKER.png';
import ShavazImage from '../../assets/image/portfolio/SHAVAZ.png';
import ScalableApiImage from '../../assets/image/portfolio/SCALABLE-API.png';
import VortemAIImage from '../../assets/image/portfolio/VORTEM-AI.png';

import Step1 from '../../assets/image/portfolio/step-1.png';
import Step2 from '../../assets/image/portfolio/step-2.png';
import Step3 from '../../assets/image/portfolio/step-3.png';

import SkillIcon1 from '../../assets/image/portfolio/skill-1.svg';
import SkillIcon2 from '../../assets/image/portfolio/skill-2.svg';
import SkillIcon3 from '../../assets/image/portfolio/skill-3.svg';
import SkillIcon4 from '../../assets/image/portfolio/skill-4.svg';

import Client1 from '../../assets/image/portfolio/client-1.png';
import Client2 from '../../assets/image/portfolio/client-2.png';
import Client3 from '../../assets/image/portfolio/client-3.png';
import Client4 from '../../assets/image/portfolio/client-4.png';
import Client5 from '../../assets/image/portfolio/client-5.png';
import Client6 from '../../assets/image/portfolio/client-6.png';

import Reviewer1 from '../../assets/image/portfolio/client-avatar-1.jpg';
import Reviewer2 from '../../assets/image/portfolio/client-avatar-2.jpg';
import Reviewer3 from '../../assets/image/portfolio/client-avatar-3.jpg';

// Award section: stable image URLs (main logos + single shared thumbnail)
const U = (id, w = 200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${w}&fit=crop&q=80`;
const P = (text, w = 200) =>
  `https://placehold.co/${w}x${w}/1e3a5f/ffffff?text=${encodeURIComponent(text)}`;
// Main award logos – stable placeholders (replace with real cert/badge URLs if you have them)
const AWARD_DATABRICKS = P('Databricks');
const AWARD_AZURE = P('Azure');
const AWARD_AWS = P('AWS');
const AWARD_DOCKER = P('Docker');
// Single non-person image for all certification card thumbnails (certificate/badge style)
const AWARD_CARD_THUMB =
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=96&h=96&fit=crop&q=80';
// Avatars for Contact and Testimonial sections only (not for Awards)
const AVATAR1 = U('1507003211169-0a1dd7228f2d');
const AVATAR2 = U('1494790108377-be9c29b29330');
const AVATAR3 = U('1472099645785-5658abf4ff4e');

// Resume-based content (Software Engineer + Data Engineer)
export const BANNER = {
  greeting: "Hello, I'm",
  name: 'Mehdi Jahani',
  designation: 'Senior Software & Data Engineer',
  role: 'Backend, Cloud & Data Infrastructure',
  about:
    "Results-driven engineer with 6+ years designing and scaling high-performance backend systems and cloud-native data solutions. Strong expertise in Python and Go, AWS and Azure, Docker and Kubernetes, and event-driven architectures. Proven track record with international teams in Dubai, Qatar, and Iran. I build robust RESTful APIs, scalable Data Lakehouses, and production-ready MLOps pipelines—turning complex data into actionable insights.",
};

export const CONTACT = {
  email: 'mehdi.jahani.zengir@gmail.com',
  phone: '+989358889813',
  replyTime: 'Reply time: within 1–2 working days',
  avatarUrl: AVATAR1,
};

// GitHub (portfolio), then Email, Telegram, WhatsApp
export const GITHUB_URL = 'https://github.com/mehdi-jahani';
export const GITHUB_LABEL = 'View portfolio on GitHub';

export const SOCIAL_PROFILES = [
  { icon: github, url: GITHUB_URL },
  { icon: mail, url: 'mailto:mehdi.jahani.zengir@gmail.com' },
  { icon: telegram, url: 'https://t.me/+989358889813' },
  { icon: whatsapp, url: 'https://wa.me/989358889813' },
];

export const MENU_ITEMS = [
  {
    label: 'ME',
    path: '#banner_section',
    offset: '0',
  },
  {
    label: 'PROJECT',
    path: '#portfolio_section',
    offset: '0',
  },
  {
    label: 'CERTIFICATIONS',
    path: '#awards_section',
    offset: '0',
  },
  {
    label: 'WHY ME?',
    path: '#process_section',
    offset: '0',
  },
];

// Certifications – one relevant image per card (data, Azure, AWS, containers)
export const AWARDS = [
  {
    awardLogo: AWARD_DATABRICKS,
    awardName: 'Databricks Certified Data Engineer Professional',
    awardDetails: 'Databricks',
    awardeeLogo: AWARD_CARD_THUMB,
    awardeeName: 'Certification',
    date: '2023',
  },
  {
    awardLogo: AWARD_AZURE,
    awardName: 'Microsoft Certified: Azure Data Engineer Associate (DP-203)',
    awardDetails: 'Microsoft',
    awardeeLogo: AWARD_CARD_THUMB,
    awardeeName: 'Certification',
    date: '2022',
  },
  {
    awardLogo: AWARD_AWS,
    awardName: 'AWS Certified Cloud Practitioner',
    awardDetails: 'Amazon Web Services',
    awardeeLogo: AWARD_CARD_THUMB,
    awardeeName: 'Certification',
    date: '',
  },
  {
    awardLogo: AWARD_DOCKER,
    awardName: 'Docker & Kubernetes: The Complete Guide',
    awardDetails: 'Udemy',
    awardeeLogo: AWARD_CARD_THUMB,
    awardeeName: 'Certification',
    date: '',
  },
];

export const PORTFOLIO_SHOWCASE = [
  {
    title: 'DATA & BACKEND ENGINEERING',
    portfolioItem: [
      {
        title: 'Shavaz – Data Lakehouse & Distributed Services',
        description:
          'Architected a scalable Data Lakehouse for high-volume e-commerce; designed and scaled distributed backend services processing millions of records with Python and PySpark. Streamlined real-time ingestion (40% lower latency), event-driven pipelines with Kafka, and RESTful APIs for data-intensive applications.',
        image: ShavazImage,
        link: '#',
        featuredIn: 'Hybrid/Remote',
        featuredLink: '#',
        view: '—',
        love: '—',
        feedback: '—',
        buildWith: [
          { content: 'Python' },
          { content: 'PySpark' },
          { content: 'Azure' },
          { content: 'Kafka' },
        ],
      },
      {
        title: 'Vortem-AI – Data Pipelines & AI Integration',
        description:
          'Spearheaded data pipelines for AI/ML model training and MLOps; built microservices with Docker and Kubernetes on AWS. Designed RESTful APIs for AI-driven applications and optimized Snowflake queries (50% faster execution). Worked with international on-site team following Agile.',
        image: VortemAIImage,
        link: '#',
        featuredIn: 'Dubai, UAE',
        featuredLink: '#',
        view: '—',
        love: '—',
        feedback: '—',
        buildWith: [
          { content: 'AWS' },
          { content: 'Snowflake' },
          { content: 'Airflow' },
          { content: 'dbt' },
        ],
      },
    ],
  },
  {
    title: 'CLOUD & SYSTEMS',
    portfolioItem: [
      {
        title: 'HealthMaker – Secure Data & Automation',
        description:
          'Engineered secure, compliant data ingestion for healthcare (GDPR/HIPAA principles); built real-time dashboards and automated data loads with Python and Cron (saving 20 hours/week). Improved daily job completion by 25% and collaborated with a distributed international team across time zones.',
        image: HealthMakerImage,
        link: '#',
        featuredIn: 'Doha, Qatar (Remote)',
        featuredLink: '#',
        view: '—',
        love: '—',
        feedback: '—',
        buildWith: [
          { content: 'Python' },
          { content: 'SQL Server' },
          { content: 'Tableau' },
          { content: 'Linux' },
        ],
      },
      {
        title: 'Scalable APIs & Event-Driven Systems',
        description:
          'Proven track record building robust RESTful APIs, integrating AI/ML into production, and optimizing cloud infrastructure with Terraform and CI/CD. Focus on fault tolerance, scalability, and clean architecture for backend and data-intensive applications.',
        image: ScalableApiImage,
        link: '#',
        featuredIn: 'International Teams',
        featuredLink: '#',
        view: '—',
        love: '—',
        feedback: '—',
        buildWith: [
          { content: 'Go' },
          { content: 'Terraform' },
          { content: 'Kubernetes' },
          { content: 'CI/CD' },
        ],
      },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    image: Step1,
    title: '1. Architect',
    description:
      'Design scalable systems and data solutions that handle high volume and grow with your business—from Data Lakehouses to event-driven backends.',
  },
  {
    image: Step2,
    title: '2. Build & Scale',
    description:
      'Implement robust pipelines, RESTful APIs, and cloud infrastructure with CI/CD, Terraform, and best practices for fault tolerance.',
  },
  {
    image: Step3,
    title: '3. Deliver',
    description:
      'Collaborate with cross-functional and international teams to ship production-ready, reliable systems—remote or on-site.',
  },
];

export const SERVICE_LIST = [
  {
    title: 'Backend & Data Infrastructure',
    listItems: [
      { content: 'RESTful APIs & Microservices' },
      { content: 'Distributed Systems' },
      { content: 'PySpark & ETL Pipelines' },
      { content: 'Kafka & Event-Driven Architecture' },
      { content: 'System Design' },
      { content: 'SQL & Data Modeling' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    listItems: [
      { content: 'AWS & Azure' },
      { content: 'Docker & Kubernetes' },
      { content: 'Terraform (IaC)' },
      { content: 'CI/CD Pipelines' },
      { content: 'Git & Azure DevOps' },
      { content: 'Auto-Scaling & Cost Optimization' },
    ],
  },
  {
    title: 'Data & AI',
    listItems: [
      { content: 'Data Lakehouses (Medallion, Mesh)' },
      { content: 'MLOps & AI Integration' },
      { content: 'Snowflake & Databricks' },
      { content: 'Real-Time Stream Processing' },
      { content: 'Data Governance & GDPR' },
      { content: 'Great Expectations & Data Quality' },
    ],
  },
];

export const SKILLS = [
  {
    title: 'Backend & Distributed Systems',
    description:
      'Designing and scaling high-performance services that process millions of records with Python, Go, and event-driven architecture.',
    icon: SkillIcon1,
    successRate: '95',
  },
  {
    title: 'Cloud & Data Engineering',
    description:
      'Building cloud-native data solutions on AWS and Azure—Data Lakehouses, ETL, real-time streaming, and cost-optimized infrastructure.',
    icon: SkillIcon2,
    successRate: '90',
  },
  {
    title: 'Data Pipelines & MLOps',
    description:
      'End-to-end data pipelines for AI/ML, from ingestion and transformation to production deployment and data quality checks.',
    icon: SkillIcon3,
    successRate: '90',
  },
  {
    title: 'APIs & System Design',
    description:
      'RESTful APIs, microservices, and clean architecture for data-intensive and analytics-driven applications.',
    icon: SkillIcon4,
    successRate: '85',
  },
];

export const CLIENTS = [
  { image: Client1, title: 'Shavaz' },
  { image: Client2, title: 'Vortem-AI' },
  { image: Client3, title: 'HealthMaker' },
  { image: Client4, title: 'Azure' },
  { image: Client5, title: 'AWS' },
  { image: Client6, title: 'Databricks' },
];

export const TESTIMONIAL = [
  {
    image: AVATAR1,
    review:
      'Mehdi combines deep technical skill with a clear focus on scalability and reliability. He delivered a Data Lakehouse that reduced our data latency by 40% and established patterns the whole team now follows.',
    name: '— Backend & Data',
    designation: 'Scalable systems, ETL, real-time pipelines',
    twitterProfile: '#',
    organization: '',
    organizationURL: '#',
  },
  {
    image: AVATAR2,
    review:
      'Strong in both software and data engineering—from RESTful APIs and microservices to MLOps and cloud infrastructure. Works effectively with international and remote teams.',
    name: '— Cloud & AI',
    designation: 'AWS, Azure, Docker, Kubernetes, Terraform',
    twitterProfile: '#',
    organization: '',
    organizationURL: '#',
  },
  {
    image: AVATAR3,
    review:
      'Proven track record turning complex requirements into production-ready solutions: 6+ years, GDPR-compliant data systems, 99.9% availability targets, and significant cost optimizations.',
    name: '— Impact',
    designation: 'Production-ready, compliant, cost-aware',
    twitterProfile: '#',
    organization: '',
    organizationURL: '#',
  },
];

export const FOOTER_MENU = [
  {
    label: 'Contact',
    path: '#',
  },
  {
    label: 'Privacy',
    path: '#',
  },
  {
    label: 'Cookie Policy',
    path: '#',
  },
];
