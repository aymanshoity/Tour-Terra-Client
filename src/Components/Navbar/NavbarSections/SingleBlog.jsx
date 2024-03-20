import React, { useState } from 'react';
import SharedHeading from '../../SharedComponents/SharedHeading';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../../../Hooks/UseAxiosPublic';
import SharedBanner from '../../SharedComponents/SharedBanner';

const SingleBlog = () => {
    const { id } = useParams()
    const axiosPublic = UseAxiosPublic()
    const { data: blog = [] } = useQuery({
        queryKey: ['blog'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/blogs/${id}`)
            console.log(res.data)
            refetch()
            return res.data
        }
    })
    const [otherBlogs, setOtherBlogs] = useState([])
    const { data: blogs = [], refetch } = useQuery({
        queryKey: ['blogs'],
        queryFn: async () => {
            const res = await axiosPublic.get('/blogs')
            console.log(res.data)
            refetch()
            setOtherBlogs(res.data?.filter(blog => blog._id !== id))
            console.log(otherBlogs)
            return res.data
        }
    })
    return (
        <div>
            <SharedBanner image={'https://i.ibb.co/bW6typS/tigerpoint.jpg'} heading={'Blog Details'}></SharedBanner>
            <SharedHeading heading1={'Dive in'} heading2={'Details'}></SharedHeading>
            <div className='lg:w-[1000px] md:w-[500px] w-[280px] mx-auto flex flex-col lg:flex-row lg:items-start items-center gap-5'>
                <div className='lg:w-2/3'>
                    <div>
                        <img className='h-[500px] w-full' src={blog?.image} alt="" />
                    </div>
                    <div className='mt-5'>
                        <h1 className='text-2xl font-bold mb-2'>{blog?.title}</h1>
                        <p className='p-2 border rounded-lg lg:w-1/5 md:w-1/4 w-1/2 text-white bg-black hover:bg-[#90dddcff] mb-8'>{blog?.date}</p>

                        <p className='font-medium mb-5'>{blog?.details}</p>
                        <hr />


                    </div>
                </div>
                <div className='lg:w-1/3 border border-spacing-2 p-4'>

                    <h1 className='text-xl font-bold text-center my-10'>Find More Blogs</h1>
                    <div>
                        {
                            otherBlogs.map(blog=> <Link to={`/blogs/${blog?._id}`} key={blog?._id}>
                                <div className='mb-5 border p-2 rounded-lg'>
                                    <img className='w-[250px] h-[200px]' src={blog.image} alt="" />
                                    <h2 className='text-lg font-medium'>{blog?.title}</h2>
                                    <h2 className=''>{blog?.date}</h2>
                                </div>
                            </Link>)
                        }

                    </div>



                </div>

            </div>

        </div>
    );
};

export default SingleBlog;