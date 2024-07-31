
import React from 'react';
import './App.css';
import CommentForm from './components/CommentForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Post a Comment</h1>
      <CommentForm />
    </div>
  );
};

export default App;
