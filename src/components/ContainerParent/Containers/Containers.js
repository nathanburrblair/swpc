import React, { Component } from "react";
import "./Containers.css";
import { Link } from "react-router-dom";
import fb from "../../../images/facebook-logo.svg";
import insta from "../../../images/instagram.svg";
import twitter from "../../../images/twitter.svg";

class Containers extends Component {
  componentDidMount() {
    // const movingWords = document.querySelectorAll(".container_subtitle");
    // const options = {
    //   root: null,
    //   rootMargin: "0px",
    //   threshold: 0.0
    // };
    // let observer = new IntersectionObserver(entries => {
    //   entries.forEach(entry => {
    //     if (entry.intersectionRatio > 0) {
    //       entry.target.classList.add("container_subtitle");
    //     } else {
    //       entry.target.classList.remove("container_subtitle");
    //     }
    //   });
    // }, options);
    // movingWords.forEach(word => {
    //   observer.observe(word);
    // });
  }

  render() {
    return (
      <div className="container_container">
        <div className="container_content_container">
          <div className="container_intro">
            <h1>Containers</h1>
            <p>
              The perfect plant belongs inside an equally impressive container.
              We select only the finest handcrafted containers so you'll want to
              proudly put them on display. Browse our online store or come see
              us in person to talk with one of our professionals.
            </p>
          </div>
          <div className="sub_categories">
            <div className="terracotta">
              <div className="terracotta_overlay" />
              <div className="terracotta_text">
                <div className="container_subtitle">
                  <Link to="/containers/terracotta">
                    <h2>Terracotta</h2>
                  </Link>
                </div>
                <p>
                  Naturally beautiful terracotta is always a good choice for a
                  container. Our impressive selection will meet any need, and
                  look fabulous in the process.
                </p>
                <Link to="/containers/terracotta">
                  <button>Shop Terracotta</button>
                </Link>
              </div>
            </div>
            <div className="concrete">
              <div className="concrete_overlay" />
              <div className="concrete_text">
                <div className="container_subtitle">
                  <Link to="/containers/concrete">
                    <h2>Concrete</h2>
                  </Link>
                </div>
                <p>
                  When you need something clean and modern, choose concrete.
                  It's sturdy, and the gray on green contrast looks amazing.
                </p>
                <Link to="/containers/concrete">
                  <button>Shop Concrete</button>
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

export default Containers;
