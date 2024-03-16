import React from 'react';
import SharedBanner from "../../../../SharedComponents/SharedBanner"
import SharedHeading from '../../../../SharedComponents/SharedHeading';
import UseAxiosPublic from '../../../../../Hooks/UseAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import MeetTourGuideSingle from '../MeetTourGuideSingle';
const AllTourGuides = () => {
    const axiosPublic = UseAxiosPublic()
    const { data: tourGuides = [] } = useQuery({
        queryKey: ['tourGuides'],
        queryFn: async () => {
            const res = await axiosPublic.get('/tourGuides')
            console.log(res.data)
            return res.data
        }
    })
    return (
        <div>
            <SharedBanner heading={'Tour Guides'} image={'https://i.ibb.co/V33gBLC/sajek.jpg'}></SharedBanner>
            <SharedHeading heading1={'Explore the Diverse Team Experts of'} heading2={'Tour Terra'} ></SharedHeading>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                {
                    tourGuides.map(guide => <MeetTourGuideSingle key={guide._id} guide={guide}></MeetTourGuideSingle>)
                }

            </div>

        </div>
    );
};

export default AllTourGuides;