import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
import Swal from 'sweetalert2';

const AllPackageDetails = ({ pack }) => {
    const {user}=useContext(AuthContext)
    const axiosPublic=UseAxiosPublic()
    const overlay2 = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.4)', // 60% opacity
    };

    const handleAddToWhistle=(pack)=>{
        console.log(pack)
        const whistle={
            email:user?.email,
            tourId:pack?._id,
            tourTitle:pack?.tourTitle,
            tourCard:pack?.tourCard,
            tourType:pack?.tourType,
            totalDays:pack?.totalDays,
            price:pack?.price,

        }
        console.log(whistle)
        axiosPublic.post('/whistle',whistle)
        .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                Swal.fire({
                    title: `${pack.tourTitle} is added to Whistle!`,
                    text: "Check your whistle!",
                    icon: "success"
                  });
            }
            else{
                Swal.fire({
                    icon: "error",
                    title: `Oops!`,
                    text: `${pack.tourTitle} is already added to Whistle!`,
                    
                  });
            }
        })
    }
    return (
        <div className=" flex  flex-col md:flex-row  my-20">
            <div className="relative max-w-[350px] group">
                <img className="rounded-lg transform scale-105 w-[300px] h-[400px]" src={pack.tourCard} alt="card navigate ui" />
                <div className="p-8 rounded-lg absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <h1 className="ding text-2xl text-white">Let yourself be enchanted by the beauty of {pack.tourTitle?.split(' ')[0]} </h1>
                </div>
                <span className="absolute -bottom-6 left-1/2 z-30 flex h-[40px] w-[40px] -translate-x-1/2 transform items-center  justify-center rounded-full bg-white bg-gradient-to-tr from-[#90dddcff]  to-[#70c4ff] duration-500 group-hover:rotate-180 group-hover:shadow-[0px_0px_30px_2px_#0d87f8]">
                    <svg width={25} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <g id="style=linear"> <g id="add"> <path id="vector" d="M11.998 5.84424L11.998 18.1604" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path> <path id="vector_2" d="M18.1561 12.002L5.83998 12.0019" stroke="#9EE6FD" strokeWidth="2" strokeLinecap="round"></path> </g> </g> </g> </svg>
                </span>
                <span className="bg-gradient-to-tr from-[#90dddcff]/80 to-[#70c4ff]/80 duration-300  absolute -bottom-6 left-1/2 transform -translate-x-1/2 rounded-full  z-20 w-0 h-0  group-hover:w-[50px] group-hover:h-[50px]"></span>
                <span className="bg-gradient-to-tr from-[#90dddcff]/50 to-[#70c4ff]/50 duration-500  absolute -bottom-6 left-1/2 transform -translate-x-1/2 rounded-full  z-20 w-0 h-0  group-hover:w-[60px] group-hover:h-[60px] hover:duration-300 "></span>
            </div>
            <div className="bg-white space-y-12  max-w-[350px] rounded-tr-lg rounded-br-lg md:w-[350px] text-center p-10 shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)]">
                <div className="space-y-1">
                    <h2 className="text-3xl font-medium text-gray-700 text-center font-sans">
                        {pack.tourTitle}
                    </h2>
                    <p className="font-sans  text-gray-500">{pack.tourType}</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="space-y-1">
                        <p className="text-gray-500 text-sm font-sans">Days</p>
                        <p className="text-3xl tracking-wider text-gray-700">{pack.totalDays}</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-gray-500 text-sm font-sans">Price</p>
                        <p className="text-3xl tracking-wider text-gray-700">{pack.price} Tk.</p>
                    </div>

                </div>
                <div>

                    <Link to={`/singlePackage/${pack._id}`}>
                        <button className="btn mr-4 text-white bg-black hover:bg-[#90dddcff]">
                            Details
                        </button>
                    </Link>
                    <button onClick={()=>handleAddToWhistle(pack)} className="btn text-white bg-black hover:bg-[#90dddcff]">
                        Add to Whistle
                    </button>

                </div>
            </div>
        </div>
    );
};

export default AllPackageDetails;