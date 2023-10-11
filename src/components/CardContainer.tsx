import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const CardContainer = ({ children }: Props) => {
  return (
    <div className='bg-[#011627] border-2 border-[#1E2D3D] rounded-lg font-firacode'>
      <div className='flex border-b-2 border-[#1E2D3D]'>
        <div className='px-6 py-5'>
          <h1>Titto MA</h1>
        </div>
        <div className='border-l-2 border-r-2 border-[#1E2D3D] px-8 flex items-center'>
          <Link to='/'>Home</Link>
        </div>
        <div className='border-l-2 border-r-2 border-[#1E2D3D] px-8 flex items-center'>
          <Link to='/about'>About</Link>
        </div>
        <div className='border-l-2 border-r-2 border-[#1E2D3D] px-8 flex items-center'>
          <Link to='/projects'>Projects</Link>
        </div>
        <div className='border-l-2 border-[#1E2D3D] px-8 flex items-center ml-auto'>
          <Link to='/contact'>Contact me</Link>
        </div>
      </div>

      <div className='p-6'>{children}</div>
    </div>
  );
};

export default CardContainer;
