import { useParams } from "react-router-dom";
import UseAxiosPublic from "../../../../../Hooks/UseAxiosPublic";
import SharedBanner from "../../../../SharedComponents/SharedBanner";
import { useQuery } from "@tanstack/react-query";
import SharedHeading from "../../../../SharedComponents/SharedHeading";


const TourGuide = () => {
    const axiosPublic = UseAxiosPublic()
    const { id } = useParams()
    const { data: tourGuide = [] } = useQuery({
        queryKey: ['tourGuide'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tourGuides/${id}`)
            console.log(res.data)
            return res.data
        }
    })
    return (
        <div>
            <SharedBanner heading={'Tour Guide Profile'} image={'https://i.ibb.co/ZBJ2z1C/mohamaya2.jpg'}></SharedBanner>
            <SharedHeading heading1={'Meet Our Tour Guide'} heading2={`${tourGuide?.tourGuideName}`}></SharedHeading>
            <div className="lg:w-[1280px] md:w-[500px] w-[280px] mx-auto ">
                <div className="flex flex-col lg:flex-row items-start justify-center gap-20">
                    <div className="flex flex-col items-center">
                        <img className="rounded-full border  w-[200px] h-[200px]" src={tourGuide?.profilePicture} alt="" />
                        <h1 className="font-bold text-xl ">{tourGuide?.tourGuideEmail}</h1>

                        <h1 className="font-bold text-lg mb-5">{tourGuide?.contactNum}</h1>
                    </div>
                    <div>
                        <h1 className="font-bold text-xl my-5"><span className="ding lg:text-4xl font-extrabold text-3xl text-[#2D9596]">Name: </span>{tourGuide?.tourGuideName}</h1>
                        <hr />
                        <h1 className="font-bold text-xl my-5"><span className="ding lg:text-4xl font-extrabold text-3xl text-[#2D9596]">Designation: </span>Tour Guide</h1>
                        <hr />
                        <h1 className="font-bold text-xl my-5"><span className="ding lg:text-4xl font-extrabold text-3xl text-[#2D9596]">Experience: </span>{tourGuide?.experience}</h1>
                        <hr />
                        <h1 className="font-bold text-xl my-5 flex justify-start"><span className="ding lg:text-4xl font-extrabold text-3xl text-[#2D9596]">Skills:   </span>
                            <ul>
                                {tourGuide?.skill?.map((skill, index) => {
                                    return <li key={index}>{index + 1}. {skill}</li>

                                })}
                            </ul>
                        </h1>
                        <hr className="" />

                        <h1 className="font-bold text-xl my-5"><span className="ding lg:text-4xl font-extrabold text-3xl text-[#2D9596]">Education: </span>{tourGuide?.education}</h1>

                    </div>
                </div>
                {/* <div className="divider text-black"></div>
                <div>
                    <h1 className="ding lg:text-4xl font-extrabold text-3xl text-[#2D9596] my-5">Add a Review:</h1>
                    <form>
                        <div className="flex flex-col items-start gap-6">
                            <textarea className="textarea textarea-accent lg:w-1/4" placeholder="Add your Review"></textarea>
                            <button type="submit" className="btn bg-black text-white hover:bg-[#2D9596]">Submit</button>
                        </div>
                    </form>
                </div> */}


            </div>


        </div>
    );
};

export default TourGuide;