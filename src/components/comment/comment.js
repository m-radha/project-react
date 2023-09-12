import React, { useState } from 'react';

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={handleComment}>Comment</button>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comment;
