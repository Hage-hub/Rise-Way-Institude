import { PageLayout, PageHeader } from "@/components/layout/PageLayout";
import { IMAGES, SITE_INFO } from "@/lib/constants";
import { Target, Lightbulb, MapPin } from "lucide-react";

export default function About() {
  return (
    <PageLayout>
      <PageHeader 
        title="About Us" 
        description="Discover our story, our mission, and the leadership driving RISE-WAY forward."
        image={IMAGES.review}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-accent font-bold tracking-wider uppercase mb-2">Our Story</h2>
              <h3 className="text-4xl font-display font-bold text-primary mb-6">
                Building a Foundation for Success
              </h3>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  {SITE_INFO.name} was established with a singular focus: to bridge the gap between ambition and opportunity. Located in Kakata City, we recognized the need for accessible, high-quality vocational training that directly translates into employment and entrepreneurial success.
                </p>
                <p>
                  Over the past 5+ years, we have trained over 200 students, equipping them with practical skills that matter. Our motto, "{SITE_INFO.motto}", is at the core of everything we do. We believe that by teaching a person a trade, we are empowering an entire community.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={IMAGES.classroom} alt="Classroom" className="rounded-2xl w-full h-64 object-cover" />
              <img src={IMAGES.orientation} alt="Orientation" className="rounded-2xl w-full h-64 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary/5 rounded-full flex items-center justify-center mb-6">
                <Target className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-3xl font-display font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To provide accessible, hands-on, and industry-relevant vocational and professional training that empowers individuals to achieve economic independence and contribute meaningfully to society.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="w-10 h-10 text-accent" />
              </div>
              <h3 className="text-3xl font-display font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the premier technical and professional institute in Liberia, recognized for excellence in skills development, innovation, and transforming lives through practical education.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-3xl -translate-x-4 translate-y-4 -z-10"></div>
                <img src={IMAGES.secretary} alt="Secretary General" className="rounded-3xl shadow-xl w-full" />
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <h2 className="text-accent font-bold tracking-wider uppercase mb-2">Leadership</h2>
              <h3 className="text-4xl font-display font-bold text-primary mb-2">
                {SITE_INFO.director}
              </h3>
              <p className="text-xl text-gray-500 font-medium mb-6">Director General</p>
              <p className="text-lg text-gray-600 leading-relaxed italic mb-8">
                "Education is not just about acquiring knowledge; it's about applying it to solve real-world problems. At RISE-WAY, we are committed to ensuring every student walks out of our doors with the confidence and ability to build a better life for themselves and their families."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Visit Our Campus</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {SITE_INFO.location}
          </p>
          <div className="aspect-[21/9] w-full bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
            <img src={IMAGES.hero} className="w-full h-full object-cover opacity-60" alt="Campus Location" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-xl border border-white/20">
                <p className="font-bold text-lg">Moses Ndorbor Building, Kakata</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
