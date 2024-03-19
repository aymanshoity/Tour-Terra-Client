import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const axiosSecure = axios.create({
    baseURL:'http://localhost:5000/'
    // baseURL:'https://tour-terra-server.vercel.app'
})

const UseAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    })
    // for 401, 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, (error) => {
        const status = error.response.status
        console.log('status error', status)
        if (status === 401 || status === 403) {
            logOut()
                .then()
                .catch()
            navigate('/login')
        }
        return Promise.reject(error)
    })
    return axiosSecure
};

export default UseAxiosSecure;