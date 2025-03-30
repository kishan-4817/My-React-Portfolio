import React, { useRef } from 'react';
import { useScroll, useSpring, motion } from 'framer-motion';

const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);
    const { scrollYProgress } = useScroll({ container: scrollRef });
    const smoothScroll = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    return (
        <motion.div
            ref={scrollRef}
            style={{ y: smoothScroll }}
            className="overflow-y-scroll h-screen"
        >
            {children}
        </motion.div>
    );
};

export default SmoothScroll;