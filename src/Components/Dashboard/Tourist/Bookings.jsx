import Swal from "sweetalert2";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";


const Bookings = ({booking,refetch}) => {
    const axiosPublic=UseAxiosPublic()
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Do you want to cancel the booking?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/tourBookings/${id}`)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.deletedCount>0){
                        Swal.fire({
                            title: "Cancelled!",
                            text: "Your booking has been cancelled.",
                            icon: "success"
                        });
                        refetch()
                    }
                })
                
            }
        });
    }
    return (
        <tr className="hover:bg-gray-50 transition duration-300">
                <td className="py-4 px-6 border-b">{booking?.tourName}</td>
                <td className="py-4 px-6 border-b">{booking?.price}</td>
                <td className="py-4 px-6 border-b">{booking?.guideName}</td>
                <td className="py-4 px-6 border-b text-end">{booking?.tourDate}</td>
                <td className="py-4 px-6 border-b text-end">{booking?.status}</td>
                <td className="py-4 px-6 border-b text-end">

                    {
                        booking?.status==='In Review' && <button onClick={()=>handleDelete(booking?._id)} className="btn bg-black text-white hover:bg-[#90dddcff]">Cancel</button>
                    }
                    {
                        booking?.status==='Accepted' && <button className="btn bg-black text-white hover:bg-[#90dddcff]">Pay</button>
                    }
                    
                </td>
                
                
            </tr>
    );
};

export default Bookings;