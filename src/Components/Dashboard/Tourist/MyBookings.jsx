import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import SharedHeading from "../../SharedComponents/SharedHeading";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Bookings from "./Bookings";
import Confetti from 'react-confetti'
import Zoom from 'react-reveal/Zoom';
import BookingCard from "./BookingCard";

const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic()
    const [isDisabled, setIsDisabled] = useState(true)
    const [showMessage, setShowMessage] = useState(false)
    const { data: bookings = [], refetch } = useQuery({
        queryKey: ['bookings'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tourBookings/${user?.email}`)
            console.log(res.data)
            return res.data
        }
    })

    useEffect(() => {
        if (bookings.length >= 3) {
            setIsDisabled(false)
        }
        else {
            setIsDisabled(true)
        }
    }, [bookings.length])

    const handleApply = () => {
        setShowMessage(true)
    }
    refetch()
    return (
        <div>
            <SharedHeading heading1={'My'} heading2={'Bookings'}></SharedHeading>
            {showMessage && <Confetti />}
            {showMessage &&
                <Zoom >
                    <div className="flex flex-col items-center">
                        <p className=" text-red-600 font-bold">Congratulations! {user?.displayname} you are our favourite customer!</p>
                    </div>

                </Zoom>
            }
            <div className="overflow-x-auto ">
                <table className="min-w-[90%] shadow-md rounded-lg border mx-auto border-gray-100  my-6 hidden sm:table ">
                    <thead className="py-4 text-lg">
                        <tr className="bg-black text-white py-4 text-lg">
                            <th className="py-3 px-6 text-left border-b">Package Name</th>
                            <th className="py-3 px-6 text-left border-b">Price</th>
                            <th className="py-3 px-6 text-left border-b">Guide</th>
                            <th className="py-3 px-6  border-b text-end">Date</th>
                            <th className="py-3 px-6  border-b text-end">Status</th>
                            <th className="py-3 px-6  border-b text-end">Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking => <Bookings isDisabled={isDisabled} refetch={refetch} key={booking._id} booking={booking}></Bookings>)
                        }

                    </tbody>
                </table>
                <div className="min-w-[90%]  mx-auto  my-6 md:hidden lg:hidden">
                    {
                        bookings.map(booking => <BookingCard refetch={refetch} key={booking._id} booking={booking}></BookingCard>)
                    }
                </div>
                <div className="flex flex-col items-center">

                    <button onClick={handleApply} disabled={isDisabled} className="btn bg-black text-white hover:bg-[#90dddcff]">Apply</button>


                </div>

            </div>



        </div>
    );
};

export default MyBookings;