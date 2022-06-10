import React from 'react';
import project1 from '../../../images/project1.png';
import project2 from '../../../images/project2.png';
import project3 from '../../../images/project3.png';
import project4 from '../../../images/project4.png';

const MyProjects = () => {
    return (
        <div className='px-4' >

            <div class="card  w-80 bg-base-100 shadow-xl mx-auto mt-40 mb-20 ">
                <div class="card-body bg-primary">
                    <h2 className='text-center text-4xl font-bold text-white tracking-widest '>MY PROJECTS</h2> <hr />
                </div>
            </div>




            <div className='lg:grid grid-cols-2 gap-20 my-10 '>


                <div class="card card-side bg-base-100 shadow-xl my-6">
                    <img src={project1} alt="" />
                    <div class="card-body">
                        <h2 class="card-title text-primary">Rapid Manufacturer</h2>
                        <p>This is a Computer Parts Manufacturer company who supplies wholesale products to their clients.</p>
                        <li>Features: <small>HomePage, All Product, Login-SignUp, Admin-Panel, Dashboard, Stripe.</small></li>
                        <li>Technology: <small>HTML, CSS, Tailwind, DaisyUI, JavaScript, React, React Router, React-Hook-Form, NodeJs, ExpressJs, MongoDB, CRUD, Firebase.</small></li>

                        
                            <a href="https://rapid-manufacturer.web.app/" target=" _blank" > <button className='btn btn-primary text-white' >Live Site</button> </a>

                            <a href="https://github.com/Nahid30/Rapid-Manufacturer-Client" target=" _blank" > <button className='btn btn-xs text-white' >Client Code</button> </a>
                            <a href="https://github.com/Nahid30/Rapid-Manufacturer-Server" target=" _blank" > <button className='btn btn-xs text-white' >Server Code</button> </a>

                        

                    </div>
                </div>

                <div class="card card-side bg-base-100 shadow-xl my-6">
                    <img src={project3} alt="" />
                    <div class="card-body">
                        <h2 class="card-title text-primary">Fresh Fruits</h2>
                        <p>This is a Fruits Warehouse company where owner can manage their Products.</p>
                        <li>Features: <small>HomePage, All Item, Login-SignUp, CRUD Operation.</small></li>
                        <li>Technology: <small>HTML, CSS, React-Bootstrap, JavaScript, React, React Router, NodeJs, ExpressJs, MongoDB, CRUD, Firebase.</small></li>

                        
                            <a href="https://fruits-assignment-11.web.app/" target=" _blank"> <button className='btn btn-primary text-white' >Live Site</button> </a>
                            <a href="https://github.com/Nahid30/Fresh-Fruit-Client" target=" _blank" > <button className='btn btn-xs text-white' >Client Code</button> </a>
                            <a href="https://github.com/Nahid30/Fresh-Fruit-Server" target=" _blank" > <button className='btn btn-xs text-white' >Server Code</button> </a>

                    </div>
                </div>

                <div class="card card-side bg-base-100 shadow-xl my-6">
                    <img src={project2} alt="" />
                    <div class="card-body">
                        <h2 class="card-title text-primary">PhotoGrapher</h2>
                        <p>This is a Personal or Freelance Photographer's Website who can independently work.</p>
                        <li>Features: <small>HomePage, Services, Login-SignUp</small></li>
                        <li>Technology: <small>HTML, CSS, React-Bootstrap, JavaScript, React, React Router, Firebase</small></li>

                        
                            <a href="https://fir-assignment-10-7ed92.web.app/" target=" _blank"> <button className='btn btn-primary text-white' >Live Site</button> </a>
                            <a href="https://github.com/Nahid30/PhotoGrapher" target=" _blank" > <button className='btn btn-xs text-white' >Client Code</button> </a>
                    </div>
                </div>





            </div>






        </div>
    );
};

export default MyProjects;