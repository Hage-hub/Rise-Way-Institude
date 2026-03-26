import { PageLayout, PageHeader } from "@/components/layout/PageLayout";
import { IMAGES } from "@/lib/constants";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah K.",
    program: "Pastry & Baking",
    quote: "The Creative Department transformed my hobby into a real business. The hands-on training meant I was making professional-grade cakes by month two.",
    image: IMAGES.creativeDept,
  },
  {
    name: "James T.",
    program: "Satellite & DSTV Installation",
    quote: "I came to RISE-WAY with no technical background. Now I run my own installation business. The instructors are patient and know the industry inside out.",
    image: IMAGES.dstv1,
  },
  {
    name: "Michael M.",
    program: "Electrical Installation",
    quote: "What I loved most was the practical work. We weren't just reading books; we were wiring actual panels. I got a job immediately after graduation.",
    image: IMAGES.electric,
  },
  {
    name: "Grace L.",
    program: "Computer Literacy",
    quote: "The Professional Department gave me the digital skills I needed to secure an office administration job. The facilities are great and the teaching is top-notch.",
    image: IMAGES.classroom,
  },
  {
    name: "David W.",
    program: "Plumbing",
    quote: "RISE-WAY is exactly what our community needed. A place where young people can learn hard skills and become self-reliant.",
    image: IMAGES.plumbing,
  },
  {
    name: "Faith D.",
    program: "Interior Decoration",
    quote: "The creativity fostered here is amazing. I learned not just how to decorate, but how to plan events and manage clients professionally.",
    image: IMAGES.interiorDeco,
  },
];

export default function Testimonials() {
  return (
    <PageLayout>
      <PageHeader
        title="Student Success Stories"
        description="Don't just take our word for it. Hear from the students whose lives have been transformed."
        image={IMAGES.shirt}
      />

      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 mt-4">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-white px-6 sm:px-8 pb-6 sm:pb-8 pt-0 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-100 relative mt-10"
              >
                {/* Avatar */}
                <div className="absolute -top-10 left-6 sm:left-8">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-primary">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-accent/20 absolute top-4 right-5 sm:right-8" />

                <div className="pt-9 sm:pt-10">
                  <p className="text-gray-600 text-base sm:text-lg italic mb-5 sm:mb-6 leading-relaxed">
                    "{test.quote}"
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-display font-bold text-primary text-lg sm:text-xl">{test.name}</h4>
                    <p className="text-accent font-semibold text-sm">{test.program}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
