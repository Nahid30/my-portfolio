import React from 'react';
import coming from '../../images/coming-soon.png';
import coderBoth from '../../images/coderBoth.gif';

const Blogs = () => {
    return (
        <div >
            <div>
                <img src={coming} height={100} width={500} alt="" />
            </div>
            <div className='flex justify-center'>
                <img src={coderBoth} height={200} width={400} alt="" />
            </div>
        </div>
    );
};

export default Blogs;