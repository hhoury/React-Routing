import React, { Component } from "react";
import "./Blog.css";
import Posts from "./Posts/Posts";
import NewPost from "../Blog/NewPost/NewPost";
import FullPost from './FullPost/FullPost';
import { Route, NavLink } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/"
                 exact
                 activeClassName='my-active'
                 activeStyle={{
                   color: '#fa923f',
                   textDecoration: 'underline'
                 }}>Home</NavLink>
              </li>
              <li>
                <NavLink to={{ pathname: "/new-post", hash: "#submit", search:'?quick-submit=true' }}>
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <Posts/>}/> */}
        <Route exact path="/" component={Posts} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/:id" component={FullPost} />
      </div>
    );
  }
}

export default Blog;
