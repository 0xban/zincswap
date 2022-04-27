import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../../images/zincswap.png';

const NavbarItem = ( {title, classProps}) => {

    return (
        <li className={'mx-4 cursor-pointer ${classProps}'}>{title}</li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (

    <nav className="w-full flex md:justify-center justify-between items-center p-6">
        <div className="active:scale-95">
            <img src={logo} alt="logo" className="w-24 cursor-pointer"></img>
        </div>
            <ul className="font-semibold basis-1/4 mr-32 ml-72 justify-center text-white items-center md:flex hidden list-none flex-row items-center flex-initial px-4">
                {["Swap", "Stake", "Farm", "Zinc"].map((item, index)=> (
                    <NavbarItem key={item+index} title={item} />
                ))}
                
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
                {["Swap", "Stake", "Farm", "Zinc"].map((item, index)=> (
                <NavbarItem key={item+index} title={item} classProps="my-2 text-lg" />
                ))}
            </ul>    
            )} 
        </div>
    </nav>
    );
}

export default Navbar;
