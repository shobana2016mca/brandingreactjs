function HeroSection() {
    return (
        <div className="max-md:bg-black-white bg-[#19191F] xl:bg-black-white flex flex-col items-center justify-center w-full ">
            <div className="grid max-w-screen-xl mx-auto grid-col-1 md:grid-cols-2">
                <section className="flex flex-col justify-center m-4 lg:ml-36 ">
                    <h1 className="mb-4 text-4xl font-bold text-left text-white md:text-5xl lg:text-7xl">
                        Increase Your Web Traffic with Expert Team
                    </h1>
                    <p className="mb-6 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                        nisl eros, pulvinar facilisis justo mollis.
                    </p>
                    <div className="w-full mb-4 ">
                        <a href="#" className="px-4 py-3 mr-3 text-white bg-orange-600">
                            Get Started
                        </a>
                        <a
                            href="#"
                            className="px-4 py-3 text-white bg-transparent border border-orange-600"
                        >
                            How it Works?
                        </a>
                    </div>
                </section>
                <section className="max-w-[490px] w-full p-3 mt-8 mx-auto ">
                    <img
                        src="Home-01-img.png"
                        className="object-contain h-auto max-w-full "
                    />
                </section>
            </div>
        </div>
    );
}

export default HeroSection;
