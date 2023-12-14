import React, { useEffect, useState,u } from "react";
import axios from "axios";
import getAPI from "../config/api_url";
import GridPosts from "../GridPosts";
import { useLocation } from "react-router-dom";

function SearchPage() {
    // Get search query from local storage
    const query = JSON.parse(localStorage.getItem('searchQuery'))

    const location = useLocation()

    // Use states
    const [q, setQ] = useState('');
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Get the posts from backend based on the search query
    const getPosts = ()=>{
        setQ(query.q)

        axios({
            url: `${getAPI()}/post/search?q=${q}`,
            method: "GET",
          })
            .then(async (res) => {
             // Waiting for the data before proceeding
             const data = await res.data;
             setPosts(data.posts);

             setLoading(false);                 
            })
            .catch((err) => {
              setLoading(false);        

              const res = err.response;
              if (res) {
                const data = res.data;
                console.log(data);
              } else {
                console.log(err);
              }
            });
    }

    // Use effect
    useEffect(getPosts, [location.key, q])

    // The heading for the tags
    const tagsHeading = ()=>{
      if(query.isTag){
        return (<div className="tags-heading">
          <div className="tag-design">
            <p>#</p>
          </div>
          <div className="tag-info">
            <p className="tag-text">{q}</p>
            <p className="tag-post-len">{posts.length} posts</p>
          </div>
      </div>)
      } 
    }
    
    return(
        <>
          {posts.length >= 1 ? 
          <GridPosts data={posts} postsOnly={true} children={tagsHeading()} /> 
          : 
            loading ? 
            <div className="loader">
              <p><i className="fa fa-instagram next"></i></p>
            </div>
            : 
            <div>
              <h1>No posts found!</h1>
            </div>}
        </>
    )
}

export default SearchPage;