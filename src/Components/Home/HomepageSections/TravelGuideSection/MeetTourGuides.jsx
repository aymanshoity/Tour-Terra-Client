import SharedHeading from "../../../SharedComponents/SharedHeading";
import UseAxiosPublic from '../../../../Hooks/UseAxiosPublic'
import { useQuery } from "@tanstack/react-query";
import MeetTourGuideSingle from "./MeetTourGuideSingle";
import { Link } from "react-router-dom";

const MeetTourGuides = () => {
    const axiosPublic = UseAxiosPublic()
    const { data: tourGuides = [] } = useQuery({
        queryKey: ['tourGuides'],
        queryFn: async () => {
            const res = await axiosPublic.get('/tourGuides')
            console.log(res.data)
            return res.data
        }
    })


    return (
        <div className="lg:w-[1280px] md:w-[550px] w-[280px] mx-auto" >
            <SharedHeading heading1={'Meet Our'} heading2={'Tour Guides'}></SharedHeading>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {
                    tourGuides?.slice(0,4).map(guide => <MeetTourGuideSingle key={guide._id} guide={guide}></MeetTourGuideSingle>)
                }

            </div>
            <div className="flex flex-col items-center">
                <Link to='/allTourGuides'>
                    <button className="hover:bg-[#90dddcff] hover:scale-95 font-medium btn hover:shadow-xl   text-white bg-black shadow-[0px_0px_10px_#E2DADA] t duration-500">Check Them All</button>
                </Link>

            </div>



        </div>

    );
};

export default MeetTourGuides;