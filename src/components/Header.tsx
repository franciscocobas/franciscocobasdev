import DarkModeButton from './DarkModeButton';
import Link from 'next/link';

const Header = () => {
  return (
    <nav className='bg-gray-800 dark:bg-red-500 text-white font-body flex items-center'>
      <ul className='flex flex-row justify-end mx-5 py-3 flex-grow'>
        <li className='mr-2'>
          <Link href='/'>Inicio</Link>
        </li>
        <li className='mr-10 ml-2'>
          <Link href='blog'>Blog</Link>
        </li>
      </ul>
      <DarkModeButton />
    </nav>
  );
};

export default Header;
