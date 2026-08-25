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
    description: 'Projeto web/app que permite aos coordenadores da empresa Liga Positiva controlar as diárias de funcionários, enviar escalas, acessar perfis individuais e enviar notificações.',
    technologies: ['React.js', 'Python'],
    repoUrl: 'https://github.com/jorgefelipe0299/controleDeDiarias',
    iconName: 'CalendarDays',
  },
  {
    id: '6',
    title: 'Climas e Aviões',
    shortTitle: 'CLIMA/AVIÃO',
    description: 'Aplicação dedicada ao rastreamento e exibição de dados combinados sobre condições climáticas e voos.',
    technologies: ['JavaScript'],
    repoUrl: 'https://github.com/jorgefelipe0299/ClimasEAvioes',
    iconName: 'Plane',
  },
  {
    id: '7',
    title: 'Agenda Studio',
    shortTitle: 'AGENDA STUDIO',
    description: 'Projeto web/app para a GO Studio, permitindo o cadastro de clientes, agendamento de horários mensais, precificação de procedimentos e controle de ganhos mensais.',
    technologies: ['React.js'],
    repoUrl: 'https://github.com/jorgefelipe0299/agendaStudio',
    iconName: 'Scissors',
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
    description: 'Web/app project that allows coordinators at Liga Positiva to manage employee daily wages, send schedules, access individual profiles, and send notifications.',
    technologies: ['React.js', 'Python'],
    repoUrl: 'https://github.com/jorgefelipe0299/controleDeDiarias',
    iconName: 'CalendarDays',
  },
  {
    id: '6',
    title: 'Weather & Planes',
    shortTitle: 'WEATHER/PLANE',
    description: 'Application dedicated to tracking and displaying combined data on weather conditions and flights.',
    technologies: ['JavaScript'],
    repoUrl: 'https://github.com/jorgefelipe0299/ClimasEAvioes',
    iconName: 'Plane',
  },
  {
    id: '7',
    title: 'Agenda Studio',
    shortTitle: 'AGENDA STUDIO',
    description: 'Web/app project for GO Studio, allowing client registration, monthly appointment scheduling, procedure pricing, and monthly earnings tracking.',
    technologies: ['React.js'],
    repoUrl: 'https://github.com/jorgefelipe0299/agendaStudio',
    iconName: 'Scissors',
  }
];

export const projects = {
  pt: projects_pt,
  en: projects_en
};

export const certificates = [
  {
    id: '1',
    title: 'Claude e Python: desenvolva assistentes com a API da Anthropic',
    institution: 'Alura',
    skills: ['Python', 'Claude API', 'Anthropic', 'AI Assistants'],
    date: '2026',
    verificationLink: 'https://cursos.alura.com.br/certificate/917f4587-4053-4f11-9fa9-95927a9e8910', // Placeholder until real link is provided
    iconName: 'Bot'
  },
  {
    id: '2',
    title: 'Python: Persistência de dados com arquivos, bancos de dados e APIs REST',
    institution: 'Alura',
    skills: ['Python', 'SQLite', 'PostgreSQL', 'FastAPI'],
    date: 'Ago 2026',
    verificationLink: 'https://cursos.alura.com.br/certificate/917f4587-4053-4f11-9fa9-95927a9e8910',
    iconName: 'TerminalSquare'
  },
  {
    id: '3',
    title: 'Looker Studio: parâmetros e combinações de dados',
    institution: 'Alura',
    skills: ['Looker Studio', 'Data Analysis', 'BI'],
    date: '2026',
    verificationLink: 'https://cursos.alura.com.br/certificate/917f4587-4053-4f11-9fa9-95927a9e8910', // Placeholder
    iconName: 'BarChart3'
  },
  {
    id: '4',
    title: 'Looker Studio: trabalhando com funções e filtros',
    institution: 'Alura',
    skills: ['Looker Studio', 'Data Filtering', 'Functions'],
    date: '2026',
    verificationLink: 'https://cursos.alura.com.br/certificate/917f4587-4053-4f11-9fa9-95927a9e8910', // Placeholder
    iconName: 'Filter'
  },
  {
    id: '5',
    title: 'Power BI: análises avançadas com DAX',
    institution: 'Alura',
    skills: ['Power BI', 'DAX', 'Advanced Analytics'],
    date: '2026',
    verificationLink: 'https://cursos.alura.com.br/certificate/917f4587-4053-4f11-9fa9-95927a9e8910', // Placeholder
    iconName: 'LineChart'
  },
  {
    id: '6',
    title: 'Looker Studio: visualização de dados',
    institution: 'Alura',
    skills: ['Looker Studio', 'Data Visualization', 'Dashboards'],
    date: '2026',
    verificationLink: 'https://cursos.alura.com.br/certificate/917f4587-4053-4f11-9fa9-95927a9e8910', // Placeholder
    iconName: 'PieChart'
  },
  {
    id: '7',
    title: 'Looker Studio: criando o primeiro relatório',
    institution: 'Alura',
    skills: ['Looker Studio', 'Reporting', 'Data Viz'],
    date: '2026',
    verificationLink: 'https://cursos.alura.com.br/certificate/917f4587-4053-4f11-9fa9-95927a9e8910', // Placeholder
    iconName: 'FileText'
  }
];
