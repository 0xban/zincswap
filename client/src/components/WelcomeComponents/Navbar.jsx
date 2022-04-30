import { useState } from 'react';
import { Link } from "react-router-dom"
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../../images/zincswap.png';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (

    <nav className="w-full flex md:justify-center justify-between items-center p-6 gradient-bg">
        <div className="active:scale-95">
                <li className='flex items-center'>
                    <Link to="/">
                        <img src={logo} alt="logo" className="w-24 cursor-pointer"></img>
                    </Link>
                </li>
        </div>
            <ul className="font-semibold basis-1/4 mr-32 ml-72 justify-center text-white items-center md:flex hidden list-none flex-row items-center flex-initial px-4">
                <li className='p-4'>
                    <Link to="/swap">Swap</Link>
                </li>
                <li className='p-4'>
                    <Link to="/stake">Stake</Link>
                </li>
                <li className='p-4'>
                    <Link to="/farm">Farm</Link>
                </li>
                <li className='p-4'>
                    <Link to="/zinc">Zinc</Link>
                </li>        
            </ul>
                <button className="ml-20 font-bold text-white md:flex hidden bg-gray-600 py-2 px-7 mx-4 cursor-pointer hover:bg-gray-700">
                    Enter zincswap
                </button>

                

        <div className="flex relative">

            {toggleMenu
            ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
            : <HiMenuAlt4  fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
            }

            {toggleMenu && (
            <ul
                className="z-10 fixed top-0 -right-2 p-2 w-[45vw] h-screen shadow-2xl md:hidden list-none 
                    flex flex-col justify-start items-center rounded-md black-glassmorphism text-white animate-slide-in leading-10">
                <li className="text-xl w-full my-0">
                    <AiOutlineClose onClick={() => setToggleMenu(false)} />
                </li>
                    <li className='p-4'>
                        <Link to="/SwapPage">Swap</Link>
                    </li>
                    <li className='p-4'>
                        <Link to="/StakePage">Stake</Link>
                    </li>
                    <li className='p-4'>
                        <Link to="/FarmPage">Farm</Link>
                    </li>
                    <li className='p-4'>
                        <Link to="/ZincPage">Zinc</Link>
                    </li>
            </ul>    
            )} 
        </div>
    </nav>
    )
}

export default Navbar;
