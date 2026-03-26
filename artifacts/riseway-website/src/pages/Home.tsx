import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, BookOpen, Trophy, Award } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { IMAGES, SITE_INFO, DEPARTMENTS } from "@/lib/constants";

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="RISE-WAY Students and Faculty"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 sm:py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-accent/20 text-accent border border-accent/30 font-semibold text-sm mb-5 sm:mb-6">
                Welcome to {SITE_INFO.shortName}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white leading-tight mb-5 sm:mb-6">
                Equipping Hands and{" "}
                <span className="text-accent">Uplifting Lives</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 leading-relaxed max-w-2xl font-medium">
                Join {SITE_INFO.name} to gain practical, high-demand skills in creative, technical, and professional fields. Transform your future today.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/apply"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-accent text-white shadow-lg hover:shadow-xl hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group active:translate-y-0"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/programs"
                  className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-white/10 text-white border border-white/25 hover:bg-white/20 transition-all duration-300 flex items-center justify-center active:bg-white/30"
                  style={{ WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}
                >
                  Explore Programs
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Desktop Stats Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-20 hidden xl:block" style={{ transform: "translateY(50%)" }}>
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex justify-between divide-x divide-gray-100">
              {[
                { icon: Users, label: "Students Trained", value: "200+" },
                { icon: BookOpen, label: "Departments", value: "3" },
                { icon: Award, label: "Programs", value: "19+" },
                { icon: Trophy, label: "Years Excellence", value: "5+" },
              ].map((stat, i) => (
                <div key={i} className="flex-1 px-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-accent shrink-0">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-display font-bold text-primary">{stat.value}</h4>
                    <p className="text-gray-500 font-medium text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile / Tablet Stats */}
      <section className="xl:hidden bg-white py-10 sm:py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {[
            { icon: Users, label: "Students Trained", value: "200+" },
            { icon: BookOpen, label: "Departments", value: "3" },
            { icon: Award, label: "Programs", value: "19+" },
            { icon: Trophy, label: "Years Excellence", value: "5+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-accent mx-auto mb-2">
                <stat.icon className="w-5 h-5" />
              </div>
              <h4 className="text-3xl font-display font-bold text-primary mb-0.5">{stat.value}</h4>
              <p className="text-gray-500 font-medium text-xs sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-slate-50 xl:mt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1 relative w-full">
              <div className="absolute inset-0 bg-accent rounded-2xl sm:rounded-3xl translate-x-3 sm:translate-x-4 translate-y-3 sm:translate-y-4 -z-10"></div>
              <img
                src={IMAGES.director}
                alt="Director Speaking"
                className="rounded-2xl sm:rounded-3xl shadow-xl w-full object-cover"
                style={{ maxHeight: "480px", objectFit: "cover" }}
                loading="lazy"
              />
              <div className="hidden md:block absolute -bottom-6 -left-6 glass p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
                <p className="font-display font-bold text-primary text-lg">Leadership</p>
                <p className="text-gray-600 font-medium text-sm sm:text-base">{SITE_INFO.director}</p>
                <p className="text-sm text-accent font-bold">Director General</p>
              </div>
            </div>

            <div className="flex-1 w-full">
              <h2 className="text-accent font-bold tracking-wider uppercase mb-2 text-sm sm:text-base">About Us</h2>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary mb-4 sm:mb-6 leading-tight">
                Empowering the Next Generation of Professionals
              </h3>
              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Located in the heart of Kakata City, RISE-WAY is dedicated to providing high-quality vocational and professional training. We believe in practical education that leads directly to employment and entrepreneurship.
              </p>

              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {[
                  "Hands-on practical training",
                  "Expert instructors and mentors",
                  "Modern curriculum aligned with industry needs",
                  "Supportive community environment",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium text-base sm:text-lg">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors text-base sm:text-lg"
              >
                Read Our Full Story <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
          <h2 className="text-accent font-bold tracking-wider uppercase mb-2 text-sm sm:text-base">Our Offerings</h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary mb-4 sm:mb-6 leading-tight">
            Choose Your Career Path
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            We offer specialized programs across three distinct departments, designed to give you the skills you need to succeed.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DEPARTMENTS.map((dept, idx) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="h-48 sm:h-56 lg:h-64 overflow-hidden">
                <img
                  src={dept.image}
                  alt={dept.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 sm:p-8">
                <h4 className="text-xl sm:text-2xl font-display font-bold text-primary mb-2 sm:mb-3">{dept.name}</h4>
                <p className="text-gray-600 mb-4 sm:mb-6 line-clamp-3 text-sm sm:text-base">
                  {dept.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5 sm:mb-8">
                  {dept.programs.slice(0, 3).map((prog) => (
                    <span key={prog} className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {prog}
                    </span>
                  ))}
                  <span className="text-xs font-medium text-gray-500 py-1">+{dept.programs.length - 3} more</span>
                </div>
                <Link
                  href={`/programs#${dept.id}`}
                  className="block w-full py-3 text-center rounded-xl font-bold bg-white text-primary border-2 border-primary/10 hover:bg-primary hover:text-white transition-colors text-sm sm:text-base"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-accent rounded-full blur-3xl opacity-20" style={{ transform: "translate(50%, -50%)" }} />
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500 rounded-full blur-3xl opacity-20" style={{ transform: "translate(-50%, 50%)" }} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-base sm:text-xl text-white/80 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Enrollment is now open for our upcoming cohorts. Secure your spot and take the first step towards a rewarding career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link
              href="/apply"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-accent text-white shadow-lg hover:bg-orange-500 transition-all active:scale-95"
            >
              Apply Online Now
            </Link>
            <Link
              href="/contact"
              className="px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-white/10 text-white hover:bg-white/20 transition-all border border-white/25 active:scale-95"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
