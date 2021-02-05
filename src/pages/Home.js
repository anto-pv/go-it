import React from 'react';
import '../styles/home.scss';
import Header from '../components/header';
import Landing from '../components/landing';
import Contact from '../components/contactus';
import About from '../components/aboutus';

const Home = () => {
    return (
        <div id ="home">
            <Header/>
            <Landing/>
            <About/>
            <Contact />
        </div>
    );
};
export default Home;