import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, BookOpen, Award } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { IMAGES, SITE_INFO, DEPARTMENTS } from "@/lib/constants";

export default function Home() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="RISE-WAY Students and Faculty" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent border border-accent/30 font-semibold text-sm mb-6 backdrop-blur-sm">
                Welcome to {SITE_INFO.shortName}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
                Equipping Hands and <span className="text-accent">Uplifting Lives</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl font-medium">
                Join {SITE_INFO.name} to gain practical, high-demand skills in creative, technical, and professional fields. Transform your future today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/apply"
                  className="px-8 py-4 rounded-xl font-bold text-lg bg-accent text-white shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/programs"
                  className="px-8 py-4 rounded-xl font-bold text-lg bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
                >
                  Explore Programs
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-20 hidden lg:block">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-white rounded-2xl shadow-xl shadow-primary/5 border border-gray-100 p-8 flex justify-between divide-x divide-gray-100">
              {[
                { icon: BookOpen, label: "Departments", value: "3" },
                { icon: Award, label: "Programs", value: "19+" },
              ].map((stat, i) => (
                <div key={i} className="flex-1 px-8 flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-accent">
                    <stat.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-3xl font-display font-bold text-primary">{stat.value}</h4>
                    <p className="text-gray-500 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Stats (visible only on small screens) */}
      <section className="lg:hidden bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 gap-8">
          {[
            { label: "Departments", value: "3" },
            { label: "Programs", value: "19+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h4 className="text-4xl font-display font-bold text-primary mb-1">{stat.value}</h4>
              <p className="text-gray-500 font-medium text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 relative">
              <div className="absolute inset-0 bg-accent rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
              <img 
                src={IMAGES.director} 
                alt="Director General" 
                className="rounded-3xl shadow-xl w-full object-cover object-top h-[500px]"
              />
              <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl hidden md:block">
                <p className="font-display font-bold text-primary text-xl">Leadership</p>
                <p className="text-gray-600 font-medium">{SITE_INFO.director}</p>
                <p className="text-sm text-accent font-bold">Director General</p>
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-accent font-bold tracking-wider uppercase mb-2">About Us</h2>
              <h3 className="text-4xl font-display font-bold text-primary mb-6">
                Empowering the Next Generation of Professionals
              </h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Located in the heart of Kakata City, RISE-WAY is dedicated to providing high-quality vocational and professional training. We believe in practical education that leads directly to employment and entrepreneurship.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Hands-on practical training",
                  "Expert instructors and mentors",
                  "Modern curriculum aligned with industry needs",
                  "Supportive community environment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span className="text-gray-700 font-medium text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 font-bold text-primary hover:text-accent transition-colors text-lg"
              >
                Read Our Full Story <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-accent font-bold tracking-wider uppercase mb-2">Our Offerings</h2>
          <h3 className="text-4xl font-display font-bold text-primary mb-6">
            Choose Your Career Path
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer specialized programs across three distinct departments, designed to give you the skills you need to succeed.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEPARTMENTS.map((dept, idx) => (
            <motion.div 
              key={dept.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={dept.image} 
                  alt={dept.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-display font-bold text-primary mb-3">{dept.name}</h4>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  {dept.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {dept.programs.slice(0, 3).map(prog => (
                    <span key={prog} className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {prog}
                    </span>
                  ))}
                  <span className="text-xs font-medium text-gray-500 py-1">+{dept.programs.length - 3} more</span>
                </div>
                <Link 
                  href={`/programs#${dept.id}`}
                  className="block w-full py-3 text-center rounded-xl font-bold bg-white text-primary border-2 border-primary/10 hover:bg-primary hover:text-white transition-colors"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Enrollment is now open for our upcoming cohorts. Secure your spot and take the first step towards a rewarding career.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/apply"
              className="px-8 py-4 rounded-xl font-bold text-lg bg-accent text-white shadow-lg hover:shadow-xl hover:bg-orange-500 transition-all"
            >
              Apply Online Now
            </Link>
            <Link 
              href="/contact"
              className="px-8 py-4 rounded-xl font-bold text-lg bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20"
            >
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
