
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from 'uuid';
import { config } from "react-spring";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import UseAxiosPublic from "../../../../Hooks/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
export const CarouselContainer = () => {
    const axiosPublic = UseAxiosPublic()
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get('/reviews')
            console.log(res.data)
            return (res.data)

        }
    });



    const slides = reviews.map((slide, index) => ({
        key: uuidv4(),
        content: (
            <Card className="w-80 text-black h-[450px] bg-white text-center shadow-2xl shadow-[#90dddcff] border border-gray-300 rounded-md  overflow-hidden" key={index}>
                <div className="w-full py-5  flex flex-col items-center">
                    <img className="w-[80px] h-[80px] rounded-full" src={slide?.clientImage} alt="" />
                </div>
                <CardBody>
                    <CardTitle className="text-lg  font-semibold " tag="h5">
                        {slide.clientName}
                    </CardTitle>
                    <CardText className="">
                        <div className="flex flex-col items-center">
                            <div style={{ maxWidth: 180, width: '100%' }}>
                            </div>
                            <Rating
                                style={{ maxWidth: 120 }}
                                readOnly
                                orientation="horizontal"
                                value={slide.rating}
                            />
                        </div>
                        
                    </CardText>
                    <CardText className="text-base ">
                        {slide.review}
                    </CardText>
                </CardBody>
            </Card>
        ),

    }));

    return (
        <Carousel
            slides={slides}
            offsetRadius="10"
            animationConfig={config.gentle}
            showNavigation
        />




    );
};



