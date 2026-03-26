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

      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {DEPARTMENTS.map((dept, index) => (
            <section 
              key={dept.id} 
              id={dept.id}
              className={`flex flex-col md:flex-row gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent rounded-3xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 -z-10"></div>
                  <img 
                    src={dept.image} 
                    alt={dept.name} 
                    className="rounded-3xl shadow-xl w-full h-[400px] object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 bg-white p-10 rounded-3xl shadow-lg border border-gray-100">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                  {dept.name}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {dept.description}
                </p>
                
                <h4 className="text-xl font-bold text-primary mb-4 border-b pb-2">Available Programs:</h4>
                <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                  {dept.programs.map((program) => (
                    <li key={program} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-accent" />
                      </div>
                      <span className="text-gray-700 font-medium">{program}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/apply"
                  className="inline-block w-full sm:w-auto text-center px-8 py-4 rounded-xl font-bold bg-primary text-white shadow-lg hover:shadow-xl hover:bg-primary/90 transition-all"
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
