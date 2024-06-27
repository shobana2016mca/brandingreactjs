interface Companies {
    icon: string;
  }

const Icons: Companies[] = [
    {
      icon: "logoipsome-5.png",
    }, 
    {
      icon: "logo-ipsome4.png",
    }, 
    {
      icon: "logoipsom2.png",
    }, 
    {
      icon: "logo-ipsom1.png",
    }, 
    {
      icon: "logo-ipsom.png",
    },
    {
      icon: "logoipsome-5.png",
    },
  ];

function Compines() {
    return (
        <section className="w-full mx-auto mb-5 bg-white ">
            <div className="max-w-screen-xl pt-12 mx-auto ">

            
        <h1 className="mt-4 text-3xl font-bold text-center text-slate-700">
          Trusted by Over{" "}
          <span className="text-3xl text-orange-600 "> 30000+ </span> Companies{" "}
        </h1>
        <div className="grid grid-cols-1 md:grid-col-4 lg:grid-cols-6">
          {Icons.map((company, index) => (
            <>
              <div key={index} className="flex items-center justify-center p-4">
                <img src={company.icon} className="h-auto max-w-full" />
              </div>
            </>
          ))}
        </div>
        </div>
      </section>
    );
}

export default Compines;