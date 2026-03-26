import { PageLayout, PageHeader } from "@/components/layout/PageLayout";
import { IMAGES } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Gallery() {
  const galleryImages = [
    { src: IMAGES.hero, label: "Students with RISE-WAY Banner" },
    { src: IMAGES.creativeDept, label: "Creative Department – Baking" },
    { src: IMAGES.techDept1, label: "Technical Department – Electronics" },
    { src: IMAGES.interiorDeco, label: "Interior Decoration Training" },
    { src: IMAGES.catering, label: "Outdoor Catering Class" },
    { src: IMAGES.classroom, label: "Classroom Session" },
    { src: IMAGES.dstv1, label: "DSTV Satellite Training" },
    { src: IMAGES.dstv2, label: "Group Satellite Installation" },
    { src: IMAGES.plumbing, label: "Plumbing Skills Training" },
    { src: IMAGES.electric, label: "Electrical / POP Training" },
    { src: IMAGES.orientation, label: "Student Orientation" },
    { src: IMAGES.review, label: "Program Review Session" },
    { src: IMAGES.shirt, label: "RISE-WAY at Community Event" },
    { src: IMAGES.director, label: "Director General Speaking" },
    { src: IMAGES.speaker, label: "Graduation Ceremony" },
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Student Gallery"
        description="A glimpse into life, learning, and practical training at RISE-WAY Institute."
        image={IMAGES.classroom}
      />

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive grid instead of CSS columns for better browser compat */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 6) * 0.07 }}
                className={`relative group rounded-xl sm:rounded-2xl overflow-hidden shadow-md ${
                  index % 5 === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="aspect-video sm:aspect-auto" style={{ paddingBottom: index % 5 === 0 ? "60%" : "75%" }}>
                  <img
                    src={item.src}
                    alt={item.label}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Caption on hover */}
                <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="w-full p-3 sm:p-4" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}>
                    <p className="text-white font-semibold text-sm">{item.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
