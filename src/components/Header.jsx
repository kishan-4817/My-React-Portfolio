import { motion } from "framer-motion";
import Time from "../utils/time";

function Header() {
    return (
        <motion.header
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: "sticky", top: 0 }}
            className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-md border-t border-gray-200"
        >
            <div className="container mx-auto px-12 flex justify-between items-center py-4">
                <div className="flex items-center space-x-8"> 
                    <div className="bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800 p-2 rounded-md text-3xl font-bold text-transparent"> <a href="http://kishan.netlify.app">Kishan Codes </a> </div>
                    <div className="border-r border-gray-400 h-6 mx-4"></div>
                    <div className="flex justify-space-between align-middle">
                        <nav>
                            <ul className="flex space-x-8 text-white font-normal text-md">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/projects">Projects</a></li>
                                <li><a href="/resume">Resume</a></li>
                            </ul>
                        </nav>
                    </div> 
                </div>
                
                <div className="text-right text-sm text-white">
                    <button className="px-4 py-2 rounded-md border-2 border-[#0055fe] hover:border-[#0055fe]/90 hover:bg-[#0055fe]/10 hover:shadow-md hover:shadow-[#0055fe]/50 transition duration-200 ease-in-out">
                        Get Started
                    </button>
                </div>
            </div>
        </motion.header>
    );
}

export default Header;

