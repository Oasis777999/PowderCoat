// InfoPopup.jsx
import React, { useState } from "react";

const InfoPopUp = () => {
  const [show, setShow] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${formData.name} \n Mobile: ${formData.mobile} \n Service: ${formData.service}`
    );
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      className="modal fade show fs-5"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header border">
            <h5 className="modal-title text-gold">Get a Quote</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => setShow(false)}
            ></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">
                  Mobile <span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="mobile"
                  id="mobile"
                  name="mobile"
                  className="form-control"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="service" className="form-label">
                  Select Service <span style={{ color: "red" }}>*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  className="form-select"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose...</option>
                  <option value="automobile coating">Automobile Coating</option>
                  <option value="architecture coating">
                    Architecture Coating
                  </option>
                  <option value="powder coating">Powder Coating</option>
                  <option value="industrial coating">Industrial Coating</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn text-white bg-gold">
                Submit
              </button>
              {/* <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShow(false)}
              >
                Close
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InfoPopUp;
