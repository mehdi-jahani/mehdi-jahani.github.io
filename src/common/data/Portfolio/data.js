import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialFacebook } from 'react-icons-kit/ionicons/socialFacebook';
import { socialDribbbleOutline } from 'react-icons-kit/ionicons/socialDribbbleOutline';
import { socialGithub } from 'react-icons-kit/ionicons/socialGithub';
import { socialGoogleplusOutline } from 'react-icons-kit/ionicons/socialGoogleplusOutline';

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
  replyTime: 'Reply time: within 1–2 working days',
};

export const SOCIAL_PROFILES = [
  {
    icon: socialTwitter,
    url: '#',
  },
  {
    icon: socialFacebook,
    url: '#',
  },
  {
    icon: socialDribbbleOutline,
    url: '#',
  },
  {
    icon: socialGithub,
    url: '#',
  },
  {
    icon: socialGoogleplusOutline,
    url: '#',
  },
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

// Certifications (from resume)
export const AWARDS = [
  {
    awardLogo: AwardImage1,
    awardName: 'Databricks Certified Data Engineer Professional',
    awardDetails: 'Databricks',
    awardeeLogo: Awardee1,
    awardeeName: 'Certification',
    date: '2023',
  },
  {
    awardLogo: AwardImage2,
    awardName: 'Microsoft Certified: Azure Data Engineer Associate (DP-203)',
    awardDetails: 'Microsoft',
    awardeeLogo: Awardee2,
    awardeeName: 'Certification',
    date: '2022',
  },
  {
    awardLogo: AwardImage3,
    awardName: 'AWS Certified Cloud Practitioner',
    awardDetails: 'Amazon Web Services',
    awardeeLogo: Awardee3,
    awardeeName: 'Certification',
    date: '',
  },
  {
    awardLogo: AwardImage4,
    awardName: 'Docker & Kubernetes: The Complete Guide',
    awardDetails: 'Udemy',
    awardeeLogo: Awardee4,
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
        image: PortfolioImage1,
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
        image: PortfolioImage2,
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
        image: PortfolioImage1,
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
        image: PortfolioImage2,
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
    image: Reviewer1,
    review:
      'Mehdi combines deep technical skill with a clear focus on scalability and reliability. He delivered a Data Lakehouse that reduced our data latency by 40% and established patterns the whole team now follows.',
    name: '— Backend & Data',
    designation: 'Scalable systems, ETL, real-time pipelines',
    twitterProfile: '#',
    organization: '',
    organizationURL: '#',
  },
  {
    image: Reviewer2,
    review:
      'Strong in both software and data engineering—from RESTful APIs and microservices to MLOps and cloud infrastructure. Works effectively with international and remote teams.',
    name: '— Cloud & AI',
    designation: 'AWS, Azure, Docker, Kubernetes, Terraform',
    twitterProfile: '#',
    organization: '',
    organizationURL: '#',
  },
  {
    image: Reviewer3,
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
