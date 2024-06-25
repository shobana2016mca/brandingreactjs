

function HeroSection() {
    return (

        <div className="relative h-screen mx-auto mb-5 ">
            <div className=" bg-[#19191F] h-[80vh] ">
                <div className="grid max-w-screen-xl grid-cols-1 gap-4 mx-auto md:grid-cols-2 ">
                    <div className="flex flex-col items-center justify-center m-4 lg:ml-20 md:h-[80vh]">
                        <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl lg:text-7xl">Increase Your Web Traffic with Expert Team</h1>
                        <p className="mb-6 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.</p>
                        <div className="w-full mb-4 ">
                            <a href="#" className="px-4 py-2 mr-3 text-white bg-orange-600">Get Started</a>
                            <a href="#" className="px-4 py-2 text-white bg-transparent border border-orange-600">How it Works?</a>
                        </div>
                    </div>
                    <div className="flex mt-8 items-center justify-center md:h-[526px] h-[315px] w-auto m-4 md:mt-28 2xl:mt-36 ">
                        <img src="Home-01-img.png" className="object-contain w-full object-top h-[400px] md:h-[526px] " />
                       
                    </div>
                </div>

            </div>

        </div>
    );
}

export default HeroSection;