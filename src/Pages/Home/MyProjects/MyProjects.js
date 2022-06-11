import React from 'react';
import project1 from '../../../images/project1.png';
import project2 from '../../../images/project2.png';
import project3 from '../../../images/project3.png';

import github from '../../../images/github.png';

import rapid1 from '../../../images/details-pic/rapid1.png';
import rapid2 from '../../../images/details-pic/rapid2.png';
import rapid3 from '../../../images/details-pic/rapid3.png';
import rapid4 from '../../../images/details-pic/rapid4.png';
import rapid5 from '../../../images/details-pic/rapid5.png';
import rapid6 from '../../../images/details-pic/rapid6.png';
import rapid7 from '../../../images/details-pic/rapid7.png';

import fruit1 from '../../../images/details-pic/fruit1.png';
import fruit2 from '../../../images/details-pic/fruit2.png';
import fruit3 from '../../../images/details-pic/fruit3.png';
import fruit4 from '../../../images/details-pic/fruit4.png';
import fruit5 from '../../../images/details-pic/fruit5.png';
import fruit6 from '../../../images/details-pic/fruit6.png';


import photoGrapher from '../../../images/details-pic/photoGrapher1.png';
import pg2 from '../../../images/details-pic/pg2.png';
import pg3 from '../../../images/details-pic/pg3.png';
import pg4 from '../../../images/details-pic/pg4.png';
import pg5 from '../../../images/details-pic/pg5.png';



import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper";


const MyProjects = () => {
    return (

        <div>

            <div class="card  w-80 bg-base-100 shadow-xl mx-auto mt-40 mb-20 ">
                <div class="card-body bg-primary">
                    <h2 className='text-center text-4xl font-bold text-white tracking-widest '>MY PROJECTS</h2> <hr />
                </div>
            </div>


            <div className='lg:grid grid-cols-3 gap-10   '>

                <div class="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
                    <div class="card-body  ">

                        <figure><img src={project1} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-primary">Rapid Manufacturer</h2>
                            <p>Computer Parts Manufacturer company who supplies wholesale products to their clients.</p>
                            <a href="https://rapid-manufacturer.web.app/" target=" _blank" > <button className='btn btn-primary text-white ' >Live Site</button> </a>
                        </div>


                        <label for="my-modal-5" class="btn btn-sm btn-info">See Details</label>
                        <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box w-11/12 max-w-5xl">
                                <h3 class="font-bold text-lg text-primary text-center my-2">Rapid Manufacturer</h3>
                                <p>Computer parts Manufacturer website by React for wholesale products to their clients and Fully Responsive. Admin Panel is Developed For Handling Products and Order Management. Login and SignUp with Firebase Authentication.
                                </p>
                                <li>Features: <small>HomePage, All Product, Login-SignUp, Admin-Panel, Dashboard, Stripe.</small></li>
                                <li className='mb-4'>Technology: <small>HTML, CSS, Tailwind, DaisyUI, JavaScript, React, React Router, React-Hook-Form, NodeJs, ExpressJs, MongoDB, CRUD, Firebase.</small></li>

                                <a href="https://github.com/Nahid30/Rapid-Manufacturer-Client" target=" _blank" > <button className='btn btn-xs btn-info text-white' >Client Code <img src={github} className="w-4 ml-2" alt="" /> </button></a>

                                <a href="https://github.com/Nahid30/Rapid-Manufacturer-Server" target=" _blank" > <button className='btn btn-xs btn-info text-white' >Server Code <img src={github} className="w-4 ml-2" alt="" />  </button> </a>

                                <div>
                                    <Swiper
                                        effect={"flip"}
                                        grabCursor={true}
                                        pagination={true}
                                        navigation={true}
                                        modules={[EffectFlip, Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide><img src={project1} alt="" className='mx-auto' /></SwiperSlide>
                                        <SwiperSlide><img src={rapid1} alt="" className='w-96 mx-auto' /></SwiperSlide>
                                        <SwiperSlide><img src={rapid2} alt="" className='w-96  mx-auto' /></SwiperSlide>
                                        <SwiperSlide><img src={rapid3} alt="" className='w-96  mx-auto' /></SwiperSlide>
                                        <SwiperSlide><img src={rapid4} alt="" className='w-96  mx-auto' /></SwiperSlide>
                                        <SwiperSlide><img src={rapid5} alt="" className='w-96  mx-auto' /></SwiperSlide>
                                        <SwiperSlide><img src={rapid6} alt="" className='w-96  mx-auto' /></SwiperSlide>
                                        <SwiperSlide><img src={rapid7} alt="" className='w-96  mx-auto' /></SwiperSlide>
                                    </Swiper>
                                </div>
                                <div class="modal-action">
                                    <label for="my-modal-5" class="btn btn-primary">Close</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
                    <div class="card-body ">

                        <figure><img src={project2} alt="" /></figure>
                        <div class="card-body">
                            <h2 class="card-title text-primary">Fresh Fruits</h2>
                            <p>This is a Fruits Warehouse company where owner can manage their Products.
                                
                            </p>
                            <a href="https://fruits-assignment-11.web.app/" target=" _blank"> <button className='btn btn-primary text-white'>Live Site</button></a>
                        </div>


                        <label for="my-modal-6" class="btn btn-sm btn-info">See Details</label>
                        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box w-11/12 max-w-5xl">
                                <h3 class="font-bold text-lg text-primary text-center my-2">Fresh Fruits</h3>
                                <p>This is a Fruits Warehouse company where owner can manage their Products. A personal Freelance photographer’s website Fully Responsive. Login and SignUp with Firebase Authentication. Implement React Firebase Hooks and React Router.</p>
                                <li>Features: <small>HomePage, All Item, Login-SignUp, CRUD Operation.</small></li>
                                <li className='mb-4'>Technology: <small>HTML, CSS, React-Bootstrap, JavaScript, React, React Router, NodeJs, ExpressJs, MongoDB, CRUD, Firebase.</small></li>

                                <a href="https://github.com/Nahid30/Fresh-Fruit-Client" target=" _blank" > <button className='btn btn-xs btn-info text-white' >Client Code <img src={github} className="w-4 ml-2" alt="" /> </button> </a>
                                <a href="https://github.com/Nahid30/Fresh-Fruit-Server" target=" _blank" > <button className='btn btn-xs btn-info text-white' >Server Code <img src={github} className="w-4 ml-2" alt="" /> </button> </a>

                                <div>
                                    <Swiper
                                        effect={"flip"}
                                        grabCursor={true}
                                        pagination={true}
                                        navigation={true}
                                        modules={[EffectFlip, Pagination, Navigation]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide><img src={project2} alt="" className='mx-auto' /></SwiperSlide>
                                        <SwiperSlide><img src={fruit1} alt="" className='w-96 mx-auto' /></SwiperSlide>
                                        <SwiperSlide><img src={fruit2} alt="" className='w-96  mx-auto' /></SwiperSlide>
                                        <SwiperSlide><img src={fruit3} alt="" className='w-96  mx-auto' /></SwiperSlide>
                                        <SwiperSlide><img src={fruit4} alt="" className='w-96  mx-auto' /></SwiperSlide>
                                        <SwiperSlide><img src={fruit5} alt="" className='w-96  mx-auto' /></SwiperSlide>
                                        <SwiperSlide><img src={fruit6} alt="" className='w-96  mx-auto' /></SwiperSlide>

                                    </Swiper>
                                </div>
                                <div class="modal-action">
                                    <label for="my-modal-6" class="btn btn-primary">Close</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="card card-compact w-80 bg-base-100 shadow-xl mx-auto">
                <div class="card-body ">

                    <figure><img src={project3} alt="" /></figure>
                    <div class="card-body">
                        <h2 class="card-title text-primary">PhotoGrapher</h2>
                        <p>This is a Personal or Freelance Photographer's Website who can independently work.</p>
                        <a href="https://fruits-assignment-11.web.app/" target=" _blank"> <button className='btn btn-primary text-white'>Live Site</button></a>
                    </div>


                    <label for="my-modal-7" class="btn btn-sm btn-info">See Details</label>
                    <input type="checkbox" id="my-modal-7" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box w-11/12 max-w-5xl">
                            <h3 class="font-bold text-lg text-primary text-center my-2">PhotoGrapher</h3>
                            <p>This is a Personal or Freelance Photographer's Website who can independently work. A personal Freelance photographer’s website with Fully Responsive. Login and SignUp with Firebase Authentication. Implement React Firebase Hooks and React Router.
                            </p>
                            <li>Features: <small>HomePage, Services, Login-SignUp</small></li>
                            <li className='mb-4'>Technology: <small>HTML, CSS, React-Bootstrap, JavaScript, React, React Router, Firebase</small></li>

                            <a href="https://github.com/Nahid30/PhotoGrapher" target=" _blank" > <button className='btn btn-xs text-white btn-info' >Client Code <img src={github} className="w-4 ml-2" alt="" /></button> </a>

                            <div>
                                <Swiper
                                    effect={"flip"}
                                    grabCursor={true}
                                    pagination={true}
                                    navigation={true}
                                    modules={[EffectFlip, Pagination, Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide><img src={project3} alt="" className='mx-auto' /></SwiperSlide>
                                    <SwiperSlide><img src={pg2} alt="" className='w-96 mx-auto' /></SwiperSlide>
                                    <SwiperSlide><img src={pg3} alt="" className='w-96  mx-auto' /></SwiperSlide>
                                    <SwiperSlide><img src={pg4} alt="" className='w-96  mx-auto' /></SwiperSlide>
                                    <SwiperSlide><img src={pg5} alt="" className='w-96  mx-auto' /></SwiperSlide>

                                </Swiper>
                            </div>
                            <div class="modal-action">
                                <label for="my-modal-7" class="btn btn-primary">Close</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            </div>



           





        </div>






    );
};

export default MyProjects;