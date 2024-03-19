import { Component } from "react";
// import Carousel from "react-spring-3d-carousel";
// import { v4 as uuidv4 } from 'uuid';
// import { config } from "react-spring";
// import { Card, CardBody, CardTitle, CardText } from "reactstrap";
// import UseAxiosPublic from "../../../../Hooks/UseAxiosPublic";
// import { useQuery } from "@tanstack/react-query";
import SharedHeading from "../../../SharedComponents/SharedHeading"
import { CarouselContainer } from "./CarouselContainer";
class TouristStory extends Component {
    render() {
        return (
            <div className="w-2/5  h-[500px] mx-auto">
                <SharedHeading heading1={"Client's"} heading2={'Reviews'}></SharedHeading>
                <CarouselContainer />
                
            </div>
        );
    }
}

// const CarouselContainer = () => {
//     const axiosPublic = UseAxiosPublic()
//     const { data: reviews = [] } = useQuery({
//         queryKey: ['reviews'],
//         queryFn: async () => {
//             const res = await axiosPublic.get('/reviews')
//             console.log(res.data)
//             return (res.data)

//         }
//     });



//     const slides = reviews.map((slide, index) => ({
//         key: uuidv4(),
//         content: (
//             <Card className="w-80  h-[450px] text-center shadow-2xl shadow-[#90dddcff] border border-gray-300 rounded-md  overflow-hidden" key={index}>
//                 <div className="w-full py-5  flex flex-col items-center">
//                     <img className="w-[80px] h-[80px] rounded-full" src={slide?.clientImage} alt="" />
//                 </div>
//                 <CardBody>
//                     <CardTitle className="text-lg  font-semibold text-gray-700" tag="h5">
//                         {slide.clientName}
//                     </CardTitle>
//                     <CardText className="">
//                         {slide.rating}
//                     </CardText>
//                     <CardText className="text-base text-gray-600">
//                         {slide.review}
//                     </CardText>
//                 </CardBody>
//             </Card>
//         ),

//     }));

//     return (
//         <Carousel
//             slides={slides}
//             offsetRadius="10"
//             animationConfig={config.gentle}
//             showNavigation
//         />




//     );
// };



export default TouristStory;