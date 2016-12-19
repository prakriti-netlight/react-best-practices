import React, { Component } from 'react';

class BadComponent extends Component {
  render() {
    const posts = [
      { title: 'Bad Code', description: 'React + Codepub = awesome.' },
      { title: 'Bad Code', description: 'React Best Practices.' },
      { title: 'Bad Code', description: 'Hope you learn some useful stuff in this meetup.' }
    ];
    let mainTitle;
    if (posts) {
      mainTitle = 'Welcome to React Best Practices Christmas Edition';
    }
    else {
      mainTitle = 'Nothing to show';
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src="/images/logo.png" className="App-logo" alt="logo" />
          <h2>{mainTitle}</h2>
        </div>
        {posts.map((post, index) => {
          return (
            <div key={index}>
              <h2>{post.title}</h2>
              <p className="App-intro">{post.description}</p>
            </div>
          );
        }) }
      </div>
    );
  }
}

export default BadComponent;
