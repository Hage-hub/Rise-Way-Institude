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
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactData) => {
    contactMutation.mutate(
      { data },
      {
        onSuccess: () => {
          setIsSent(true);
          toast({ title: "Message Sent", description: "Thanks for reaching out! We'll get back to you soon." });
          reset();
          setTimeout(() => setIsSent(false), 5000);
        },
        onError: () => {
          toast({ title: "Error", description: "Failed to send message. Please try again.", variant: "destructive" });
        },
      }
    );
  };

  const inputClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl bg-white border-2 ${hasError ? "border-red-400" : "border-gray-200"} focus:outline-none focus:border-primary transition-colors text-base`;

  return (
    <PageLayout>
      <PageHeader
        title="Contact Us"
        description="Have questions? We're here to help. Reach out to our admissions team today."
        image={IMAGES.review}
      />

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-6 sm:mb-8">Get in Touch</h2>

              <div className="space-y-6 sm:space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: "Our Location",
                    lines: [SITE_INFO.location],
                  },
                  {
                    icon: Phone,
                    title: "Call Us",
                    lines: [SITE_INFO.phone1, SITE_INFO.phone2],
                  },
                  {
                    icon: Mail,
                    title: "Email Us",
                    lines: [SITE_INFO.email],
                  },
                  {
                    icon: Clock,
                    title: "Office Hours",
                    lines: ["Monday – Friday: 8:00 AM – 5:00 PM", "Saturday: 9:00 AM – 2:00 PM"],
                  },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary text-base sm:text-xl mb-1">{title}</h4>
                      {lines.map((line, i) => (
                        <p key={i} className="text-gray-600 text-base sm:text-lg leading-snug">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Director info */}
              <div className="mt-8 sm:mt-10 p-5 sm:p-6 bg-slate-50 rounded-2xl border border-gray-100">
                <p className="text-sm font-bold text-accent uppercase tracking-wider mb-1">Director General</p>
                <p className="text-lg sm:text-xl font-display font-bold text-primary">{SITE_INFO.director}</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-gray-200 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-primary mb-5 sm:mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6" noValidate>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary block">Your Name</label>
                  <input {...register("name")} className={inputClass(!!errors.name)} placeholder="John Doe" autoComplete="name" />
                  {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary block">Email Address</label>
                  <input {...register("email")} type="email" className={inputClass(!!errors.email)} placeholder="john@example.com" autoComplete="email" />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary block">Message</label>
                  <textarea
                    {...register("message")}
                    rows={5}
                    className={`${inputClass(!!errors.message)} resize-none`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-sm text-red-500">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={contactMutation.isPending || isSent}
                  className={`w-full py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg text-white shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 ${
                    isSent ? "bg-green-500" : "bg-primary hover:bg-primary/90"
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  {contactMutation.isPending ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Sending...</>
                  ) : isSent ? (
                    <>Message Sent Successfully</>
                  ) : (
                    <>Send Message <Send className="w-4 h-4 sm:w-5 sm:h-5" /></>
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
