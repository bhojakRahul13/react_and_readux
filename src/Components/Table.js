import React, { useState, useEffect } from "react";
import axios from "axios";
import "./table.css";
import { Link } from "react-router-dom";


const Table = () => {
  const [posts, setPosts] = useState("");
  useEffect(() => {
    postData();
  }, []);

  const postData = async () => {
    try {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-4">
      <h1>Posts Details Component</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        
        {posts &&
          posts.map((post) => {
            return (
              <div class="col">
              <div key={post.id} className="card" style={{minHeight : 250, maxHeight:250}}>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text" >{post.body.slice(0,75)}...</p>
                </div>
                <div className="card-footer">
                <Link to={`/post/${post.id}`} className="btn btn-primary">
                    Read More...
                  </Link>
                  </div>
              </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Table;
