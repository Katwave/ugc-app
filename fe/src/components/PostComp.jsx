import React from "react";
import { useState } from "react";
import Comments from "./Comments";

import "../css/style.css";
import "../css/font-awesome-4.7.0/css/font-awesome.min.css";

export default function PostComp(props) {
  const [showMenu, setShowMenu] = useState(false);

  const numFormatter = (num) => {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
    } else if (num > 1000000 && num < 999999) {
      return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
    } else if (num > 1000000000) {
      return (num / 1000000000).toFixed(1) + "B"; // convert to B for number from > 1 billion
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }

  const toggleMenu = () => {
    if (showMenu === true) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  const commentStyle = () => {
    let comments = props.post.comments;

    if(comments.length >= 1){
      if (comments[0].length >= 1) {
        return { borderBottom: "2px solid #ddd" };
      } else {
        return { borderBottom: "none" };
      }
    }
  };

  const statusText = () => {
    let text = props.post.text;
    let image = props.post.postImg;
    if (image) {
      return <p> {text} </p>;
    } else {
      return <p className="status-text"> {text} </p>;
    }
  };

  const statusImageContainer = () => {
    let image = props.post.postImg;
    if (image) {
      return (
        <div className="status-img">
          <a href="/image">
            <img src={image} alt="contact" />
          </a>
        </div>
      );
    } else {
      return (
        <div style={{ display: "none" }} className="status-img">
          <a style={{ display: "none" }} href="/image">
            <img
              style={{ display: "none" }}
              src={image}
              alt="contact"
            />
          </a>
        </div>
      );
    }
  };

  const renderPost = ()=>{
    if(props.post.likes){
      return <div className="card">

      <div className="profile">
        <div className="prof-img">
          <a href="/profile-pic">
            
            {props.img ? (<img src={props.img} alt="contact" />) : <p>KM</p>}
            
          </a>
        </div>
        <div className="prof-info">
          <h3>
            <a href="/profile">{`${props.name} ${props.surname}`}</a>
          </h3>
          <p>{props.post.datePosted}</p>
        </div>
        <div className="post-menu">
          <p onClick={toggleMenu}>
            
            <i className="fa fa-ellipsis-h"></i>
          </p>
          <div className={showMenu ? "show-menu" : "hide-menu"}>
            <span></span>
            <a href="/home">Home page</a>
            <a href="/home">Home page</a>
            <a href="/home">Home page</a>
          </div>
        </div>
      </div>

      <div className="status">{statusText()}</div>
      {statusImageContainer()}
      <div className="feedback">
          <div className="reactions">
            <p className="emojis">
              <i className="fa fa-thumbs-o-up"></i>
              <i className="fa fa-heart next"></i>
              {/* <span className="copied-emojis">🤗</span> */}
            </p>
            <p className="num-of-likes">
              {numFormatter(props.post.likes.length)} 
              <span className="hide-on-mobile-likes"> people like this</span>
            </p>
          </div>
          <div className="comments">
            <p>
              
              {numFormatter(props.post.comments.length)}
              {
                props.post.comments.length > 1 || props.post.comments.length === 0
                  ? <span> Comments</span> 
                  : <span> Comment</span>
            }
            </p>
          </div>
        </div>

      <div style={commentStyle()} className="like-comm-share">
        <a href="/home">
          <i className="fa fa-thumbs-o-up"></i>
          <span className="hide-on-mobile">Like</span>
        </a>
        <a href="/home">
          <i className="fa fa-comment"></i>
          <span className="hide-on-mobile">Comment</span>
        </a>
        <a href="/home">
          <i className="fa fa-mail-forward"></i>
          <span className="hide-on-mobile">Share</span>
        </a>
      </div>
      {/* Comments */}
      {props.post.comments.length > 0 && (
        <Comments
          comments={props.post.comments}
          surname={props.surname}
          name={props.name}
        />
      )}
    </div>
    }
  }

  return renderPost();
}