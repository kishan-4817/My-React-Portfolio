import React from 'react';
import { motion } from 'framer-motion';

const Info = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-black text-white">
            <div className="container mx-auto px-4 md:px-0 md:max-w-[1440px] flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2">
                    <img
                        src="/src/assets/images/info.jpeg"
                        alt="Hero Image"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-start gap-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm"
                    >
                        About Landin
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-4xl md:text-6xl font-bold"
                    >
                        Building Stronger Brands Creating Impressions!
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="text-lg text-gray-400"
                    >
                        Delivering high-quality, on-demand designs with precision. Elevate your brand effortlessly, one snap at a time.
                    </motion.p>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className="text-lg text-gray-400 space-y-2"
                    >
                        <li>From $0 to $500,000 in revenue.</li>
                        <li>47% growth in new customers.</li>
                    </motion.ul>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                        className="flex gap-4"
                    >
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                            View About Landin
                        </button>
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-400">★★★★★</span>
                            <span className="text-gray-400">200+ Agencies Rated</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Info;