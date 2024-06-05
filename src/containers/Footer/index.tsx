import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import ButtonWithPen from "@/components/Button/ButtonPrimary";
import originativeLabImg from "@/assets/OriginativeLab.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white m-4 rounded-2xl">
      <div className="container px-8">
        <div className="flex gap-4 py-24">
          <div className="basis-[37%] pe-16">
            <div className="flex flex-col gap-6">
              <div className="flex gap-2 items-center">
                <Image src={logo} unoptimized={true} alt="Originative logo" />
                <p className="text-3xl">Originative</p>
              </div>

              <p className="text-[#9A9A9C] text-lg leading-7">
                Elevate your online presence with Originative. Connect with us
                to discover tailored digital solutions crafted for your brand
                success.
              </p>

              <div>
                <ButtonWithPen>Let&apos;s Talk</ButtonWithPen>
              </div>
            </div>
          </div>
          <div className="basis-[15%] space-y-6">
            <p className="text-2xl font-medium">Company</p>
            <div className="flex flex-col gap-3">
              <Link href={"/"} className="text-[#9A9A9C] text-lg">
                Agency
              </Link>
              <Link href={"/"} className="text-[#9A9A9C] text-lg">
                Services
              </Link>
              <Link href={"/"} className="text-[#9A9A9C] text-lg">
                Works
              </Link>
              <Link href={"/"} className="text-[#9A9A9C] text-lg">
                Contact
              </Link>
            </div>
          </div>
          <div className="basis-[30%] space-y-6">
            <p className="text-2xl font-medium">Services</p>
            <div className="flex">
              <div className="basis-1/2 flex flex-col gap-3">
                <Link href={"/"} className="text-[#9A9A9C] text-lg">
                  UI UX Design
                </Link>
                <Link href={"/"} className="text-[#9A9A9C] text-lg">
                  Web Design
                </Link>
                <Link href={"/"} className="text-[#9A9A9C] text-lg">
                  Webflow
                </Link>
                <Link href={"/"} className="text-[#9A9A9C] text-lg">
                  Wordpress
                </Link>
                <Link href={"/"} className="text-[#9A9A9C] text-lg">
                  Wix
                </Link>
              </div>
              <div className="basis-1/2 flex flex-col gap-3">
                <Link href={"/"} className="text-[#9A9A9C] text-lg">
                  Branding Design
                </Link>
                <Link href={"/"} className="text-[#9A9A9C] text-lg">
                  Product Design
                </Link>
                <Link href={"/"} className="text-[#9A9A9C] text-lg">
                  Mobile App Design
                </Link>
                <Link href={"/"} className="text-[#9A9A9C] text-lg">
                  SaaS Design
                </Link>
                <Link href={"/"} className="text-[#9A9A9C] text-lg">
                  MVP Development
                </Link>
              </div>
            </div>
          </div>

          <div className="basis-[18%] space-y-6">
            <p className="text-2xl font-medium">Contact Us</p>
            <div className="flex flex-col gap-3">
              <p className="text-[#9A9A9C] text-lg">
                hello@originative-lab.com
              </p>
              <p className="text-[#9A9A9C] text-lg">+880 1304869186</p>
            </div>
          </div>
        </div>

        <div className="pb-4">
          <figure className="flex justify-center border-b border-b-violet-100">
            <Image
              src={originativeLabImg}
              unoptimized={true}
              className="px-4 w-full"
              alt=""
            />
          </figure>

          <div className="flex justify-between pt-4 pb-8">
            <p className="text-[#9A9A9C] text-lg">
              Bongshal, Dhaka-1100, Bangladesh
            </p>
            <p className="text-[#9A9A9C] text-lg">
              @ 2024 Originative Lab, All right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
