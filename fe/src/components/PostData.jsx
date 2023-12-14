import React from "react";
import { useState } from "react";
import PostComp from "./PostComp";
import StatusComp from "./StatusComp";
import StoryComp from "./StoryComp";
import "../css/style.css";

function PostData({data, postsOnly, children}) {
  const [statusText, setStatusText] = useState("");
  const [inputValue, setInputValue] = useState(false);

  // Checking if the user is typing or not in order to display a button
  const checkInputValue = (e) => {
    if (e.target.value.trim() !== "") {
      setInputValue(true);
    } else {
      setInputValue(false);
    }
  };

  const addStatusInput = (e) => {
    checkInputValue(e);
    const value = e.target.value;
    setStatusText(value);
  };

  const addStatusButton = (e) => {
    data.unshift({
      name: "Katlego",
      img: '',
      surname: "Man",
      text: statusText,
      datePosted: "Just now",
      numOfComments: 0,
      likes: [],
      tags: [],
      comments: [],
    });

    console.log(data);

    e.preventDefault();
    setInputValue(false);
    setStatusText("");
  };

  const getPosts = (data) => {
    return {
      postImg: data.postImg,
      text: data.text,
      datePosted: data.datePosted,
      numOfComments: data.numOfComments,
      likes: data.likes,
      tags: data.tags,
      comments: data.comments,
    }
  }

  return (
    <div className="card-container">
      {children && <div> {children} </div>}
      {postsOnly ? data.map((person, ind) => (
        <PostComp
          key={ind}
          name={person.name}
          img={person.img}
          surname={person.surname}
          post={getPosts(person)}
        />
      )) : <>
        <StoryComp data={data} />
        <StatusComp
          name={data[0].name}
          addStatusInput={addStatusInput}
          addStatusButton={addStatusButton}
          statusText={statusText}
          inputValue={inputValue}
        />
        {data.map((person, ind) => (
          <PostComp
            key={ind}
            name={person.name}
            img={person.img}
            surname={person.surname}
            post={getPosts(person)}
          />
        ))}
      </>}
      
    </div>
  );
}

export default PostData;
