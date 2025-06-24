import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  console.log(form);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_elobwcm", "template_10qwbeq", form.current, {
        publicKey: "ovArC_TPNsk3ZzzQ5",
      })
      .then(
        () => {
          alert("Thank You for Contacting Us!");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="fs-5 bg-gray  p-2">
      <div className="container">
        <h2 class="text-justify fw-bold mb-5 p-3">Get in Touch with Us</h2>
        <div class="row">
          {/* <!-- Left Column: Contact Info --> */}
          <div class="col-md-5 mb-5 text-justify">
            <div class="d-flex mb-4">
              <div class="me-3">
                <div
                  class="bg-gold text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "90px", height: "90px" }}
                >
                  <i class="bi bi-geo-alt-fill fs-5"></i>
                </div>
              </div>
              <div>
                <h3 class="fw-bold text-start">Address</h3>
                <p class="mb-0">
                  Gat No. 313, Gaud Dara Road, Khedshivapur, Pune 412205
                </p>
              </div>
            </div>

            <div class="d-flex mb-4">
              <div class="me-3">
                <div
                  class="bg-gold text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "90px", height: "90px" }}
                >
                  <i class="bi bi-envelope-fill fs-5"></i>
                </div>
              </div>
              <div>
                <h3 className="fw-bold text-start">Email</h3>
                <p className="mb-0">
                  <a
                    href="mailto:procoatifyindia@gmail.com"
                    className="text-decoration-none text-dark"
                  >
                    procoatifyindia@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div class="d-flex mb-4">
              <div class="me-3">
                <div
                  class="bg-gold text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "90px", height: "90px" }}
                >
                  <i class="bi bi-headset fs-5"></i>
                </div>
              </div>
              <div>
                <h3 class="fw-bold text-start">Customer Care</h3>
                <p class="mb-0">+91 9960852623</p>
              </div>
            </div>

            <div class="d-flex">
              <div class="me-3">
                <div
                  class="bg-gold text-white rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "90px", height: "90px" }}
                >
                  <i class="bi bi-telephone-fill fs-5"></i>
                </div>
              </div>
              <div>
                <h3 class="fw-bold text-start">Phone</h3>
                <p class="mb-0">+91 8600500400</p>
                <p class="mb-0">+91 9960852623</p>
              </div>
            </div>
          </div>

          {/* <!-- Right Column: Your Form --> */}
          <div class="col-md-7">
            <div class="row justify-content-center">
              <form ref={form} onSubmit={sendEmail} class="col-12 row g-4">
                <div class="col-md-12">
                  <input
                    type="text"
                    name="user_name"
                    class="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <input
                    type="email"
                    name="user_email"
                    class="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div class="col-md-12">
                  <input
                    type="text"
                    name="phone"
                    class="form-control"
                    placeholder="Phone Number"
                  />
                </div>

                <div class="col-md-12">
                  <input
                    type="text"
                    name="subject"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div class="col-12">
                  <textarea
                    name="message"
                    rows="5"
                    class="form-control"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <div class="col-12 text-center">
                  <button type="submit" class="btn-lg bg-gold border text-white px-5 py-2">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <section
        className="container p-2 my-3"
        style={{ border: 0, width: "100%", height: "550px" }}
      >
        <h2 className="text-center mb-4 fw-bold">Our Location</h2>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3789.1736542641296!2d73.84182387509222!3d18.354200599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ed001e5424d1%3A0xb959a5fee5c39fcc!2sPROCOATIFY%20INDIA%20LLP!5e0!3m2!1sen!2sin!4v1718968800000!5m2!1sen!2sin"
            title="Company Location"
            style={{ border: 0, width: "100%", height: "450px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};
