import { PageLayout, PageHeader } from "@/components/layout/PageLayout";
import { IMAGES, DEPARTMENTS } from "@/lib/constants";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function Programs() {
  return (
    <PageLayout>
      <PageHeader
        title="Departments & Programs"
        description="Explore our comprehensive range of courses designed to equip you with practical, high-demand skills."
        image={IMAGES.techDept1}
      />

      <div className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20 lg:space-y-24">
          {DEPARTMENTS.map((dept, index) => (
            <section
              key={dept.id}
              id={dept.id}
              className={`flex flex-col lg:flex-row gap-8 sm:gap-12 items-start lg:items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 w-full lg:w-auto">
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent rounded-2xl sm:rounded-3xl transform translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3 -z-10"></div>
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="rounded-2xl sm:rounded-3xl shadow-xl w-full object-cover"
                    style={{ maxHeight: "360px", objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex-1 w-full lg:w-auto bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary mb-3 sm:mb-4 leading-tight">
                  {dept.name}
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  {dept.description}
                </p>

                <h4 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4 border-b pb-2">Available Programs:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                  {dept.programs.map((program) => (
                    <li key={program} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm sm:text-base">{program}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/apply"
                  className="block w-full sm:w-auto sm:inline-block text-center px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold bg-primary text-white shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all text-sm sm:text-base active:scale-95"
                >
                  Apply for this Department
                </Link>
              </div>
            </section>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
