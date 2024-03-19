import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import SharedHeading from "../../SharedComponents/SharedHeading";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import AssignedTours from "./AssignedTours";


const MyAssignedTour = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic()
    const { data: myBookings = [], refetch } = useQuery({
        queryKey: ['myBookings'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tourBookings/guide/${user.displayName}`)
            console.log(res.data)
            return res.data
        }
    })
    return (
        <div>
            <SharedHeading heading1={'My'} heading2={'Assigned Tours'}></SharedHeading>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    myBookings.map(booking => <AssignedTours refetch={refetch} booking={booking} key={booking._id}></AssignedTours>)
                }
            </div>
        </div>
    );
};

export default MyAssignedTour;