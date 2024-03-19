import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import UseAxiosPublic from "./UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";

const UseTourGuide = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure = UseAxiosSecure()
    // const axiosPublic=UseAxiosPublic()
    const { data: isTourGuide} = useQuery({
        queryKey: [user.email, 'isTourGuide'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tourists/tourGuide/${user.email}`)
            console.log(res.data)
            return res.data?.tourGuide
        }
    })
    return [isTourGuide]
};

export default UseTourGuide;