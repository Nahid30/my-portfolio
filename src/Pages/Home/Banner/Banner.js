import React from 'react';
import { Link } from 'react-router-dom';
import myself from '../../../images/Myself.jpg';
const Banner = () => {

    const link = "https://drive.google.com/drive/u/0/my-drive";

    return (
        <div>
            <div class="hero  my-10">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={myself} class="max-w-xs rounded-lg shadow-2xl mb-10" />
                    <div className='px-6'>
                        <h1 class="text-5xl font-bold">I'm <span className='text-primary'>Nahid</span> Hossain</h1>
                        <p class="py-6  text-gray-600">I'm a Junior Front-End Web Developer with <span className='text-green-400 font-semibold' >M</span>
                            <span className='font-semibold text-gray-700'>E</span>
                            <span className='text-cyan-500 font-semibold	'>R</span>
                            <span className='text-green-600	font-semibold '>N</span>. 
                            I've completed more than 20 websites. <br /> If you need any help to build your website feel free to contact with me.</p>
                            <a href="https://drive.google.com/file/d/1AigisJK1x-YmzmMkhkj9B3ezTAOvmQzA/view?usp=sharing"> <button className='btn btn-primary text-white' >Get Resume</button> </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;