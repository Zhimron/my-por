import type { IconType } from 'react-icons';
import {
  SiBeekeeperstudio,
  SiDocker,
  SiDotnet,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiPython,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from 'react-icons/si';
import { TbApi, TbCloud, TbSql } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import type { SkillIconName } from '../../data/types';

const skillIcons: Record<SkillIconName, IconType> = {
  typescript: SiTypescript,
  javascript: SiJavascript,
  python: SiPython,
  php: SiPhp,
  dotnet: SiDotnet,
  csharp: SiSharp,
  sql: TbSql,
  react: SiReact,
  tailwindcss: SiTailwindcss,
  framer: SiFramer,
  html5: SiHtml5,
  vite: SiVite,
  nodejs: SiNodedotjs,
  laravel: SiLaravel,
  api: TbApi,
  mongodb: SiMongodb,
  mysql: SiMysql,
  vercel: SiVercel,
  cloud: TbCloud,
  docker: SiDocker,
  githubactions: SiGithubactions,
  git: SiGit,
  vscode: VscVscode,
  figma: SiFigma,
  postman: SiPostman,
  beekeeperstudio: SiBeekeeperstudio,
};

type SkillIconProps = {
  icon: SkillIconName;
  className?: string;
};

const SkillIcon = ({ icon, className }: SkillIconProps) => {
  const Icon = skillIcons[icon];

  return <Icon className={className} aria-hidden="true" focusable="false" />;
};

export default SkillIcon;
