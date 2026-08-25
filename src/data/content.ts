import type { LucideIcon } from 'lucide-react';
import {
  Mail,
  FolderGit2,
  Languages as LanguagesIcon,
  Code2,
  Server,
  Database,
  Braces,
  FileCode,
  Palette,
  Atom,
  Workflow,
  Radio,
  Table2,
  Share2,
  Calculator,
  MessageSquare,
  Bot,
  ShoppingBag,
  Layers,
  Zap,
  HardDrive,
  Hash,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon} from '../components/icons/BrandIcons';

type IconComponent = LucideIcon | typeof GithubIcon | typeof LinkedinIcon;

export const NAV_LINKS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SectionId = (typeof NAV_LINKS)[number]['id'];

export interface SocialLink {
  label: string;
  href: string;
  icon: IconComponent;
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/jawadsamiulhaq', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jawad-sami-ul-haq-ab2a44217/', icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:jawad786sami@gmail.com', icon: Mail },
];

export const ROLES = ['Software Engineer', 'Problem Solver'];

export interface StatItem {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

export const STATS: StatItem[] = [
  { icon: FolderGit2, value: 4, suffix: '+', label: 'Projects Completed' },
  { icon: Code2, value: 11, suffix: '+', label: 'Tech Skills' },
  { icon: LanguagesIcon, value: 2, suffix: '', label: 'Languages Spoken' },
];

export interface SkillItem {
  name: string;
  icon: LucideIcon;
}

export interface SkillCategory {
  title: string;
  items: SkillItem[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    items: [

      { name: 'JavaScript', icon: Braces },
      { name: 'TypeScript', icon: Braces },
      { name: 'C#', icon: Hash },
      { name: 'HTML', icon: FileCode },
      { name: 'CSS', icon: Palette },
    ],
  },
  {
    title: 'Front-End',
    items: [
      { name: 'React.js', icon: Atom },
      { name: 'Redux', icon: Share2 },
      { name: 'Razor Pages', icon: Layers },
    ],
  },
  {
    title: 'Back-End',
    items: [
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Workflow },
      { name: 'Socket.io', icon: Radio },
      { name:  'Dotnet', icon: Server },
    ],
  },
  {
    title: 'Data',
    items: [
      { name: 'MongoDB', icon: Database },
      { name: 'SQL', icon: Table2 },
      { name: 'SQL Server', icon: Server },
      { name: 'Redis', icon: Zap },
      { name: 'RustFS', icon: HardDrive },
    ],
  },
];

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  image?: string;
  github?: string;
  live?: string;
}

export const PROJECTS: ProjectItem[] = [
   {
  title: 'Lumina',
  description:
    'A production-style, full-stack ecommerce platform with an integrated admin dashboard, dynamic catalog management, and seamless Stripe payment integration.',
  tags: ['React', 'TypeScript', 'ASP.NET Core', 'EF Core', 'SQL Server', 'Tailwind CSS'],
  icon: ShoppingBag,
  image: '/images/lumina.webp'
},
  {
    title: 'UAF CGPA Calculator',
    description:
      "A CGPA calculation tool integrated with UAF's LMS through web scraping, automatically retrieving and organizing academic results into a clean, table-formatted view of semesters, course codes, grades and quality points.",
    tags: ['Web Scraping', 'Automation', 'JavaScript'],
    icon: Calculator,
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'A real-time messaging web app built on the MERN stack, with JWT authentication and bcrypt password hashing to keep accounts secure.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    icon: MessageSquare,
  },
  {
    title: 'Gemini Clone',
    description:
      'An AI chatbot interface inspired by Google Gemini, built to practice API integration and conversational UI design.',
    tags: ['React', 'API Integration', 'UI/UX'],
    icon: Bot,
  }
 
  
];

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Web Developer',
    company: 'PPC Evolutions Project',
    location: 'Multan, Pakistan',
    period: 'Aug 2024',
    bullets: [
      'Delivered a responsive website for a digital marketing agency to support Amazon PPC operations and client engagement.',
      'Used HTML, CSS and JavaScript to build an interactive, engaging user interface.',
      'Refined a provided template into a client-specific website, improving visual consistency and usability.',
      'Managed domain deployment with analytics and Google indexing.',
    ],
  },
];

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
  gpa?: string;
}

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor's in Computer Science",
    school: 'University of Agriculture, Faisalabad',
    period: 'Sep 2021 — Jul 2025',
    gpa: '3.24',
  },
];

export interface LanguageItem {
  name: string;
  level: string;
}

export const LANGUAGES: LanguageItem[] = [
  { name: 'English', level: 'Intermediate' },
  { name: 'Urdu', level: 'Professional' },
];

export const PROFILE = {
  name: 'Jawad Sami Ul Haq',
  firstName: 'Jawad',
  lastName: 'Sami Ul Haq',
  email: 'jawad786sami@gmail.com',
  phone: '+92 347 86*****',
  location: 'Punjab, Pakistan',
  freelance: 'Available',
  website: 'https://jawadsamiulhaq.vercel.app/',
  bio: 'Full-stack engineer specialized in the MERN stack, focused on building scalable applications that improve efficiency and user satisfaction. Skilled in HTML, CSS, JavaScript, Node.js and MongoDB, with hands-on React and SQL experience, and a focus on performance optimization and user-centric development.',
};
