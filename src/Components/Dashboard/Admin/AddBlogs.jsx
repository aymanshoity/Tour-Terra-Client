import { useState } from "react";
import SharedHeading from "../../SharedComponents/SharedHeading";
import { useForm } from "react-hook-form"
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const AddBlogs = () => {
    const [image, setImage] = useState('')
    const handleChange = e => {
        e.preventDefault()
        console.log(e.target.value)
        setImage(e.target.value)
    }
    const date = new Date().toDateString()
    const today = date.split(' ');
    const todaysDate = `${today[1]}. ${today[2]},${today[3]}`
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const axiosSecure = UseAxiosSecure()
    const onSubmit = (data) => {
        console.log(data)
        Swal.fire({
            title: "Do you want to post this Blog?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Post",
            denyButtonText: `Don't post`
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axiosSecure.post('/blogs',data)
                .then(res=>{
                    console.log(res.data)
                    if(res.data.insertedId){
                        Swal.fire("Posted!", "", "success");
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
            <SharedHeading heading1={'Add a new'} heading2={'Blog'}></SharedHeading>
            <div className="flex flex-col lg:flex-row lg:items-start items-center gap-5">
                <div className="lg:w-1/2 border">
                    <img src={image} alt="blog image" />
                </div>
                <div className="lg:w-1/2 p-5 border">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Blog Title</span>
                            </label>
                            <input {...register("title", { required: true })} type="text" placeholder="Title" className="input input-bordered" required />
                            {errors.title && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Image</span>
                            </label>
                            <input {...register("image", { required: true })} onChange={handleChange} type="url" placeholder="image" className="input input-bordered" required />
                            {errors.image && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Date</span>
                            </label>
                            <input {...register("date", { required: true })} defaultValue={todaysDate} className="input input-bordered" required />
                            {errors.date && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Details</span>
                            </label>
                            <textarea {...register("details", { required: true })} className="textarea textarea-bordered" placeholder="Blog Details.."></textarea>
                            {errors.details && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-black text-white hover:bg-[#90dddcff]">Add Blog</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddBlogs;
// https://i.ibb.co/nwXQYx1/tata.jpg
// https://i.ibb.co/t8VFf9F/amia.jpg
// https://i.ibb.co/JHyX6qp/shobai.jpg
// https://i.ibb.co/q030ZmC/nirjon.jpg
// https://i.ibb.co/kXhXg7t/bogalake.jpg