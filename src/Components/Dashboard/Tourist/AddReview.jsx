import { useContext } from "react";
import SharedHeading from "../../SharedComponents/SharedHeading";
import { AuthContext } from "../../../Provider/AuthProvider";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import { Rating } from '@smastrom/react-rating'
import { Controller, useForm } from "react-hook-form"
import '@smastrom/react-rating/style.css'
import Swal from "sweetalert2";

const AddReview = () => {
    const { user } = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic()
    const { register, handleSubmit, control, reset, formState: { errors }, } = useForm({
        mode: 'onBlur',
        defaultValues: {
            rating: 0,
        },
    });
    const onSubmit = (data) => {
        console.log(data)
        Swal.fire({
            title: "Do you want to add the Review?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            denyButtonText: `No`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axiosPublic.post('/reviews',data)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire({
                            title: "Added!",
                            text: "Thanks for your valuable Feedback!",
                            icon: "success"
                          });
                        reset()
                    }
                })
              
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          });
    
    }
    return (
        <div>
            <SharedHeading heading1={'Add a'} heading2={'Review'}></SharedHeading>
            <div className="card shrink-0 md:w-2/3 mx-auto shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("clientName", { required: true })} type="text" defaultValue={user?.displayName}  className="input input-bordered" required />
                            {errors.clientName && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("clientEmail", { required: true })} type="email" defaultValue={user?.email}  className="input input-bordered" required />
                            {errors.clientEmail && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tourist Photo URL</span>
                            </label>
                            <input {...register("clientImage", { required: true })} type="url" defaultValue={user?.photoURL}  className="input input-bordered" required />
                            {errors.clientImage && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ratings</span>
                            </label>
                            <Controller
                                control={control}
                                name="rating"
                                rules={{
                                    validate: (rating) => rating > 0,
                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <Rating
                                        value={value}
                                        style={{ maxWidth: 150 }}
                                        isRequired
                                        onChange={onChange}
                                        visibleLabelId="rating_label"
                                        onBlur={onBlur}
                                    />
                                )}
                            />
                            {errors.rating && <div>Rating is required.</div>}
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <textarea {...register("review", { required: true })} className="textarea textarea-bordered" placeholder="Review...."></textarea>
                        {errors.review && <span className="text-red-600">This field is required</span>}
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-black text-white hover:bg-[#90dddcff]">Add Review</button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddReview;