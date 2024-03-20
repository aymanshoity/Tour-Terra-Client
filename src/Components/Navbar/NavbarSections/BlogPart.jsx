import { Link } from "react-router-dom";


const BlogPart = ({ blog, refetch }) => {
    return (
        <div className="px-4 py-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-6 my-20 mx-auto bg-white shadow-[#90dddcff]">
            <div className="flex justify-center w-full h-48 lg:h-[280px] relative">
                <div className="flex justify-between items-center left-4 right-4 top-4 absolute">
                    <button className="bg-black hover:bg-[#90dddcff]/90 duration-200 text-white font-medium px-3 py-1 rounded-xl">{blog?.date}</button>
                </div>
                <img className="rounded-lg bg-black/40 w-full h-full" src={blog?.image} alt="card navigate ui" />
            </div>
            <div className="text-center w-[85%] h-[20%] mx-auto font-semibold space-y-2">
                <h6 className="text-sm md:text-base lg:text-lg">{blog?.title}</h6>
                
            </div>
            <div className="flex items-center justify-center flex-wrap gap-6 text-sm md:text-base">
                <Link to={`/blogs/${blog?._id}`}><button  className="px-4 py-2 rounded-lg bg-black hover:bg-[#90dddcff] duration-300 hover:scale-105 text-white font-semibold font-sans">See Details</button></Link>
                
            </div>
        </div>
    );
};

export default BlogPart;