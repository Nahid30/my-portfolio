import React from 'react';




const Skill = () => {
    return (
        <div>

            <h2 className='customSkill text-center text-4xl font-bold text-primary tracking-widest'>MY SKILLS</h2> <hr className='mt-10 ' />
            <div className='my-10 px-10'>
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

export default Skill;