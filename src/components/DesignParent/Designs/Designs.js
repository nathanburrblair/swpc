import React, { Component } from "react";
import "./Designs.css";
import { Link } from "react-router-dom";
import fb from "../../../images/facebook-logo.svg";
import insta from "../../../images/instagram.svg";
import twitter from "../../../images/twitter.svg";

class Designs extends Component {
  componentDidMount() {
    // const movingWords = document.querySelectorAll(".design_subtitle");
    // const options = {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 0.0
    // };
    // let observer = new IntersectionObserver(entries => {
    //   entries.forEach(entry => {
    //     if (entry.intersectionRatio > 0) {
    //       entry.target.classList.add("design_subtitle");
    //     } else {
    //       entry.target.classList.remove("design_subtitle");
    //     }
    //   });
    // }, options);
    // movingWords.forEach(word => {
    //   observer.observe(word);
    // });
  }

  render() {
    return (
      <div className="design_container">
        <div className="design_content_container">
          <div className="design_intro">
            <h1>Design</h1>
            <p>
              Whether you're preparing to sell, remodel, or want a well thought
              out space, we're here to help. Not only will we come to your home
              or business to stage the space, we'll also take care of your
              plants on an ongoing basis.
            </p>
          </div>
          <div className="sub_categories">
            <div className="staging">
              <div className="staging_overlay" />
              <div className="staging_text">
                <div className="design_subtitle">
                  <Link to="/design/staging">
                    <h2>Staging</h2>
                  </Link>
                </div>
                <p>
                  We will bring our expertise and experience to you, and
                  together create a beautifully designed space. Service
                  available for home, office, or anything in between.
                </p>
                <Link to="/design/staging">
                  <button>Learn More</button>
                </Link>
              </div>
            </div>
            <div className="plant_care">
              <div className="plant_care_overlay" />
              <div className="plant_care_text">
                <div className="design_subtitle">
                  <Link to="/design/plant-care">
                    <h2>Plant Care</h2>
                  </Link>
                </div>
                <p>
                  Let us take care of the ongoing maintenance your plants
                  require. We'll send a team to your space every week to make
                  sure your new green friends are thriving.
                </p>
                <Link to="/design/plant-care">
                  <button>Learn More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container_footer">
          <div className="container_contact_info">
            <h3>SOIL & WATER</h3>
            <p>
              123 Main St.
              <br />
              Anytown, USA
              <br />
              87654
            </p>
            <p>(987) 654-3210</p>
          </div>
          <div className="container_social">
            <img src={fb} alt="" />
            <img src={insta} alt="" />
            <img src={twitter} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Designs;
