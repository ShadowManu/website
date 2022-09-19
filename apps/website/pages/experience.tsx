import Typography from '@mui/material/Typography';
import SEO from '../components/seo';

import Shell from '../components/shell';

interface Job {
  company: {
    name: string;
    logo?: string;
    url?: string;
  };
  location: string;
  role: string;
  time: {
    start: string;
    end?: string;
  };
  techs: string[];
  description: string[];
}

const jobs: Job[] = [
  {
    company: {
      name: 'CourseKey / ZipDev',
    },
    location: 'Santiago',
    role: 'Software Engineer',
    time: {
      start: '2022-04',
    },
    techs: [
      'TypeScript',
      'NodeJS',
      'Serverless Framework',
      'AWS (Lambda, CloudWatch, CloudFormation)',
      'Monorepos',
    ],
    description: [
      'Provide IT expertise in the CourseKey Integrations pod, through the Nisum consultant',
      'Implement the data integrations required between our client systems and our systems',
      'Optimize the quality, performance and reliability of our integrations using TypeScript',
      'Provide new types of integrations to increase the range of services and potential clients of the company',
    ],
  },
  {
    company: {
      name: 'Globant',
    },
    location: 'Santiago',
    role: 'Senior NodeJS Developer',
    time: {
      start: '2021-01',
      end: '2022-03',
    },
    techs: [
      'TypeScript',
      'React',
      'Azure (AD, APIM, IaC)',
      'NodeJS',
      'Monorepos',
    ],
    description: [
      'Provided expertise for a mobile game company in partnership with the NFL and NBA',
      'Led a small team for the creation of internal tools for Customer Support, A/B Testing and Community Engagement',
      'Besides implementing new features and supporting junior devs, managed the development cycle, priorities, automations, and collaborations with other teams',
    ],
  },
  {
    company: {
      name: 'Banco Falabella',
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
      'With a team of software and mortgage specialists, built internal tools to provide clear and fast assistance to mortgage clients in request and liquidation processes',
      'These tools were designed and built as one of the first services of the company department to be deployed in the GCP Cloud',
    ],
  },
  {
    company: {
      name: 'BCI Bank / Nisum',
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
      'Java',
      'Spring',
      'Microservices',
      'Docker',
      'GCP',
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
    },
    location: 'London',
    role: 'Full Stack Engineer',
    time: {
      start: '2017-12',
      end: '2019-05',
    },
    techs: [
      'TypeScript',
      'React',
      'React Native',
      'NodeJS',
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
      'NodeJS (Hapi)',
      'AWS (Cloudfront, S3, Route 53, EC2)',
    ],
    description: [
      'Worked as developer for the ZOMOZ activities marketplace-like startup',
      'Initially started as a backend developer for the foundation of the product',
      'Continued working as a frontend developer, focusing on the technical architecture to sustain rapid development and consistent UI',
      'Gradually migrated from a AngularJS 1.x frontend running in production to Angular 2+',
    ],
  },
  {
    company: {
      name: 'Freelancer.com',
    },
    location: 'Caracas',
    role: 'Software Consultant',
    time: {
      start: '2015-07',
      end: '2017-09',
    },
    techs: ['NodeJS', 'Java'],
    description: [
      'Assisted on small-scale custom software solutions using NodeJS and Java',
    ],
  },
];

const Index = () => {
  return (
    <Shell centered>
      <SEO />

      <Typography variant="body1">TODO</Typography>
    </Shell>
  );
};

export default Index;
