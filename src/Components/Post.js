import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import {getSinglePost,getComments,getUser} from '../store/Actions/PostAction';

const Post = () => {
  
  const dispatch = useDispatch();
  const { id } = useParams();
  const singlePost = useSelector(state => state.postById.postByid);
  const comments = useSelector(state => state.comments.comment);
  const user = useSelector(state => state.user.user);

   useEffect(() => {
      dispatch(getSinglePost(id))
    }, [id,dispatch])

    useEffect(() => {
      dispatch(getComments(singlePost));
      dispatch(getUser(singlePost))
    }, [dispatch,singlePost])


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
          <strong>userName :</strong>
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
