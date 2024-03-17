import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import UseAxiosPublic from '../../../Hooks/UseAxiosPublic';

const Wishlist = ({ wish, refetch }) => {
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
        <tr className="hover:bg-gray-50 transition duration-300">
            <td className="py-4 px-6 border-b">{wish?.tourTitle}</td>
            <td className="py-4 px-6 border-b">{wish?.price} Tk.</td>
            <td className="py-4 px-6 border-b"><Link to={`/singlePackage/${wish.tourId}`}><button className="btn bg-black text-white hover:bg-[#90dddcff]">Details</button></Link></td>
            <td className="py-4 px-6 border-b"><button onClick={() => handleDelete(wish?._id)} className="btn bg-black text-white hover:bg-[#90dddcff]">Delete</button></td>

        </tr>
    );
};

export default Wishlist;