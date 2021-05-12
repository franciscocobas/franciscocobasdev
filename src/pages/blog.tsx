import Head from 'next/head';
import { useRouter } from 'next/dist/client/router';

const Blog = () => {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>
          {locale === 'en'
            ? 'Francisco Cobas Dev Blog'
            : 'Mi blog - Francisco Cobas Dev'}
        </title>
      </Head>
      <div className='dark:bg-gray-900 min-h-screen'></div>
    </>
  );
};

export default Blog;
