import React from 'react';
import '../styles/home.scss';
import Header from '../components/header';
import Landing from '../components/landing';
import Contact from '../components/contactus';
import About from '../components/aboutus';
import Patner from '../components/patners';

const Home = () => {
    return (
        <div id ="home">
            <Header/>
            <Landing/>
            <About/>
            <Patner/>
            <Contact />
            <footer>
            </footer>
        </div>
    );
};
export default Home;