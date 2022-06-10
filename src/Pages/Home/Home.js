import React from 'react';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import MyProjects from './MyProjects/MyProjects';
import Skill from './Skill/Skill';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Skill></Skill>
            <MyProjects></MyProjects> 
            <Contact></Contact>

        </div>
    );
};

export default Home;