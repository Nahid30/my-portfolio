import React from 'react';
import Banner from './Banner/Banner';
import MyProjects from './MyProjects/MyProjects';
import Skill from './Skill/Skill';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <Skill></Skill>
            <MyProjects></MyProjects> 

        </div>
    );
};

export default Home;