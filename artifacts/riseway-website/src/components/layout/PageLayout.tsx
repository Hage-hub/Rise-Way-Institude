import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "framer-motion";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex-grow pt-[80px]" // Account for fixed navbar
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}

export function PageHeader({ title, description, image }: { title: string, description?: string, image?: string }) {
  return (
    <div className="relative bg-primary py-24 overflow-hidden">
      {image && (
        <div className="absolute inset-0 z-0">
          <img src={image} alt={title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
        </div>
      )}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto font-medium"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
