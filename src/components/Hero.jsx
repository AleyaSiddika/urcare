import React from "react";
import HeroLogo from "../assets/images/logo.png";

const Hero = () => {
  const handleSubmit = (formData) => {
    // Handle form submission, e.g., send data to server
    console.log(formData);
  };
  return (
    <section className="hero bg-cover bg-center relative bg-[#ffce9f]">
      <div className="relative md:flex items-center">
        <div className="container w-full mx-auto flex items-center justify-center min-h-96 relative z-10">
          <div className="text-center mx-auto text-white">
            <a href="#services" className="text-white flex items-center mb-8">
              <img
                src={HeroLogo}
                className="mx-auto w-48 md:w-96"
                alt="logo"
                width="400"
              />
            </a>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-wider text-amber-950">
              A Care You Need
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
