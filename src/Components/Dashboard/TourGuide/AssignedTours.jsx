import Swal from "sweetalert2";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";


const AssignedTours = ({ refetch, booking }) => {
    const { tourId } = booking
    const axiosPublic = UseAxiosPublic()
    const handleAccept = (id) => {
        console.log(id)
        Swal.fire({
            title: "Do you want to accept the tour ?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Accept",
            denyButtonText: `Don't accept`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const data = {
                    status: 'Accepted'
                }
                axiosPublic.patch(`/tourBookings/guide/${id}`, data)
                    .then(res=>{
                        console.log(res.data)
                        if(res.data.modifiedCount>0){
                            Swal.fire("Accepted!", "", "success");
                        }
                    })
                
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });

    }
    const handleReject = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure tou want to reject?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/tourBookings/guide/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Rejected!",
                                text: "Your assigned tour has been rejected.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }
        });
    }

    return (
        <div className="p-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-4 my-10 flex  flex-col justify-center items-center mx-auto bg-white shadow-[#90dddcff]">

            <div className="relative group">
                <img className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full" src={booking?.image} alt="card navigate ui" />
                <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-3 right-0 border-[3px] border-white"></span>
                <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-3 right-0 animate-ping"></span>
            </div>

            <div className="text-center space-y-1">
                <h1 className="text-2xl text-gray-700">{booking?.name}</h1>
                <p className="text-gray-400 text-sm">{booking?.email}</p>
            </div>
            <div className="flex flex-col items-center justify-between w-full py-2">
                <div className="text-center space-y-1">
                    <p className="text-gray-500">Package Name</p>
                    <p className="text-xl font-mono text-gray-700">{booking?.tourName}</p>
                </div>
                <div className="text-center space-y-1">
                    <p className="text-gray-500">Date</p>
                    <p className="text-xl font-mono text-gray-700">{booking?.tourDate}</p>
                </div>

            </div>




            <button onClick={() => handleAccept(tourId)} className="hover:bg-[#90dddcff] hover:scale-95 font-medium text-white w-[80%] py-2 rounded-full hover:shadow-xl  bg-black  shadow-[0px_0px_10px_#E2DADA] t duration-500">Accept</button>
            <button onClick={() => handleReject(tourId)} className="hover:bg-[#90dddcff] hover:scale-95 font-medium text-white w-[80%] py-2 rounded-full hover:shadow-xl   bg-black shadow-[0px_0px_10px_#E2DADA] t duration-500">Reject</button>
        </div>
    );
};

export default AssignedTours;