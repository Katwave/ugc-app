import React from "react";
import { Component } from "react";

import "../css/font-awesome-4.7.0/css/font-awesome.min.css";

class StoryComp extends Component {
  render() {
    return (
      <div className="story-comp">
        <div className="stories">
          <a className="my-story" href="/home">
            <div className="my-story-img">
              <img src={this.props.data[0].img} alt="profile" />
            </div>
            <div className="my-story-content">
              <div className="add">
                <span>
                  <i className="fa fa-plus"></i>
                </span>
              </div>
              <h3>
                Create a <br />
                Story
              </h3>
            </div>
          </a>
          {this.props.data.map((item, ind) => (
            <a className="others-story" href="/home" key={ind}>
              <img src={item.img} alt="profile" />
              <div className="opacity"></div>
              <div className="profile">
                <div className="profile-content">
                  <div className="img">
                    <img src={item.img} alt="profile" />
                  </div>
                  <h3>
                    {item.name} <br /> {item.surname}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="more-status">
          <button>
            <i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default StoryComp;
