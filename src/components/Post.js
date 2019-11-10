import React from 'react';

import Comment from './Comment';

const Post = ({ data }) => {
  const { author, date, content, comments } = data;
  return (
    <div className="post">
      <div className="post-author">
        <img className="avatar" src={author.avatar} />
        <div className="author-info">
          <div>{author.name}</div>
          <span>{date}</span>
        </div>
      </div>
      <div className="post-message">
        <p>{content}</p>
      </div>
      {comments.length && (
        <>
          <hr />
          <ul>
            {comments.map(comment => (
              <Comment key={comment.id} data={comment} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Post;
