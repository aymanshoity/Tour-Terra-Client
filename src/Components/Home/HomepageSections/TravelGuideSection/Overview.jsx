import React from 'react'
import ReactPlayer from 'react-player'

const Overview = () => {
    return (
        <div className="py-24  lg:w-[1280px] w-full mx-auto">
            <div className='flex flex-col items-center  lg:flex-row justify-center gap-6 '>
            <div className="flex-1">
                <ReactPlayer width="w-[400px]" className=" mx-auto" url='https://dai.ly/k59j3BN51BqWczAaXOK' />
            </div>
            <div className='flex-1 text-xl lg:text-left text-center px-5'>
                <h1 className='ding font-bold text-5xl mb-7'>Welcome to <span className='text-[#32898B]'>Tour Terra</span></h1>
                <h1 className='ding font-bold text-xl lg:text-left text-center'>
                    Tour Terra invites you to explore the beauty of Bangladesh through a rich tapestry of information and resources. Delve into the vibrant culture, diverse landscapes, and historical wonders that define this captivating nation. From the pristine Sundarbans to the Chittagong Hill Tracts, our platform offers curated insights, travel tips, and local perspectives. Whether you're drawn to bustling cityscapes or serene natural retreats, Tour Terra provides essential guidance for an enriching travel experience. Join us in discovering the hidden gems and iconic destinations that make Bangladesh a unique and unforgettable journey for every explorer.
                </h1>
            </div>
            </div>
            

        </div>
    )


};

export default Overview;