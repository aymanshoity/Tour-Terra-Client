import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import SharedHeading from "../../SharedComponents/SharedHeading";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";


const TourGuideProfile = () => {
    const axiosPublic = UseAxiosPublic()
    const {user}=useContext(AuthContext)
    const { data: tourGuide = [] } = useQuery({
        queryKey: ['tourGuide'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tourGuides/guide/${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })
    return (
        <div>
            <SharedHeading heading1={'Meet Our Tour Guide'} heading2={`${tourGuide?.tourGuideName}`}></SharedHeading>
            <div className=" md:w-[500px] w-[280px] mx-auto ">
                <div className="flex flex-col lg:flex-row items-start justify-center gap-20">
                    <div className="flex flex-col items-center">
                        <img className="rounded-full border  w-[200px] h-[200px]" src={tourGuide?.profilePicture} alt="" />
                        <h1 className="font-bold text-lg ">{tourGuide?.tourGuideEmail}</h1>

                        <h1 className="font-bold text-lg mb-5">{tourGuide?.contactNum}</h1>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg my-5"><span className="ding lg:text-4xl font-extrabold text-3xl text-[#2D9596]">Name: </span>{tourGuide?.tourGuideName}</h1>
                        <hr />
                        <h1 className="font-bold text-lg my-5"><span className="ding lg:text-4xl font-extrabold text-3xl text-[#2D9596]">Designation: </span>Tour Guide</h1>
                        <hr />
                        <h1 className="font-bold text-lg my-5"><span className="ding lg:text-4xl font-extrabold text-3xl text-[#2D9596]">Experience: </span>{tourGuide?.experience}</h1>
                        <hr />
                        <h1 className="font-bold text-lg my-5 flex justify-start"><span className="ding lg:text-4xl font-extrabold text-3xl text-[#2D9596]">Skills:   </span>
                            <ul>
                                {tourGuide?.skill?.map((skill, index) => {
                                    return <li key={index}>{index + 1}. {skill}</li>

                                })}
                            </ul>
                        </h1>
                        <hr className="" />

                        <h1 className="font-bold text-lg my-5"><span className="ding lg:text-4xl font-extrabold text-3xl text-[#2D9596]">Education: </span>{tourGuide?.education}</h1>

                    </div>
                </div>
                


            </div>
            
        </div>
    );
};

export default TourGuideProfile;