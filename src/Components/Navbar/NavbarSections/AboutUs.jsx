import Footer from "../../Home/HomepageSections/Footer";
import SharedBanner from "../../SharedComponents/SharedBanner"
import SharedHeading from "../../SharedComponents/SharedHeading";
import Example from "./Example";

const AboutUs = () => {
    return (
        <div>
            <SharedBanner image={'https://i.ibb.co/z6FqfkV/remacri.jpg'} heading={'About Us'}></SharedBanner>
            <SharedHeading heading1={'A few Words About'} heading2={'Who We Are'}></SharedHeading>
            <div className="lg:w-[800px] md:w-[400px] w-[200px] mx-auto">

                <h1 className='ding font-bold text-xl lg:text-left text-center'>
                    Tour Terra invites you to explore the beauty of Bangladesh through a rich tapestry of information and resources. Delve into the vibrant culture, diverse landscapes, and historical wonders that define this captivating nation. From the pristine Sundarbans to the Chittagong Hill Tracts, our platform offers curated insights, travel tips, and local perspectives. Whether you're drawn to bustling cityscapes or serene natural retreats, Tour Terra provides essential guidance for an enriching travel experience. Join us in discovering the hidden gems and iconic destinations that make Bangladesh a unique and unforgettable journey for every explorer.
                </h1>


            </div>
            <div className="my-24 hero h-[700px] bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/fvQ0spp/hironpoint.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-white flex flex-col">
                    <h1 className="text-5xl tt">Our Mission</h1>
                    <p className="logo text-xl">At Tour Terra, our mission is to inspire and facilitate unforgettable journeys across the breathtaking landscapes of Bangladesh. We aim to provide travelers with comprehensive resources, expert guidance, and personalized recommendations to navigate the country's rich cultural tapestry and natural wonders. By fostering meaningful connections between travelers and the destinations they explore, we strive to promote sustainable tourism practices and empower local communities. Our ultimate goal is to ensure every traveler's experience with Tour Terra is enriching, immersive, and filled with unforgettable memories.</p>
                </div>
            </div>
            <SharedHeading heading1={'Glimpse of the beauty of'} heading2={'Bangladesh'}></SharedHeading>
            <Example></Example>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;