import React, { Component } from "react";
import "./SiteHeader.css";
import styled from "styled-components";
import navBars from "../../images/baseline_menu_black_18dp.png";
import MainNav from "../../components/MainNav/MainNav";
import { Link } from "react-router-dom";

const Header = styled.header`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  padding: 0 5vw 0 5vw;
  border-bottom: 1px solid #ededef;
  background-color: white; */
  position: absolute;
  display: block;
  width: 100%;
  height: 90px;
  z-index: 4;

  @media (min-width: 1000px) {
    height: 120px;
  }
`;

const Title = styled.h1`
  font-size: 16px;
  color: #131313;
  /* margin-top: 0px;
  margin-bottom: 0px; */
  margin: 0 0 0 0;
  font-family: "Krona One", sans-serif;
  text-align: left;

  :hover {
    transform: scale(1.1);
    transition: .25s;
  }
`;

class SiteHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.handleNavClick = this.handleNavClick.bind(this);
  }

  //responsible for opening and closing the nav
  handleNavClick() {
    this.setState(prev => ({
      visible: !prev.visible
    }));
  }

  render() {
    return (
      <div>
        <Header>
          <div className="contain_image">
            <Link to="/">
              <Title>SOIL + WATER</Title>
            </Link>
            <img
              className="image"
              src={navBars}
              onClick={this.handleNavClick}
              alt=""
            />
            {/* <ul className="desktop_menu">
              <li className="dropdown">
                <span>Plants</span>
                <ul className="about_menu">
                  <Link to="/plants/orchid"><li>Orchids</li></Link>
                  <Link to="/plants/succulent"><li>Succulents</li></Link>
                  <Link to="/plants/bonsai"><li>Bonsai</li></Link>
                </ul>
              </li>
              <li>Containers</li>
              <li>Design</li>
            </ul> */}
          </div>
        </Header>

        <div className="mobile_menu">
          <MainNav
            visible={this.state.visible}
            handleNavClick={this.handleNavClick}
          />
        </div>
      </div>
    );
  }
}

export default SiteHeader;
