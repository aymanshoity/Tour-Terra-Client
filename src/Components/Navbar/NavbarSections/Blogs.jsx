import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import SharedBanner from "../../SharedComponents/SharedBanner";
import SharedHeading from "../../SharedComponents/SharedHeading";
import BlogPart from "./BlogPart";


const Blogs = () => {
    const axiosPublic=UseAxiosPublic()
    const {data: blogs=[],refetch}=useQuery({
        queryKey:['blogs'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/blogs')
            console.log(res.data)
            return res.data
        }
    })
    return (
        <div>
            <SharedBanner image={'https://i.ibb.co/V33gBLC/sajek.jpg'} heading={'Blogs'}></SharedBanner>
            <SharedHeading heading1={'Dive into Our '} heading2={'Captivating Blogs!'}></SharedHeading>
            {/* blogs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    blogs.map(blog=><BlogPart blog={blog} key={blog._id} refetch={refetch}></BlogPart>)
                }
            </div>
        
        </div>
    );
};

export default Blogs;