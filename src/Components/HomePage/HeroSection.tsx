

function HeroSection() {
    return (

        <div className=" bg-[#19191F] h-screen mx-auto ">
        <div className="grid h-[80vh] max-w-screen-xl grid-cols-1 gap-4 mx-auto md:grid-cols-2 ">
            <div className="flex flex-col items-center justify-center m-4 lg:ml-20">
               <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Increase Your Web Traffic with Expert Team</h1>
               <p className="mb-6 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis.</p>
               <div className="w-full ">
                   <a href="#" className="px-4 py-2 mr-3 text-white bg-orange-600">Get Started</a>
                   <a href="#" className="px-4 py-2 text-white bg-transparent border border-orange-600">How it Works?</a>
               </div>
              
            </div>
            <div className="relative flex flex-col items-center justify-center w-auto m-4 lg:mt-7">
    <img src="https://veriday.com/wp-content/uploads/2021/11/Feature_celebrating-woman-in-sales.jpg" className="object-cover w-full h-full"/>
    <div className="absolute w-9 h-9 bg-orange-600 top-2 left-[-12px]"></div>
    <div className="absolute w-9 h-9 bg-orange-600 bottom-2 right-[-12px]"></div>
</div>

        </div>
        </div>
    );
}

export default HeroSection;