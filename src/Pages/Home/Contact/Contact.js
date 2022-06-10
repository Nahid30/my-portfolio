import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faUser, faMobile, faMessage, } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div >

            <div class="card w-80 bg-base-100 shadow-xl mx-auto my-20 ">
                <div class="card-body bg-primary">
                    <h2 className='customSkill text-center text-4xl font-bold text-white tracking-widest '>Contact</h2>  <hr />
                </div>

            </div>

            <div className='lg:grid grid-cols-2 mb-20 '>

                <div class="card w-80 bg-rose-100 text-neutral-content my-4 mx-auto ">
                    <div class="card-body text-black ">
                        <h2 class="card-title">Contact Information</h2>

                        <p className='my-2'> Name:<br />  <FontAwesomeIcon className='text-white mr-2  h-6' icon={faUser} />  MD Nahid Hossain</p>
                        <p className='my-2'> Phone: <br /> <FontAwesomeIcon className='text-white mr-2 h-6 ' icon={faMobile} />  +8801918346144</p>
                        <p className='my-2'> Email: <br /> <FontAwesomeIcon className='text-white mr-2 h-6 ' icon={faMessage} /> nahidbd.855@gmail.com</p>
                        <p className='my-2'> Location: <br /> <FontAwesomeIcon className='text-white mr-2 h-6 ' icon={faLocation} /> Dhaka, Bangladesh</p>
                    </div>
                </div>



                <div className='flex justify-center items-center  mx-auto  bg-rose-100 rounded'>
                    <div className=' my-10 px-4'>

                        <form action="https://formsubmit.co/d313f9fdac6b7ea6b5d03a8b19bd320c " method="POST">
                        


                            <input type="name" placeholder="Type Your Name" className="input w-full max-w-sm " required /> <br />
                            <input type="email" placeholder="Enter Your Email" className="input w-full max-w-sm mt-4" required /> <br />

                            <input type="text" placeholder="Subject" className="input w-full max-w-sm my-4" required />

                            <textarea className="textarea input w-full max-w-sm" placeholder="Your Message" required ></textarea> <br />

                            <div className='text-center mt-2'><button className='btn btn-primary text-white'>Send Message</button></div>

                        </form>

                       
                    </div>
                </div>




            </div>





        </div>
    );
};

export default Contact;