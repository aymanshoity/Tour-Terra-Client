import Root from '../Root/Root';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Login from '../Components/Authentication/Login';
import Register from '../Components/Authentication/Register';
import ErrorPage from '../ErrorPage/ErrorPage';
import AllPackages from '../Components/AllPackages/AllPackages';
import SinglePackage from '../Components/AllPackages/SinglePackage';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {path:'/',
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {path:'/',element:<Home></Home>},
        {path:'/login',element:<Login></Login>},
        {path:'/register',element:<Register></Register>},
        {path:'/allPackages',element:<AllPackages></AllPackages>},
        {path:'/singlePackage/:id',element:<PrivateRoute><SinglePackage></SinglePackage></PrivateRoute>},
    ]

}
])

export default router