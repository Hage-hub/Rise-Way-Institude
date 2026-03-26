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

      {/* Our Story */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-accent font-bold tracking-wider uppercase mb-2 text-sm">Our Story</h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary mb-4 sm:mb-6 leading-tight">
                Building a Foundation for Success
              </h3>
              <div className="space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                <p>
                  {SITE_INFO.name} was established with a singular focus: to bridge the gap between ambition and opportunity. Located in Kakata City, we recognized the need for accessible, high-quality vocational training that directly translates into employment and entrepreneurial success.
                </p>
                <p>
                  Over the past 5+ years, we have trained over 200 students, equipping them with practical skills that matter. Our motto, "{SITE_INFO.motto}", is at the core of everything we do. We believe that by teaching a person a trade, we are empowering an entire community.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2 grid grid-cols-2 gap-3 sm:gap-4">
              <img
                src={IMAGES.classroom}
                alt="Classroom"
                className="rounded-xl sm:rounded-2xl w-full object-cover"
                style={{ height: "clamp(160px, 25vw, 260px)" }}
                loading="lazy"
              />
              <img
                src={IMAGES.orientation}
                alt="Orientation"
                className="rounded-xl sm:rounded-2xl w-full object-cover mt-6 sm:mt-8"
                style={{ height: "clamp(160px, 25vw, 260px)" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary/5 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Target className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                To empower individuals with practical, in-demand skills that create opportunities for employment, entrepreneurship, and personal growth.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                <Lightbulb className="w-8 h-8 sm:w-10 sm:h-10 text-accent" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3 sm:mb-4">Our Vision</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                To build a generation of skilled, self-reliant, and innovative young people who can contribute meaningfully to Liberia's development and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center">
            <div className="flex-1 order-2 md:order-1 w-full">
              <div className="relative">
                <div className="absolute inset-0 bg-primary rounded-2xl sm:rounded-3xl -translate-x-3 sm:-translate-x-4 translate-y-3 sm:translate-y-4 -z-10"></div>
                <img
                  src={IMAGES.director}
                  alt="Director General"
                  className="rounded-2xl sm:rounded-3xl shadow-xl w-full object-cover"
                  style={{ maxHeight: "420px", objectFit: "cover", objectPosition: "top" }}
                  loading="lazy"
                />
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2 w-full">
              <h2 className="text-accent font-bold tracking-wider uppercase mb-2 text-sm">Leadership</h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary mb-1 sm:mb-2 leading-tight">
                {SITE_INFO.director}
              </h3>
              <p className="text-lg sm:text-xl text-gray-500 font-medium mb-4 sm:mb-6">Director General</p>
              <blockquote className="text-base sm:text-lg text-gray-600 leading-relaxed italic border-l-4 border-accent pl-4 sm:pl-6">
                "Education is not just about acquiring knowledge; it's about applying it to solve real-world problems. At RISE-WAY, we are committed to ensuring every student walks out of our doors with the confidence and ability to build a better life for themselves and their families."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-accent mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 sm:mb-6">Visit Our Campus</h2>
          <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto mb-6 sm:mb-8">
            {SITE_INFO.location}
          </p>
          <div className="w-full bg-slate-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative" style={{ aspectRatio: "16/7" }}>
            <img
              src={IMAGES.hero}
              className="w-full h-full object-cover opacity-60"
              alt="Campus Location"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="bg-white/10 px-6 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/20 text-center" style={{ WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}>
                <p className="font-bold text-base sm:text-lg">Moses Ndorbor Building, Kakata</p>
                <p className="text-sm text-white/80 mt-1">Gotumo Town, Margibi County, Liberia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
