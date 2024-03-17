import Swal from "sweetalert2";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";


const BookingCard = ({booking,refetch}) => {
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
        <div className="w-[280px] mx-auto my-20 p-6 md:p-8 rounded-2xl shadow-lg shadow-[#90dddcff] bg-white">
            <div className="space-y-6 ">
            
                <div className="flex flex-row justify-between"><span className="font-bold">Package Name</span><span className="text-right">{booking?.tourName}</span></div>
                <div className="flex flex-row justify-between"><span className="font-bold">Price</span><span>{booking?.price}</span></div>
                <div className="flex flex-row justify-between"><span className="font-bold">Guide</span><span>{booking?.guideName}</span></div>
                <div className="flex flex-row justify-between"><span className="font-bold">Date</span><span>{booking?.tourDate}</span></div>
                <div className="flex flex-row justify-between"><span className="font-bold">Status</span><span>{booking?.status}</span></div>
                <div className="flex flex-row justify-between">

                   <span className="font-bold">Action</span><span> {
                        booking?.status==='In Review' && <button onClick={()=>handleDelete(booking?._id)} className="btn px-6 py-2 rounded-full bg-black text-white hover:bg-[#90dddcff]">Cancel</button>
                    }
                    {
                        booking?.status==='Accepted' && <button className="btn bg-black text-white px-6 py-2 rounded-full hover:bg-[#90dddcff]">Pay</button>
                    }</span>
                    
                </div>
                
                
            

                
            </div>
        </div>
    );
};

export default BookingCard;