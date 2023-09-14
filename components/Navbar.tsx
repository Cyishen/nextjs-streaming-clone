import { BsChevronDown, BsSearch, BsBell } from "react-icons/bs";
import { useCallback, useState, useEffect } from "react";

import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";

const TopScroll = 66

const Navbar = () => {
    
    const [showMenu, setShowMenu] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    const toggleMenu = useCallback( () => {
        setShowMenu( (current) => !current)
    }, []);

    const toggleAccountMenu = useCallback( () => {
        setShowAccountMenu( (current) => !current)
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= TopScroll){
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        }
        window.addEventListener('scroll', handleScroll)
        
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[]);

    return ( 
        <nav className="w-full fixed z-40">
            <div className={`px-4 md:px-14 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-black bg-opacity-90' : '' }`}>
                <img className="h-4 lg:h-7" src="/images/logo.png" alt="Logo" />

                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home" />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="Popular" />
                </div>
                
                {/* mobile only */}
                <div onClick={toggleMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Menu</p>
                    <BsChevronDown className={`text-white transition ${showMenu ? '-rotate-90' : '' }`} />
                    <MobileMenu visible={showMenu} />

                </div>

                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
                        <BsBell />
                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden ">
                            <img src="/images/sanji.jpeg" alt="user"  />
                        </div>
                        <BsChevronDown className={`text-white transition ${showAccountMenu ? 'rotate-90' : '' }`} />
                        <AccountMenu visible={showAccountMenu} />
                    </div>
                </div>

            </div>
        </nav>
    );
}

export default Navbar;