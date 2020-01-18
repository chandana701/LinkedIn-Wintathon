
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

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      profileData: {},
      salary: {},
      activeNav: 1,
      chartExample1Data: "data1"
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
        salary: response.userProfile['salary']
      })
      console.log(response.userProfile['salary'])
    })
  }


  render() {
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
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Overview
                      </h6>
                      <h2 className="text-white mb-0">Statistical View</h2>
                    </div>
                    <div className="col">
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
                  {/* Chart */}
                  <div className="chart">
                    <Salary
                      salary={this.state.salary}
                      userName={this.state.userName}
                    />
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
