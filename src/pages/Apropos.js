import React from "react";
import "./AproposStyle.css";
import LocationIcon from "../components/icons/LocationIcon";
import Presentation from "../components/Presentation";
const Apropos = () => {
  return (
    <div className="page-container">
      <Presentation />
      <div className="position-container">
        <h3 className="info-position-label">
          <LocationIcon />
          Si vouz voulez visiter notre local :
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.6299192787164!2d10.186784425510568!3d36.89920071211323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb75abbb1733%3A0x557a99cdf6c13b7b!2sESPRIT%20Ecole%20Sup%C3%A9rieure%20Priv%C3%A9e%20d'Ing%C3%A9nierie%20et%20de%20Technologies!5e0!3m2!1sfr!2stn!4v1713827156394!5m2!1sfr!2stn"
          width="500"
          height="350"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Apropos;
