import { Link } from "wouter";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-14 lg:mb-16">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex mb-5 sm:mb-6">
              <img
                src="/logo.jpg"
                alt="RISE-WAY Technical And Professional Institute"
                className="h-14 sm:h-16 w-auto object-contain bg-white rounded-lg p-1"
              />
            </Link>
            <p className="text-white/70 mb-5 sm:mb-6 font-medium italic text-sm sm:text-base leading-relaxed">
              "{SITE_INFO.motto}"
            </p>
            <div className="flex gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors cursor-pointer text-sm font-bold">
                FB
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors cursor-pointer text-sm font-bold">
                IG
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-6">Quick Links</h3>
            <ul className="space-y-3 sm:space-y-4">
              {[
                { n: "About Us", p: "/about" },
                { n: "Our Programs", p: "/programs" },
                { n: "Admissions", p: "/apply" },
                { n: "Student Gallery", p: "/gallery" },
                { n: "Contact", p: "/contact" },
              ].map((link) => (
                <li key={link.n}>
                  <Link
                    href={link.p}
                    className="text-white/70 hover:text-accent transition-colors flex items-center gap-2 text-sm sm:text-base"
                  >
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0" />
                    {link.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-6">Departments</h3>
            <ul className="space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base">
              {["Creative Department", "Technical Department", "Professional Department"].map((dept) => (
                <li key={dept} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></div>
                  {dept}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact Us</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3 text-white/70 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0 mt-0.5" />
                <span className="leading-snug">{SITE_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                <div>
                  <div>{SITE_INFO.phone1}</div>
                  <div>{SITE_INFO.phone2}</div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-white/70 text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent shrink-0" />
                <span className="break-all">{SITE_INFO.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-center sm:text-left">
          <p className="text-white/50 text-xs sm:text-sm">
            © {new Date().getFullYear()} {SITE_INFO.name}. All rights reserved.
          </p>
          <p className="text-white/50 text-xs sm:text-sm">
            Director General: <span className="text-white/80 font-medium">{SITE_INFO.director}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
