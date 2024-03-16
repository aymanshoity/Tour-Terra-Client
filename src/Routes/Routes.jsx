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

const router = createBrowserRouter([
    {path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/login',element:<Login></Login>},
        {path:'/register',element:<Register></Register>},
        {path:'/allTourGuides',element:<AllTourGuides></AllTourGuides>},
        {path:'/tourGuide/:id',element:<TourGuide></TourGuide>},
        {path:'/allPackages',element:<PrivateRoute><AllPackages></AllPackages></PrivateRoute>},
        {path:'/singlePackage/:id',element:<PrivateRoute><SinglePackage></SinglePackage></PrivateRoute>},
    ]

}
])

export default router