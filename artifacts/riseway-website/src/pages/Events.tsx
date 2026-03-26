import { PageLayout, PageHeader } from "@/components/layout/PageLayout";
import { IMAGES } from "@/lib/constants";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "wouter";

const events = [
  {
    title: "New Cohort Orientation",
    date: "April 10, 2026",
    time: "9:00 AM",
    location: "Main Campus Hall",
    image: IMAGES.orientation,
  },
  {
    title: "Technical Skills Workshop",
    date: "May 8, 2026",
    time: "1:00 PM",
    location: "Technical Labs",
    image: IMAGES.techDept2,
  },
  {
    title: "Catering & Hospitality Exhibition",
    date: "June 4, 2026",
    time: "10:00 AM",
    location: "Outdoor Courtyard",
    image: IMAGES.catering,
  },
];

export default function Events() {
  return (
    <PageLayout>
      <PageHeader
        title="Events & Cohorts"
        description="Stay updated with upcoming intakes, workshops, and school activities."
        image={IMAGES.speaker}
      />

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-8 sm:mb-10 text-center">
            Upcoming Events
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="overflow-hidden relative" style={{ height: "clamp(160px, 30vw, 200px)" }}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-accent text-white px-3 py-1 rounded-lg font-bold text-xs sm:text-sm shadow-md">
                    Upcoming
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-3 sm:mb-4">{event.title}</h3>
                  <div className="space-y-2 sm:space-y-3 text-gray-600">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                      <span className="font-medium text-sm sm:text-base">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                      <span className="font-medium text-sm sm:text-base">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                      <span className="font-medium text-sm sm:text-base">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-4 sm:mb-6">Join Our Next Cohort</h2>
          <p className="text-base sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-10">
            Admissions are currently open for all departments. Don't miss the opportunity to transform your career. Classes fill up fast!
          </p>
          <Link
            href="/apply"
            className="inline-block px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-accent text-white shadow-lg hover:bg-orange-500 transition-all active:scale-95"
          >
            Apply for Admission
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
