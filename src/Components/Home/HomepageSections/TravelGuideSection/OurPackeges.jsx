
import SharedHeading from "../../../SharedComponents/SharedHeading";
import { useQuery } from '@tanstack/react-query'; -screen
import UseAxiosPublic from '../../../../Hooks/UseAxiosPublic';
import SigngleLoad from "./SigngleLoad";
import { Link } from "react-router-dom";


export const OurPackeges = () => {
    const axiosPublic = UseAxiosPublic()
    const { data: packages = [] } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await axiosPublic.get('/packages')
            console.log(res.data)
            return res.data
        }

    })

    return (
        <div>
            <SharedHeading heading1={'Explore Our'} heading2={'Packages'}></SharedHeading>
            <div className="flex flex-col items-center">
                <Link to='/allPackages'>
                    <button className="btn text-white bg-[#90dddcff] hover:bg-black">View All Packages</button>
                </Link>
                <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        packages?.map(pack => <SigngleLoad key={pack._id} pack={pack}></SigngleLoad>)
                    }
                </div>
            </div>
        </div>
    )
};

