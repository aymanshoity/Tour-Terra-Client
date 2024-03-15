import SharedHeading from "../../../SharedComponents/SharedHeading";


const MeetTourGuides = () => {


    const svgs = [

        { svg: (<svg width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><circle fill="#6C27B3" cx="256" cy="256" r="256"></circle><path fill="#501A96" d="M374.71,132.922c-30.587,3.872-62.479,3.737-94.575,0.681 c-44.822-3.448-110.33-24.135-134.465,17.239c-38.772,66.236-19.649,151.035-10.614,226.078l134.737,134.708 c130.388-6.923,234.886-111.407,241.831-241.79L374.71,132.922z"></path><g><path fill="#FFFFFF" d="M315.227,109.468H196.772c-48.14,0-87.304,39.164-87.304,87.304v118.455 c0,48.138,39.164,87.305,87.305,87.305h118.455c48.138,0,87.305-39.165,87.305-87.305V196.772 C402.532,148.632,363.367,109.468,315.227,109.468L315.227,109.468z M373.05,315.228c0,31.934-25.888,57.822-57.822,57.822H196.773 c-31.934,0-57.822-25.888-57.822-57.822V196.773c0-31.934,25.888-57.823,57.822-57.823h118.455 c31.934,0,57.822,25.89,57.822,57.823V315.228z"></path><path fill="#FFFFFF" d="M256,180.202c-41.794,0-75.798,34.004-75.798,75.798c0,41.791,34.004,75.795,75.798,75.795 s75.795-34.001,75.795-75.795S297.794,180.202,256,180.202L256,180.202z M256,302.313c-25.579,0-46.316-20.733-46.316-46.313 s20.737-46.316,46.316-46.316s46.313,20.735,46.313,46.316C302.313,281.579,281.579,302.313,256,302.313L256,302.313z"></path></g><g><path fill="#D1D1D1" d="M350.103,180.774c0,10.03-8.132,18.163-18.163,18.163c-10.03,0-18.163-8.133-18.163-18.163 c0-10.031,8.133-18.163,18.163-18.163C341.973,162.611,350.103,170.741,350.103,180.774L350.103,180.774z"></path><path fill="#D1D1D1" d="M315.228,109.468h-59.802v29.482h59.802c31.934,0,57.822,25.89,57.822,57.823v118.455 c0,31.934-25.888,57.822-57.822,57.822h-59.802v29.482h59.802c48.138,0,87.304-39.165,87.304-87.305V196.772 C402.532,148.632,363.367,109.468,315.228,109.468z"></path><path fill="#D1D1D1" d="M256,180.202c-0.193,0-0.381,0.014-0.574,0.014v29.482c0.191-0.002,0.381-0.014,0.574-0.014 c25.579,0,46.313,20.735,46.313,46.316c0,25.579-20.733,46.313-46.313,46.313c-0.193,0-0.383-0.012-0.574-0.014v29.482 c0.193,0.002,0.381,0.014,0.574,0.014c41.794,0,75.795-34.002,75.795-75.795C331.795,214.206,297.794,180.202,256,180.202z"></path></g></g></svg>) },
        { svg: (<svg width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><circle fill="#D22215" cx="256" cy="256" r="256"></circle><path fill="#A81411" d="M384.857,170.339c-7.677,2.343-15.682,4.356-23.699,6.361 c-56.889,12.067-132.741-20.687-165.495,32.754c-27.317,42.494-35.942,95.668-67.017,133.663L294.629,509.1 c110.47-16.72,197.773-104.036,214.476-214.511L384.857,170.339z"></path><path fill="#FFFFFF" d="M341.649,152.333H170.351c-33.608,0-60.852,27.245-60.852,60.852v85.632 c0,33.608,27.245,60.852,60.852,60.852h171.298c33.608,0,60.852-27.245,60.852-60.852v-85.632 C402.501,179.578,375.256,152.333,341.649,152.333L341.649,152.333z M300.494,260.167l-80.12,38.212 c-2.136,1.019-4.603-0.536-4.603-2.901v-78.814c0-2.4,2.532-3.955,4.67-2.87l80.12,40.601 C302.947,255.602,302.904,259.019,300.494,260.167L300.494,260.167z"></path><path fill="#D1D1D1" d="M341.649,152.333h-87.373v78.605l46.287,23.455c2.384,1.208,2.341,4.624-0.069,5.773l-46.218,22.044 v77.459h87.373c33.608,0,60.852-27.245,60.852-60.852v-85.632C402.501,179.578,375.256,152.333,341.649,152.333z"></path></g></svg>) },
        { svg: (<svg width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.002 512.002" xmlSpace="preserve" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><circle fill="#4E598F" cx="256.001" cy="256" r="256"></circle><path fill="#364270" d="M511.596,241.7L391.019,121.085c-1.998,0.605-6.982-1.714-9.173-1.274 c-51.717,8.62-101.71,0-151.704,13.791c-24.135,6.896-25.859,36.202-34.478,55.165c-12.067,34.478-10.343,72.404-25.859,105.158 c-10.343,22.411-34.478,36.202-43.098,62.061c-2.875,10.785-2.705,24.379-5.956,34.69l120.98,120.922 c4.725,0.26,9.48,0.403,14.269,0.403c141.384,0,256-114.616,256-256C512.001,251.201,511.858,246.434,511.596,241.7z"></path><g><path fill="#FFFFFF" d="M363.043,109.466H148.958c-21.809,0-39.49,17.68-39.49,39.49v214.085 c0,21.811,17.68,39.49,39.49,39.49h105.584l0.183-104.722h-27.21c-3.536,0-6.406-2.86-6.418-6.396l-0.133-33.759 c-0.014-3.553,2.867-6.444,6.42-6.444h27.162v-32.618c0-37.852,23.118-58.463,56.884-58.463h27.71c3.543,0,6.42,2.874,6.42,6.42 v28.463c0,3.546-2.874,6.42-6.416,6.42l-17.006,0.01c-18.363,0-21.921,8.725-21.921,21.533v28.239h40.351 c3.848,0,6.83,3.358,6.375,7.173l-4.001,33.759c-0.381,3.232-3.122,5.665-6.375,5.665h-36.168l-0.183,104.726h62.826 c21.809,0,39.49-17.682,39.49-39.491v-214.09C402.533,127.147,384.852,109.466,363.043,109.466L363.043,109.466z"></path><polygon fill="#FFFFFF" points="254.542,402.53 254.725,297.808 254.277,297.808 254.277,402.53 "></polygon></g><path fill="#D1D1D1" d="M363.043,109.466H254.277v141.741h0.269V218.59c0-37.852,23.118-58.463,56.884-58.463h27.71 c3.543,0,6.42,2.874,6.42,6.42v28.463c0,3.546-2.874,6.42-6.416,6.42l-17.006,0.01c-18.363,0-21.921,8.725-21.921,21.533v28.238 h40.351c3.848,0,6.83,3.358,6.375,7.173l-4.001,33.759c-0.381,3.232-3.122,5.665-6.375,5.665h-36.168l-0.183,104.726h62.826 c21.809,0,39.49-17.682,39.49-39.491V148.956C402.533,127.147,384.852,109.466,363.043,109.466z"></path></g></svg>) }
    ]
    return (
        <div className="lg:w-[1280px] md:w-[550px] w-[280px] mx-auto" >
            <SharedHeading heading1={'Meet Our'} heading2={'Tour Guides'}></SharedHeading>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                <div className="p-8 shadow-lg w-[250px]  font-sans rounded-xl space-y-4 my-10 flex flex-col justify-center items-center mx-auto bg-white">

                    <div className="relative group">
                        <img className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="card navigate ui" />
                    </div>

                    <div className="text-center space-y-1">
                        <h1 className="text-2xl text-gray-700">Nullify</h1>
                        <p className="text-gray-400 text-sm">Tour Guide</p>
                    </div>
                    {/* social Icon */}
                    <div className="flex justify-between gap-4 py-2">
                        {svgs?.map((svg, idx) => (
                            <div key={idx} className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded-full">
                                {svg?.svg}
                            </div>
                        ))}
                    </div>

                    <button className="hover:bg-[#90dddcff] hover:scale-95 font-medium hover:text-white w-[80%] py-2 rounded-full hover:shadow-xl   text-gray-400 shadow-[0px_0px_10px_#E2DADA] t duration-500">View Profile</button>
                </div>
                <div className="p-8 shadow-lg w-[250px] font-sans rounded-xl space-y-4 my-10 flex flex-col justify-center items-center mx-auto bg-white">

                    <div className="relative group">
                        <img className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="card navigate ui" />
                    </div>

                    <div className="text-center space-y-1">
                        <h1 className="text-2xl text-gray-700">Nullify</h1>
                        <p className="text-gray-400 text-sm">Tour Guide</p>
                    </div>
                    {/* social Icon */}
                    <div className="flex justify-between gap-4 py-2">
                        {svgs?.map((svg, idx) => (
                            <div key={idx} className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded-full">
                                {svg?.svg}
                            </div>
                        ))}
                    </div>

                    <button className="hover:bg-[#90dddcff] hover:scale-95 font-medium hover:text-white w-[80%] py-2 rounded-full hover:shadow-xl   text-gray-400 shadow-[0px_0px_10px_#E2DADA] t duration-500">View Profile</button>
                </div>
                <div className="p-8 shadow-lg w-[250px] font-sans rounded-xl space-y-4 my-10 flex flex-col justify-center items-center mx-auto bg-white">

                    <div className="relative group">
                        <img className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="card navigate ui" />
                    </div>

                    <div className="text-center space-y-1">
                        <h1 className="text-2xl text-gray-700">Nullify</h1>
                        <p className="text-gray-400 text-sm">Tour Guide</p>
                    </div>
                    {/* social Icon */}
                    <div className="flex justify-between gap-4 py-2">
                        {svgs?.map((svg, idx) => (
                            <div key={idx} className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded-full">
                                {svg?.svg}
                            </div>
                        ))}
                    </div>

                    <button className="hover:bg-[#90dddcff] hover:scale-95 font-medium hover:text-white w-[80%] py-2 rounded-full hover:shadow-xl   text-gray-400 shadow-[0px_0px_10px_#E2DADA] t duration-500">View Profile</button>
                </div>
                <div className="p-8 shadow-lg w-[250px] font-sans rounded-xl space-y-4 my-10 flex flex-col justify-center items-center mx-auto bg-white">

                    <div className="relative group">
                        <img className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full" src="https://source.unsplash.com/300x300/?profile" alt="card navigate ui" />
                    </div>

                    <div className="text-center space-y-1">
                        <h1 className="text-2xl text-gray-700">Nullify</h1>
                        <p className="text-gray-400 text-sm">Tour Guide</p>
                    </div>
                    {/* social Icon */}
                    <div className="flex justify-between gap-4 py-2">
                        {svgs?.map((svg, idx) => (
                            <div key={idx} className="transform hover:scale-150 duration-300 shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] rounded-full">
                                {svg?.svg}
                            </div>
                        ))}
                    </div>

                    <button className="hover:bg-[#90dddcff] hover:scale-95 font-medium hover:text-white w-[80%] py-2 rounded-full hover:shadow-xl   text-gray-400 shadow-[0px_0px_10px_#E2DADA] t duration-500">View Profile</button>
                </div>
            </div>



        </div>

    );
};

export default MeetTourGuides;