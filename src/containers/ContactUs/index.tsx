import SectionTitle, { SectionHeaderInfo } from "@/components/SectionTitle";
import classes from "./ContactUs.module.css";
import ButtonSecondary from "@/components/Button/ButtonSecondary";

const sectionHeaderInfo: SectionHeaderInfo = {
  name: "Contact us",
  title: "Have a Project Idea? Let’s Work Together",
  description:
    "Have something in mind or just want to say hello? Drop us a message using the form below. We're excited to hear from you!",
};

const ContactUs = () => {
  return (
    <section className={`${classes.bgRing} py-20 bg-[#F6F6F6]`}>
      <div className="container">
        <SectionTitle sectionInfo={sectionHeaderInfo} />

        <div className="flex justify-end px-12">
          <form className="w-1/2 space-y-6">
            <InputField
              label="Full Name"
              placeholder="Full Name"
              name="fullName"
              required={true}
            />
            <div className="flex gap-4">
              <InputField
                className="basis-1/2"
                label="Company Name"
                placeholder="Company Name"
                name="companyName"
                required={false}
              />
              <InputField
                className="basis-1/2"
                label="Email"
                placeholder="Email"
                name="email"
                required={true}
              />
            </div>
            <div className="flex gap-4">
              <InputField
                className="basis-1/2"
                label="Email"
                placeholder="Email"
                name="email"
                required={true}
              />
              <InputField
                className="basis-1/2"
                label="Email"
                placeholder="Email"
                name="email"
                required={true}
              />
            </div>

            <div>
              <label htmlFor="projectDetails" className="mb-1 font-medium">
                Project Details <span className="text-red-600">*</span>
              </label>
              <textarea
                name="projectDetails"
                id="projectDetails"
                rows={4}
                className="w-full bg-transparent border-b-2 border-b-black focus:outline-none"
              />
            </div>

            <ButtonSecondary>Send Inquiry</ButtonSecondary>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

interface InputFieldProps {
  className?: string;
  label: string;
  placeholder?: string;
  name: string;
  required: boolean;
}

const InputField = ({
  name,
  label,
  placeholder,
  className,
  required,
}: InputFieldProps) => {
  return (
    <div className={`${className} flex flex-col`}>
      <label htmlFor="fullName" className="mb-1 font-medium">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder || ""}
        className="py-0.5 text-lg bg-transparent border-b-2 border-b-black focus:outline-none"
      />
    </div>
  );
};
