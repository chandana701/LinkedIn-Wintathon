import React from "react";
import { Modal, ModalBody, ModalHeader } from "shards-react";
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

import FusionChart from "../Lang"

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  changeState = () => {
    this.setState({
      open: !this.state.open
    })
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
                    <tr>
                      <td>Tier 1</td>
                      <td>
                        <FormGroup>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="value"
                            type="number"
                            style={{ width: "100px", height: "40px" }}
                          />
                        </FormGroup>

                      </td>
                    </tr>

                    <tr>
                      <td>Tier 2</td>
                      <td>
                        <FormGroup>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="value"
                            type="number"
                            style={{ width: "100px", height: "40px" }}
                          />
                        </FormGroup>

                      </td>
                    </tr>

                    <tr>
                      <td>Tier 3</td>
                      <td>
                        <FormGroup>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            placeholder="value"
                            type="number"
                            style={{ width: "100px", height: "40px" }}
                          />
                        </FormGroup>

                      </td>
                    </tr>

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
