import React from 'react';
import project1 from '../../../images/project1.png';
import project2 from '../../../images/project2.png';
import project3 from '../../../images/project3.png';
import project4 from '../../../images/project4.png';

const MyProjects = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold text-primary tracking-widest my-10'>MY PROJECTS</h2> <hr />



            <div className='lg:grid grid-cols-2 px-10 my-10 gap-x-5 gap-y-5'>
                <div class="card card-side bg-base-100 shadow-xl">
                    <figure><img src={project1} alt="Movie" /></figure>
                    <div class="card-body">

                        
                    </div>
                </div>

                <div class="card card-side bg-base-100 shadow-xl mt-5">
                    <figure><img src={project2} alt="Movie" /></figure>
                    <div class="card-body">
                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                    </div>
                </div>

                <div class="card card-side bg-base-100 shadow-xl mt-6">
                    <figure><img src={project3} alt="Movie" /></figure>
                    <div class="card-body">
                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                    </div>
                </div>

                <div class="card card-side bg-base-100 shadow-xl mt-6 ">
                    <figure><img src={project4} alt="Movie" /></figure>
                    <div class="card-body">
                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>
                    </div>
                </div>



            </div>






        </div>
    );
};

export default MyProjects;