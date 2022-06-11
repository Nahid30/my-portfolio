import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faUser, faMobile, faMessage, } from '@fortawesome/free-solid-svg-icons'
import linkedin from '../../../images/linkedin.png';
import facebook from '../../../images/facebook.png';
import github from '../../../images/github.png';
const Contact = () => {
    return (
        <div >

            <div class="card w-80 bg-base-100 shadow-xl mx-auto my-20 ">
                <div class="card-body bg-primary">
                    <h2 className='customSkill text-center text-4xl font-bold text-white tracking-widest '>Contact</h2>  <hr />
                </div>

            </div>

            <div className='lg:grid grid-cols-2 mb-20 '>

                <div class="card w-10/12 bg-rose-100 text-neutral-content my-4 mx-auto  ">
                    <div class="card-body text-black ">
                        <h2 class=" text-2xl font-semibold ">Contact Information</h2>

                        <span className='flex  my-4'>
                            <a href="https://www.linkedin.com/in/md-nahid-hossain-a8522218a/" target=" _blank"><img src={linkedin} className="w-8" alt="" /></a>
                            <a href="https://www.facebook.com/mdnahid.shuvo.7330/" target=" _blank"><img src={facebook} className="w-8 mx-4" alt="" /></a>
                            <a href="https://github.com/Nahid30" target=" _blank"><img src={github} className="w-8" alt="" /></a>
                        </span>

                        <p className='my-2'> Name:<br />  <FontAwesomeIcon className='text-white mr-2  h-6' icon={faUser} />  MD Nahid Hossain</p>
                        <p className='my-2'> Phone: <br /> <FontAwesomeIcon className='text-white mr-2 h-6 ' icon={faMobile} />  +8801918346144</p>
                        <p className='my-2'> Email: <br /> <FontAwesomeIcon className='text-white mr-2 h-6 ' icon={faMessage} /> nahid.bd855@gmail.com</p>
                        <p className='my-2'> Location: <br /> <FontAwesomeIcon className='text-white mr-2 h-6 ' icon={faLocation} /> Dhaka, Bangladesh</p>

                    </div>

                </div>



                <div className='flex justify-center items-center my-4  mx-auto  bg-rose-100 rounded-lg'>
                    <div className=' my-10 px-4'>

                        <form action="https://formsubmit.co/your@email.com" method="POST">



                            <div className='text-center'>
                                <input type="name" placeholder="Type Your Name" className="input w-full max-w-sm " required /> <br />
                                <input type="email" placeholder="Enter Your Email" className="input w-full max-w-sm mt-4" required /> <br />

                                <input type="text" placeholder="Subject" className="input w-full max-w-sm my-4" required />

                                <textarea className="textarea input w-full max-w-sm" placeholder="Your Message" required ></textarea>
                            </div> <br />

                            <div className='text-center mt-2'><button className='btn btn-primary text-white'>Send Message</button></div>

                        </form>


                    </div>
                </div>




            </div>





        </div>
    );
};

export default Contact;