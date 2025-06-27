import { useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo3 (3).png";
import torch from "../Images/Torch.png";

export const Nav = () => {
  const navbarCollapseRef = useRef(null);

  const handleNavLinkClick = () => {
    if (navbarCollapseRef.current?.classList.contains("show")) {
      const bsCollapse = new window.bootstrap.Collapse(
        navbarCollapseRef.current,
        {
          toggle: false,
        }
      );
      bsCollapse.hide();
    }
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm sticky-top p-1">
      <div className="container-fluid px-4">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <img
            src={logo}
            alt="ProCoatify Logo"
            width="100"
            height="100"
            className="d-inline-block align-text-top"
          />
          <img
            src={torch}
            alt="ProCoatify Logo"
            width="100"
            height="100"
            className="d-inline-block align-text-top"
          />
        </Link>

        <button
          className="navbar-toggler border-0 text-gold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-gold"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
          ref={navbarCollapseRef}
        >
          <ul className="navbar-nav gap-3 fs-3">
            {[
              { to: "/", label: "Home" },
              { to: "/aboutus", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/projects", label: "Projects" },
              { to: "/contactus", label: "Contact Us" },
            ].map((item) => (
              <li className="nav-item" key={item.to}>
                <Link
                  className="nav-link hover-underline"
                  to={item.to}
                  onClick={handleNavLinkClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
