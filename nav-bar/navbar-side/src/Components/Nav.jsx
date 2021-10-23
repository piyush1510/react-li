import React, { Component } from "react";
import anime from "animejs/lib/anime.min.js";
import "./Nav.css";
import { MdMenu, MdClose, MdHome, MdLogin, MdAccountCircle, MdEmojiPeople } from "react-icons/md";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false,playing:false };
  }
  close = () => {
    if(this.state.playing) return;
    this.setState({playing:true, open: false,})
    anime({
      targets: ".drawer",
      right:-400,
      opacity: 0,
      easing: "easeInOutCubic",
    });
    anime({
      targets: ".open-button",
      opacity: 1,
      easing: "easeInOutCubic",
      duration: 400,
    });
    anime({
      targets:'.cover',
      opacity:0,
      easing: "easeInOutCubic",
      complete:()=>{
        this.setState({playing:false });
      }
    })
  };
  open = () => {
    if(this.state.playing) return;
    this.setState({playing:true,open:true });
    anime({
      targets: ".drawer",
      right: 0,
      opacity: 1,
      easing: "easeInOutCubic",
    });
    anime({
      targets: ".open-button",
      opacity: 0,
      easing: "easeInOutCubic",
      duration: 400,
      complete: () => {
        this.setState({playing:false,open:true})
      },
    });
    anime({
      targets:'.cover',
      opacity:1,
      easing: "easeInOutCubic",
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
        <div className="cover" style={{display:(this.state.open || this.state.playing?'block':'none')}} onClick={this.close}></div>
      </nav>
    );
  }
}
