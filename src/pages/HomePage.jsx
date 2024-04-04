import React from "react";
import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
const HomePage = () => {
  const servicesData = [
    {
      title: "Pet-Friend",
      image: "/src/assets/images/Services/pet.png",
      description:
        "Keep safe your pet in the safest hand. Prices starting from €29.90.",
    },
    {
      title: "Eld-Friend",
      image: "/src/assets/images/Services/elder.png",
      description:
        "Keep safe your old in the safest hand. Prices starting from €29.90.",
    },
    {
      title: "Kid-Friend",
      image: "/src/assets/images/Services/kid.png",
      description:
        "Keep safe your Kid in the safest hand. Prices starting from €29.90.",
    },
    {
      title: "Transport Friend",
      image: "/src/assets/images/Services/transport.png",
      description:
        "get your Transport from the safest hand. Prices starting from €29.90.",
    },
  ];

  return (
    <>
      <Hero />

      <section id="services" className="py-16 ">
        <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5 space-y-10 md:space-y-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
