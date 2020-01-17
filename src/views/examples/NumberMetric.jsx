import React from "react";
// reactstrap components
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  FormGroup,
  Input,
  Col,
  Button
  // UncontrolledTooltip
} from "reactstrap";
// import Header from "../../components/Headers/Header.jsx";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      metric: []
    }
  }

  addMetric = () => {
    const met = {
      'from': null,
      "to": null,
      "value": null
    }
    const intialMetric = this.state.metric
    intialMetric.push(met)
    this.setState({
      metric: intialMetric
    })
    console.log(intialMetric)
  }
  addToState = (event) => {
    console.log(event.target.name, event.target.value, event.target.id)
    const intialMetric = this.state.metric
    intialMetric[event.target.name][event.target.id] = event.target.value
    this.setState({
      metric: intialMetric
    })
    console.log(intialMetric)
  }

  showEntry = (metricObject, index) => {

    const Entry = (
      <tr>
        <td>
          <FormGroup>
            <Input
              className="form-control-alternative"
              id="from"
              name={index}
              placeholder="from"
              type="number"
              style={{ width: "80px", height: "40px" }}
              onChange={this.addToState}
              value={metricObject["from"]}
            />
          </FormGroup>
        </td>
        <td>
          <FormGroup>
            <Input
              className="form-control-alternative"
              id="to"
              name={index}
              placeholder="to"
              type="number"
              style={{ width: "80px", height: "40px" }}
              onChange={this.addToState}
              value={metricObject["to"]}
            />
          </FormGroup>
        </td>
        <td>
          <FormGroup>
            <Input
              className="form-control-alternative"
              id="value"
              name={index}
              placeholder="value"
              type="number"
              style={{ width: "80px", height: "40px" }}
              onChange={this.addToState}
              value={metricObject["value"]}
            />
          </FormGroup>
        </td>
      </tr>

    );


    return Entry
  }

  render() {
    return (
      <>
        {/* <Header /> */}
        {/* Page content */}
        <Container className="" fluid>
          {/* Table */}
          <Row>
            <div className="col xl-4">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Metric Values</h3>
                  <img
                    alt="..."
                    onClick={this.addMetric}
                    src={require("../../assets/img/theme/pie.png")}
                    style={{ width: "20px", height: "20px" }}
                  />
                </CardHeader>
                <Table className="align-items-center table-flush mb-5 " responsive >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">From</th>
                      <th scope="col">To</th>
                      <th scope="col">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Object.values(this.state.metric).map((obj, index) => {
                        return this.showEntry(obj, index)
                      })
                    }

                  </tbody>
                </Table>
              </Card>
            </div>
          </Row>
          {/* Dark table */}
        </Container>



        <Row className="align-items-left" style={{ paddingTop: "15px" }}>
          <Col xs="2" >
            <Button
              color="primary"
              size="sm"
              style={{ marginLeft: "100px" }}
            >
              Cancel
            </Button>
          </Col>

          <Col xs="2" >
            <Button
              color="primary"
              size="sm"
              style={{ marginLeft: "100px" }}
            >
              Save
            </Button>
          </Col>
        </Row>

      </>
    );
  }
}

export default Tables;
