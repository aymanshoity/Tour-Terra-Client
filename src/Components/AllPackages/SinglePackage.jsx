import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import { useParams } from "react-router-dom";
import SharedHeading from "../SharedComponents/SharedHeading";
import MeetTourGuides from "../Home/HomepageSections/TravelGuideSection/MeetTourGuides";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SinglePackage = () => {
    const {user}=useContext(AuthContext)
    const { id } = useParams()
    const tourGuideName=[]
    const [name,setName]=useState([])
    const axiosPublic = UseAxiosPublic()
    const { data: packagesDetails = [] } = useQuery({
        queryKey: ['packagesDetails'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/packages/${id}`)
            console.log(res.data)
            return res.data
        }

    })
    const { data: tourGuides = [] } = useQuery({
        queryKey: ['tourGuides'],
        queryFn: async () => {
            const res = await axiosPublic.get('/tourGuides')
            console.log(res.data)
            return res.data
        }
    })

    useEffect(()=>{
        const extractedNames=tourGuides.map(guide=>guide?.tourGuideName)
        setName(extractedNames)
    },[tourGuides])

    
    
    

    const handleBookTour = (e) => {

        e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const image = form.image.value
        const price = parseInt(form.price.value)
        const tourDate = form.date.value
        const guideName = form.guideName.value
        const tourName = packagesDetails?.tourTitle
        const tourId = packagesDetails?._id
        const status='In Review'
        const bookPackage = { name, email, image, price, tourDate, guideName, tourName, tourId ,status}
        console.log(bookPackage)
        Swal.fire({
            title: `Do you want to book ${packagesDetails?.tourTitle}?`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Book",
            denyButtonText: `Cancel`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axiosPublic.post('/tourBookings', bookPackage)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.insertedId) {
                            Swal.fire(`${packagesDetails?.tourTitle} has been booked for you`, "", "success");
                        }
                    })

            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });


    }
    return (
        <div>
            <div className="py-6 bg-black  text-white">

                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 overflow-hidden">
                    <img src={packagesDetails?.tourImage1} alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square object-cover transform transition-transform ease-in-out duration-300 hover:scale-110 " />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover transform transition-transform ease-in-out duration-300 hover:scale-110" src={packagesDetails?.tourImage2} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover transform transition-transform ease-in-out duration-300 hover:scale-110" src={packagesDetails?.tourImage3} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover transform transition-transform ease-in-out duration-300 hover:scale-110" src={packagesDetails?.tourImage4} />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square object-cover transform transition-transform ease-in-out duration-300 hover:scale-110" src={packagesDetails?.tourImage5} />

                </div>

            </div>
            <SharedHeading heading1={"Insights of"} heading2={`${packagesDetails?.tourTitle}`}></SharedHeading>

            <div className="lg:px-36 md:px-10 px-8">
                <h1 className="font-bold text-lg mb-5"><span className="ding lg:text-3xl font-extrabold text-2xl text-[#2D9596]">Details: </span>{packagesDetails?.tourDescription}</h1>
                <h1 className="font-bold text-lg mb-5"><span className="ding lg:text-3xl font-extrabold text-2xl text-[#2D9596]">Our Destinations: </span>{packagesDetails?.tourPlaces}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <h1 className="font-bold text-lg mb-5"><span className="ding lg:text-3xl font-extrabold text-2xl text-[#2D9596]">Tour Category: </span>{packagesDetails?.tourType}</h1>
                    <h1 className="font-bold text-lg mb-5"><span className="ding lg:text-3xl font-extrabold text-2xl text-[#2D9596]">Tour Cost: </span>{packagesDetails?.price} Tk.</h1>
                    <h1 className="font-bold text-lg mb-5"><span className="ding lg:text-3xl font-extrabold text-2xl text-[#2D9596]">Total Days: </span>{packagesDetails?.totalDays}</h1>
                </div>
                <h1 className="font-bold text-lg mb-5"><span className="ding lg:text-3xl font-extrabold text-2xl text-[#2D9596]">Our Plan</span></h1>
                <h1 className="font-bold text-lg mb-5"><span className="ding lg:text-3xl font-extrabold text-2xl text-[#2D9596]">Day 1: </span>{packagesDetails?.tourPlan?.day1}</h1>
                <h1 className="font-bold text-lg mb-5"><span className="ding lg:text-3xl font-extrabold text-2xl text-[#2D9596]">Day 2: </span>{packagesDetails?.tourPlan?.day2}</h1>
                <h1 className="font-bold text-lg mb-5"><span className="ding lg:text-3xl font-extrabold text-2xl text-[#2D9596]">Day 3: </span>{packagesDetails?.tourPlan?.day3}</h1>

            </div>

            <MeetTourGuides></MeetTourGuides>

            <SharedHeading heading1={"Now It's your Turn to go"} heading2={`${packagesDetails?.tourTitle?.split(' ')[0]}`}></SharedHeading>

            <div className="hero min-h-screen w-full " style={{ backgroundImage: `url(${packagesDetails.tourImage1})` }}>
                

                <div className="my-8 hero-content bg-black bg-opacity-30 text-black font-bold border border-white rounded-lg  max-w-7xl">

                    <div className=" flex flex-col items-center justify-center">
                        <h1 className="text-5xl py-5 text-white">Book Online</h1>
                        <form onSubmit={handleBookTour} className="py-5 ">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Tourist Name</span>
                                    </label>
                                    <input defaultValue={user?.displayName} disabled name="name" type="text" placeholder="name" className="input input-bordered " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Tourist Email</span>
                                    </label>
                                    <input defaultValue={user?.email}  disabled name="email" type="email" placeholder="email" className="input input-bordered " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Tourist Image</span>
                                    </label>
                                    <input defaultValue={user?.photoURL} disabled name="image" type="url" className="text-black input input-bordered " />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Tour Cost</span>
                                    </label>
                                    <input disabled name="price" defaultValue={packagesDetails?.price} type="text" placeholder="Price" className="input input-bordered " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Select date</span>
                                    </label>
                                    <input name="date" type="date" placeholder="date" className="input input-bordered " required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="text-white">Choose Tourist Guide</span>
                                    </label>
                                    <select name="guideName" className="input input-bordered ">
                                        {
                                            name?.map((name,index)=>
                                            ( <option key={index} value={name}>{name}</option> ))
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-black hover:bg-[#90dddcff] text-white">Book</button>
                            </div>


                        </form>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default SinglePackage;