
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Navigation, Pagination } from 'swiper/modules';
import SharedHeading from '../../../SharedComponents/SharedHeading';



const TouristStory = () => {
  
    
    return (
        <div className='pb-10 lg:w-[1280px] md:w-[700px] w-[280px] mx-auto' >

            <SharedHeading heading1={"What's Our"} heading2={"Clients Say..."}></SharedHeading>
            <Swiper
               
                spaceBetween={30}
                
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination,Navigation]}
                className="mySwiper "
                breakpoints={
                   {
                    425:{
                        slidesPerView:1
                    },
                    320:{
                        slidesPerView:1
                    },
                    768:{
                        slidesPerView:2
                    },
                    1024:{
                        slidesPerView:3
                    }
                   }
                }
            >
                <SwiperSlide>
                    <div className=" space-y-4 rounded-lg  p-6 shadow-lg md:w-[350px] bg-white">
                        <img alt="card navigate ui" className="w-[350px] h-[275px] object-cover  rounded-lg " src="https://source.unsplash.com/200x200/?bed" />
                        <div className="grid gap-2">
                            <h1 className="text-lg font-semibold ">Client's Name</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of the product. It highlights the key features and benefits.</p>
                            <div className="text-lg font-semibold  ">$99.99</div>
                        </div>
                        <div className="flex gap-4">

                            <button className="px-4 py-2 bg-white hover:bg-gray-800 hover:text-white border-black border duration-300 rounded-md">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" space-y-4 rounded-lg  p-6 shadow-lg md:w-[350px] bg-white">
                        <img alt="card navigate ui" className="w-[350px] h-[275px] object-cover  rounded-lg " src="https://source.unsplash.com/200x200/?bed" />
                        <div className="grid gap-2">
                            <h1 className="text-lg font-semibold ">Client's Name</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of the product. It highlights the key features and benefits.</p>
                            <div className="text-lg font-semibold  ">$99.99</div>
                        </div>
                        <div className="flex gap-4">

                            <button className="px-4 py-2 bg-white hover:bg-gray-800 hover:text-white border-black border duration-300 rounded-md">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" space-y-4 rounded-lg  p-6 shadow-lg md:w-[350px] bg-white">
                        <img alt="card navigate ui" className="w-[350px] h-[275px] object-cover  rounded-lg " src="https://source.unsplash.com/200x200/?bed" />
                        <div className="grid gap-2">
                            <h1 className="text-lg font-semibold ">Client's Name</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of the product. It highlights the key features and benefits.</p>
                            <div className="text-lg font-semibold  ">$99.99</div>
                        </div>
                        <div className="flex gap-4">

                            <button className="px-4 py-2 bg-white hover:bg-gray-800 hover:text-white border-black border duration-300 rounded-md">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" space-y-4 rounded-lg  p-6 shadow-lg md:w-[350px] bg-white">
                        <img alt="card navigate ui" className="w-[350px] h-[275px] object-cover  rounded-lg " src="https://source.unsplash.com/200x200/?bed" />
                        <div className="grid gap-2">
                            <h1 className="text-lg font-semibold ">Client's Name</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of the product. It highlights the key features and benefits.</p>
                            <div className="text-lg font-semibold  ">$99.99</div>
                        </div>
                        <div className="flex gap-4">

                            <button className="px-4 py-2 bg-white hover:bg-gray-800 hover:text-white border-black border duration-300 rounded-md">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" space-y-4 rounded-lg  p-6 shadow-lg md:w-[350px] bg-white">
                        <img alt="card navigate ui" className="w-[350px] h-[275px] object-cover  rounded-lg " src="https://source.unsplash.com/200x200/?bed" />
                        <div className="grid gap-2">
                            <h1 className="text-lg font-semibold ">Client's Name</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of the product. It highlights the key features and benefits.</p>
                            <div className="text-lg font-semibold  ">$99.99</div>
                        </div>
                        <div className="flex gap-4">

                            <button className="px-4 py-2 bg-white hover:bg-gray-800 hover:text-white border-black border duration-300 rounded-md">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" space-y-4 rounded-lg  p-6 shadow-lg md:w-[350px] bg-white">
                        <img alt="card navigate ui" className="w-[350px] h-[275px] object-cover  rounded-lg " src="https://source.unsplash.com/200x200/?bed" />
                        <div className="grid gap-2">
                            <h1 className="text-lg font-semibold ">Client's Name</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of the product. It highlights the key features and benefits.</p>
                            <div className="text-lg font-semibold  ">$99.99</div>
                        </div>
                        <div className="flex gap-4">

                            <button className="px-4 py-2 bg-white hover:bg-gray-800 hover:text-white border-black border duration-300 rounded-md">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
               
            </Swiper>
        </div>
    );
};

export default TouristStory;