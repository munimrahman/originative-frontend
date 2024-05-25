import ButtonWithPen from "@/components/Button/ButtonPrimary";
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-black text-white mx-4 px-20 py-24 rounded-xl">
      <p className="text-blue-100">Wo We Are</p>
      <h2 className="text-[3.25rem] font-semibold leading-tight">
        Crafting Global Digital <br className="hidden md:block" /> Excellence
        from Bangladesh
      </h2>

      <div className="w-[40%] border-b my-8" />

      <p className="text-2xl">
        Originative is a dynamic global agency headquartered in Bangladesh,
        where we blend creativity, innovation, and expertise to deliver
        exceptional digital solutions. With a passion for crafting unforgettable
        experiences, we specialize in UI/UX design, web development, branding,
        and more.
        <br />
        <br />
        Driven by a team of talented professionals, our mission is to redefine
        digital excellence and empower businesses worldwide to thrive in the
        ever-evolving digital landscape.{" "}
        <span className="text-violet-100">
          From startups to established enterprises, we tailor our services to
          meet the unique needs and goals of each client, ensuring unparalleled
          success and growth.
          <br />
          <br />
          At Originative, we believe in the power of collaboration, integrity,
          and continuous learning. With a commitment to excellence and a
          dedication to pushing boundaries, we invite you to embark on a journey
          of creativity, innovation, and success with us.
        </span>
      </p>

      <div className="mt-8 flex gap-4">
        <ButtonWithPen>Contact Us</ButtonWithPen>
        <button>Explore More</button>
      </div>
    </section>
  );
};

export default AboutUs;
