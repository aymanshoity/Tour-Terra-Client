import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex md:flex-row flex-col items-center justify-center'>
            <div className='w-1/2'>
                <img className='lg:h-screen w-full' src="https://i.ibb.co/BL9MGNy/pexels-photo-531474.jpg" alt="" />
            </div>
            <div className='w-1/2 flex flex-col items-center'>
                <div className='mx-w-md text-center p-8'>
                    <h1 className='text-5xl mb-5 font-extrabold'>404</h1>
                    <h1 className='text-xl mb-5'>Fear not, intrepid traveler! While the destination you seek may elude us at the moment, let's take a moment to appreciate the journey thus far.</h1>
                    <Link to='/'><button className="my-5 btn bg-black text-white hover:bg-[#90dddcff]">Return Home</button></Link>
                </div>

            </div>
        </div>
    );
};

export default ErrorPage;