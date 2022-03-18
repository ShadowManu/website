import Head from 'next/head';

interface Props {
  subtitle?: string;
  type?: string;
}

const SEO: React.FC<Props> = ({ subtitle, type }) => {
  const data = {
    title: `${
      subtitle ? `${subtitle} | ` : ''
    }Manuel Pacheco | Software Engineer`,
    author: 'Manuel Pacheco',
    description:
      'Senior Software Engineer. 6 years of experience making software for the web. Typescript. React. Node. Azure. Angular. Haskell. Biking. Video Games.',
    type: type ?? 'website',
    url: 'https://manuelpacheco.dev',
    image: 'https://manuelpacheco.dev/portrait.jpg',
  };

  return (
    <Head>
      <title>{data.title}</title>
      <meta name="author" content={data.author} />
      <meta name="description" content={data.description} />

      {/* Facebook Open Graph */}
      <meta property="og:type" content={data.type} />
      <meta property="og:title" content={data.title} />
      <meta property="og:url" content={data.url} />
      <meta property="og:description" content={data.description} />
      <meta property="og:image" content={data.image} />

      {/* Twitter Open Graph */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:creator" content={data.author} />
      <meta name="twitter:image" content={data.image} />
    </Head>
  );
};

export default SEO;
