import React, { Component } from "react";

import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import Contacts from "./Contacts";

export default class SideBars extends Component {
  render() {
    return (
      <div>
        <div className="left-sidebar">
          <a href="/home">
            {" "}
            <img src={img1} alt="profile pic" />{" "}
            <div className="content">
              <h3>Katlego Me</h3>
            </div>
          </a>
          <a href="/home">
            <i className="fa fa-flag-checkered"></i>
            <div className="content">
              <h3>Pages</h3>
              <div className="num-of-this">
                <span></span>
                <p>3 new</p>
              </div>
            </div>
          </a>
          <a href="/home">
            <i className="fa fa-users"></i>
            <div className="content">
              <h3>Friends</h3>
            </div>
          </a>
          <a href="/home">
            <i className="fa fa-group group"></i>
            <div className="content">
              <h3>Groups</h3>
              <div className="num-of-this">
                <span></span>
                <p>3 new</p>
              </div>
            </div>
          </a>
          <a href="/home">
            <i className="fa fa-chevron-down more"></i>
            <div className="content">
              <h3>See More</h3>
            </div>
          </a>

          <div className="shortcuts">
            <h4>Your Shortcuts</h4>
            <a href="/home">
              <img src={img2} alt="user" />
              <div className="content">
                <h3>Katlego Me</h3>
              </div>
            </a>
            <a href="/home">
              <img src={img3} alt="user" />
              <div className="content">
                <h3>Josh talks</h3>
              </div>
            </a>
            <a href="/home">
              <img src={img4} alt="user" />
              <div className="content">
                <h3>Hiphop lyrics</h3>
              </div>
            </a>
          </div>
        </div>
        <div className="right-sidebar">
          <div className="head">
            <h4>Contacts</h4>
            <button>
              {" "}
              <i className="fa fa-search"></i>{" "}
            </button>
          </div>
          <Contacts img={img1} />
          <Contacts img={img1} />
          <Contacts img={img1} />
          <div className="head birthday">
            <h4>Birthdays</h4>
          </div>
          <a href="/home">
            {" "}
            <i className="fa fa-gift"></i>{" "}
            <span className="outside">
              {" "}
              <div></div>{" "}
            </span>
            <div className="content">
              <p>
                <strong>David sechaba</strong> and <strong>3 others</strong>{" "}
                have birthdays today
              </p>
            </div>
          </a>
        </div>
      </div>
    );
  }
}
