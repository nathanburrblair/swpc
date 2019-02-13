import React, { Component } from "react";
import "./Plants.css";
// import Slider from "../Slider/Slider";
import axios from "axios";
// import Plant from "../../components/Plant/Plant";
import { Link } from "react-router-dom";

class Plants extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allPlants: []
    };
  }

  componentDidMount() {
    axios.get("/api/plants").then(res =>
      this.setState({
        allPlants: res.data
      })
    );
    const movingWords = document.querySelectorAll(".plant_subtitle");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.0
    };

    let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          entry.target.classList.add("plant_subtitle");
        } else {
          entry.target.classList.remove("plant_subtitle");
        }
      });
    }, options);

    movingWords.forEach(word => {
      observer.observe(word);
    });
  }

  render() {
    // let displayAllPlants = this.state.allPlants.map((plant, i) => {
    //   return <Plant key={i} plant={plant} />;
    // });

    return (
      <div className="plant_container">
        {/* <div className="slider_container">
          <Slider />
        </div> */}
        {/* <div className="all_plant_list">{displayAllPlants}</div> */}
        <div className="plants_content_container">
          <div className="plant_intro">
            <h1>Plants To Love</h1>
            <p>
              Live plants have the power to transform your space into something
              better. Tour our online shop or come visit us in person. We'll set
              you up with something just right.
            </p>
          </div>
          <div className="sub_categories">
            <div className="orchid">
              <div className="orchid_overlay" />
              <div className="orchid_text">
                <div className="plant_subtitle">
                  <Link to="/plants/orchid">
                    <h2>Orchids</h2>
                  </Link>
                </div>
                <p>
                  We only sell the most beautiful orchids in the world. We have
                  an impressive breadth of selection, perfect for any space.
                </p>
                <Link to="/plants/orchid">
                  <button>Shop Orchids</button>
                </Link>
              </div>
            </div>
            <div className="succulent">
              <div className="succulent_overlay" />
              <div className="succulent_text">
                <div className="plant_subtitle">
                  <Link to="/plants/succulent">
                    <h2>Succulents</h2>
                  </Link>
                </div>
                <p>
                  Our selection of succulents is unrivaled. Come shop and chat with us for tips on how to care for these amazing little plants.
                </p>
                <Link to="/plants/succulent">
                  <button>Shop Succulents</button>
                </Link>
              </div>
            </div>
            <div className="bonsai">
              <div className="bonsai_overlay" />
              <div className="bonsai_text">
                <div className="plant_subtitle">
                  <Link to="/plants/bonsai">
                    <h2>Bonsai</h2>
                  </Link>
                </div>
                <p>
                  Our selection of bonsai trees is matched only by our knowledge of how to care for them. Come in and we'll share what we know.
                </p>
                <Link to="/plants/bonsai">
                  <button>Shop Bonsai</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Plants;
