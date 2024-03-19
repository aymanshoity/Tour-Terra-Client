import { useContext } from "react";
import SharedHeading from "../../SharedComponents/SharedHeading";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Fade } from "react-reveal";


const AdminProfile = () => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            <SharedHeading heading1={'My'} heading2={'Profile'}></SharedHeading>
            <Fade>
                <div className="lg:w-[1280px] md:w-[500px] w-[280px] mx-auto ">
                    <div className="flex flex-col lg:flex-row items-start justify-center gap-20">
                        <div className="avatar">
                            <div className="w-32 rounded">
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-xl my-5"><span className="ding lg:text-4xl font-extrabold text-3xl text-[#2D9596]">Name: </span>{user?.displayName}</h1>
                            <hr />
                            <h1 className="font-bold text-xl my-5"><span className="ding lg:text-4xl font-extrabold text-3xl text-[#2D9596]">Designation: </span>Admin</h1>
                            <hr />
                            <h1 className="font-bold text-xl my-5"><span className="ding lg:text-4xl font-extrabold text-3xl text-[#2D9596]">Email: </span>{user?.email}</h1>





                        </div>
                    </div>




                </div>
            </Fade>
        </div>
    );
};

export default AdminProfile;