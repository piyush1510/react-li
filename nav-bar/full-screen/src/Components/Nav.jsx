import React, { Component } from "react";
import anime from "animejs/lib/anime.min.js";
import "./Nav.css";
import { MdMenu, MdClose, MdHome, MdLogin, MdAccountCircle, MdEmojiPeople } from "react-icons/md";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  close = () => {
    this.setState({ open: false });
    anime({
      targets: ".drawer",
      left: "100vw",
      opacity: 0,
      easing: "easeInOutCubic",
    });
    anime({
      targets: ".open-button",
      opacity: 1,
      easing: "easeInOutCubic",
      duration: 400,
    });
  };
  open = () => {
    anime({
      targets: ".drawer",
      left: "0vw",
      opacity: 1,
      easing: "easeInOutCubic",
    });
    anime({
      targets: ".open-button",
      opacity: 0,
      easing: "easeInOutCubic",
      duration: 400,
      complete: () => {
        this.setState({ open: true });
      },
    });
  };
  render() {
    return (
      <nav>
        <h1 className="logo">
          &lt;<span>Pv</span>/&gt;
        </h1>
        <button
          className="btn open-button"
          onClick={this.open}
          style={{ display: this.state.open ? "none" : "block" }}
        >
          <MdMenu />
        </button>
        <div className="drawer">
            <ul className="drawer-menu">
                <li className="drawer-links">
                    <a href="/"><h1><MdHome/> home</h1></a>
                    
                </li>
                <li className="drawer-links">
                    <a href="/"><h1><MdLogin/> login</h1></a>
                    
                </li>
                <li className="drawer-links">
                    <a href="/"><h1><MdAccountCircle/> signup</h1></a>
                    
                </li>
                <li className="drawer-links">
                    <a href="/"><h1><MdEmojiPeople/> about</h1></a>
                    
                </li>
            </ul>
          <button className="btn close-button" onClick={this.close}>
            <MdClose />
          </button>
        </div>
      </nav>
    );
  }
}
