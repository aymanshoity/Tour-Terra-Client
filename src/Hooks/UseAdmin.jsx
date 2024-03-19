import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
// import UseAxiosPublic from "./UseAxiosPublic";


const UseAdmin = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure = UseAxiosSecure()
    // const axiosPublic=UseAxiosPublic()
    const { data: isAdmin} = useQuery({
        queryKey: [user.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/tourists/admin/${user.email}`)
            console.log(res.data)
            return res.data?.admin
        }
    })
    return [isAdmin]
};

export default UseAdmin;