import React, { PropTypes } from 'react';

// <GoodComponent posts={posts} /> in index.js''
const GoodComponent = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <img src="/images/logo.png" className="App-logo" alt="logo" />
        <h2>{props.posts ? 'Welcome to React Best Practices Christmas Edition' : 'Nothing to show'}</h2>
      </div>
      {props.posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </div>
  );
};

const Post = (props) => (
  <div>
    <h2>{props.post.title}</h2>
    <p>{props.post.description}</p>
  </div>
);

Post.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string
  }))
};

export default GoodComponent;
