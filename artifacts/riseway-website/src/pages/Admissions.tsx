import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageLayout, PageHeader } from "@/components/layout/PageLayout";
import { IMAGES, DEPARTMENTS } from "@/lib/constants";
import { useSubmitApplication } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Loader2 } from "lucide-react";

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
    defaultValues: { department: "", courseOfInterest: "" },
  });

  const selectedDepartment = watch("department");
  const availableCourses = DEPARTMENTS.find((d) => d.name === selectedDepartment)?.programs || [];

  const onSubmit = (data: FormData) => {
    applicationMutation.mutate(
      { data },
      {
        onSuccess: () => {
          setIsSuccess(true);
          toast({
            title: "Application Submitted",
            description: "Your application has been successfully submitted. Our team will contact you.",
          });
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        onError: () => {
          toast({
            title: "Submission Failed",
            description: "There was an error submitting your application. Please try again.",
            variant: "destructive",
          });
        },
      }
    );
  };

  const fieldClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-xl bg-slate-50 border-2 ${
      hasError ? "border-red-400 focus:border-red-400" : "border-gray-200 focus:border-primary"
    } focus:outline-none transition-colors text-base`;

  return (
    <PageLayout>
      <PageHeader
        title="Apply for Admission"
        description="Take the first step towards your new career. Fill out the application form below."
        image={IMAGES.review}
      />

      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {isSuccess ? (
            <div className="bg-white p-8 sm:p-12 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6">
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-3 sm:mb-4">Application Received!</h2>
              <p className="text-base sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Your application has been successfully submitted. Our admissions team will review your details and contact you shortly at the provided email/phone.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold bg-primary text-white hover:bg-primary/90 transition-colors active:scale-95 text-sm sm:text-base"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <div className="bg-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-display font-bold text-primary mb-1.5">Student Application Form</h2>
                <p className="text-gray-500 text-sm sm:text-base">Please provide accurate information. All fields are required.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6" noValidate>
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-primary block">Full Name</label>
                    <input {...register("fullName")} className={fieldClass(!!errors.fullName)} placeholder="John Doe" autoComplete="name" />
                    {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-primary block">Phone Number</label>
                    <input {...register("phone")} className={fieldClass(!!errors.phone)} placeholder="088-xxx-xxxx" autoComplete="tel" />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary block">Email Address</label>
                  <input {...register("email")} type="email" className={fieldClass(!!errors.email)} placeholder="johndoe@example.com" autoComplete="email" />
                  {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-primary block">Department</label>
                    <select {...register("department")} className={fieldClass(!!errors.department)}>
                      <option value="">Select a Department</option>
                      {DEPARTMENTS.map((d) => (
                        <option key={d.id} value={d.name}>{d.name}</option>
                      ))}
                    </select>
                    {errors.department && <p className="text-sm text-red-500">{errors.department.message}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-bold text-primary block">Course of Interest</label>
                    <select {...register("courseOfInterest")} disabled={!selectedDepartment} className={`${fieldClass(!!errors.courseOfInterest)} disabled:opacity-50 disabled:cursor-not-allowed`}>
                      <option value="">Select a Course</option>
                      {availableCourses.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    {errors.courseOfInterest && <p className="text-sm text-red-500">{errors.courseOfInterest.message}</p>}
                  </div>
                </div>

                {/* Address */}
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary block">Residential Address</label>
                  <input {...register("address")} className={fieldClass(!!errors.address)} placeholder="Enter your full address" autoComplete="street-address" />
                  {errors.address && <p className="text-sm text-red-500">{errors.address.message}</p>}
                </div>

                {/* Educational Background */}
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-primary block">Educational Background</label>
                  <textarea
                    {...register("educationalBackground")}
                    rows={4}
                    className={`${fieldClass(!!errors.educationalBackground)} resize-none`}
                    placeholder="Briefly describe your highest level of education (e.g., High School Graduate, University, etc.)"
                  />
                  {errors.educationalBackground && <p className="text-sm text-red-500">{errors.educationalBackground.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={applicationMutation.isPending}
                  className="w-full py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg bg-accent text-white shadow-lg hover:bg-orange-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 active:scale-95"
                >
                  {applicationMutation.isPending ? (
                    <><Loader2 className="w-5 h-5 sm:w-6 sm:h-6 animate-spin" /> Submitting...</>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
