import React from 'react';
import ReactDOM from 'react-dom';
import GoodComponent from './goodCode';
import BadComponent from './badCode';
import DemoComponent from './demoCode';
import  { posts } from './posts';

ReactDOM.render(<GoodComponent posts={posts} />, document.getElementById('app'));