import React from 'react';
import Service from '../../Service/Service/Service';
import About from '../About/About';
import Bannar from '../Bannar/Bannar';
import Contact from '../Contact/Contact';
import Equiment from '../Equipment/Equiment';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Service></Service>
            <Equiment></Equiment>
            <Contact></Contact>
        </div>
    );
};

export default Home;