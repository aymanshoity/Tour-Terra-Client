import Swal from "sweetalert2";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import { Link } from "react-router-dom";


const WishlistCard = ({ wish, refetch }) => {
    const axiosPublic=UseAxiosPublic()
    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Do you want to remove the package?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/wishlist/${id}`)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.deletedCount>0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your package has been deleted.",
                            icon: "success"
                        });
                        refetch()
                    }
                })
                
            }
        });
    }
    return (
        <div className="w-[280px] mx-auto  my-20 p-6 md:p-8 rounded-2xl shadow-lg shadow-[#90dddcff] bg-white">
        <div className="space-y-6 ">
        
            <div className="flex flex-row justify-between"><span className="font-bold">Package Name</span><span className="text-right">{wish?.tourTitle}</span></div>
            <div className="flex flex-row justify-between"><span className="font-bold">Price</span><span>{wish?.price}</span></div>
            <div className="flex flex-row justify-between"><span className="font-bold">Action</span><span><Link to={`/singlePackage/${wish.tourId}`}><button className="btn bg-black text-white hover:bg-[#90dddcff]">Details</button></Link></span></div>
            <div className="flex flex-row justify-between"><span className="font-bold">Action</span><span><button onClick={() => handleDelete(wish?._id)} className="btn bg-black text-white hover:bg-[#90dddcff]">Delete</button></span></div>

            

             
            
            
        

            
        </div>
    </div>
    );
};

export default WishlistCard;