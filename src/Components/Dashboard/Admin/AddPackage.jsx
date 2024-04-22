import Swal from "sweetalert2";
import SharedHeading from "../../SharedComponents/SharedHeading";
import { useForm } from "react-hook-form"
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";

const AddPackage = () => {
    const axiosSecure=UseAxiosSecure()
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        const pack =
        {
            tourCard: data.tourCard,
            tourImage1: data.tourImage1,
            tourImage2: data.tourImage2,
            tourImage3: data.tourImage3,
            tourImage4: data.tourImage4,
            tourImage5: data.tourImage5,
            tourType: data.tourType,
            tourTitle: data.tourTitle,
            tourPlaces: data.tourPlaces,
            price: parseInt(data.price),
            totalDays: parseInt(data.totalDays),
            tourDescription: parseInt(data.tourDescription),
            tourPlan: {
                day1: data.day1,
                day2: data.day2,
                day3: data.day3,
            }
        }
        console.log(pack)
        Swal.fire({
            title: "Do you want to add this package?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Add",
            denyButtonText: `Don't Add`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axiosSecure.post('/packages',pack)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire("Package Added!", "", "success");
                        reset() 
                    }
                })
              
            } else if (result.isDenied) {
              Swal.fire("Package is not added", "", "info");
            }
          });


    }
    return (
        <div>
            <SharedHeading heading1={'Add a new'} heading2={'Tour Package'}></SharedHeading>
            <div className="  bg-white">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div >
                        <label className="label">
                            <span className="label-text text-2xl">Basic Information</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
                            {/* package name */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Package Name</span>
                                </label>
                                <input {...register("tourTitle", { required: true })} name="tourTitle" type="text" placeholder="Package Name" className="input input-bordered" required />
                                {errors.tourTitle && <span>This field is required</span>}
                            </div>
                            {/* tour type */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Package Type</span>
                                </label>
                                <select {...register("tourType", { required: true })} className="input input-bordered text-[#783d19ff]">

                                    <option value="Tracking">Tracking</option>
                                    <option value="Boating">Boating</option>
                                    <option value="Wild">Wild</option>
                                    <option value="Paragliding">Paragliding</option>
                                </select>
                                {errors.tourType && <span>This field is required</span>}

                            </div>
                            {/*  total days*/}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Total days</span>
                                </label>
                                <input {...register("totalDays", { required: true })} name="totalDays" type="number" placeholder="2/3/4" className="input input-bordered" required />
                                {errors.totalDays && <span>This field is required</span>}
                            </div>
                            {/* tour Cost */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Tour Cost</span>
                                </label>
                                <input {...register("price", { required: true })} name="price" type="number" placeholder="7450" className="input input-bordered" required />
                                {errors.price && <span>This field is required</span>}
                            </div>
                            {/* package Description */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Package Description</span>
                                </label>
                                <textarea {...register("tourDescription", { required: true })} name="tourDescription" className="textarea textarea-bordered " placeholder="Explore Sajek with ...."></textarea>
                                {errors.tourDescription && <span>This field is required</span>}
                            </div>
                        </div>

                        <label className="label">
                            <span className="label-text text-2xl">Destination Information</span>
                        </label>
                        <div className="grid grid-cols-1  gap-5 items-center">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Destinations</span>
                                </label>
                                <input {...register("tourPlaces", { required: true })} name="tourPlaces" type="text" placeholder="amiakhum,nafakhum...." className="input input-bordered" required />
                                {errors.tourPlaces && <span>This field is required</span>}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Day 1</span>
                                    </label>
                                    <input {...register("day1", { required: true })} name="day1" type="text" placeholder="amiakhum" className="input input-bordered" required />
                                    {errors.day1 && <span>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Day 2</span>
                                    </label>
                                    <input {...register("day2", { required: true })} name="day2" type="text" placeholder="nafakhum" className="input input-bordered" required />
                                    {errors.day2 && <span>This field is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Day 3</span>
                                    </label>
                                    <input {...register("day3", { required: true })} name="day3" type="text" placeholder="amiakhum" className="input input-bordered" required />
                                    {errors.day3 && <span>This field is required</span>}
                                </div>
                            </div>

                        </div>
                        <label className="label">
                            <span className="label-text text-2xl">Image Section</span>
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Card Image</span>
                                </label>
                                <input {...register("tourCard", { required: true })} name="tourCard" type="url" placeholder="http://..." className="input input-bordered" required />
                                {errors.tourCard && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image 1</span>
                                </label>
                                <input {...register("tourImage1", { required: true })} name="tourImage1" type="url" placeholder="http://..." className="input input-bordered" required />
                                {errors.tourImage1 && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image 2</span>
                                </label>
                                <input {...register("tourImage2", { required: true })} name="tourImage2" type="url" placeholder="http://..." className="input input-bordered" required />
                                {errors.tourImage2 && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image 3</span>
                                </label>
                                <input {...register("tourImage3", { required: true })} name="tourImage3" type="url" placeholder="http://..." className="input input-bordered" required />
                                {errors.tourImage3 && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image 4</span>
                                </label>
                                <input {...register("tourImage4", { required: true })} name="tourImage4" type="url" placeholder="http://..." className="input input-bordered" required />
                                {errors.tourImage4 && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image 5</span>
                                </label>
                                <input {...register("tourImage5", { required: true })} name="tourImage5" type="url" placeholder="http://..." className="input input-bordered" required />
                                {errors.tourImage5 && <span>This field is required</span>}
                            </div>

                        </div>





                    </div>


                    <div className="form-control mt-6">
                        <button className="btn bg-black text-white hover:bg-[#90dddcff]">Add Package</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPackage;