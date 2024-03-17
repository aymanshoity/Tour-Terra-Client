import { RiLockPasswordFill } from "react-icons/ri";
import SharedHeading from "../SharedComponents/SharedHeading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {

    const { userLogin, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleLogin = (e) => {

        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password })

        userLogin(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: "Login Successful!",
                    text: `${result.user.displayName} logged in Successfully!!`,
                    icon: "success"
                });
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.code)
                if (error.code === "auth/invalid-credential")
                    Swal.fire("Invalid Email/Password!")
            })


    }
    const handleGoogleLogin = () => {
        googleLogin()
            .then(result=>{
                console.log(result.user)
                Swal.fire({
                    title: "Login Successful!",
                    text: `${result.user.displayName} logged in Successfully!!`,
                    icon: "success"
                });
                navigate(from, { replace: true })
            })
            .catch()

    }

    return (
        <div className="flex lg:flex-row-reverse flex-col-reverse items-center justify-between ">


            <div className="flex-1 lg:w-1/2 lg:h-screen  lg:my-0 my-5">
                <SharedHeading heading1={'Glad to get to back in '} heading2={'Tour Terra'}></SharedHeading>
                <div className=" mx-auto lg:w-full md:w-[500px] w-[280px]  shadow-lg shadow-cyan-500/50 bg-white">
                    <form onSubmit={handleLogin} className="px-12 py-2">
                        <h1 className="backdrop-blur-sm text-4xl pb-4">Login</h1>
                        <div className="space-y-2">
                            <label htmlFor="email" className="block">Email</label>
                            <div className="relative">
                                <input name="email" type="email" placeholder="example@gmail.com" className="p-3 block w-full pl-10 shadow-lg shadow-cyan-500/50 outline-none" />
                                <span className="absolute top-1/4 left-2 text-2xl"><MdEmail /></span>

                            </div>
                            <label htmlFor="password" className="block">Password</label>
                            <div className="relative">
                                <input name="password" type="password" placeholder=".............." className="p-3 block w-full pl-10 shadow-lg shadow-cyan-500/50 outline-none" />
                                <span className="absolute top-1/4 text-2xl left-2"><RiLockPasswordFill /></span>


                            </div>
                            
                        </div>
                        <label htmlFor="email" className="block mt-6">New to this Website? Go to <Link to='/register'><span className="text-red-600">Register Page</span></Link></label>
                        {/* button type will be submit for handling form submission*/}
                        <button type="submit" className="my-5 w-full btn bg-black text-white hover:bg-[#90dddcff]">Login</button>
                    </form>
                    <div className="divider">Or Sign In with</div>
                    <div className="py-2 flex flex-col items-center">
                        <button onClick={handleGoogleLogin} className="my-5 btn bg-black text-white hover:bg-[#90dddcff]"><FaGoogle />Google</button>
                    </div>

                </div>
                {/* <div className="py-4 flex flex-col items-center">
                    <Link to='/'><button className="my-5 btn bg-black text-white hover:bg-[#90dddcff]">Return Home</button></Link>
                </div> */}
            </div>



            <div className=" overflow-hidden flex-1 lg:w-1/2 md:w-full">
                <img src="https://i.ibb.co/KyTTLn6/428708627-917827286799138-3663888881924793776-n.jpg" className="  lg:h-screen w-full  h-[500px]  bg-gray-400  object-cover transform transition-transform ease-in-out duration-300 hover:scale-110" alt="hero navigate ui" />
            </div>
        </div>
    );
};

export default Login;