import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import './Blog.css';
import axios from '../../axios';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    componentDidMount() {

        axios.get('/posts')
        .then(response => {
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'Max'}
            })
            this.setState({posts: updatedPosts});
        })
        .catch(error => this.setState({error: true}));
    }
    postSelectedHandler =  (id) => {
        this.setState({selectedPostId: id});
    } 
    render () {
        let posts = <p style={{textAlign: 'center', color: 'red'}}>Something went wrong!!</p>;
        if(!this.state.error){
             posts = this.state.posts.map(post => {
                return <Post key={post.id}  title={post.title}
                clicked={() => this.postSelectedHandler(post.id)} author={post.author}/>
            });
        }
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                   {posts}
                </section>
            </div>
        );
    }
}

export default Blog;