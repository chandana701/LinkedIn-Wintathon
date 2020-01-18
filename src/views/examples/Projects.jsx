import React from "react";
import { Modal, ModalBody, ModalHeader } from "shards-react";
// reactstrap components
import {
  // Badge,
  Card,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  // UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header.jsx";
import { getUser } from "../../assets/api.ts"
import PieChart from "../Lang"

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      userName: "",
      profileData: {},
      techStack: {}
    }
  }
  changeState = (event) => {
    console.log(event)
    this.setState({
      open: !this.state.open,
      techStack: event === undefined ? '' : this.state.profileData["projects"][event.target.name]["tech"]
    })
  }


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
      })
      console.log(response.userProfile)
    })
  }


  buildproject = (obj, bool, index) => {
    const Entry = (
      <tr>
        <td>{obj["name"]}</td>
        <th scope="row" onClick={this.changeState}>
          <img
            alt="..."
            name={index}
            src={require("../../assets/img/theme/pie.png")}
            style={{ width: "20px", height: "20px" }}
          />
        </th>
        <td>{obj["company"]}</td>
        <td>{obj["year"]}</td>

      </tr>
    );
    return Entry
  }

  render() {
    return (
      <>

        <Modal open={this.state.open} toggle={this.changeState}>
          <ModalHeader>Statistics</ModalHeader>
          <ModalBody>
            <PieChart
              techStack={this.state.techStack}
            />
          </ModalBody>
        </Modal>

        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          {/* Table */}
          <Row>
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Card tables</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Project</th>
                      <th scope="col">Technology</th>
                      <th scope="col">Company</th>
                      <th scope="col">Year</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* 
                    <tr>
                      <td>Auto Matching</td>
                      <th scope="row" onClick={this.changeState}>
                        <img
                          alt="..."
                          src={require("../../assets/img/theme/pie.png")}
                          style={{ width: "20px", height: "20px" }}
                        />
                      </th>
                      <td>Societe Generale</td>
                      <td>2018</td>
                    </tr> */}


                    {
                      this.state.profileData["projects"] !== undefined ? Object.values(this.state.profileData["projects"]).map((obj, index) => {
                        return this.buildproject(obj, false, index)
                      }) : ""
                    }

                  </tbody>
                </Table>
                <CardFooter className="py-4">
                  <nav aria-label="...">
                    <Pagination
                      className="pagination justify-content-end mb-0"
                      listClassName="justify-content-end mb-0"
                    >
                      <PaginationItem className="disabled">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                          tabIndex="-1"
                        >
                          <i className="fas fa-angle-left" />
                          <span className="sr-only">Previous</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem className="active">
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          2 <span className="sr-only">(current)</span>
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          3
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fas fa-angle-right" />
                          <span className="sr-only">Next</span>
                        </PaginationLink>
                      </PaginationItem>
                    </Pagination>
                  </nav>
                </CardFooter>
              </Card>
            </div>
          </Row>
          {/* Dark table */}
        </Container>
      </>
    );
  }
}

export default Tables;
