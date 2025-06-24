import React from "react";

import image1 from "../Images/About/image.png";
import image2 from "../Images/About/image2.png";
import image3 from "../Images/About/image3.png";

import Architect from "../Images/Services//Architect.png";
import Automobile from "../Images/Services/Automobile.png";
import Engineering from "../Images/Services/Engineering Enterprices.png";
import Interior from "../Images/Services/Interiar.png";
import RealEstate from "../Images/Services/RealEstate.png";
import Electrical from "../Images/Services/Electical (1).png";

const data = [
  {
    icon: "🎯",
    text: (
      <>
        Coating Capacity: <strong>10MT per day</strong>
      </>
    ),
  },
  {
    icon: "🎨",
    text: "RAL Shades & Custom Finishes: Glossy, Semi-Glossy, Matte, Metallic, and Textured",
  },
  { icon: "🤖", text: "Automatic WAGNER spray guns ensure uniform coating" },
  {
    icon: "♻️",
    text: "We use eco-friendly, Qualicoat-certified pretreatment chemicals from Chemetall",
  },
  {
    icon: "📏",
    text: (
      <>
        Supports aluminium extrusions up to <strong>7.5 meters</strong>
      </>
    ),
  },
  { icon: "⚡", text: "Quick Colour Change Facility for minimal downtime" },
  {
    icon: "🔥",
    text: "Curing with Travel Temperature Recorder (TTR) for controlled heating",
  },
];

export const AboutUs = () => {
  return (
    <div className="fs-5">
      {/* Who we are */}
      <div className="py-5 bg-dark text-light">
        <div className="container ">
          <h1 className="highlight-title text-gold display-4 mb-3">
            Who We Are ?{" "}
          </h1>
          <p className="mb-5">
            We At Procoatify India LLP, we’re a passionate team of powder
            coating experts, transforming aluminum with durable, high-quality
            finishes built to last. With deep roots in the aluminum industry and
            powered by cutting-edge Wagner Group machinery imported from
            Germany, we combine precision, innovation, and a commitment to
            sustainability to deliver customized solutions that exceed
            your expectations.
          </p>
        </div>
      </div>

      {/* Industries we serve 
      <div class="p-2 bg-light py-5">
        <h2 className="text-center text-gold fw-bold mb-5">Industries We Serve</h2>
        <div className="row g-4">
          <div className="col-md-6 col-lg-4 animate-image">
            <div className="m-2 p-3 bg-white rounded shadow h-100 text-center">
              <img
                src={Automobile}
                alt="Automobile Enterprises"
                className="mb-3"
                width="50"
              />
              <h3 className="fw-bold text-gold">Automobile Enterprises</h3>
              <ul className="text-start ps-3">
                <li>Small Auto Parts</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 animate-image">
            <div className="m-2 p-3 bg-white rounded shadow h-100 text-center">
              <img
                src={Engineering}
                alt="Engineering Enterprises"
                className="mb-3"
                width="50"
              />
              <h3 className="fw-bold text-gold">Engineering Enterprises</h3>
              <ul className="text-start ps-3">
                <li>Control Panel</li>
                <li>Machine Casing</li>
                <li>Ladder Frame</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 animate-image">
            <div className="m-2 p-3 bg-white rounded shadow h-100 text-center">
              <img
                src={Architect}
                alt="Architect"
                className="mb-3"
                width="50"
              />
              <h3 className="fw-bold text-gold">Architect</h3>
              <ul className="text-start ps-3">
                <li>Doors</li>
                <li>Windows</li>
                <li>Curtain Wall</li>
                <li>Office Furniture</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 animate-image">
            <div className="m-2 p-3 bg-white rounded shadow h-100 text-center">
              <img
                src={Interior}
                alt="Interior Design"
                className="mb-3"
                width="50"
              />
              <h3 className="fw-bold text-gold">Interior Design</h3>
              <ul className="text-start ps-3">
                <li>Office Partition</li>
                <li>Footing System</li>
              </ul>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 animate-image">
            <div className="m-2 p-3 bg-white rounded shadow h-100 text-center">
              <img
                src={RealEstate}
                alt="Real Estate Developers"
                className="mb-3"
                width="50"
              />
              <h3 className="fw-bold text-gold">Real Estate Developers</h3>
              <ul className="text-start ps-3">
                <li>Cladding Panels</li>
                <li>Signage Frame</li>
                <li>Gate Components</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 animate-image">
            <div className="m-2 p-3 bg-white rounded shadow h-100 text-center">
              <img
                src={Electrical}
                alt="Electrical and Electronics"
                className="mb-3"
                width="50"
              />
              <h3 className="fw-bold text-gold">Electrical & Electronics</h3>
              <ul className="text-start ps-3">
                <li>Electrical Cabinets</li>
                <li>Switchgear Components</li>
                <li>Power Supply Casings</li>
                <li>Metal Enclosures</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      {/* Company Intro / Our Journy */}

      <div class="p-2">
        <div class="row align-items-center m-3">
          <div className="col-md-6 text-justify p-3">
            <h1 className="fw-bold text-gold mb-4">Our Journey</h1>
            <p>
              ProCoatify India LLP, the largest aluminium coating plant in Pune,
              announced the launch of its powder coating services in May 2025.
              This strategic move expands our offerings in architectural and
              industrial applications, delivering high-precision,
              environment-friendly coating solutions.
            </p>
            <p>
              Our technology achieves coating precision up to{" "}
              <strong>1/1000 mm</strong> through powder dispersion,
              electrostatic charging, and curing — resulting in extremely
              durable, scratch and fade-resistant finishes.
            </p>
          </div>
          <div class="col-md-6 mb-4 mb-md-0">
            <img
              src={image2}
              alt="Powder Coating Plant"
              class="img-fluid rounded shadow animate-image m-3"
            />
          </div>
        </div>
      </div>

      {/* Cutting Edge */}
      <section className=" p-2">
        <div class="row align-items-center mb-5">
          <div class="col-md-6 mb-4 mb-md-0 p-4">
            <img
              src={image3}
              alt="Powder Coating Plant"
              class="img-fluid rounded shadow animate-image"
            />
          </div>
          <div class="col-md-6 text-justify p-2">
            <div>
              <h1 className="fw-bold text-gold mb-4">
                Cutting-Edge Coating Capabilities
              </h1>
              <ul className="list-unstyled">
                {data.map((item, idx) => (
                  <li key={idx} className="d-flex align-items-start gap-2 mb-2">
                    <span className="fs-5">{item.icon}</span>
                    <span className="flex-grow-1">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Advance Technology */}
      <section className="py-3 p-2 bg-gray">
        {/* First */}
        <div className="container-fluid text-justify">
          <div class=" rounded text-justify">
            <h1 class="fw-bold mb-3 text-gold">Advanced Technology</h1>
            <p>
              Our state-of-the-art powder coating oven spans 30 meters and
              operates at temperatures up to 250°C. A Travel Temperature
              Recorder (TTR) ensures precise curing control. Every aspect from
              powder dispersion and electrostatic charging to final curing is
              meticulously optimized for superior performance and durability.
            </p>
            <p>
              We follow top-tier automotive standards and quality practices to
              deliver defect-free, high-finish coatings. Our in-house systems
              provide the perfect balance of productivity and precision.
            </p>
          </div>
        </div>

        {/* Second */}
        <div className="row g-4 bg-muted mb-4 mx-2">
          <div className="col-md-4  animate-image ">
            <div className="bg-white card-custom h-100 text-start rounded p-2 m-2">
              <h3 className="text-gold fw-semibold">
                <strong className="text-success">✔ </strong>Superior Coating
                Quality
              </h3>
              <p className="text-dark p-2">
                Achieve flawless finishes with even application and perfect
                adhesion on all metal surfaces.
              </p>
            </div>
          </div>
          <div className="col-md-4 animate-image ">
            <div className="bg-white card-custom h-100 text-start rounded p-2 m-2">
              <h3 className="text-gold fw-semibold">
                <strong className="text-success">✔ </strong>Increased Efficiency
              </h3>
              <p className="text-dark p-2">
                Reduce waste and costs with our high-transfer efficiency systems
                and powder recovery technology.
              </p>
            </div>
          </div>
          <div className="col-md-4 animate-image ">
            <div className="bg-white card-custom h-100 text-start rounded p-2 m-2">
              <h3 className="text-gold fw-semibold">
                <strong className="text-success">✔ </strong>Reliable Performance
              </h3>
              <p className="text-dark p-2">
                Our German-engineered equipment provides consistent, dependable
                operation with minimal downtime.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
