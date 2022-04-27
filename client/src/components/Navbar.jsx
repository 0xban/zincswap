import { useState } from 'react';
import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/zincswap.png';

const NavbarItem = ( {title, classProps}) => {
    return (
        <li className={'mx-4 cursor-pointer ${classProps}'}>{title}</li>
    )
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)

    const connectWallet = () => {

    }

    return ( 
    <nav className="w-full flex md:justify-start justify-between items-center p-4">
        <div className="md:flex-[0.33] flex-initial justify-center items-center">
            <img src={logo} alt="logo" className="w-96 cursor-pointer"></img>
        </div>
        <ul className="font-semibold text-white md:flex hidden list-none flex-row justify-end items-center flex-initial px-4">
            {["Swap", "Stake", "Farm", "xnDOGE"].map((item, index)=> (
                <NavbarItem key={item+index} title={item} />
            ))}


            <li className="font-semibold bg-blue-600 py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-blue-700"
                onClick= {connectWallet}
            >
                Connect Wallet
            </li>

            
        </ul>

        <div className="flex relative">

            {toggleMenu
            ? <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
            : <HiMenuAlt4  fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
            }

            {toggleMenu && (
            <ul
                className="z-10 fixed top-0 -right-2 p-2 w-[45vw] h-screen shadow-2xl md:hidden list-none 
                    flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in leading-10"
            >
                <li className="text-xl w-full my-0">
                    <AiOutlineClose onClick={() => setToggleMenu(false)} />
                </li>
                {["Swap", "Stake", "Farm", "xnDOGE"].map((item, index)=> (
                <NavbarItem key={item+index} title={item} classProps="my-2 text-lg" />
            ))}
            <li className="font-semibold bg-blue-600 py-1 px-5 mx-4 rounded-full"
                onClick= {connectWallet}
            >
            Connect
            </li>
            </ul>    
            )} 
        </div>
    </nav>
    );
}

export default Navbar;
