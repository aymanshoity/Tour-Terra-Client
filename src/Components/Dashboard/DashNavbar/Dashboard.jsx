import { Fade } from "react-reveal";
import { Link, NavLink, Outlet } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import SharedHeading from "../../../Components/SharedComponents/SharedHeading"
const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }
    const overlay2 = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(0, 0, 0, 0.4)', // 60% opacity
    };

    const links = <>
        <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'btn bg-black text-lg text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-4 hover:text-black ' : 'text-lg btn bg-black text-white border-white mb-4 hover:bg-[white] hover:text-black')}>Dashboard</NavLink>
        <NavLink to='/dashboard/touristProfile' className={({ isActive }) => (isActive ? 'btn bg-black text-lg text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-4 hover:text-black ' : 'text-lg btn bg-black text-white border-white mb-4 hover:bg-[white] hover:text-black')}>My Profile</NavLink>
        <NavLink to='/dashboard/myBookings' className={({ isActive }) => (isActive ? 'btn bg-black text-lg text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-4 hover:text-black ' : 'text-lg btn bg-black text-white border-white mb-4 hover:bg-[white] hover:text-black')}>My Bookings</NavLink>
        <NavLink to='/dashboard/myWishlist' className={({ isActive }) => (isActive ? 'btn bg-black text-lg text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-4 hover:text-black ' : 'text-lg btn bg-black text-white border-white mb-4 hover:bg-[white] hover:text-black')}>My Whistle</NavLink>



    </>
    return (
        <div className="drawer lg:drawer-open" >
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-start justify-start px-5 py-5">
                {/* Page content here */}
                <div className=" p-4  w-full">
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex flex-row items-center justify-start gap-6">
                            <label htmlFor="my-drawer-2" className="btn drawer-button bg-[#90dddcff] lg:hidden"><IoMdMenu /></label>
                            <h1 className='text-left  font-bold text-2xl mb-4'>Hello <span className='text-[#32898B]'>{user?.displayName}!!!</span></h1>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL
                                    } />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm p-2 bg-black text-lg dropdown-content mt-3 z-[1] p-2 shadow text-white rounded-box w-52">
                                <li>{user?.displayName}</li>
                                <li>{user?.email}</li>
                                <Link to='/'><li>Home</li></Link>
                                <Link><li onClick={handleLogout}>Logout</li></Link>


                            </ul>
                        </div>
                    </div>
                    <div>
                        <Outlet></Outlet>
                    </div>



                </div>



            </div>
            <div className="drawer-side " >
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 min-h-full text-white" style={{backgroundImage: 'url(https://i.ibb.co/fvQ0spp/hironpoint.jpg)'}}>
                    <div className="flex flex-col items-center py-5">
                        <h1 className="ding text-6xl md:text-6xl font-extrabold text-white">t<span className="text-3xl text-white">our</span>t<span className="text-3xl text-white">erra</span></h1>
                    </div>
                    {/* Sidebar content here */}
                    {links}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;