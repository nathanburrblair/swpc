import React, { Component } from "react";
import "./ProductPage.css";
import axios from "axios";
import fb from "../../../images/facebook-logo.svg";
import insta from "../../../images/instagram.svg";
import twitter from "../../../images/twitter.svg";

class ProductPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
      editToggle: false
    };

    this.handleEditToggle = this.handleEditToggle.bind(this);
    this.handleConfirmDetails = this.handleConfirmDetails.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        `/api/plants/${this.props.match.params.category}/${
          this.props.match.params.id
        }`
      )
      .then(response => {
        console.log("le response", response);
        this.setState({
          product: response.data
        });
      });
  }

  handleEditToggle() {
    this.setState({
      editToggle: true
    });
  }

  handleConfirmDetails() {
    this.setState({
      editToggle: false
    });
  }

  handleAddToCart() {
    // Add to cart
  }

  render() {
    //auto-resizes the text area
    document.addEventListener(
      "mouseover",
      function(event) {
        if (event.target.tagName.toLowerCase() !== "textarea") return;
        autoExpand(event.target);
      },
      false
    );

    var autoExpand = function(field) {
      field.style.height = "inherit";

      var computed = window.getComputedStyle(field);

      var height =
        parseInt(computed.getPropertyValue("border-top-width"), 10) +
        parseInt(computed.getPropertyValue("padding-top"), 10) +
        field.scrollHeight +
        parseInt(computed.getPropertyValue("padding-bottom"), 10) +
        parseInt(computed.getPropertyValue("border-bottom-width"), 10);

      field.style.height = height + "px";
    };

    let singleProduct = this.state.product.map((prod, i) => {
      return (
        <div key={i} className="outer_product">
          <div className="single_product">
            {this.state.editToggle ? (
              <div className="editing_product">
                <img className="prod_image" src={prod.product_image} alt="" />
                <div>
                  <input
                    className="prod_name"
                    type="text"
                    defaultValue={prod.name}
                  />
                </div>
                <div>
                  <input
                    className="prod_price"
                    type="text"
                    defaultValue={prod.price}
                  />
                </div>
                <div>
                  <textarea
                    className="prod_description"
                    type="text"
                    defaultValue={prod.product_description}
                  />
                </div>
                <button onClick={this.handleConfirmDetails}>Confirm</button>
              </div>
            ) : (
              <div className="not_editing_product">
                <div className="image_container">
                  <img className="prod_image" src={prod.product_image} alt="" />
                </div>
                <div className="info_container">
                  <h1>{prod.name}</h1>
                  <h3>${prod.price}</h3>
                  <p>{prod.product_description}</p>
                  <button onClick={this.handleAddToCart}>Add to Cart</button>
                  {/* <button onClick={this.handleEditToggle}>Edit</button> */}
                </div>
              </div>
            )}
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
    });

    return <div>{singleProduct}</div>;
  }
}

export default ProductPage;
