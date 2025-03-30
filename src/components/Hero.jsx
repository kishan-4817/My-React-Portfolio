import { motion } from "framer-motion";

const Hero = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-screen relative"
    >
        <video src="/src/assets/images/background.mp4" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover filter blur-md z-[-1]"></video>
        <div className="container mx-auto px-4 md:px-0 md:max-w-[1440px] flex flex-col justify-center items-center h-full space-y-8">
            <div className="grid grid-cols-7 gap-4">
                <div className="col-span-4 flex flex-col items-start gap-7">
                    <motion.div
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-white bg-transparent inline-block sub-heading"
                    >
                        <span className="p-1 px-2 rounded-sm bg-[#0055fe] mr-2 text-sm">New</span> <span className="mx-2">No. 1 Studio of 2025</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-4xl md:text-8xl text-white font-normal"
                    >
                        {
                            "Premium Agency for Creatives.".split(" ").map((word, index) => (
                                <motion.span
                                    key={word}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                                    className="inline-block"
                                >
                                    {word} <span className="mx-2"></span>
                                </motion.span>
                            ))
                        }
                    </motion.h1>
                    <motion.p
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        style={{ color: "rgb(255 255 255 / 60%)" }}
                        className="text-sm max-w-[60ch]"
                    >
                        {
                            "From WordPress and Shopify to React and PHP, I craft high-performance websites, custom themes, plugins, and seamless migrations that empower businesses.".split(" ").map((word, index) => (
                                <motion.span
                                    key={word}
                                    initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
                                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                    transition={{ duration: 1, delay: index * 0.1 + 1 }}
                                    style={{ transformOrigin: "bottom" }}
                                    className="inline-block"
                                >
                                    {word} <span className="mx-1"></span>
                                </motion.span>
                            ))
                        }
                    </motion.p>
                    <motion.div
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="flex gap-4"
                    >
                        <motion.button
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-[#ffffff] text-black px-6 py-3 rounded-full"
                        >
                            Connect With Me
                        </motion.button>
                        <motion.button
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-white px-6 py-3 rounded-full shadow-none opacity-100 transform-gpu btn-blur"
                        >
                            What is Landin?
                        </motion.button>
                    </motion.div>
                </div>
                <div className="col-span-3 flex flex-col items-start md:items-end">
                    <motion.p
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                        className="text-2xl md:text-3xl text-white"
                    >
                        
                    </motion.p>
                </div>
            </div>
        </div>
    </motion.div>
);

export default Hero;

