import React from 'react';

const Comment = ({ data }) => (
  <div className="comment">
    <img className="comment-img" src={data.author.avatar} />
    <div className="comment-content">
      <strong className="comment-author">{data.author.name}</strong>
      {data.content}
    </div>
  </div>
);

export default Comment;
