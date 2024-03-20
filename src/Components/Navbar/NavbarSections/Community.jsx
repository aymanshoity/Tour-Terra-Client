import SharedBanner from "../../SharedComponents/SharedBanner";
import SharedHeading from "../../SharedComponents/SharedHeading";


const Community = () => {
    return (
        <div>
            <SharedBanner image={'https://i.ibb.co/hgNnKKX/andharmanik.jpg'} heading={'Community'}></SharedBanner>
            <SharedHeading heading1={'Join Our'} heading2={'Community'}></SharedHeading>
            <div className="mt-24 lg:w-[1000px]  md:w-[500px] w-[280px] flex flex-col lg:flex-row items-center  gap-6 mx-auto lg:h-[200px] rounded-lg" style={{backgroundImage: 'url(https://i.ibb.co/fvQ0spp/hironpoint.jpg)'}}>
                <div className="flex flex-col md:flex-row justify-center items-center mx-auto gap-5">
                    <div className="md:w-2/3">
                        
                        <input type="text" placeholder="johndoe@gmail.com" className="  input input-bordered" required />
                    </div>
                    <div className="md:w-1/3">
                        <button className="btn bg-black text-white hover:bg-white bg:text-black">Subscribe</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Community;