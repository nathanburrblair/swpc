import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './RightArrow.css'

const RightArrow = ({goToNextSlide}) => {
    return (
        <div className="nextArrow arrow" onClick={goToNextSlide}>
            <FontAwesomeIcon icon={faArrowRight} />
        </div>
    )
}

export default RightArrow;