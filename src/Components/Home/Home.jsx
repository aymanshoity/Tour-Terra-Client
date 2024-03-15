
import Banner from './HomepageSections/Banner';
import TourType from './HomepageSections/TourTypeSection/TourType';
import Footer from './HomepageSections/Footer';
import Overview from './HomepageSections/TravelGuideSection/Overview';
import { OurPackeges } from './HomepageSections/TravelGuideSection/OurPackeges';
import MeetTourGuides from './HomepageSections/TravelGuideSection/MeetTourGuides';
import TouristStory from './HomepageSections/TouristStorySection/TouristStory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Overview></Overview>
            <OurPackeges></OurPackeges>
            <MeetTourGuides></MeetTourGuides>
            <TourType></TourType>
            <TouristStory></TouristStory>
            <Footer></Footer>
        </div>
    );
};

export default Home;