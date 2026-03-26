import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageLayout, PageHeader } from "@/components/layout/PageLayout";
import { IMAGES, SITE_INFO } from "@/lib/constants";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Loader2, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const contactMutation = useSubmitContact();
  const [isSent, setIsSent] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = (data: ContactData) => {
    contactMutation.mutate(
      { data },
      {
        onSuccess: () => {
          setIsSent(true);
          toast({
            title: "Message Sent",
            description: "Thanks for reaching out! We'll get back to you soon.",
          });
          reset();
          setTimeout(() => setIsSent(false), 5000);
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Failed to send message. Please try again.",
            variant: "destructive",
          });
        }
      }
    );
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Contact Us" 
        description="Have questions? We're here to help. Reach out to our admissions team today."
        image={IMAGES.review}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-display font-bold text-primary mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-1">Our Location</h4>
                    <p className="text-gray-600 text-lg leading-relaxed">{SITE_INFO.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-1">Call Us</h4>
                    <p className="text-gray-600 text-lg">{SITE_INFO.phone1}</p>
                    <p className="text-gray-600 text-lg">{SITE_INFO.phone2}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-1">Email Us</h4>
                    <p className="text-gray-600 text-lg">{SITE_INFO.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-xl mb-1">Office Hours</h4>
                    <p className="text-gray-600 text-lg">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600 text-lg">Saturday: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-display font-bold text-primary mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Your Name</label>
                  <input 
                    {...register("name")}
                    className={`w-full px-4 py-3 rounded-xl bg-white border-2 ${errors.name ? 'border-destructive' : 'border-gray-200'} focus:outline-none focus:ring-4 focus:ring-primary/10`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Email Address</label>
                  <input 
                    {...register("email")}
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl bg-white border-2 ${errors.email ? 'border-destructive' : 'border-gray-200'} focus:outline-none focus:ring-4 focus:ring-primary/10`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Message</label>
                  <textarea 
                    {...register("message")}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-white border-2 ${errors.message ? 'border-destructive' : 'border-gray-200'} focus:outline-none focus:ring-4 focus:ring-primary/10 resize-none`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={contactMutation.isPending || isSent}
                  className={`w-full py-4 rounded-xl font-bold text-lg text-white shadow-lg transition-all flex items-center justify-center gap-2
                    ${isSent ? 'bg-green-500 hover:bg-green-600' : 'bg-primary hover:bg-primary/90'}
                  `}
                >
                  {contactMutation.isPending ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                  ) : isSent ? (
                    <>Message Sent Successfully</>
                  ) : (
                    <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </PageLayout>
  );
}
