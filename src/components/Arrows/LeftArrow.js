import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './LeftArrow.css'

const LeftArrow = ({ goToPrevSlide }) => {
  return (
      <div className="backArrow arrow" onClick={goToPrevSlide}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
  );
};

export default LeftArrow;
