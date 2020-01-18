
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  // FormGroup,
  Form,
  // Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import { getUser } from "../../assets/api.ts"
import UserHeader from "../../components/Headers/UserHeader.jsx";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      profileData: {}
    }
  }

  componentDidMount = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    this.setState({
      userName: params.get("userName")
    })
    getUser(params.get("userName")).then(response => {
      console.log(response)
      this.setState({
        profileData: response.userProfile,
      })
    })

  }

  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
              <Card className="card-profile shadow">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="rounded-circle"
                          src={require("../../assets/img/theme/team-4-800x800.jpg")}
                        />
                      </a>
                    </div>
                  </Col>
                </Row>
                <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                  <div className="d-flex justify-content-between">
                    <Button
                      className="mr-4"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Connect
                    </Button>
                    <Button
                      className="float-right"
                      color="default"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="sm"
                    >
                      Message
                    </Button>
                  </div>
                </CardHeader>
                <CardBody className="pt-10 pt-md-4">
                  <div className="text-center" style={{ paddingTop: "30px" }}>
                    <h3>
                      {this.state.userName}
                      <span className="font-weight-light">, 27</span>
                    </h3>
                    <div className="h5 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Bucharest, Romania
                    </div>
                    <div className="h5 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Computer Science
                    </div>
                    <hr className="my-4" />
                    <p>
                      Ryan — the name taken by Melbourne-raised, Brooklyn-based
                      Nick Murphy — writes, performs and records all of his own
                      music.
                    </p>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      Show more
                    </a>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="order-xl-1" xl="8">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="4">
                      <h3 className="mb-0">User Profile</h3>
                    </Col>
                    <Col xs="2" mr="1">
                      <Button
                        color="primary"
                        href={"/admin/index?userName=" + this.state.userName}

                        size="sm"
                      >
                        OverView
                      </Button>
                    </Col>

                    <Col xs="2" mr="1">
                      <Button
                        color="primary"
                        href={"/admin/detailView?userName=" + this.state.userName}
                        size="sm"
                      >
                        DetailView
                      </Button>
                    </Col>
                    <Col xs="2" mr="1">
                      <Button
                        color="primary"
                        href={"/admin/projects?userName=" + this.state.userName}

                        size="sm"
                      >
                        ProjectView
                      </Button>
                    </Col>


                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>

                    <div className="pl-lg-4">
                      <div className='title'>
                        <div>

                          <i className='fa fa-graduation-cap' style={{ float: "left", paddingTop: "7px", paddingRight: "20px" }} ></i>
                          <h2 style={{ color: "#0177b5" }}>EDUCATION</h2>
                        </div>

                        <div>
                          <div className='item' >
                            <h3>Indian Institute Of Technology <span >2010 - 2014</span></h3>
                            <p>UnderGraduate Degree in Computer Science</p>
                          </div>
                        </div>
                      </div>

                      <div className='title'>
                        <i className='fa fa-suitcase' style={{ float: "left", paddingTop: "7px", paddingRight: "20px" }}></i>
                        <h2 style={{ color: "#0177b5" }}>Experience</h2>
                        <div>
                          <div className='item' >
                            <h3>LinkedIn <span>2017 - Current</span></h3>
                            <p>Currently working as a Product Manager .Developing a product called RecruitIn to help the recruiters to gain overall knowledge about the candidate</p>
                          </div>

                          <div className='item' >
                            <h3>Microsoft <span>2014 - 2017</span></h3>
                            <p>Worked as Software Developer .Worked on Microsoft project management tool</p>
                          </div>
                        </div>
                      </div>

                      <div className='title'>
                        <i className='fa fa-book' style={{ float: "left", paddingTop: "7px", paddingRight: "20px" }}></i>
                        <h2 style={{ color: "#0177b5" }}>Projects</h2>
                        <div>
                          <div className='item' >
                            <h3>RecruitIn   <span>2019 - 2020</span></h3>
                            <p>RecruitIn helps recruiters to view the detail infomation of Applicant from both his likedin profile and github page</p>
                          </div>

                          <div className='item' >
                            <h3>LinkedIn Wintathon  <span>2018 - 2019</span></h3>
                            <p>Developed a User recommendation engine to help a user who is in search of jobs</p>
                          </div>
                        </div>
                      </div>


                    </div>


                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
