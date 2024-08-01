import React, { useState } from 'react';

const CommentForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const comment = { title, body };
    localStorage.setItem(`comment-${Date.now()}`, JSON.stringify(comment));
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default CommentForm;
