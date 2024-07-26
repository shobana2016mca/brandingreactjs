import { Icons } from "../../Constants";
import BreadCrumbComponent from "../Components/GlobalComponents/BreadCrumbComponent";

function CompaniesPage() {
    window.scroll(0,0)

    return (
        
        <section className="w-full max-w-screen-2xl mx-auto mb-5 bg-white min-h-[100vh]">
            <BreadCrumbComponent/>
            <div className="max-w-screen-xl pt-12 mx-auto">
                <h1 className="mt-4 text-3xl font-bold text-center text-slate-700">
                    Trusted by Over{" "}
                    <span className="text-3xl text-orange-600">30000+</span> Companies
                </h1>
                <div className="grid w-full grid-cols-2 gap-3 mx-auto md:grid-cols-4 lg:grid-cols-6">
                    {Icons.map((company, index) => (
                        <div
                            className="flex items-center justify-center w-40 h-40 p-6 mx-auto shadow-xl "
                            key={index}
                        >
                            <img
                                src={company.icon}
                                alt="Best Companies"
                                loading="lazy"
                                className="h-auto max-w-full transition-transform duration-200 ease-in-out transform hover:scale-110 hover:rotate-6 hover:translate-x-2"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CompaniesPage;
