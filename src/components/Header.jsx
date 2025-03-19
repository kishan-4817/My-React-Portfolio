import { motion } from "framer-motion";
import { useState } from "react";
import Time from "../utils/time";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    return (
        <motion.header
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: "fixed", top: 0, width: "100%", left: 0, zIndex: 100 }}
            className="bg-black bg-opacity-75 z-50 border-b border-[#ffffff1a] sm:bg-none sm:bg-opacity-0"
        >
            <motion.div
                initial={{ height: "auto" }}
                animate={{ height: isOpen ? "auto" : "auto" }}
                transition={{ duration: 0.5 }}
                className="container mx-auto px-6 flex flex-col justify-between items-center py-6"
            >
                <div className="flex justify-between items-center w-full">
                    <div className="flex items-center space-x-8">
                        <div className="bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 p-2 rounded-md text-3xl font-bold text-transparent">
                            <a href="/" className="pointer-events-auto">
                                <img src="/src/assets/images/logo.svg" alt="logo" />
                            </a>
                        </div>
                        <div className="border-r border-gray-400 h-6 mx-4 hidden sm:block"></div>
                        <div className="flex justify-space-between align-middle">
                            <nav>
                                <ul className="hidden sm:flex space-x-8 text-gray-400 font-normal text-md">
                                    <li><a href="/" className="hover:text-white">Home</a></li>
                                    <li><a href="/about" className="hover:text-white">About</a></li>
                                    <li><a href="/contact" className="hover:text-white">Contact</a></li>
                                    <li><a href="/projects" className="hover:text-white">Projects</a></li>
                                    <li><a href="/resume" className="hover:text-white">Resume</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="px-4 py-3 text-white rounded-md border bg-[#0055fe] border-[#0055fe] hover:shadow-md hover:shadow-[#0055fe]/50 transition duration-200 ease-in-out cursor-pointer pointer-events-auto hidden sm:block ">
                            Get In Touch
                        </button>
                        <button onClick={toggleMenu} className="text-white sm:hidden focus:outline-none">
                            <div className={`w-5 h-5 relative ${isOpen ? 'open' : ''}`}>
                                <span className="block absolute h-0.5 w-full bg-white transform transition duration-300 ease-in-out" style={{ top: '50%', transform: isOpen ? 'rotate(45deg)' : 'translateY(-50%)' }}></span>
                                <span className="block absolute h-0.5 w-full bg-white transform transition duration-300 ease-in-out" style={{ top: '50%', transform: isOpen ? 'rotate(-45deg)' : 'translateY(50%)' }}></span>
                            </div>
                        </button>
                    </div>
                </div>
                <motion.nav
                    initial={{ height: 0 }}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden w-full sm:hidden"
                >
                    <ul className="flex flex-col space-y-4 text-gray-400 font-normal text-md py-4 border-t border-[#ffffff1a] mt-4">
                        <li><a href="/" className="pointer-events-auto hover:text-white">Home</a></li>
                        <li><a href="/about" className="pointer-events-auto hover:text-white">About</a></li>
                        <li><a href="/contact" className="pointer-events-auto hover:text-white">Contact</a></li>
                        <li><a href="/projects" className="pointer-events-auto hover:text-white">Projects</a></li>
                        <li><a href="/resume" className="pointer-events-auto hover:text-white">Resume</a></li>
                    </ul>
                    <button className="w-full px-4 py-3 text-white rounded-md border bg-[#0055fe] border-[#0055fe] shadow-[rgba(0,85,255,0.5)_0px_8px_40px_0px,rgba(255,255,255,0)_0px_0px_10px_1px_inset,rgba(0,85,255,0.12)_0px_0px_0px_1px] transition duration-200 ease-in-out cursor-pointer pointer-events-auto">
                        Get In Touch
                    </button>
                </motion.nav>
            </motion.div>
        </motion.header>
    );
}

export default Header;
