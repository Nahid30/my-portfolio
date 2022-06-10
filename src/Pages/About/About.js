import React from 'react';
import myself from '../../images/Myself.jpg'





const About = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>


                <div className='flex justify-center my-10'>
                    <p className=''><img src={myself} height={200} width={300} alt="" /></p>
                </div>

                <div className='mx-20 my-10'>
                    <h2 className='text-2xl my-4'>I'm Md. Nahid Hossain</h2>
                    <p>Currently I'm studying BSS(Hons) in Political Science At Government Shaheed Suhrawardy College. </p>


                    <h4 className='mt-2  text-justify'>Besides my study I'm learning Web development since 2020. Now you can call me a Junior Front-End Web developer. I love to making Websites and wants to explore new things everyday, And I like helping mindset.</h4>
                </div>
            </div>




            <div class="card w-80 bg-base-100 shadow-xl mx-auto my-20 ">
                <div class="card-body bg-primary">
                    <h2 className='customSkill text-center text-4xl font-bold text-white tracking-widest '>MY SKILLS</h2>  <hr />
                </div>
            </div>






            <div className='my-10 px-10 bg-rose-50 py-10'>
                <div className='text-left lg:grid grid-cols-3'>

                    <div class="card w-72 bg-base-100 shadow-xl">
                        <div class="card-body  ">
                            <h2 class="card-title text-cyan-600">Font-End</h2>

                            <div className='py-10'>

                                <p >  <span className='text-gray-600 font-semibold '>HTML </span><progress class="progress progress-primary  w-56" value="80" max="100"></progress></p>
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

export default About;