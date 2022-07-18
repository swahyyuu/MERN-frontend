import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Contact us on WhatsApp</h5>
            <p>08159335190</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fa-regular fa-badge-check"></i>
            </div>
            <h5>Trusted</h5>
            <p>Make an order now</p>
          </div>
        </div>
        <div className="col-12 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>Store Location</h5>
            <p style={{ textAlign: "center" }}>Jl. Gongseng Raya No. 8 RT 02/RW 01, Baru, Pasar Rebo, Jakarta Timur, DKI Jakarta.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
