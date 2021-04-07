import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Francisco Cobas Dev</title>
      </Head>
      <div className='bg-white dark:bg-gray-800 dark:text-white min-h-screen flex items-center justify-center'>
        <h1>Hello, this is Francisco Cobas</h1>
        <img
          src='/images/FranciscoProfile.webp'
          alt='Francisco Cobas Foto de perfil'
          className='rounded-full w-80 h-80 shadow-xl'
        />
      </div>
    </>
  );
}
