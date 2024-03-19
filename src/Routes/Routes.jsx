import Root from '../Root/Root';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Login from '../Components/Authentication/Login';
import Register from '../Components/Authentication/Register';
import ErrorPage from '../ErrorPage/ErrorPage';
import AllPackages from '../Components/AllPackages/AllPackages';
import SinglePackage from '../Components/AllPackages/SinglePackage';
import PrivateRoute from './PrivateRoute';
import AllTourGuides from '../Components/Home/HomepageSections/TravelGuideSection/TourGuideDetails/AllTourGuides';
import TourGuide from '../Components/Home/HomepageSections/TravelGuideSection/TourGuideDetails/TourGuide';
import Dashboard from '../Components/Dashboard/DashNavbar/Dashboard';
import TouristProfile from '../Components/Dashboard/Tourist/TouristProfile';
import MyWishlist from '../Components/Dashboard/Tourist/MyWishlist';
import MyBookings from '../Components/Dashboard/Tourist/MyBookings';
import MyAssignedTour from '../Components/Dashboard/TourGuide/MyAssignedTour';
import AdminProfile from '../Components/Dashboard/Admin/AdminProfile';
import AddPackage from '../Components/Dashboard/Admin/AddPackage';
import ManageUsers from '../Components/Dashboard/Admin/ManageUsers';
import TourGuideProfile from '../Components/Dashboard/TourGuide/TourGuideProfile';
import AboutUs from '../Components/Navbar/NavbarSections/AboutUs';
const router = createBrowserRouter([
    {path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/aboutUs',element:<AboutUs></AboutUs>},
        {path:'/login',element:<Login></Login>},
        {path:'/register',element:<Register></Register>},
        {path:'/allTourGuides',element:<AllTourGuides></AllTourGuides>},
        {path:'/tourGuide/:id',element:<PrivateRoute><TourGuide></TourGuide></PrivateRoute>},
        {path:'/allPackages',element:<PrivateRoute><AllPackages></AllPackages></PrivateRoute>},
        {path:'/singlePackage/:id',element:<PrivateRoute><SinglePackage></SinglePackage></PrivateRoute>},
        {path:'/dashboard',element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,children:[
            // tourist route
            {path:'/dashboard/touristProfile',element:<PrivateRoute><TouristProfile></TouristProfile></PrivateRoute>},
            {path:'/dashboard/myBookings',element:<PrivateRoute><MyBookings></MyBookings></PrivateRoute>},
            {path:'/dashboard/myWishlist',element:<PrivateRoute><MyWishlist></MyWishlist></PrivateRoute>},
            // tour guide routes
            {path:'/dashboard/tourGuideProfile',element:<PrivateRoute><TourGuideProfile></TourGuideProfile></PrivateRoute>},
            {path:'/dashboard/myAssignedTour',element:<PrivateRoute><MyAssignedTour></MyAssignedTour></PrivateRoute>},
            // admin route
            {path:'/dashboard/adminProfile',element:<PrivateRoute><AdminProfile></AdminProfile></PrivateRoute>},
            {path:'/dashboard/addPackage',element:<PrivateRoute><AddPackage></AddPackage></PrivateRoute>},
            {path:'/dashboard/manageUser',element:<PrivateRoute><ManageUsers></ManageUsers></PrivateRoute>},
        ]},
    ]

}
])

export default router