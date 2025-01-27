export interface Company {
  name: string;
  logo: string;
  url: string;
}

export interface Job {
  company: Company;
  intermediary?: Company;
  location: string;
  role: string;
  time: {
    start: string;
    end?: string;
  };
  techs: string[];
  description: string[];
}

export const jobs: Job[] = [
  {
    company: {
      name: 'CourseKey',
      logo: 'https://coursekey.com/wp-content/uploads/2022/04/Footer-icon.png',
      url: 'https://coursekey.com/',
    },
    intermediary: {
      name: 'ZipDev',
      logo: 'https://res.cloudinary.com/dvnzesejj/image/upload/v1707323272/zipdev-logo_mh1rle.png',
      url: 'https://zipdev.com/',
    },
    location: 'Santiago (Remote, PST)',
    role: 'Backend Software Engineer',
    time: {
      start: '2022-04',
    },
    techs: [
      'TypeScript',
      'Node.js',
      'Serverless',
      'AWS (Lambda, CW, CF)',
      'Github Actions',
      'Python',
      'Monorepos',
    ],
    description: [
      'Provide IT expertise in the California-based CourseKey company, in the Integrations team',
      'Implement the data integrations required between our client systems and our systems',
      'Connect and synchronize data from SIS and LMS systems like CampusNexus, Canvas, Moodle',
      'Optimize the quality, performance and reliability of our integrations using TypeScript',
      'Provide new types of integrations to increase the range of services and potential clients of the company',
      'Build student insights based on the data we receive, using SQL/Python/BI tools',
    ],
  },
  {
    company: {
      name: 'Globant',
      logo: 'https://statics.globant.com/production/public/2022-08/globant-logo.jpg',
      url: 'https://www.globant.com/',
    },
    location: 'Santiago (Remote, PST)',
    role: 'Senior Node.js Developer',
    time: {
      start: '2021-01',
      end: '2022-03',
    },
    techs: [
      'TypeScript',
      'React',
      'Azure (AD, APIM, Bicep)',
      'Node.js',
      'Monorepos',
    ],
    description: [
      'Provided expertise for a mobile game company in partnership with the NFL and NBA',
      'Led a small team for the creation of internal tools for Customer Support, A/B Testing and Community Engagement',
      'The main portal for internal tools interacted with the Azure AD and all existing environments (prod, staging, etc)',
      'Besides implementing new features and supporting junior devs, managed the development cycle, priorities, automations, and collaborations with other teams',
    ],
  },
  {
    company: {
      name: 'Banco Falabella',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Logotipo_Banco_Falabella.svg/2560px-Logotipo_Banco_Falabella.svg.png',
      url: 'https://www.bancofalabella.cl/',
    },
    location: 'Santiago',
    role: 'Software Engineer',
    time: {
      start: '2020-09',
      end: '2020-12',
    },
    techs: [
      'TypeScript',
      'Angular',
      'Java',
      'Spring',
      'Microservices',
      'Docker',
      'GCP',
    ],
    description: [
      'Built management software for the Falabella Mortgage Division',
      'With a team of software and mortgage specialists, built internal tools to provide clear and fast assistance to mortgage clients, in request and liquidation processes',
      'These tools were designed and built as one of the first services of the company department to be deployed in the GCP Cloud',
    ],
  },
  {
    company: {
      name: 'Banco de Crédito e Inversiones',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bci_Logotype.svg/1200px-Bci_Logotype.svg.png',
      url: 'https://www.bci.cl/',
    },
    intermediary: {
      name: 'Nisum',
      logo: 'https://www.nisum.com/hs-fs/hubfs/Full%20logo%20version%20color.png?width=4594&height=1234&name=Full%20logo%20version%20color.png',
      url: 'https://www.nisum.com/',
    },
    location: 'Santiago',
    role: 'Senior Full Stack Engineer',
    time: {
      start: '2019-06',
      end: '2020-09',
    },
    techs: [
      'TypeScript',
      'Angular',
      'Design Systems',
      'Microservices',
      'Docker',
    ],
    description: [
      'Provided IT expertise in a development team in the BCI stocks division, through the Nisum consultant',
      'Transformed a manual registration process to trade national stocks that could take weeks of verifications into web forms that take only minutes to start trading',
      'Enabled a service to easily purchase dollars at the available exchange rate through the bank private site',
      'Collaborated with other teams to create and mantain shared libraries of the company frontend apps',
    ],
  },
  {
    company: {
      name: "Let's Talk Media",
      logo: 'https://letstalkmedia.co.uk/templates/letstalk/img/logo---LTM---white.png',
      url: 'https://letstalkmedia.co.uk/',
    },
    location: 'Caracas (Remote, London Time)',
    role: 'Full Stack Engineer',
    time: {
      start: '2017-12',
      end: '2019-05',
    },
    techs: [
      'TypeScript',
      'React',
      'React Native',
      'Node.js',
      'NestJS',
      'Docker',
      'Gitlab CI',
      'Flutter',
      'Python',
    ],
    description: [
      'Designed and implemented software systems, web applications and mobile applications for small businesses, startups and educational institutions',
      'Collaborated with teammates in a remote-based environment handling all the challenges that come with very different timezones',
    ],
  },
  {
    company: {
      name: 'ZOMOZ',
      logo: 'https://avatars.githubusercontent.com/u/16311464?s=280&v=4',
      url: 'https://www.instagram.com/zomozvenezuela',
    },
    location: 'Caracas',
    role: 'Full Stack Engineer',
    time: {
      start: '2015-10',
      end: '2017-10',
    },
    techs: [
      'Typescript',
      'Angular',
      'Node.js (Hapi)',
      'AWS (Cloudfront, S3, Route 53, EC2)',
    ],
    description: [
      'Worked as developer for the ZOMOZ activities marketplace-like startup',
      'Initially started as a backend developer for the foundation of the product',
      'Continued working as a frontend developer, focusing on the technical architecture to sustain rapid development and consistent UI',
      'Gradually migrated from a AngularJS 1.x frontend running in production to Angular 2+ using TypeScript',
    ],
  },
  {
    company: {
      name: 'Freelancer.com',
      logo: 'https://www.f-cdn.com/assets/main/en/assets/app-icons/icon-512x512.png',
      url: 'https://www.freelancer.com',
    },
    location: 'Caracas',
    role: 'Software Consultant',
    time: {
      start: '2015-07',
      end: '2017-09',
    },
    techs: ['Node.js', 'Java'],
    description: [
      'Assisted on small-scale custom software solutions using Node.js and Java',
    ],
  },
];
