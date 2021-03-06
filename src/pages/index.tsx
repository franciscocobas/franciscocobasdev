import Head from 'next/head';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/dist/client/router';
import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return locale === 'en'
    ? {
        props: {
          title: 'Brief introduction',
          description: `Hello, this is Francisco Cobas. I'm a web developer with more than 8 years of experiencie.
            I ❤️ Javascript. My recent projects were develop using ReactJS and Typescript, also I have experience in the backend with
            NodeJS and Express. 
            `,
          message: 'For a better experience',
        },
      }
    : {
        props: {
          title: 'Breve introducción',
          description: `
            Hola, mi nombre es Francisco Cobas. Soy programador web con más de 8 años de experiencia en la industria. 
            Principalmente estoy enfocado en el lenguaje Javascript, tengo experiencia en el Backend trabajando con NodeJS y Express, 
            y más experiencia trabajando en el Frontend con ReactJS como principal tecnología.
          `,
          message:
            'Para una experiencia más entretenida, podés escribir tu nombre en el siguiente campo de texto:',
          messageAux: 'Disclaimer: No se guardará ningún dato.',
          messageDev:
            '¿Querés tener una experiencia más orientada a la programación?',
          messageYes: 'Si',
          messageNo: 'No',
        },
      };
};

interface HomeProps {
  description: string;
  title: string;
  message: string;
  messageAux: string;
}

type Inputs = {
  example: string;
  exampleRequired: string;
};

export default function Home({
  description,
  title,
  message,
  messageAux,
}: HomeProps) {
  const { locale } = useRouter();
  const {} = useForm<Inputs>();

  return (
    <>
      <Head>
        <title>
          {locale === 'en'
            ? 'Welcome to Francisco Cobas Dev'
            : 'Bienvenido a Francisco Cobas Dev'}
        </title>
      </Head>
      <div className='bg-white dark:bg-gray-800  dark:text-white'>
        <div
          style={{ maxWidth: '1100px' }}
          className='py-12 md:pt-36 mx-12 md:mx-auto flex items-center justify-center flex-col-reverse md:flex-row'
        >
          <div className='md:w-1/2 mt-8 md:mt-0'>
            <h1 className='text-4xl mb-4'>{title}</h1>
            <p>{description}</p>
          </div>
          <div className='md:w-1/2 flex justify-center px-12'>
            <Image
              src='/images/FranciscoProfile.webp'
              width='400'
              height='400'
              className='rounded-full'
            />
          </div>
        </div>
      </div>
    </>
  );
}
