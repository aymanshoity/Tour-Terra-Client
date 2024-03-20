import SharedBanner from "../../SharedComponents/SharedBanner";
import SharedHeading from "../../SharedComponents/SharedHeading";
import { BsTelephone } from "react-icons/bs";
import { SlDirections } from "react-icons/sl";
import { PiTelegramLogo } from "react-icons/pi";
import { GiWorld } from "react-icons/gi";
import { Link } from "react-router-dom";
const ContactUs = () => {
    return (
        <div>
            <SharedBanner image={'https://i.ibb.co/J7mVmg8/amiakhummmm.jpg'} heading={'Contact Us'}></SharedBanner>
            <SharedHeading heading1={'Keep in Touch with'} heading2={'Tour Terra'}></SharedHeading>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-6">
                <div className="flex flex-col  items-center">
                    <span className="bg-black  h-[150px] w-[150px] rounded-full flex flex-col justify-center items-center"><SlDirections className="text-7xl text-[#90dddcff]" /></span>
                    <h1 className="text-lg font-bold">Address</h1>
                    <p>Mirpur DOHS,Dhaka,Bangladesh</p>
                </div>
                <div className="flex flex-col  items-center">
                    <span className="bg-black  h-[150px] w-[150px] rounded-full flex flex-col justify-center items-center"><BsTelephone className="text-7xl text-[#90dddcff]" /></span>
                    <h1 className="text-lg font-bold">Contact</h1>
                    <p>+88017130254952</p>
                </div>
                <div className="flex flex-col  items-center">
                    <span className="bg-black  h-[150px] w-[150px] rounded-full flex flex-col justify-center items-center"><PiTelegramLogo className="text-7xl text-[#90dddcff]" /></span>
                    <h1 className="text-lg font-bold">Email</h1>
                    <p>tourterra123@yahoo.com</p>
                </div>
                <div className="flex flex-col  items-center">
                    <span className="bg-black  h-[150px] w-[150px] rounded-full flex flex-col justify-center items-center"><GiWorld className="text-7xl text-[#90dddcff]" /></span>
                    <h1 className="text-lg font-bold">Website</h1>
                    <p><Link to='https://tourterra.netlify.app/'>https://tourterra.netlify.app/</Link></p>
                </div>
            </div>

            <div className="mt-24 lg:w-[1000px] md:w-[500px] w-[280px] flex flex-col lg:flex-row items-center  gap-6 mx-auto">
                <div className="lg:w-1/2 overflow-hidden flex-1 ">
                    <img src="https://i.ibb.co/1rLwF68/bandarbans.jpg" className=" w-full   bg-gray-400  object-cover transform transition-transform ease-in-out duration-300 hover:scale-110" alt="hero navigate ui" />

                </div>
                <div className="lg:w-1/2 overflow-hidden flex-1 border shadow-2xl ">
                    <div className="p-5">
                        <form>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="subject" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Message" required></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black text-white hover:bg-[#90dddcff]">Send Message</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>

            <SharedHeading heading1={'Join Our'} heading2={'Community'}></SharedHeading>
            <div className="mt-24 lg:w-[1000px]  md:w-[500px] w-[280px] flex flex-col lg:flex-row items-center  gap-6 mx-auto lg:h-[200px] rounded-lg" style={{ backgroundImage: 'url(https://i.ibb.co/fvQ0spp/hironpoint.jpg)' }}>
                <div className="flex flex-col md:flex-row justify-center items-center mx-auto gap-5">
                    <div className="md:w-2/3">

                        <input type="text" placeholder="johndoe@gmail.com" className="  input input-bordered" required />
                    </div>
                    <div className="md:w-1/3">
                        <button className="btn bg-black text-white hover:bg-white bg:text-black">Subscribe</button>
                    </div>

                </div>

            </div>



        </div>
    );
};

export default ContactUs;