import React, { useEffect, useState } from 'react';
import { FaUserShield } from "react-icons/fa6";
import { FaUserTag } from "react-icons/fa6";
import Swal from 'sweetalert2';
import UseAxiosSecure from '../../../Hooks/UseAxiosSecure';
const Users = ({ tourist, refetch }) => {
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
        <tr className="hover:bg-gray-50 transition duration-300">
            <td className="py-4 px-6 border-b">{tourist?.name}</td>
            <td className="py-4 px-6 border-b">{tourist?.email}</td>
            <td className="py-4 px-6 border-b">{tourist?.role}</td>
            <td className="py-4 px-6 border-b text-end"><button disabled={isDisabled} onClick={() => handleMakeTourGuide(tourist._id)} className="btn bg-black text-white hover:bg-[#90dddcff]"><FaUserTag /></button></td>
            <td className="py-4 px-6 border-b text-end"><button disabled={isDisabled} onClick={() => handleMakeAdmin(tourist._id)} className="btn bg-black text-white hover:bg-[#90dddcff]"><FaUserShield /></button></td>
        </tr>
    );
};

export default Users;