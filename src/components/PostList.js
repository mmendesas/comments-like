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
        content: 'Pessoal, alguém sabe se MM está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Pedro Orestes',
              avatar: 'https://i.pravatar.cc/150?u=002'
            },
            content:
              'Soube que eles abriram vagas de Frontend e Backend, mas com foco bem especifico em Nodejs e Reactjs. Seria legar ter alguma experiencia com essas tecnologias'
          },
          {
            id: 2,
            author: {
              name: 'Carlos Chimas',
              avatar: 'https://i.pravatar.cc/150?u=010'
            },
            content:
              'Um amigo meu começou a trabalhar la faz uns 2 meses, esta adorando, disse que as equipes sao boas, o pessoal é simpatico e todos os dias os diferentes desafios ajudam ele a crescer'
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
