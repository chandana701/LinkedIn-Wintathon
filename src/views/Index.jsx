
import React from "react";
// node.js library that concatenates classes (strings)

// javascipt plugin for creating charts

// import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  // Button,
  Card,
  CardHeader,
  CardBody,
  // NavItem,
  // NavLink,
  // Nav,
  // Progress,
  // Table,
  Container,
  Row,
  Col
} from "reactstrap";

import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


// core components
// import {
//   chartOptions,
//   parseOptions,
//   // chartExample1,
//   chartExample2
// } from "../variables/charts.jsx";

import Header from "../components/Headers/Header.jsx";
import { getUser } from "../assets/api.ts"
import Salary from "./Salary"
import Github from "./examples/Github"

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      gitName: "",
      profileData: {},
      salary: {},
      activeNav: 1,
      chartExample1Data: "data1",
      drop: false,
      graphType: "salary"
    }
  }


  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
    let wow = () => {
      console.log(this.state);
    };
    wow.bind(this);
    setTimeout(() => wow(), 1000);
    // this.chartReference.update();
  };
  componentDidMount = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    this.setState({
      userName: params.get("userName")
    })
    console.log(params.get("userName"))
    getUser(params.get("userName")).then(response => {
      console.log(response)
      this.setState({
        profileData: response.userProfile,
        salary: response.userProfile['salary'],
        gitName: response.userProfile['general']['git']
      })
      console.log(response.userProfile['salary'])
    })
  }
  toggle = () => {
    this.setState({
      drop: !this.state.drop
    })
  }
  changeGraph = (event) => {
    this.setState({
      graphType: event.target.value
    })
  }

  render() {
    var graph = ""
    if (this.state.graphType === "salary") {
      graph = (<Salary
        salary={this.state.salary}
        userName={this.state.userName}
      />)
    }
    if (this.state.graphType === "git") {
      graph = (<Github
        userName={this.state.gitName} />)
    }
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="mb-5 mb-xl-0" xl="8">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <Row className="align-items-center">
                    <div className="col">
                      <h2 className="text-white mb-0">Statistical View</h2>
                    </div>
                    <div className="col">
                      <Dropdown isOpen={this.state.drop} toggle={this.toggle}>
                        <DropdownToggle caret>
                          Dropdown</DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem onClick={this.changeGraph} value="salary">Salary</DropdownItem>
                          <DropdownItem onClick={this.changeGraph} value="git">Github</DropdownItem>

                        </DropdownMenu>
                      </Dropdown>

                      {/* <Nav className="justify-content-end" pills>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 1
                            })}
                            href="#pablo"
                            onClick={e => this.toggleNavs(e, 1)}
                          >
                            <span className="d-none d-md-block">Month</span>
                            <span className="d-md-none">M</span>
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames("py-2 px-3", {
                              active: this.state.activeNav === 2
                            })}
                            data-toggle="tab"
                            href="#pablo"
                            onClick={e => this.toggleNavs(e, 2)}
                          >
                            <span className="d-none d-md-block">Week</span>
                            <span className="d-md-none">W</span>
                          </NavLink>
                        </NavItem>
                      </Nav> */}
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart">
                    {graph}
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="4">

            </Col>
          </Row>

        </Container>
      </>
    );
  }
}

export default Index;
