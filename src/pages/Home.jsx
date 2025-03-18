import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "../styles.css";


function Home() {
    return (
        <>
        <Header />
        <div className="w-full h-screen bg-gradient-to-r from-blue-900 to-blue-700 p-12 text-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold">Home</h1>
                <p className="mt-4 text-lg">Home page content</p>
            </div>
        </div>
        <Footer />
        </>
    );
}

export default Home;
