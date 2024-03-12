import { FaHiking } from "react-icons/fa";
import { GiHangGlider } from "react-icons/gi";
import { GiPolarBear } from "react-icons/gi";
import { IoIosBoat } from "react-icons/io";
import { Zoom } from "react-reveal";
import { motion } from "framer-motion";
const TourType = () => {
    return (
        <div className="my-24 hero h-[500px] bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/2hFTKdn/carousel-1.jpg)' }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-white flex flex-col">
                <p className="logo text-3xl">Get your desired trip by</p>
                <h1 className="text-5xl tt">Tour Terra</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <Zoom>
                        <motion.div
                            className="box"
                            whileHover={{ scale: [null, 1.1, 1.2] }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="avatar">
                                <div className="w-24 rounded border border-spacing-2 border-white ">
                                    <div className="flex flex-col items-center justify-center">
                                        <FaHiking className="text-7xl" />
                                        <h1>Tracking</h1>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </Zoom>
                    <Zoom>
                        <motion.div
                            className="box"
                            whileHover={{ scale: [null, 1.1, 1.2] }}
                            transition={{ duration: 0.3 }}>
                            <div className="avatar">
                                <div className="w-24 rounded border border-spacing-2 border-white ">
                                    <div className="flex flex-col items-center justify-center">
                                        <GiHangGlider className="text-7xl" />
                                        <h1>Paragliding</h1>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </Zoom>
                    <Zoom>
                        <motion.div
                            className="box"
                            whileHover={{ scale: [null, 1.1, 1.2] }}
                            transition={{ duration: 0.3 }}>
                            <div className="avatar">
                                <div className="w-24 rounded border border-spacing-2 border-white ">
                                    <div className="flex flex-col items-center justify-center">
                                        <GiPolarBear className="text-7xl" />
                                        <h1>WildLife</h1>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Zoom>
                    <Zoom>
                        <motion.div
                            className="box"
                            whileHover={{ scale: [null, 1.1, 1.2] }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="avatar">
                                <div className="w-24 rounded border border-spacing-2 border-white ">
                                    <div className="flex flex-col items-center justify-center">
                                        <IoIosBoat className="text-7xl" />
                                        <h1>Boating</h1>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </Zoom>

                </div>
            </div>
        </div>
    );
};

export default TourType;