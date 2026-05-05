import { Link } from "wouter";
import { MapPin, Phone, Mail, ChevronRight } from "lucide-react";
import { SITE_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-6">
              <img
                src="/logo.jpg"
                alt="RISE-WAY Technical And Professional Institute"
                className="h-16 w-auto object-contain bg-white rounded-lg p-1"
              />
            </Link>
            <p className="text-primary-foreground/70 mb-6 font-medium italic">
              "{SITE_INFO.motto}"
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/61577566329411/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#1877F2] transition-colors"
                aria-label="Visit our Facebook page"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.885v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { n: "About Us", p: "/about" },
                { n: "Our Programs", p: "/programs" },
                { n: "Admissions", p: "/apply" },
                { n: "Our Team", p: "/team" },
                { n: "Student Gallery", p: "/gallery" },
                { n: "Contact", p: "/contact" }
              ].map((link) => (
                <li key={link.n}>
                  <Link 
                    href={link.p}
                    className="text-primary-foreground/70 hover:text-accent transition-colors flex items-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4 text-accent" />
                    {link.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Departments</h3>
            <ul className="space-y-4 text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                Creative Department
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                Technical Department
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                Professional Department
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{SITE_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div className="flex flex-col">
                  <span>{SITE_INFO.phone1}</span>
                  <span>{SITE_INFO.phone2}</span>
                </div>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/70">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>{SITE_INFO.email}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} {SITE_INFO.name}. All rights reserved.
          </p>
          <p className="text-primary-foreground/50 text-sm">
            Director General: <span className="text-white font-medium">{SITE_INFO.director}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
