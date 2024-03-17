import { FaGoogle, FaLink } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import SharedHeading from "../SharedComponents/SharedHeading"
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Register = () => {
    const navigate = useNavigate()
    const { logOut, createUser, googleLogin } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                updateProfile(result.user, {
                    displayName: data.name,
                    photoURL: data.photo
                })
                    .then(() => {
                        Swal.fire("User Created Successfully!");
                        reset();
                        logOut()
                            .then()
                            .catch(error => console.log(error))
                        navigate('/')
                    })
                    .catch(error => {
                        console.log(error)

                    })

            })
            .catch(error => {
                console.log(error)
                console.log(error.code)
                if (error.code === "auth/email-already-in-use") {
                    Swal.fire("User Already Created !");
                    navigate('/login')
                }
            })

    }
    const handleGoogleRegister = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                Swal.fire(`${result.user.displayName} Registered Successfully!`);
                logOut()
                    .then()
                    .catch(error => console.log(error))
                navigate('/')
            })
            .catch(error => {
                console.log(error)
                console.log(error.code)
                if (error.code === "auth/email-already-in-use") {
                    Swal.fire("User Already Created !");
                    navigate('/login')
                }
            })
    }

    return (


        <div className="flex  lg:flex-row flex-col-reverse items-center justify-between ">


            <div className="flex-1 lg:w-1/2 ">

                <div className=" mx-auto lg:w-full md:w-[500px] w-[280px]  shadow-lg shadow-cyan-500/50 bg-white lg:h-screen lg:my-0 my-5">
                    <SharedHeading heading1={'Welcome to'} heading2={'Tour Terra'}></SharedHeading>
                    <form onSubmit={handleSubmit(onSubmit)} className="px-12 py-4">
                        <h1 className="backdrop-blur-sm text-4xl pb-4">Register</h1>
                        <div className=" grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-6">
                            <div>
                                <label htmlFor="email" className="block">Your Name</label>
                                <div className="relative">
                                    <input {...register("name", { required: true })} type="text" placeholder="John Doe" className="p-3 block w-full pl-10 shadow-lg shadow-cyan-500/50 outline-none" />
                                    <span className="absolute top-1/4 left-2 text-2xl"><FaUser /></span>
                                    {errors.name && <span className="text-red-600">This field is required</span>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block">Your Photo</label>
                                <div className="relative">
                                    <input {...register("photo", { required: true })} type="url" placeholder="http/:...." className="p-3 block w-full pl-10 shadow-lg shadow-cyan-500/50 outline-none" />
                                    <span className="absolute top-1/4 left-2 text-2xl"><FaLink /></span>
                                    {errors.photo && <span className="text-red-600">This field is required</span>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block">Email</label>
                                <div className="relative">
                                    <input {...register("email", { required: true })} type="email" placeholder="example@gmail.com" className="p-3 block w-full pl-10 shadow-lg shadow-cyan-500/50 outline-none" />
                                    <span className="absolute top-1/4 left-2 text-2xl"><MdEmail /></span>
                                    {errors.email && <span className="text-red-600">This field is required</span>}
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block">Password</label>
                                <div className="relative">
                                    <input {...register("password", { required: true, minLength: 6, maxLength: 16, pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/ })} id="pass" type="password" placeholder=".............." className="p-3 block w-full pl-10 shadow-lg shadow-cyan-500/50 outline-none" />
                                    <span className="absolute top-1/4 text-2xl left-2"><RiLockPasswordFill /></span>
                                    {errors.password?.type === "required" && (
                                        <p className="text-red-600">Password is required</p>
                                    )}
                                    {errors.password?.type === "minLength" && (
                                        <p className="text-red-600">Password length should be at least 6</p>
                                    )}
                                    {errors.password?.type === "maxLength" && (
                                        <p className="text-red-600">Password length should be maximum 16 characters</p>
                                    )}
                                    {errors.password?.type === "pattern" && (
                                        <p className="text-red-600">Password should contain at least 1 number and one Special character 1 Uppercase and 1 lowercase</p>
                                    )}

                                </div>
                            </div>

                        </div>
                        <label htmlFor="email" className="block mt-6">Already have an Account? Go to <Link to='/login'><span className="text-red-600">Login Page</span></Link></label>
                        {/* button type will be submit for handling form submission*/}
                        <button type="submit" className="my-3 btn  bg-black text-white hover:bg-[#90dddcff]">Register</button>
                        <Link to='/'><button className="my-3 btn bg-black text-white hover:bg-[#90dddcff]">Return Home</button></Link>
                    </form>
                    <div className="divider">Or Sign Up with</div>
                    <div className="py-2 flex flex-col items-center">
                        <button onClick={handleGoogleRegister} className="my-5 btn bg-black text-white hover:bg-[#90dddcff]"><FaGoogle />Google</button>
                    </div>

                </div>



            </div>



            <div className="lg:w-1/2 overflow-hidden flex-1 ">
                <img src="https://i.ibb.co/1rLwF68/bandarbans.jpg" className=" w-full  lg:h-screen   bg-gray-400  object-cover transform transition-transform ease-in-out duration-300 hover:scale-110" alt="hero navigate ui" />

            </div>
        </div>


    );
};

export default Register;