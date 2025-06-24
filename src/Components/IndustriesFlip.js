import React from "react";

// Replace with your actual image paths
import Automobile from "../Images/Services/Automobile.png";
import Engineering from "../Images/Services/Engineering Enterprices.png";
import Architect from "../Images/Services/Architect.png";
import Interior from "../Images/Services/Interiar.png";
import RealEstate from "../Images/Services/RealEstate.png";
import Electrical from "../Images/Services/Electical (1).png";

const industries = [
  {
    img: Automobile,
    alt: "Automobile Enterprises",
    title: "Automobile Enterprises",
    items: ["Small Auto Parts"],
  },
  {
    img: Engineering,
    alt: "Engineering Enterprises",
    title: "Engineering Enterprises",
    items: ["Control Panel", "Machine Casing", "Ladder Frame"],
  },
  {
    img: Architect,
    alt: "Architect",
    title: "Architect",
    items: ["Doors & Windows", "Curtain Wall", "Fins", "Facades"],
  },
  {
    img: Interior,
    alt: "Interior Design",
    title: "Interior Design",
    items: ["Office Partition", "Footing System", "Office Furniture"],
  },
  {
    img: RealEstate,
    alt: "Real Estate Developers",
    title: "Real Estate Developers",
    items: ["Cladding Panels", "Signage Frame", "Gate Components", "Awing Frames"],
  },
  {
    img: Electrical,
    alt: "Electrical & Electronics",
    title: "Electrical & Electronics",
    items: ["Electrical Cabinets", "Switchgear Components", "Power Supply Casings", "Metal Enclosures"],
  },
];

const IndustriesFlip = () => {
  return (
    <div className="container py-5 bg-light">
      <h2 className="text-center text-gold fw-bold mb-5">Industries We Serve</h2>
      <div className="row g-4">
        {industries.map((industry, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="flip-card-wrapper">
              <div className="flip-card">
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-front card p-4 text-center shadow">
                    <img
                      src={industry.img}
                      alt={industry.alt}
                      className="industry-icon mb-3"
                    />
                    <h5 className="fw-bold text-gold">{industry.title}</h5>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back card p-4 text-start shadow">
                    <h6 className="fw-bold text-gold">{industry.title}</h6>
                    <ul className="pt-2 ps-3">
                      {industry.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesFlip;
