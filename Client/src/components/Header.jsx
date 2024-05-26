// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AiOutlineSearch } from 'react-icons/ai';
// import { FaMoon, FaSun } from 'react-icons/fa';


// export default function Header() {

//   return (
//     <nav className='border-b-2 h-14 flex items-center gap-3  justify-around'>
//       <Link
//         to='/'
//         className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
//       >
//         <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
//           Sahand's
//         </span>
//         Blog
//       </Link>
//       <form  className='bg-gray-600'>
//         <input
//           type='text'
//           placeholder='Search...'
//           className='hidden lg:inline py-2 px-4  w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600'
//         />
//       </form>
//       <button className='w-12 h-10 lg:hidden' color='gray' pill>
//         <AiOutlineSearch />
//       </button>
//         <div className="  w-fit hidden md:flex">
//           <ul>
//             <Link className='mr-5'>Home</Link>
//             <Link className='mr-5'>About</Link>
//             <Link className='mr-5'>Project</Link>
//           </ul>
//         </div>
//       <div className='flex gap-2 justify-center items-center '>
//         <button
//           className=' h-10 hidden sm:inline bg-white  dark:bg-black dark:text-white  bg-transparent font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full cursor-pointer '
//           color='gray'
//           pill
//         >
//          <FaMoon />
//         </button>   
//           <Link to='/sign-in'>
//             <button className='flex justify-center items-center bg-transparent font-semibold text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-pointer'>
//               Sign In
//             </button>
//           </Link>
//       </div>

//     </nav>
//   );
// }

import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';


export default function Header() {

  const path = useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
      >
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
          Dhanu's
        </span>
        Blog
      </Link>
      <form>
        <TextInput
          type='text'
          placeholder='Search...'
          rightIcon={AiOutlineSearch}
          className='hidden lg:inline'
        />
      </form>
      <Button className='w-12 h-10 lg:hidden' color='gray' pill>
        <AiOutlineSearch />
      </Button>
      <div className='flex gap-2 md:order-2'>
        <Button
          className='w-12 h-10 hidden sm:inline'
          color='gray'
          pill
        
        >
          <FaMoon />
        </Button>
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' outline>
              Sign In
            </Button>
          </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path==="/"} as={'div'} >
          <Link to='/'>Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path==="/about"} as={'div'}>
          <Link to='/about'>About</Link>
        </Navbar.Link>
        <Navbar.Link  active={path==="/project"} as={'div'}>
          <Link to='/project'>Projects</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}