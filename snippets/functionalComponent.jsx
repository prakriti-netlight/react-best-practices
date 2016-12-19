import React, { PropTypes } from 'react';
const CodePub = (props) =>
  <div>
    <h1>{this.props.title || "(no title)"}</h1>
    <h2>{props.date}</h2>
  </div>;
CodePub.propTypes = {
title: PropTypes.string
};

