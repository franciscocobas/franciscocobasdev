const Header = () => {
  return (
    <div>
      <nav className='bg-gray-800 dark:bg-red-400 text-white font-body'>
        <ul className='flex flex-row justify-end mx-5 py-3'>
          <li className='mr-2'>Inicio</li>
          <li className='mr-10 ml-2'>Blog</li>
        </ul>
      </nav>
      <button className='bg-transparent'></button>
    </div>
  );
};

export default Header;
