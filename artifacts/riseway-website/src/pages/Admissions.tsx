import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageLayout, PageHeader } from "@/components/layout/PageLayout";
import { IMAGES, DEPARTMENTS } from "@/lib/constants";
import { useSubmitApplication } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Loader2 } from "lucide-react";

// Form Validation Schema
const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Phone number is required"),
  department: z.string().min(1, "Please select a department"),
  courseOfInterest: z.string().min(1, "Please select a course"),
  address: z.string().min(5, "Address is required"),
  educationalBackground: z.string().min(5, "Educational background is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function Admissions() {
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  const applicationMutation = useSubmitApplication();

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      department: "",
      courseOfInterest: ""
    }
  });

  const selectedDepartment = watch("department");
  
  // Find courses based on selected department
  const availableCourses = DEPARTMENTS.find(d => d.name === selectedDepartment)?.programs || [];

  const onSubmit = (data: FormData) => {
    applicationMutation.mutate(
      { data },
      {
        onSuccess: () => {
          setIsSuccess(true);
          toast({
            title: "Application Submitted",
            description: "Your application has been successfully submitted. Our team will contact you.",
            variant: "default",
          });
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        onError: () => {
          toast({
            title: "Submission Failed",
            description: "There was an error submitting your application. Please try again.",
            variant: "destructive",
          });
        }
      }
    );
  };

  return (
    <PageLayout>
      <PageHeader 
        title="Apply for Admission" 
        description="Take the first step towards your new career. Fill out the application form below."
        image={IMAGES.review}
      />

      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {isSuccess ? (
            <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100 text-center">
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-3xl font-display font-bold text-primary mb-4">Application Received!</h2>
              <p className="text-xl text-gray-600 mb-8">
                Your application has been successfully submitted. Our admissions team will review your details and contact you shortly at the provided email/phone.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="px-8 py-3 rounded-xl font-bold bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
              <div className="mb-8">
                <h2 className="text-2xl font-display font-bold text-primary mb-2">Student Application Form</h2>
                <p className="text-gray-500">Please provide accurate information. All fields are required.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Full Name</label>
                    <input 
                      {...register("fullName")}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${errors.fullName ? 'border-destructive focus:border-destructive' : 'border-gray-200 focus:border-primary'} focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-sm text-destructive font-medium">{errors.fullName.message}</p>}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Phone Number</label>
                    <input 
                      {...register("phone")}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${errors.phone ? 'border-destructive focus:border-destructive' : 'border-gray-200 focus:border-primary'} focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all`}
                      placeholder="088-xxx-xxxx"
                    />
                    {errors.phone && <p className="text-sm text-destructive font-medium">{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Email Address</label>
                  <input 
                    {...register("email")}
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${errors.email ? 'border-destructive focus:border-destructive' : 'border-gray-200 focus:border-primary'} focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all`}
                    placeholder="johndoe@example.com"
                  />
                  {errors.email && <p className="text-sm text-destructive font-medium">{errors.email.message}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Department */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Department</label>
                    <select 
                      {...register("department")}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${errors.department ? 'border-destructive focus:border-destructive' : 'border-gray-200 focus:border-primary'} focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all`}
                    >
                      <option value="">Select a Department</option>
                      {DEPARTMENTS.map(d => (
                        <option key={d.id} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                    {errors.department && <p className="text-sm text-destructive font-medium">{errors.department.message}</p>}
                  </div>

                  {/* Course */}
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-primary">Course of Interest</label>
                    <select 
                      {...register("courseOfInterest")}
                      disabled={!selectedDepartment}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${errors.courseOfInterest ? 'border-destructive focus:border-destructive' : 'border-gray-200 focus:border-primary'} focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all disabled:opacity-50`}
                    >
                      <option value="">Select a Course</option>
                      {availableCourses.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.courseOfInterest && <p className="text-sm text-destructive font-medium">{errors.courseOfInterest.message}</p>}
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Residential Address</label>
                  <input 
                    {...register("address")}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${errors.address ? 'border-destructive focus:border-destructive' : 'border-gray-200 focus:border-primary'} focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all`}
                    placeholder="Enter your full address"
                  />
                  {errors.address && <p className="text-sm text-destructive font-medium">{errors.address.message}</p>}
                </div>

                {/* Educational Background */}
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Educational Background</label>
                  <textarea 
                    {...register("educationalBackground")}
                    rows={4}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${errors.educationalBackground ? 'border-destructive focus:border-destructive' : 'border-gray-200 focus:border-primary'} focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none`}
                    placeholder="Briefly describe your highest level of education (e.g., High School Graduate, University, etc.)"
                  />
                  {errors.educationalBackground && <p className="text-sm text-destructive font-medium">{errors.educationalBackground.message}</p>}
                </div>

                <button 
                  type="submit"
                  disabled={applicationMutation.isPending}
                  className="w-full py-4 rounded-xl font-bold text-lg bg-accent text-white shadow-lg hover:shadow-xl hover:bg-orange-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {applicationMutation.isPending ? (
                    <>
                      <Loader2 className="w-6 h-6 animate-spin" />
                      Submitting...
                    </>
                  ) : "Submit Application"}
                </button>
              </form>
            </div>
          )}

        </div>
      </section>
    </PageLayout>
  );
}
