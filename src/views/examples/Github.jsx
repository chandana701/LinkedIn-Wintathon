import React, { Component } from 'react';
import ReactGithubCalendar from '@axetroy/react-github-calendar';

export default class App extends Component {
  render() {
    return (
      <div>
        hello world
        <ReactGithubCalendar name="axetroy" />
      </div>

    );
  }
};