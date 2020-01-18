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
import { getMetric, saveMetric } from "../../assets/api.ts"
import NumberMetric from "./NumberMetric"
import TextMetric from "./TextMetric"

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openText: false,
      openNumber: false,
      metricName: "",
      metricValue: [],
      metricData: null,
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


  componentDidMount = () => {
    console.log(this.props.metric)
    getMetric().then(response => {
      console.log(response)
      this.setState({
        metricData: response.data,
      })
    })

  }

  toggleText = (event) => {
    console.log(event !== undefined ? event.target.name : "")
    this.setState({
      openText: !this.state.openText,
      metricName: event !== undefined ? event.target.name : "",
      metricValue: event !== undefined ? this.state.metricData[event.target.name]["data"] : null
    });
  }
  toggleNumber = (event) => {
    console.log(event !== undefined ? event.target.name : "")
    this.setState({
      openNumber: !this.state.openNumber,
      metricName: event !== undefined ? event.target.name : "",
      metricValue: event !== undefined ? this.state.metricData[event.target.name]["data"] : null
    });
  }


  addNumberMetric = () => {
    const met = {
      'from': null,
      "to": null,
      "value": null
    }
    const intialMetric = this.state.metricValue
    intialMetric.push(met)
    this.setState({
      metricValue: intialMetric
    })
    console.log(intialMetric)
  }
  addToStateNumber = (event) => {
    console.log(event.target.name, event.target.value, event.target.id)
    const intialMetric = this.state.metricValue
    intialMetric[event.target.name][event.target.id] = event.target.value
    this.setState({
      metricValue: intialMetric
    })
    console.log(intialMetric)
  }

  addToStateText = (event) => {
    console.log(event.target.name, event.target.value, event.target.id)
    const intialMetric = this.state.metricValue
    intialMetric[event.target.name] = event.target.value
    this.setState({
      metricValue: intialMetric
    })
    console.log(intialMetric)
  }

  saveMetric = () => {
    const intailData = this.state.metricData
    intailData[this.state.metricName]["data"] = this.state.metricValue
    this.setState({
      metricData: intailData,
      openNumber: false,
      openText: false,
    })

    saveMetric(this.state.metricData).then(response => {
      console.log(response)
    })

  }

  render() {
    return (
      <>

        <Modal open={this.state.openNumber} toggle={this.toggleNumber}>
          <ModalHeader>Statistics</ModalHeader>
          <ModalBody>
            <NumberMetric
              metric={this.state.metricName}
              metricValue={this.state.metricValue}
              addNumberMetric={this.addNumberMetric}
              addToStateNumber={this.addToStateNumber}
              saveMetric={this.saveMetric}
            ></NumberMetric>
          </ModalBody>
        </Modal>

        <Modal open={this.state.openText} toggle={this.toggleText}>
          <ModalHeader>Statistics</ModalHeader>
          <ModalBody>
            <TextMetric
              metric={this.state.metricName}
              metricValue={this.state.metricValue}
              addToStateText={this.addToStateText}
              saveMetric={this.saveMetric}
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
