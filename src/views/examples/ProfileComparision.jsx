import React from "react";
import { Modal, ModalBody, ModalHeader } from "shards-react";
// reactstrap components
import {
  // Badge,
  Card,
  CardHeader,
  // Progress,
  Table,
  Container,
  Row,
  // UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header.jsx";
import { getAllUsers } from "../../assets/api.ts"
import FusionChart from "../Lang"

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      users: null
    }
  }
  changeState = () => {
    this.setState({
      open: !this.state.open
    })
  }
  componentDidMount = () => {

    getAllUsers().then(response => {
      console.log(response)
      this.setState({
        users: response.data,
      })

      console.log(response.data)
    })

  }
  buildUserObject = (obj, bool, index) => {
    const Event = (
      <tr>
        <td><a href={"/admin/user-profile?userName=" + obj["name"]}>{obj["name"]}</a></td>
        <th scope="row">
          <img
            alt="..."
            className="rounded-circle"
            src={require("../../assets/img/theme/team-3-800x800.jpg")}
            style={{ width: "30px", height: "30px" }}
          />
        </th>
        <td>{obj["company"]}</td>
        <td>{obj["salary"]}</td>
        <td>{obj["score"]}</td>
      </tr>
    )

    return Event
  }


  render() {
    return (
      <>

        <Modal open={this.state.open} toggle={this.changeState}>
          <ModalHeader>Statistics</ModalHeader>
          <ModalBody>
            <FusionChart />
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
                  <h3 className="mb-0">User Profiles</h3>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Profile</th>
                      <th scope="col">Company</th>
                      <th scope="col">Current Salary</th>
                      <th scope="col">Score</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>

                    {
                      this.state.users !== null ? Object.values(this.state.users).map((obj, index) => {
                        return this.buildUserObject(obj, false, index)
                      }) : ""
                    }

                  </tbody>
                </Table>
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
