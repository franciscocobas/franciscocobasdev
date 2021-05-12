import { useTheme } from 'next-themes';

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className='flex justify-end pr-5 relative'>
      <div
        id='icons-container'
        className='flex cursor-pointer'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <div className='ml-1 mr-2'>
          <span className='text-xl'>🌞</span>
        </div>
        <div className='ml-0 mr-2'>
          <span className='text-xl'>🌛</span>
        </div>
      </div>
      <button
        id='dark-light-btn'
        style={{ height: '1.9rem' }}
        className='mr-10 rounded-full w-16 border border-gray-400 dark:bg-gray-300 dark:bg-opacity-75 cursor-pointer focus:outline-none'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <span
          id='circle'
          className='w-7 h-7 ring-black block bg-current rounded-full z-10 relative ml-9 dark:ml-0'
        />
      </button>
    </div>
  );
};

export default DarkModeButton;
