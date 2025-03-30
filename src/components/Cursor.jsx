import React, { useEffect, useRef } from 'react';

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX: x, clientY: y } = event;
            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div className="custom-cursor" ref={cursorRef}></div>;
};

export default Cursor;