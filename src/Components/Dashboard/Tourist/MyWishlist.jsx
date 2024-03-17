import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import SharedHeading from "../../SharedComponents/SharedHeading";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Wishlist from "./Wishlist";
import WishlistCard from "./WishlistCard";


const MyWhistle = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic()
    const { data: wishlist = [], refetch } = useQuery({
        queryKey: ['wishlist'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/wishlist/${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })
    refetch()
    return (
        <div>
            <SharedHeading heading1={'My'} heading2={'Wishlist'}></SharedHeading>

            <div className="overflow-x-auto ">
                <table className="min-w-[90%] shadow-md  border mx-auto border-gray-100  my-6 hidden md:table">
                    <thead className="py-4 text-lg">
                        <tr className="bg-black text-white py-4 text-lg">
                            <th className="py-3 px-6 text-left border-b">Package Name</th>
                            <th className="py-3 px-6 text-left border-b">Package Price</th>
                            <th className="py-3 px-6 text-left border-b">Action</th>
                            <th className="py-3 px-6 text-left border-b">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            wishlist.map(wish =>
                                <Wishlist refetch key={wish._id} wish={wish}></Wishlist>)
                        }



                    </tbody>
                </table>
                <div className="min-w-[90%] mx-auto  my-6  md:hidden">
                    {
                        wishlist.map(wish =>
                            <WishlistCard refetch key={wish._id} wish={wish}></WishlistCard>)
                    }

                </div>
            </div>


        </div>
    );
};

export default MyWhistle;