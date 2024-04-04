import React from "react";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="">
      <div className="flex justify-between items-center rounded-3xl border-2 p-8 hover:cursor-pointer">
        <img src={image} className="h-14 w-auto" alt="x" />

        <h2 className="text-5xl font-thin text-center">{title}</h2>
      </div>
      <div className="mt-6 p-8 space-y-4 relative">
        <p className="md:text-lg text-heading-3 text-center">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
