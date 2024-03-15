import { FaHeart } from "react-icons/fa";
import { Fade } from 'react-reveal';
import { motion } from "framer-motion";
const SigngleLoad = ({ pack }) => {
    const overlay1 = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: -0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.4)', // 40% opacity
    };
    return (
        <div>
            <Fade>
                <motion.div
                    className="box "
                    whileHover={{ scale: [null, 1.1, 1.2] }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-[300px] h-[400px] text-white p-5" style={{ backgroundImage: `url(${pack.tourCard})` }}>
                        <div>
                            <h1 className="ding text-2xl font-bold">{pack.tourTitle}</h1>
                            <h1 className="ding text-xl font-bold ">{pack.tourType}</h1>
                            <h1 className="ding text-xl font-bold">{pack.price} Tk.</h1>
                        </div>
                        {/* <div>
                            <div className="mx-auto h-[30px] w-[30px] flex flex-col items-center rounded-md bg-white ">
                               <FaHeart className="text-red-500" />
                                
                            </div>
                        </div> */}



                    </div>
                </motion.div>
            </Fade>
        </div>
    );
};

export default SigngleLoad;