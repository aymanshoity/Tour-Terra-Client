

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
    const overlay1 = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: '75%',
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.4)', // 40% opacity
    };

    const overlay2 = {
        position: 'absolute',
        top: 0,
        left: '25%',
        right: '50%',
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.6)', // 60% opacity
    };

    const overlay3 = {
        position: 'absolute',
        top: 0,
        left: '50%',
        right: '25%',
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.4)', // 40% opacity
    };

    const overlay4 = {
        position: 'absolute',
        top: 0,
        left: '75%',
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.6)', // 60% opacity
    }
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }
            }
            // navigation={true}
            modules={[Autoplay, Pagination]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper max-h-screen"
        >
            <SwiperSlide >
                <div className="hero  min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/6Xxr6gZ/pexels-bluesea-tea-16264511.jpg)' }}>
                    <div style={overlay1}></div>
                    <div style={overlay2}></div>
                    <div style={overlay3}></div>
                    <div style={overlay4}></div>
                    <div className="hero-content text-left rounded-lg text-white   mx-10 my-44">
                        <div className='max-w-2xl'>
                            <h1 className="mb-5 text-5xl font font-bold">Explore Bangladesh's beauty with Tour Terra</h1>
                            <p className="mb-5">Unlock Bangladesh's Secrets  with Tour Terra's Expertise.</p>
                            <Link to='/register'><button className="btn bg-[#90dddcff] ">Get Started</button></Link>
                        </div>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="hero  min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/SRgyP5x/pexels-johannes-plenio-1105391.jpg)' }}>
                    <div style={overlay1}></div>
                    <div style={overlay2}></div>
                    <div style={overlay3}></div>
                    <div style={overlay4}></div>
                    <div className="hero-content text-left rounded-lg text-white   mx-10 my-44">
                        <div className='max-w-2xl'>
                            <h1 className="mb-5 text-5xl font font-bold">Explore Bangladesh's beauty with Tour Terra</h1>
                            <p className="mb-5">Unlock Bangladesh's Secrets  with Tour Terra's Expertise.</p>
                            <Link to='/register'><button className="btn bg-[#90dddcff] ">Get Started</button></Link>
                        </div>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="hero min-h-screen  " style={{ backgroundImage: 'url(https://i.ibb.co/zPQhbR3/pexels-fabian-wiktor-994605.jpg)' }}>
                    <div style={overlay1}></div>
                    <div style={overlay2}></div>
                    <div style={overlay3}></div>
                    <div style={overlay4}></div>
                    <div className="hero-content text-left rounded-lg text-white   mx-10 my-44">
                        <div className='max-w-2xl'>
                            <h1 className="mb-5 text-5xl font font-bold">Explore Bangladesh's beauty with Tour Terra</h1>
                            <p className="mb-5">Unlock Bangladesh's Secrets  with Tour Terra's Expertise.</p>
                            <Link to='/register'><button className="btn bg-[#90dddcff] ">Get Started</button></Link>
                        </div>

                    </div>
                </div>
            </SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    {/* <circle cx="24" cy="24" r="20"></circle> */}
                </svg>
                <span ref={progressContent}></span>

            </div>
        </Swiper >

    );
};

export default Banner;