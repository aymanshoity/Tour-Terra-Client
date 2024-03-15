import React from 'react';

const SharedHeading = ({heading1,heading2}) => {
    return (
        <div className='pt-24 pb-10 flex flex-col items-center '>
            <h1 className='text-center border-b-2 border-[#32898B] ding font-bold text-5xl mb-7'>{heading1} <span className='text-[#32898B]'>{heading2}</span></h1>
        </div>
    );
};

export default SharedHeading;