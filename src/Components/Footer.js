import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.png";

export function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-dark text-light pt-5 pb-3  fs-5">
        <div className="container">
          <div className="row text-start">
            <div className="col-md-4 mb-4">
              <h4 className="text-gold d-inline">PROCOATIFY INDIA LPP</h4>
              <p>
                One of the leading Powder Coating companies offering quality and
                innovative solutions to meet the surface finishing needs.
              </p>
              <div className="text-center my-3">
                <a
                  href="https://facebook.com"
                  className="btn btn-primary btn-md mx-1 rounded-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-facebook"></i>
                </a>
                <a
                  href="https://twitter.com"
                  className="btn btn-info btn-md mx-1 rounded-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-twitter-x"></i>
                </a>
                <a
                  href="https://instagram.com"
                  className="btn btn-pink btn-md mx-1 rounded-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-instagram"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  className="btn btn-primary btn-md mx-1 rounded-0"
                  style={{ backgroundColor: "#0077b5" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://youtube.com"
                  className="btn btn-danger btn-md mx-1 rounded-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-youtube"></i>
                </a>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <h4 className="text-gold">Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/"
                    className="text-light text-decoration-none hover-link"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-light text-decoration-none hover-link"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-light text-decoration-none hover-link"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contactus"
                    className="text-light text-decoration-none hover-link"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4 mb-4">
              <h4 className="text-gold">Contact Us</h4>
              <p className="mb-1">
                <strong>Phone :</strong> +91-8600500400
              </p>
              <p className="mb-1">
                <strong>Email :</strong> procoatifyindia@gmail.com
              </p>
              <p className="mb-0">
                <strong>Location :</strong> 313, Gaud Dara, Khed Shivapur,
                Pune-412205
              </p>
            </div>
          </div>

          <hr className="border-secondary bg-gold" />

          <div className="text-center">
            <small className="text-secondary">
              © {new Date().getFullYear()} ADVAIT TELESERVICES. All rights
              reserved.
            </small>
          </div>
        </div>
      </footer>

      {/* Contact Us */}
      <Link
        to="https://wa.me/+918600500400"
        className="sticky-contact-btn bg-gold fs-3"
      >
        <i class="bi bi-whatsapp p-1"></i>
        Contact Us
      </Link>
    </>
  );
}
