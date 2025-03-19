import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles.css";

function Home() {
    return (
        <>
            <Header />
            <div className="w-full h-screen relative">
                <video src="/src/assets/images/background.mp4" autoPlay loop muted className="absolute inset-0 w-full h-full object-cover filter blur-md z-[-1]"></video>
                <div className="container mx-auto px-4 flex flex-col justify-center items-center h-full">
                    <h1 className="text-4xl font-bold text-white">Home</h1>
                    <p className="mt-4 text-lg text-white">Home page content</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;