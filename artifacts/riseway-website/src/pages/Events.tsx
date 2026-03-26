import { PageLayout, PageHeader } from "@/components/layout/PageLayout";
import { IMAGES } from "@/lib/constants";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "New Cohort Orientation",
      date: "September 15, 2025",
      time: "9:00 AM",
      location: "Main Campus Hall",
      image: IMAGES.orientation,
      type: "upcoming"
    },
    {
      title: "Technical Skills Workshop",
      date: "October 10, 2025",
      time: "1:00 PM",
      location: "Technical Labs",
      image: IMAGES.techDept2,
      type: "upcoming"
    },
    {
      title: "Catering Exhibition",
      date: "November 5, 2025",
      time: "10:00 AM",
      location: "Outdoor Courtyard",
      image: IMAGES.catering,
      type: "upcoming"
    }
  ];

  return (
    <PageLayout>
      <PageHeader 
        title="Events & Cohorts" 
        description="Stay updated with upcoming intakes, workshops, and school activities."
        image={IMAGES.speaker}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-primary mb-10 text-center">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-lg font-bold text-sm shadow-md">
                    Upcoming
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">{event.title}</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-accent" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-accent" />
                      <span className="font-medium">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-accent" />
                      <span className="font-medium">{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-6">Join Our Next Cohort</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Admissions are currently open for all departments. Don't miss the opportunity to transform your career. Classes fill up fast!
          </p>
          <a 
            href="/apply"
            className="inline-block px-10 py-4 rounded-xl font-bold text-lg bg-accent text-white shadow-lg hover:shadow-xl hover:bg-orange-500 transition-all"
          >
            Apply for Admission
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
