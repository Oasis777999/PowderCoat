import React from "react";
import { Link } from "react-router-dom";
import Counter from "./Counter";
import { useInView } from "react-intersection-observer";

import image1 from "../Images/Home/image.png";
import image2 from "../Images/Home/Home2.png";
import image3 from "../Images/Home/Home3.png";
import Image4 from "../Images/Home/Home4.png";
import product1 from "../Images/Home/Product1.png";
import product2 from "../Images/Home/Product2.png";
import product3 from "../Images/Home/Product3.png";
import product4 from "../Images/Home/Product4.png";
import IndustriesFlip from "./IndustriesFlip";

export const Home = () => {
  // Animation
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  return (
    <div className="fs-5">
      {/* Title Images */}
      <div class="container-fluid p-0">
        <div
          id="imageCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="2000"
        >
          <div className="position-relative">
            <div className="carousel-inner rounded shadow mb-2">
              <div className="carousel-item active">
                <img src={image1} className="d-block w-100" alt="Work 1" />
                <div
                  className=" text-light"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                  }}
                >
                  <h1>Automotive & Transportation</h1>
                  <p>
                    Protect vehicle parts and accessories with tough,
                    long-lasting powder coatings that withstand harsh
                    environments and enhance appearance.
                  </p>
                  <Link
                    to="/projects"
                    className="btn bg-gold text-light fw-bold px-4 py-2"
                  >
                    See More...
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image2} className="d-block w-100" alt="Work 2" />
                <div
                  className=" text-light"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                  }}
                >
                  <h1>Architectural & Construction</h1>
                  <p>
                    Apply corrosion-resistant coatings on metal frames,
                    railings, doors, and structural components to ensure
                    durability and aesthetic appeal.
                  </p>
                  <Link
                    to="/projects"
                    className="btn bg-gold text-light fw-bold px-4 py-2"
                  >
                    See More...
                  </Link>
                </div>
              </div>
              <div className="carousel-item">
                <img src={image3} className="d-block w-100" alt="Work 3" />
                <div
                  className="text-light"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 10,
                  }}
                >
                  <h1>Industrial Equipment & Manufacturing</h1>
                  <p>
                    Extend the lifespan of machinery and equipment with coatings
                    that resist abrasion, chemicals.
                  </p>
                  <Link
                    to="/projects"
                    className="btn bg-gold text-light fw-bold px-4 py-2"
                  >
                    See More...
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#imageCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#imageCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      {/* Second Info : Pune's Largest */}
      <div class="bg-light p-2">
        <div class="container-fluid">
          <div class="row align-items-center mb-5">
            <div class="col-md-6 mb-4 p-4 mb-md-0">
              <img
                src={Image4}
                alt="Powder Coating Plant"
                class="img-fluid rounded shadow animate-image"
              />
            </div>

            <div class="col-md-6 p-4">
              <h1 class="fw-bold text-gold">
                Pune’s Largest Automated Aluminium Coating Plant
              </h1>
              <p className="text-justify">
                Launched in May 2025, ProCoatify India LLP offers environment
                friendly powder coating solutions for architectural and
                industrial applications. Our process ensures a 1/1000 mm
                precision and exceptional durability.
              </p>
              <p className="text-justify">
                With 10 MT (Metric Tons) daily coating capacity and our sealed
                and fully automated German made (imported) Wagner plant. With
                Qualicoat approved 7-tank pretreatment process and quick colour
                change systems.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="p-2">
        <h1 className="highlight-title text-gold fw-bold p-4 mb-3">
          Why Choose Procoatify Coating Systems ?{" "}
        </h1>
        <div class="row text-center mb-2">
          <div class="col-md-3 mb-4 animate-image">
            <div class="p-3 bg-white rounded shadow h-100">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1063/1063195.png"
                width="40"
                class="mb-3"
                alt="Production"
              />
              <h5 class="fw-bold text-gold">High Production</h5>
              <p>
                10MT/day capacity with sealed coating zones and automated
                cleaning.
              </p>
            </div>
          </div>
          <div class="col-md-3 mb-4 animate-image">
            <div class="p-3 bg-white rounded shadow h-100">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2907/2907997.png"
                width="40"
                class="mb-3"
                alt="Metal Coating"
              />
              <h5 class="fw-bold text-gold">Versatile Metal Coating</h5>
              <p>
                Suitable for coating all types of metals, including aluminum,
                steel, and galvanized surfaces.
              </p>
            </div>
          </div>
          <div class="col-md-3 mb-4 animate-image">
            <div class="p-3 bg-white rounded shadow h-100">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888879.png"
                width="40"
                class="mb-3"
                alt="Colors"
              />
              <h5 class="fw-bold text-gold">Color Variety</h5>
              <p>RAL glossy, matt, textured & metallic finishes available.</p>
            </div>
          </div>
          <div class="col-md-3 mb-4 animate-image">
            <div class="p-3 bg-white rounded shadow h-100">
              <i class="bi bi-layers mb-3"></i>

              <h5 class="fw-bold text-gold">Advanced Coating Capability</h5>
              <p>
                Capable of coating extrusions up to 7.5 meters with a quick
                colour change facility to ensure thorough powder removal.
              </p>
            </div>
          </div>
        </div>
      </div>

      <IndustriesFlip />

      {/* Contact Us */}
      <div className="bg-darkGold text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold text-dark mb-3">
            Ready to Upgrade Your Coating Process?
          </h2>
          <p className="lead mb-4">
            Contact our team of experts today to find the perfect powder coating
            solution for your specific needs.
          </p>
          <Link
            to="/contactus"
            className="btn bg-gold text-light fw-bold px-4 py-2"
          >
            Contact Us Today
          </Link>
        </div>
      </div>

      {/* Products
      <div
        class="p-2
       bg-gray  text-center"
      >
        <div class="text-justify">
          <h2 class="fw-bold text-gold mb-3">PRODUCTS</h2>
          <p class="mb-5">
            Powder Coating is widely used in a variety of applications.
            <strong>ProCoatify India LLP</strong> manufactures a wide range of
            regular and tailor-made products to serve various industries. Here
            products are classified in Chemistry and Applications.
          </p>

          <div class="row gy-4">
            <div
              ref={ref}
              className={`col-12 col-sm-6 col-lg-3 animate-image animate-image-view ${
                inView ? "fade-in-up" : ""
              }`}
            >
              <div class="card h-100 border-0 shadow-sm">
                <img src={product1} class="card-img-top" alt="Pure Epoxy" />
                <div class="card-body">
                  <h5 class="card-title text-gold fw-bold">PURE EPOXY</h5>
                  <p class="card-text text-muted">
                    Pure Epoxy Powder is mainly used for high duty applications
                    due to its excellent...
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={ref}
              className={`col-12 col-sm-6 col-lg-3 animate-image animate-image-view ${
                inView ? "fade-in-up" : ""
              }`}
            >
              <div class="card h-100 border-0 shadow-sm">
                <img
                  src={product2}
                  class="card-img-top"
                  alt="Hybrid Epoxy-Polyester"
                />
                <div class="card-body">
                  <h5 class="card-title text-gold fw-bold">
                    HYBRID EPOXY-POLYESTER
                  </h5>
                  <p class="card-text text-muted">
                    Hybrid systems are widely used in industry as they have
                    hybrid properties of epoxy and polyester.
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={ref}
              className={`col-12 col-sm-6 col-lg-3 animate-image animate-image-view ${
                inView ? "fade-in-up" : ""
              }`}
            >
              <div class="card h-100 border-0 shadow-sm">
                <img src={product3} class="card-img-top" alt="Pure Polyester" />
                <div class="card-body">
                  <h5 class="card-title text-gold fw-bold">PURE POLYESTER</h5>
                  <p class="card-text text-muted">
                    Pure Polyester Powder is mainly used for architectural
                    applications due to its excellent outdoor...
                  </p>
                </div>
              </div>
            </div>

            <div
              ref={ref}
              className={`col-12 col-sm-6 col-lg-3 animate-image animate-image-view ${
                inView ? "fade-in-up" : ""
              }`}
            >
              <div class="card h-100 border-0 shadow-sm">
                <img src={product4} class="card-img-top" alt="Super Durable" />
                <div class="card-body">
                  <h5 class="card-title text-gold fw-bold">SUPER DURABLE</h5>
                  <p class="card-text text-muted">
                    Super durable powders are specially designed for outdoor
                    durability of more than 5 years. Color...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Features of Powder Coating */}
      <section>
        <div className="container-fluid bg-gray py-4 text-justify">
          <h2 class="fw-bold text-gold mb-3">
            FEATURES OF POWDER COATING AT PROCOATIFY
          </h2>
          <p class="mb-5 ">
            At Procoatify India LLP, we’re a passionate team of powder coating
            experts, transforming aluminum with durable, high-quality finishes
            built to last. With deep roots in the aluminum industry and powered
            by cutting-edge Wagner Group machinery imported from Germany, we
            combine precision, innovation, and a commitment to sustainability to
            deliver customized solutions that exceed your expectations.
          </p>
          <div className="row justify-content-center">
            {[
              {
                icon: "&#128736;",
                title: "Production Capacity",
                desc: "The facility is capable of coating 10MT per day.",
              },
              {
                icon: "&#127752;",
                title: "Color Range",
                desc: "A wide range of attractive RAL shades and customized hues are offered in glossy, semi-glossy, matt-textured, and metallic finishes.",
              },
              {
                icon: "&#127969;",
                title: "Advanced Equipment",
                desc: "The company uses WAGNER automatic spray guns to ensure uniform coating throughout the process.",
              },
              {
                icon: "&#9851;",
                title: "Environment Friendly Operations",
                desc: "Automatic systems reduce toxic chemicals, making the process environmentally friendly.",
              },
              {
                icon: "&#127981",
                title: "Clean Coating Environment",
                desc: "The entire plant is sealed to avoid dust particle accumulation on the coated surfaces.",
              },
              {
                icon: "&#128202;",
                title: "Quality Control",
                desc: "DFT, gloss, bend, impact & visual tests for every batch.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-lg-4 d-flex align-items-stretch mb-4"
              >
                <div
                  className="text-center p-2  w-100 bg-white rounded icon-card h-100"
                  style={{
                    fontFamily: "Poppins",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <div
                    style={{
                      fontSize: "3rem",
                      color: "blue",
                      display: "inline-block",
                      transition: "transform 0.3s ease-in-out",
                    }}
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                  <h5 className="mt-3 fw-bold text-gold">{item.title}</h5>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages
            <section class="container-fluid my-5">
                <h3 class="text-center mb-5">Advantages of Powder Coating</h3>
                <div class="row align-items-start">

                    <!-- Text Section -->
                    <div class="col-md-6 mb-4 mb-md-0">
                        <ul class="list-unstyled text-justify">
                            <li>No solvents</li>
                            <li>Protection and Decoration</li>
                            <li>Resistant surface</li>
                            <li>Close to 100% material utilization</li>
                            <li>Outstanding results in one coat</li>
                            <li>High mechanical resistance</li>
                            <li>Easy and clean application</li>
                            <li>Applicable on various substrates</li>
                        </ul>
                    </div>

                    <!-- Image Section -->
                    <div class="col-md-6 text-center">
                        <img src="https://www.powdercoatchicago.com/wp-content/uploads/2020/03/paint-environment.jpg" class="img-fluid" alt="Powder Coating Benefits Illustration" style={{ maxHeight: '380px' }} />
                    </div>

                </div>
            </section> */}

      {/* Testimonial */}
      <div class="p-2 bg-light text-center">
        <div class="mt-3">
          <h6 class="text-muted">Our Clients Say</h6>
          <h2 class="fw-bold mb-3 text-gold animate-heading">Testimonial</h2>

          <div
            id="testimonialCarousel"
            class="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="2000"
          >
            <div class="carousel-inner">
              {/* <!-- Slide 1 --> */}
              <div class="carousel-item active">
                <div class="row justify-content-center">
                  <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <div class="card testimonial-card p-4 h-100">
                      <div class="star-rating mb-2">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p class="text-muted">
                        Good coating service. It was a good experience with
                        them.
                      </p>
                      <h5 class="fw-bold mt-3 text-gold">Karthik Choksi</h5>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <div class="card testimonial-card p-4 h-100">
                      <div class="star-rating mb-2">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p class="text-muted">
                        Was happy with their service. I would strongly recommend
                        their service.
                      </p>
                      <h5 class="fw-bold mt-3 text-gold">Anup Dondiya</h5>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6 col-lg-4 mb-4 d-none d-lg-block">
                    <div class="card testimonial-card p-4 h-100">
                      <div class="star-rating mb-2">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p class="text-muted">
                        I like their timing commitment and behavior while doing
                        work.
                      </p>
                      <h5 class="fw-bold mt-3 text-gold">Hemant Pandey</h5>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Slide 2 --> */}
              <div class="carousel-item">
                <div class="row justify-content-center">
                  <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <div class="card testimonial-card p-4 h-100">
                      <div class="star-rating mb-2">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p class="text-muted">
                        They were prompt, professional and delivered more than
                        expected.
                      </p>
                      <h5 class="fw-bold mt-3 text-gold">Sneha Rajput</h5>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                    <div class="card testimonial-card p-4 h-100">
                      <div class="star-rating mb-2">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p class="text-muted">
                        Impressed with the coating quality and consistent
                        communication.
                      </p>
                      <h5 class="fw-bold mt-3 text-gold">Ravi Mehta</h5>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-6 col-lg-4 mb-4 d-none d-lg-block">
                    <div class="card testimonial-card p-4 h-100">
                      <div class="star-rating mb-2">
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                        <i class="bi bi-star-fill"></i>
                      </div>
                      <p class="text-muted">
                        Exceptional service and a very friendly team!
                      </p>
                      <h5 class="fw-bold mt-3 text-gold">Minal Joshi</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Carousel controls --> */}
            <div class="carousel-indicators justify-content-center mt-2">
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Happy Clients */}
      <section class="p-2 bg-white text-center">
        <div class="container mt-3">
          <h6 class="text-muted">Trusted by Leading Brands</h6>
          <h2 class="fw-bold mb-3 text-muted animate-heading">
            Our Happy Clients
          </h2>

          <div id="clientsCarousel" class="carousel slide">
            <div class="carousel-inner">
              <div class="active">
                <div class="row justify-content-center">
                  <div class="col-md-2 col-4 animate-image mb-3">
                    <img
                      src="https://www.surftechsystems.com/static/media/Allied-Founders.4d674d397244de1140a4.png"
                      class="img-fluid"
                      alt="Client 1 Logo"
                    />
                  </div>
                  <div class="col-md-2 col-4 animate-image mb-3">
                    <img
                      src="https://www.surftechsystems.com/static/media/hammond.2dc35a78602a6caa0c37.png"
                      class="img-fluid"
                      alt="Client 2 Logo"
                    />
                  </div>
                  <div class="col-md-2 col-4 animate-image mb-3">
                    <img
                      src="https://www.surftechsystems.com/static/media/GMP-Reels.9528802972c513bc5e85.png"
                      class="img-fluid"
                      alt="Client 3 Logo"
                    />
                  </div>
                  <div class="col-md-2 col-4 animate-image mb-3">
                    <img
                      src="https://www.surftechsystems.com/static/media/Tesio.ed7698897dfcdd5c5a0c.png"
                      class="img-fluid"
                      alt="Client 4 Logo"
                    />
                  </div>
                  <div class="col-md-2 col-4 animate-image mb-3">
                    <img
                      src="https://www.surftechsystems.com/static/media/sakti.901a3de03b77dbd23476.png"
                      class="img-fluid"
                      alt="Client 5 Logo"
                    />
                  </div>
                </div>
              </div>

              <div class="">
                <div class="row justify-content-center">
                  <div class="col-md-2 col-4 animate-image mb-3">
                    <img
                      src="https://www.surftechsystems.com/static/media/yash_metallic.a836e768d997dbaa262e.png"
                      class="img-fluid"
                      alt="Client 6 Logo"
                    />
                  </div>
                  <div class="col-md-2 col-4 animate-image mb-3">
                    <img
                      src="https://www.surftechsystems.com/static/media/Integrated.f8527052c4ef4fe4d628.png"
                      class="img-fluid"
                      alt="Client 7 Logo"
                    />
                  </div>
                  <div class="col-md-2 col-4 animate-image mb-3">
                    <img
                      src="https://www.surftechsystems.com/static/media/HRS.b9276262fd28c4c914a7.png"
                      class="img-fluid"
                      alt="Client 8 Logo"
                    />
                  </div>
                  <div class="col-md-2 col-4 animate-image mb-3">
                    <img
                      src="https://www.surftechsystems.com/static/media/Eureka-Equipments.8e03e9162ba9a1b0ca4b.png"
                      class="img-fluid"
                      alt="Client 9 Logo"
                    />
                  </div>
                  <div class="col-md-2 col-4 animate-image mb-3">
                    <img
                      src="https://www.surftechsystems.com/static/media/Inspiron.39075ecf49f14c8ed855.png"
                      class="img-fluid"
                      alt="Client 10 Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Counter />
    </div>
  );
};
