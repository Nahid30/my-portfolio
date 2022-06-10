import React from 'react';
import html from '../../../images/About/html5.png';
import css from '../../../images/About/css.png';
import Bootstrap from '../../../images/About/bootstrap.png';
import javaScript from '../../../images/About/JavaScript-logo.png';
import Tailwind from '../../../images/About/Tailwind_CSS_Logo.svg.png';
import es6 from '../../../images/About/es6.png';
import react from '../../../images/About/react.png';
import firebase from '../../../images/About/firebase.png';
import node from '../../../images/About/node.png';
import express from '../../../images/About/express-js.png';
import mongodb from '../../../images/About/mongodb.png';
import heroku from '../../../images/About/Heroku_logo.svg.png';
import github from '../../../images/About/github.png';
import netlify from '../../../images/About/netlify.png';
import vscode from '../../../images/About/vsCode.png';
import router from '../../../images/About/router.png';

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper";


const Skill = () => {
    return (
        <div>

          
           <div class="card w-80 bg-base-100 shadow-xl mx-auto my-20 ">
                <div class="card-body bg-primary">
                <h2 className='customSkill text-center text-4xl font-bold text-white tracking-widest '>MY SKILLS</h2>  <hr  />
                </div>
               
            </div>


            <div>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                   <SwiperSlide>
                        <img src={html} className="h-24 w-30  mx-auto  " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={css} className="rounded-lg h-24 w-30 mx-auto  " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Bootstrap} className=" h-24 w-30mx-auto " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={Tailwind} className=" h-24 w-30 mx-auto  rounded-lg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={javaScript} className="rounded-lg h-24 w-30 mx-auto " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={es6} className=" h-24 w-30 mx-auto rounded-lg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={react} className=" h-24 w-30 mx-auto " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={router} className=" rounded-lg  h-24 w-30 mx-auto " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={firebase} className=" h-24 w-30 mx-auto " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={node} className=" h-24 w-30 mx-auto " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={express} className=" h-24 w-30 mx-auto " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={mongodb} className=" h-24 w-30 mx-auto " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={heroku} className=" h-24 w-30 mx-auto " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={github} className=" h-24 w-30 mx-auto " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={netlify} className=" h-24 w-30 mx-auto " alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={vscode} className=" h-24 w-30 mx-auto " alt="" />
                    </SwiperSlide>
                   
                </Swiper>
            </div>
           

             
            <div className='my-10 px-10 bg-rose-50 py-10'>
                <div className='text-left lg:grid grid-cols-3'>

                    <div class="card w-72 bg-base-100 shadow-xl">
                        <div class="card-body  ">
                            <h2 class="card-title text-cyan-600">Font-End</h2>

                            <div className='py-10'>

                                <p >  <span className='text-gray-600 font-semibold flex '>HTML</span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold '>CSS </span> <progress class="progress progress-primary  w-56" value="75" max="100"></progress> </p>
                                <p > <span className='text-gray-600 font-semibold'>javaScript + ES6 </span><progress class="progress progress-primary  w-56" value="65" max="100"></progress></p>
                                <p> <span className='text-gray-600 font-semibold'>Bootstrap </span> <progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold'>Tailwind </span><progress class="progress progress-primary  w-56" value="75" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold'>React </span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold'>React Router </span><progress class="progress progress-primary  w-56" value="65" max="100"></progress></p>

                            </div>
                        </div>
                    </div>

                    <div class="card w-72 bg-base-100 shadow-xl my-6">
                        <div class="card-body bg-gray-100">
                            <h2 class="card-title text-emerald-500">Back-End</h2> <hr />

                            <div className='py-10'>

                                <p> <span className='text-gray-600 font-semibold'>Node </span><progress class="progress progress-primary  w-56" value="30" max="100"></progress></p>
                                <p> <span className='text-gray-600 font-semibold'>Express </span><progress class="progress progress-primary  w-56" value="35" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold'>MongoDB </span><progress class="progress progress-primary  w-56" value="45" max="100"></progress></p>
                            </div>
                        </div>
                    </div>

                    <div class="card w-72 bg-base-100 shadow-xl">
                        <div class="card-body ">
                            <h2 class="card-title text-purple-500">Tools</h2>

                            <div className='py-10'>

                                <p> <span className='text-gray-600 font-semibold'>Github</span><progress class="progress progress-primary  w-56" value="60" max="100"></progress></p>
                                <p> <span className='text-gray-600 font-semibold'>Firebase</span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold'>Netlify </span><progress class="progress progress-primary  w-56" value="85" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold'>Heroku </span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                                <p > <span className='text-gray-600 font-semibold'>VS Code</span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Skill;