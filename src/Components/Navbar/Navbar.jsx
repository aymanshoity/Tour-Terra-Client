import { NavLink } from "react-router-dom";


const Navbar = () => {

    const links = <>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-lg mr-4 text-[#90dddcff]' : 'text-lg mr-4 text-white')}>Home</NavLink>
        <NavLink to='/community' className={({ isActive }) => (isActive ? 'text-lg mr-4 text-[#90dddcff]' : 'text-lg mr-4 text-white')}>Community</NavLink>
        <NavLink to='/blogs' className={({ isActive }) => (isActive ? 'text-lg mr-4 text-[#90dddcff]' : 'text-lg mr-4 text-white')}>Blogs</NavLink>
        <NavLink to='/aboutUs' className={({ isActive }) => (isActive ? 'text-lg mr-4 text-[#90dddcff]' : 'text-lg mr-4 text-white')}>About Us</NavLink>
        <NavLink to='/contact' className={({ isActive }) => (isActive ? 'text-lg mr-4 text-[#90dddcff]' : 'text-lg mr-4 text-white')}>Contact Us</NavLink>
        <NavLink to='/register' className={({ isActive }) => (isActive ? 'text-lg mr-4 text-[#90dddcff]' : 'text-lg mr-4 text-white')}>Register</NavLink>

    </>
    return (
        <div className="navbar bg-opacity80 p-4 fixed z-10">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 bg-black">
                        {links}
                    </ul>
                </div>
                <div>
                    <h1 className="logo text-6xl text-white">t<span className="text-xl text-white">our</span>t<span className="text-xl text-white">erra</span></h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>name</li>
                        <li>email</li>
                        <li>Dashboard</li>
                        <li>Offer Announcements</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;