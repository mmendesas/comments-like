import React from 'react';

const Post = ({ data }) => {
  const { author, date, content } = data;
  return (
    <div className="post">
      <div className="post-author">
        <img src={author.avatar} />
        <div className="author-info">
          <div>{author.name}</div>
          <span>{date}</span>
        </div>
      </div>
      <div className="post-message">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Post;
