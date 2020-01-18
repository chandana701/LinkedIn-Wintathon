import React, { Component } from 'react';
import ReactGithubCalendar from 'react-github-calendar';
import {

  Card,

} from "reactstrap";

export default class App extends Component {
  render() {
    return (
      <div>
        <Card className="shadow">
          <ReactGithubCalendar username={this.props.userName} />
        </Card>
      </div>

    );
  }
};