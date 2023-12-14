import React, { useEffect, useState } from "react";
import "../css/style.css";
import axios from "axios";
import "../css/font-awesome-4.7.0/css/font-awesome.min.css";
import logo from "../img/logo.png";
import img1 from "../img/4.jpg";
import messenger from "../img/messenger.png";
import { useNavigate } from "react-router-dom";
import getAPI from "./config/api_url";

const Nav = () => {
  // States
  const [searchQ, setSearchQ] = useState("");
  const [tags, setTags] = useState([]);
  const [showSearchPopup, setShowSearchPopup] = useState(false);

  // History
  const navigate = useNavigate();

  const onChange = (e) =>{
    const { value } = e.target;
    setSearchQ(value.replace(' ',''));
    
    if(value){
      if(value[0] === '#' || value[0] === '@'){
        if(value.length >=2){

          axios({
            url: `${getAPI()}/post/tags?q=${value.replace('#', '').replace('@', '')}`,
            method: "GET",
          })
            .then(async (res) => {
             // Waiting for the data before proceeding
             const data = await res.data;
             setTags(data.tags);
            })
            .catch((err) => {
              const res = err.response;
              if (res) {
                const data = res.data;
                console.log(data);
              } else {
                console.log(err);
              }
            });
        }
      }
    }
  }

  const toggleSearchPopup = (e)=>{
    e.preventDefault();
    setShowSearchPopup(!showSearchPopup);
  }

  const submitHandler = (e, tag=null, isMobile=false) => {
    e.preventDefault();

    // If we are in mobile view
    if(isMobile){
      // Don't show search popup
      toggleSearchPopup(e);
      // Reset the tags array
      setTags([])
    }

    // If autocomplete tag is clicked, set the search Query to the clicked tag
    if(tag){
      // Set the search query value in the localstorage to use in the search page
      localStorage.setItem('searchQuery', JSON.stringify({isTag: true, q: tag}))

      setSearchQ(`#${tag}`)
    }else{
      // Set the search query value in the localstorage to use in the search page
      localStorage.setItem('searchQuery', JSON.stringify({isTag: false, q: searchQ}))
    }
    
    
    // Redirecting the user
    navigate(`/search`);
  }
  useEffect(()=>{
    // console.log('searchQ:', searchQ);
  }, [searchQ, showSearchPopup])

  const renderSearchPopup = ()=>{
    return <div className="search-popup" style={showSearchPopup ? {display: 'flex'} : {display: 'none'}}>
      <button className="close" onClick={toggleSearchPopup}><p>X</p></button>
      <input type="text" placeholder="Search" onChange={onChange} />
      <button
        style={
          searchQ ? { display: "flex" } : { display: "none" }
        }
        onClick={(e)=>{
          submitHandler(e, null, true)
        }}
        type="submit"
        className="mobile-submit-search"
      >
        <i className="fa fa-arrow-right"></i>
      </button>

      <div className="mobile-autocomplete">
        {searchQ.length >= 2 && tags.map((i, ind) =>{
          if (searchQ[0] === '#' || searchQ[0] === '@'){
            return <div key={ind}><p onClick={(e)=>{
              submitHandler(e, i, true)
            }}><span>#</span>{i}</p></div>
          }else {
            return <></>
          }
        })}
      </div>
    </div>
  }

  return (
    <div className="nav">
      {/* Mobile Navigation */}
      <div className="mobile-nav">
        <a className="active" href="/home">
          <i className="fa fa-home"></i>
        </a>
        <a href="/home">
          {" "}
          <i className="fa fa-group"></i>
        </a>
        <a href="/home">
          {" "}
          <img className="cta-img" src={messenger} alt="messenger" />
          <span className="noti">4</span>
        </a>
        <a href="/home">
          <i className="fa fa-clock-o"></i>
          <span className="noti">48</span>
        </a>
        <a href="/home" onClick={toggleSearchPopup}>
          <i className="fa fa-search"></i>
        </a>
        <a href="/home">
          <div className="ham-nav">
            <div className="openNav">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </a>

        {renderSearchPopup()}
      </div>
      {/* Desktop navigation */}
      <div className="desktop-nav">
        <div className="logo">
          <a href="/">
            <img src={logo} alt="facebook logo" />
          </a>
        </div>
        <div className="search">
          <button className="max-desktop-search-btn">
            {" "}
            <i className="fa fa-search"></i>
          </button>
          <button className="min-desktop-search-btn" onClick={toggleSearchPopup}>
            {" "}
            <i className="fa fa-search"></i>
          </button>
          <input type="text" placeholder="Search" onChange={onChange} />
          <button
            style={
              searchQ ? { display: "flex" } : { display: "none" }
            }
            onClick={submitHandler}
            type="submit"
            className="submit-search"
          >
            <i className="fa fa-arrow-right"></i>
          </button>

          <div className="autocomplete">
            {searchQ.length >= 2 && tags.map((i, ind) =>{
              if (searchQ[0] === '#' || searchQ[0] === '@'){
                return <div key={ind}><p onClick={(e)=>{
                  submitHandler(e, i)
                }}><span>#</span>{i}</p></div>
              }else{
                return <></>
              }
            })}
          </div>
        </div>

        <div className="ham-nav">
          <div className="openNav">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </div>
        <div className="nav-widgets">
          <a href="/home" className="active">
            {" "}
            <i className="fa fa-home"></i>
          </a>
          <a href="/home">
            {" "}
            <i className="fa fa-group"></i>
          </a>
        </div>
        <div className="redirect-links">
          <div className="profile">
            <a href="/home">
              <img src={img1} alt="profile" />
              <h3>Katlego</h3>
            </a>
            <a href="/home">
              <i className="fa fa-plus"></i>
            </a>
            <a href="/home">
              <img className="cta-img" src={messenger} alt="messenger" />
              <span className="noti">4</span>
            </a>
            <a href="/home">
              <i className="fa fa-clock-o"></i>
              <span className="noti">8</span>
            </a>
            <a href="/home">
              <i className="fa fa-chevron-down"></i>
            </a>
          </div>
        </div>

          {renderSearchPopup()}

      </div>
    </div>
  );
};

export default Nav;
