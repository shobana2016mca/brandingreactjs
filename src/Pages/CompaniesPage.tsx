import { Icons } from "../../Constants";
import BreadCrumbComponent from "../Components/GlobalComponents/BreadCrumbComponent";

function CompaniesPage() {
    window.scroll(0,0)

    return (
        <section className="w-full mx-auto mb-5 bg-white  min-h-[100vh]">
            <BreadCrumbComponent/>
            <div className="max-w-screen-xl pt-12 mx-auto">
                <h1 className="mt-4 text-3xl font-bold text-center text-slate-700">
                    Trusted by Over{" "}
                    <span className="text-3xl text-orange-600">30000+</span> Companies
                </h1>
                <div  className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-6">
                        {Icons.map((company, index) => (
                                <div className="flex items-center justify-center p-4 " key={index}>
                                    <img
                                        src={company.icon}
                                        alt="Best Companies"
                                        loading="lazy"
                                        className={`h-auto max-w-full transition-all duration-300 hover:scale-110 `}
                                    />
                                </div>
                        ))}
                </div>
            </div>
        </section>
    );
}

export default CompaniesPage;
