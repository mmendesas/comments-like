import React, { Component } from 'react';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'https://i.pravatar.cc/150?u=003'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Pedro Orestes',
              avatar: 'https://i.pravatar.cc/150?u=002'
            },
            content: 'Conteúdo do comentário'
          }
        ]
      }
    ]
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
