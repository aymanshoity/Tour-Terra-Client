
import { Link, NavLink, Outlet } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import UseAdmin from "../../../Hooks/UseAdmin";
import UseTourGuide from "../../../Hooks/UseTourGuide";
const Dashboard = () => {
    const [isAdmin] = UseAdmin();
    const [isTourGuide] = UseTourGuide()
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }


    const links = <>

        <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'btn bg-black text-md text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-2 hover:text-black ' : 'text-md btn bg-black text-white border-white mb-2 hover:bg-[white] hover:text-black')}>Dashboard</NavLink>

        {isAdmin &&
            <>
                {/* Admin Bar */}
                <NavLink to='/dashboard/adminProfile' className={({ isActive }) => (isActive ? 'btn bg-black text-md text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-2 hover:text-black ' : 'text-md btn bg-black text-white border-white mb-2 hover:bg-[white] hover:text-black')}>My Profile (admin)</NavLink>
                <NavLink to='/dashboard/addPackage' className={({ isActive }) => (isActive ? 'btn bg-black text-md text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-2 hover:text-black ' : 'text-md btn bg-black text-white border-white mb-2 hover:bg-[white] hover:text-black')}>Add Package</NavLink>
                <NavLink to='/dashboard/manageUser' className={({ isActive }) => (isActive ? 'btn bg-black text-md text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-2 hover:text-black ' : 'text-md btn bg-black text-white border-white mb-2 hover:bg-[white] hover:text-black')}>Manage User</NavLink>
                <NavLink to='/dashboard/addBlogs' className={({ isActive }) => (isActive ? 'btn bg-black text-md text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-2 hover:text-black ' : 'text-md btn bg-black text-white border-white mb-2 hover:bg-[white] hover:text-black')}>Add Blogs</NavLink>
            </>}

        {!isAdmin && isTourGuide && <>

            {/* Tour Guide Bar */}
            <NavLink to='/dashboard/tourGuideProfile' className={({ isActive }) => (isActive ? 'btn bg-black text-md text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-2 hover:text-black ' : 'text-md btn bg-black text-white border-white mb-2 hover:bg-[white] hover:text-black')}>My Profile(TG)</NavLink>
            <NavLink to='/dashboard/myAssignedTour' className={({ isActive }) => (isActive ? 'btn bg-black text-md text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-2 hover:text-black ' : 'text-md btn bg-black text-white border-white mb-2 hover:bg-[white] hover:text-black')}>My Assigned Tours</NavLink>

        </>}


        {
            !isAdmin && !isTourGuide && <>

                {/* tourist bar */}
                < NavLink to='/dashboard/touristProfile' className={({ isActive }) => (isActive ? 'btn bg-black text-md text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-2 hover:text-black ' : 'text-md btn bg-black text-white border-white mb-2 hover:bg-[white] hover:text-black')}>My Profile</NavLink>
                <NavLink to='/dashboard/myBookings' className={({ isActive }) => (isActive ? 'btn bg-black text-md text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-2 hover:text-black ' : 'text-md btn bg-black text-white border-white mb-2 hover:bg-[white] hover:text-black')}>My Bookings</NavLink>

                <NavLink to='/dashboard/myWishlist' className={({ isActive }) => (isActive ? 'btn bg-black text-md text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-2 hover:text-black ' : 'text-md btn bg-black text-white border-white mb-2 hover:bg-[white] hover:text-black')}>My Wishlist</NavLink>
                <NavLink to='/dashboard/addReview' className={({ isActive }) => (isActive ? 'btn bg-black text-md text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-2 hover:text-black ' : 'text-md btn bg-black text-white border-white mb-2 hover:bg-[white] hover:text-black')}>Add Review</NavLink>
            </>
        }

        <div className="divider divider-error"></div>
        <NavLink to='/allPackages' className={({ isActive }) => (isActive ? 'btn bg-black text-md text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-2 hover:text-black ' : 'text-md btn bg-black text-white border-white mb-2 hover:bg-[white] hover:text-black')}>All Packages</NavLink>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'btn bg-black text-md text-[#90dddcff] border-[#90dddcff] hover:bg-[white] mb-2 hover:text-black ' : 'text-md btn bg-black text-white border-white mb-2 hover:bg-[white] hover:text-black')}>Home</NavLink>









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
                            <h1 className='text-left  font-bold text-2xl mb-4'>Hello, <span className='text-[#32898B]'>{user?.displayName}!!!</span></h1>
                        </div>
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src={user?.photoURL
                                    } />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sms bg-black text-md dropdown-content mt-3 z-[1] p-2 shadow text-white rounded-box w-52">
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

                <ul className="menu p-4 w-80 min-h-full text-white bg-opacity-4" style={{ backgroundImage: 'url(https://i.ibb.co/fvQ0spp/hironpoint.jpg)' }}>
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