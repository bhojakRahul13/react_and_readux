import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Post = () => {
  const { id } = useParams();

  const [comments, setComments] = useState("");
  const [user, setUser] = useState("");
  const [post, setPosts] = useState("");

  useEffect(() => {
    CommetData(post);
    UserData(post);
  }, [post]);

  useEffect(() => {
    GetPosts(id);
  }, [id]);

  const GetPosts = async (id) => {
    try {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      setPosts(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const UserData = async (post) => {
    try {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${post.userId}`
      );
      setUser(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const CommetData = async (post) => {
    try {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
      );
      setComments(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container">
      <div>
        <Link to="/" className="btn btn-primary">
          Back to Home page
        </Link>
      </div>
      <ul className="list-group" key={user.id}>
        <h1>User {id}</h1>
        <li className="list-group-item">
          <strong>user-Name :</strong>
          {user.name}
        </li>
        <li className="list-group-item">
          <strong>userEmail :</strong>
          {user.email}  
        </li>
      </ul>

      {comments &&
        comments.map((data) => {
          return (
            <ul className="list-group" key={data.id}>
              <h1>comments Details by posts id ={id}</h1>
              <li className="list-group-item">
                <strong>Body: </strong> {data.body}
              </li>
              <br />
            </ul>
          );
        })}
    </div>
  );
};

export default Post;
