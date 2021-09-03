import React, {  useEffect } from "react";
import "./table.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getPosts} from '../store/Actions/PostAction';

const Table = () => {
  const  dispatch = useDispatch();
  const  posts = useSelector(state => state.posts.posts)
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <div className="container my-4">
      <h1>Posts Details Component</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        
        {posts &&
          (posts).map((post) => {
            return (
              <div className="col">
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
