
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Root = () => {
    const location=useLocation()
    const noNavbar=location.pathname.includes('login') ||location.pathname.includes('register') || location.pathname.includes('dashboard')
    return (
        <div>
            {noNavbar || <Navbar></Navbar>}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;