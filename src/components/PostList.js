import React, { Component } from 'react';

import Post from './Post';
import { getPosts } from '../services/api';

class PostList extends Component {
  state = {
    posts: getPosts()
  };

  render() {
    const { posts } = this.state;
    return (
      <ul className="post-list">
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </ul>
    );
  }
}

export default PostList;
