import React from "react";

export default function Contacts({ img }) {
  return (
    <a href="/home">
      {" "}
      <img src={img} alt="profile pic" />{" "}
      <span className="outside">
        {" "}
        <div></div>{" "}
      </span>
      <div className="content">
        <h3>Katlego Me</h3>
      </div>
    </a>
  );
}
