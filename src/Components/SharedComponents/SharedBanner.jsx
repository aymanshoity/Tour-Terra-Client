

const SharedBanner = ({heading,image}) => {
    const overlay1 = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: '75%',
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.2)', // 40% opacity
    };

    const overlay2 = {
        position: 'absolute',
        top: 0,
        left: '25%',
        right: '50%',
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.4)', // 60% opacity
    };

    const overlay3 = {
        position: 'absolute',
        top: 0,
        left: '50%',
        right: '25%',
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.2)', // 40% opacity
    };

    const overlay4 = {
        position: 'absolute',
        top: 0,
        left: '75%',
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.4)', // 60% opacity
    }
    return (
        <div className="hero lg:h[700px] h-[500px] w-full" style={{ backgroundImage: `url(${image})` }}>
            <div className=" lg:h[700px] h-[500px] " style={overlay1}></div>
            <div className=" lg:h[700px] h-[500px] " style={overlay2}></div>
            <div  className=" lg:h[700px] h-[500px]" style={overlay3}></div>
            <div className=" lg:h[700px] h-[500px] " style={overlay4}></div>
            <div className="hero-content text-left rounded-lg text-white   mx-10 my-44">
                <div className='max-w-xl md:max-w-2xl'>
                    <h1 className="mb-5 text-3xl md:text-5xl font font-bold">{heading}</h1>
                    
                </div>

            </div>
        </div>
    );
};

export default SharedBanner;