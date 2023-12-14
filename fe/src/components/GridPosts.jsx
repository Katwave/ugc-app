import React from "react";
import { useState } from "react";
import PostComp from "./PostComp";

function PostData({data, postsOnly, children}) {
  const [showPostPopup, setShowPostPopup] = useState(false);
  const [postToPreview, setPostToPreview] = useState({});

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

  const getPostInfo = (data) => {
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

  const togglePostPopup =()=>{
    setShowPostPopup(!showPostPopup)
  }

  const postPopup = (post) => {
    console.log('Show Post Popup', post);
    setPostToPreview(post);
  }

  return (
    <div className="grid-post-cont">
       {children && <div> {children} </div>}

       {/* {postsOnly && data.map((person, ind) => (
        <PostComp
          key={ind}
          name={person.name}
          img={person.img}
          surname={person.surname}
          post={getPosts(person)}
        />
      ))} */}

      <div className="grid-layout">
        {data.map((post, ind) => (
            <div className="img-cont" key={ind}>
                <img src={post.postImg} alt="Post" />
                <div className="post-stats" onClick={()=>{
                    togglePostPopup();
                    postPopup(post)
                }}>
                    <p><i className="fa fa-heart next"></i> <span>{numFormatter(post.likes.length)}</span></p>
                    <p><i className="fa fa-comment next"></i> <span>{numFormatter(post.comments.length)}</span></p>
                </div>
            </div>
        ))}
      </div>
      
      <div className="post-popup" style={showPostPopup ? {display: 'flex'} : {display: 'none'}}>
            <div className="close-post-popup" onClick={togglePostPopup}>
                <p>X</p>
            </div>
            <PostComp
                name={postToPreview.name}
                img={postToPreview.img}
                surname={postToPreview.surname}
                post={getPostInfo(postToPreview)}
            />
        </div>
    </div>
  );
}

export default PostData;
