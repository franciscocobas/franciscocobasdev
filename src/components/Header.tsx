const Header = () => {
  return (
    <nav className='dark:bg-red-400 text-white font-body flex items-center'>
      <ul className='flex flex-row justify-end mx-5 py-3 flex-grow'>
        <li className='mr-2'>Inicio</li>
        <li className='mr-10 ml-2'>Blog</li>
      </ul>
      <div className='flex justify-end pr-5 relative'>
        <div id='icons-container' className='flex'>
          <div className='ml-3 mr-2'>
            <span className='text-xl'>🌞</span>
          </div>
          <div className='ml-2 mr-2'>
            <span className='text-xl'>🌛</span>
          </div>
        </div>
        <button
          id='dark-light-btn'
          className='mr-10 rounded-full w-20 h-8 dark:bg-gray-300 dark:bg-opacity-75'
        ></button>
        <div id='ball' className='rounded-full w-7 h-7 border'></div>
      </div>
    </nav>
  );
};

export default Header;
