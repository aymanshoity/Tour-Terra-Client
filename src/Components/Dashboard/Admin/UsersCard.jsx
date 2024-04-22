import React, { useEffect, useState } from 'react';
import { FaUserShield } from "react-icons/fa6";
import { FaUserTag } from "react-icons/fa6";
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
const UsersCard = ({ tourist, refetch }) => {
    const [isDisabled, setIsDisabled] = useState(false)
    const axiosSecure = UseAxiosSecure()
    useEffect(() => {
        if (tourist.role === 'tourist') {
            setIsDisabled(false)
        }
    }, [tourist])
    const handleMakeTourGuide = (id) => {
        Swal.fire({
            title: `Do you want to make ${tourist.name} a Tour Guide ?`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Make",
            denyButtonText: `Don't make`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const data = {
                    role: 'tour guide'
                }
                axiosSecure.patch(`/tourists/${id}`, data)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            Swal.fire(`${tourist.name} is an Tour Guide now`, "", "success");
                            setIsDisabled(true)
                            refetch()
                        }
                        else {
                            Swal.fire(`${tourist.name} is already a tour guide`)
                        }
                    })

            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }
    const handleMakeAdmin = (id) => {
        Swal.fire({
            title: `Do you want to make ${tourist.name} an Admin ?`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Make",
            denyButtonText: `Don't make`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                const data = {
                    role: 'admin'
                }
                axiosSecure.patch(`/tourists/${id}`, data)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            Swal.fire(`${tourist.name} is an Admin now`, "", "success");
                            setIsDisabled(true)
                            refetch()
                        }
                    })

            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }
    return (
        <div className="w-[300px] mx-auto my-20 p-6 md:p-8 rounded-2xl shadow-lg shadow-[#90dddcff] bg-white">
            <div className="space-y-6 ">

                <div className="flex flex-row justify-between"><span className="font-bold">Name</span><span className="text-right">{tourist?.name}</span></div>
                <div className="flex flex-row justify-between"><span className="font-bold">Email</span><span>{tourist?.email}</span></div>
                <div className="flex flex-row justify-between"><span className="font-bold">Role</span><span>{tourist?.role}</span></div>

                <div className="flex flex-row justify-between">

                    <span className="font-bold">Make Tour Guide</span>
                    <span><button disabled={isDisabled} onClick={() => handleMakeTourGuide(tourist._id)} className="btn bg-black text-xl text-white hover:bg-[#90dddcff]"><FaUserTag /></button></span>

                </div>
                <div className="flex flex-row justify-between">

                    <span className="font-bold">Make Admin</span>
                    <span><button disabled={isDisabled} onClick={() => handleMakeAdmin(tourist._id)} className="btn bg-black text-xl text-white hover:bg-[#90dddcff]"><FaUserShield /></button></span>

                </div>





            </div>
        </div>
    );
};

export default UsersCard;