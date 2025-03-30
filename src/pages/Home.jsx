import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Info from '../components/Info';
import "../styles.css";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Info />
            <Footer />
        </>
    );
}

export default Home;