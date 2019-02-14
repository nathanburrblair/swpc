import React, { Component } from "react";
import "./Containers.css";
import { Link } from "react-router-dom";

class Containers extends Component {
  componentDidMount() {
    const movingWords = document.querySelectorAll(".container_subtitle");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.0
    };

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("container_subtitle");
        } else {
          entry.target.classList.remove("container_subtitle");
        }
      });
    }, options);

    movingWords.forEach(word => {
      observer.observe(word);
    });
  }

  render() {
    return (
      <div className="container_container">
        <div className="containers_content_container">
          <div className="container_intro">
            <h1>Containers To Love</h1>
            <p>
              The perfect plant belongs inside an equally impressive container. We select only the finest handcrafted containers so you'll want to proudly put them on display. Browse our online store or come see us in person to talk with one of our professionals.
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
                  Naturally beautiful terracotta is always a good choice for a container. Our impressive selection will meet any need, and look fabulous in the process.
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
                  Naturally beautiful terracotta is always a good choice for a container. Our impressive selection will meet any need, and look fabulous in the process.
                </p>
                <Link to="/containers/terracotta">
                  <button>Shop Concrete</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Containers;
