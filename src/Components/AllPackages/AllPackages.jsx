import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import SharedBanner from "../SharedComponents/SharedBanner";
import SharedHeading from "../SharedComponents/SharedHeading";
import AllPackageDetails from "./AllPackageDeatils";


const AllPackages = () => {
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
            <SharedBanner heading={'All Packages'} image={'https://i.ibb.co/JQ6x6Jh/pexels-sasha-prasastika-2894335.jpg'}></SharedBanner>
            <SharedHeading heading1={'Explore Our'} heading2={'Awesome Packages'}></SharedHeading>
            <div className="flex flex-col items-center">
                {
                    packages.map(pack=><AllPackageDetails key={pack._id} pack={pack}></AllPackageDetails>)
                }
            </div>
            
        </div>
    );
};

export default AllPackages;