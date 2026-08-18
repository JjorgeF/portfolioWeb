import { Project } from './types';

export const projects_pt: Project[] = [
  {
    id: '1',
    title: 'Keylogger',
    shortTitle: 'KEYLOGGER',
    description: 'Malware da categoria Keylogger, que anota tudo que a vítima digita, horário e abas acessadas em sua máquina, armazenando de forma discreta.',
    technologies: ['C++'],
    repoUrl: 'https://github.com/jorgefelipe0299/keylogger',
    iconName: 'Keyboard',
  },
  {
    id: '2',
    title: 'Download Plataform',
    shortTitle: 'DOWNLOADER',
    description: 'Tornar o download de arquivos de áudio, vídeo, entre outros formatos mais fácil, possibilitando a conversão deles e retorno para o solicitante.',
    technologies: ['Python'],
    repoUrl: 'https://github.com/jorgefelipe0299/downloadPlataform',
    iconName: 'Download',
  },
  {
    id: '3',
    title: 'Automação Excel DB',
    shortTitle: 'EXCEL DB',
    description: 'Automação que faz iteração de SELECTs dentro de BD, unificando SELECTS distintos num mesmo arquivo .xlsx.',
    technologies: ['Python'],
    repoUrl: 'https://github.com/jorgefelipe0299/automacaoExcelBD',
    iconName: 'Database',
  },
  {
    id: '4',
    title: 'Registrador de Acessos',
    shortTitle: 'ACESSOS',
    description: 'Sistema para registro de indivíduos e busca de informações, permitindo cadastro e consultas por nome, e-mail ou prontuário.',
    technologies: ['C++'],
    repoUrl: 'https://github.com/jorgefelipe0299/registradorDeAcessos',
    iconName: 'Users',
  },
  {
    id: '5',
    title: 'Controle de Diárias',
    shortTitle: 'DIÁRIAS',
    description: 'Sistema web especializado no controle e gerenciamento de diárias.',
    technologies: ['TypeScript'],
    repoUrl: 'https://github.com/jorgefelipe0299/controleDeDiarias',
    iconName: 'Calendar',
  },
  {
    id: '6',
    title: 'Climas e Aviões',
    shortTitle: 'CLIMA/AVIÃO',
    description: 'Aplicação dedicada ao rastreamento e exibição de dados combinados sobre condições climáticas e voos.',
    technologies: ['JavaScript'],
    repoUrl: 'https://github.com/jorgefelipe0299/ClimasEAvioes',
    iconName: 'Plane',
  }
];

export const projects_en: Project[] = [
  {
    id: '1',
    title: 'Keylogger',
    shortTitle: 'KEYLOGGER',
    description: 'Keylogger malware that records everything the victim types, along with timestamps and accessed tabs on their machine, storing it discreetly.',
    technologies: ['C++'],
    repoUrl: 'https://github.com/jorgefelipe0299/keylogger',
    iconName: 'Keyboard',
  },
  {
    id: '2',
    title: 'Download Platform',
    shortTitle: 'DOWNLOADER',
    description: 'Makes downloading audio, video, and other file formats easier, allowing format conversion and returning them to the requester.',
    technologies: ['Python'],
    repoUrl: 'https://github.com/jorgefelipe0299/downloadPlataform',
    iconName: 'Download',
  },
  {
    id: '3',
    title: 'Excel DB Automation',
    shortTitle: 'EXCEL DB',
    description: 'Automation that iterates through SELECT queries within a DB, unifying different SELECT results into a single .xlsx file.',
    technologies: ['Python'],
    repoUrl: 'https://github.com/jorgefelipe0299/automacaoExcelBD',
    iconName: 'Database',
  },
  {
    id: '4',
    title: 'Access Recorder',
    shortTitle: 'ACCESSES',
    description: 'System for registering individuals and searching information, allowing registration and queries by name, email, or medical record number.',
    technologies: ['C++'],
    repoUrl: 'https://github.com/jorgefelipe0299/registradorDeAcessos',
    iconName: 'Users',
  },
  {
    id: '5',
    title: 'Per Diem Control',
    shortTitle: 'PER DIEM',
    description: 'Specialized web system for tracking and managing per diem allowances.',
    technologies: ['TypeScript'],
    repoUrl: 'https://github.com/jorgefelipe0299/controleDeDiarias',
    iconName: 'Calendar',
  },
  {
    id: '6',
    title: 'Weather & Planes',
    shortTitle: 'WEATHER/PLANE',
    description: 'Application dedicated to tracking and displaying combined data on weather conditions and flights.',
    technologies: ['JavaScript'],
    repoUrl: 'https://github.com/jorgefelipe0299/ClimasEAvioes',
    iconName: 'Plane',
  }
];

export const projects = {
  pt: projects_pt,
  en: projects_en
};
