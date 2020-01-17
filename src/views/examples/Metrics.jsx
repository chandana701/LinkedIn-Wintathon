import React from "react";
import { Modal, ModalBody, ModalHeader } from "shards-react";
// reactstrap components
import {
  // Badge,
  Card,
  CardHeader,
  Table,
  Container,
  Row,

} from "reactstrap";
// core components
import Header from "../../components/Headers/Header.jsx";

import NumberMetric from "./NumberMetric"
import TextMetric from "./TextMetric"

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openText: false,
      openNumber: false,
      metric: "",
      data: {
        general: [
          {
            "name": "Collage",
            "index": "collage",
            "type": "text"
          },
          {
            "name": "Current Salary",
            "index": "salary",
            "type": "number"
          }
        ],
        tech: [
          {
            "name": "Collage",
            "index": "collage",
            "type": "text"
          },
          {
            "name": "Current Salary",
            "index": "salary",
            "type": "number"
          }
        ],
        other: [
          {
            "name": "Collage",
            "index": "collage",
            "type": "text"
          },
          {
            "name": "Current Salary",
            "index": "salary",
            "type": "number"
          }
        ]
      }
    }
  }
  changeState = () => {
    this.setState({
      open: !this.state.open
    })
  }

  buildmetric = (obj) => {
    const Entry = (
      <tr>
        <td>{obj["name"]}</td>
        <th scope="row" >
          <img
            alt="..."
            name={obj["index"]}
            onClick={obj["type"] === "number" ? this.toggleNumber : this.toggleText}
            src={require("../../assets/img/theme/edit.png")}
            style={{ width: "20px", height: "20px" }}
          />
        </th>
      </tr>
    );
    return Entry
  }


  toggleText = (event) => {
    console.log(event !== undefined ? event.target.name : "")
    this.setState({
      openText: !this.state.openText,
      metric: event !== undefined ? event.target.name : ""
    });
  }
  toggleNumber = (event) => {
    console.log(event !== undefined ? event.target.name : "")
    this.setState({
      openNumber: !this.state.openNumber,
      metric: event !== undefined ? event.target.name : ""
    });
  }

  render() {
    return (
      <>

        <Modal open={this.state.openNumber} toggle={this.toggleNumber}>
          <ModalHeader>Statistics</ModalHeader>
          <ModalBody>
            <NumberMetric />
          </ModalBody>
        </Modal>

        <Modal open={this.state.openText} toggle={this.toggleText}>
          <ModalHeader>Statistics</ModalHeader>
          <ModalBody>
            <TextMetric />
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
                  <tbody>
                    <tr>
                      <th style={{ fontSize: "15px" }}>General Information</th>
                    </tr>

                    {
                      Object.values(this.state.data["general"]).map((obj, index) => {
                        return this.buildmetric(obj)
                      })
                    }

                    <tr>
                      <th style={{ fontSize: "15px" }}>Technologies</th>
                    </tr>
                    {
                      Object.values(this.state.data["tech"]).map((obj, index) => {
                        return this.buildmetric(obj)
                      })
                    }
                    <tr>
                      <th style={{ fontSize: "15px" }}>Other Information</th>
                    </tr>

                    {
                      Object.values(this.state.data["other"]).map((obj, index) => {
                        return this.buildmetric(obj)
                      })
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
