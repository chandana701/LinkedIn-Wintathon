import React from "react";
// reactstrap components
import {
  // Badge,
  Card,
  CardHeader,
  // CardFooter,
  // DropdownMenu,
  // DropdownItem,
  // UncontrolledDropdown,
  // DropdownToggle,
  // Media,
  // Pagination,
  // PaginationItem,
  // PaginationLink,
  // Progress,
  Table,
  Container,
  Row,
  FormGroup,
  Input
  // UncontrolledTooltip
} from "reactstrap";
// core components
// import Header from "../../components/Headers/Header.jsx";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  showEntry = (key, index) => {

    const Entry = (
      <tr>
        <td>Tier 1</td>
        <td>
          <FormGroup>
            <Input
              className="form-control-alternative"
              id="value"
              placeholder="value"
              type="number"
              name={key}
              onChange={this.props.addToStateText}
              style={{ width: "100px", height: "40px" }}
              value={this.props.metricValue[key]}
            />
          </FormGroup>
        </td>
      </tr>
    )
    return Entry
  }

  render() {
    return (
      <>

        {/* Page content */}
        <Container className="" fluid>
          {/* Table */}
          <Row>
            <div className="col xl-4">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Card tables</h3>
                </CardHeader>
                <Table className="align-items-center table-flush mb-5 " responsive >
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Option</th>
                      <th scope="col">Value</th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.props.metricValue != null ? Object.keys(this.props.metricValue).map((key, index) => {
                        return this.showEntry(key, index)
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
