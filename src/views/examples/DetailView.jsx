import React from "react";

import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
  // UncontrolledTooltip
} from "reactstrap";
// core components
import Header from "../../components/Headers/Header.jsx";
import { getUser } from "../../assets/api.ts"
import Carousel, { Modal, ModalGateway } from 'react-images';
const images = [{ src: require('../../assets/img/code/1.png') }, { src: require('../../assets/img/code/2.png') },
{ src: require('../../assets/img/code/3.png') }];


class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileData: [],
      userName: "",
      compareValue: "",
      modalOpen: false,
      data: {
        "general": [
          {
            "name": "Name",
            "index": "name",
            "type": "text"
          },
          {
            "name": "Company",
            "index": "company",
            "type": "text"
          },
          {
            "name": "Collage",
            "index": "collage",
            "type": "text"
          },
          {
            "name": "Designation",
            "index": "designation",
            "type": "text"
          },
          {
            "name": "Current Salary",
            "index": "salary",
            "type": "number"
          }
        ],
        "tech": [
          {
            "name": "Java",
            "index": "java",
            "type": "number"
          },
          {
            "name": "Python",
            "index": "python",
            "type": "number"
          },
          {
            "name": "SQL",
            "index": "sql",
            "type": "number"
          },
        ],
        "other": [
          {
            "name": "Projects",
            "index": "projects",
            "type": "number"
          },
          {
            "name": "References",
            "index": "references",
            "type": "number"
          },
          {
            "name": "Certifications",
            "index": "certifications",
            "type": "number"
          }
        ]
      }

    }
  }

  addTostate = (event) => {
    this.setState({
      compareValue: event.target.value
    })
  }
  compare = () => {
    getUser(this.state.compareValue).then(response => {
      if (response.ok) {
        var data = this.state.profileData
        data.push(response.userProfile)
        console.log(data)
        this.setState({
          profileData: data,
        })
      }
    })
  }

  componentDidMount = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    this.setState({
      userName: params.get("userName")
    })
    getUser(params.get("userName")).then(response => {
      var data = []
      data.push(response.userProfile)
      this.setState({
        profileData: data,
      })
    })
  }

  getProfilePic = () => {
    const res = (<th scope="row" >
      <img
        alt="..."
        className="rounded-circle"
        src={require("../../assets/img/theme/team-3-800x800.jpg")}
        style={{ width: "30px", height: "30px" }}
      />
    </th >)

    console.log(res)
    return res
  }
  openImages = () => {
    this.setState({
      modalOpen: true
    })
  }

  buildDetailView = (obj, bool, type) => {

    const res = (
      <tr>
        <td>{obj["name"]}</td>
        {
          Object.values(this.state.profileData).map((obj2) => {

            if (bool) {
              return <td><a href="#test" onClick={this.openImages}>{obj2[type][obj["index"]] + " Years"}</a></td>
            }
            return <td onClick={this.openImages}>{obj2[type][obj["index"]]}</td>
          })
        }
      </tr>
    )
    return res

  }
  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }


  render() {

    return (
      <>

        <ModalGateway>
          {this.state.modalOpen ? (
            <Modal onClose={this.toggleModal}>
              <Carousel views={images} />
            </Modal>
          ) : null}
        </ModalGateway>


        <Header />

        < Container className="mt--7" fluid >
          < Row >
            <div className="col">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <h3 className="mb-0">Detail Info</h3>
                  <table align='right'>
                    <tr>
                      <td><input type="text" placeholder="Compare..." style={{ padding: "6px 15px", border: "2px solid #1D9ED3", borderRadius: "10px" }} value={this.state.compareValue} onChange={this.addTostate}></input></td>
                      <td> <input type="button" value="&#43;" style={{ padding: "0.5px 7px", border: "2px solid #1D9ED3", borderRadius: "10px", cursor: "pointer", fontSize: "24px", color: "white", backgroundColor: "#1D9ED3" }} onClick={this.compare}></input></td>
                    </tr>
                  </table>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>

                  <tbody>
                    <tr>
                      <td></td>
                      {
                        Object.values(this.state.profileData).map((obj) => {
                          return this.getProfilePic()
                        })
                      }
                    </tr>

                    <tr>
                      <th style={{ fontSize: "15px" }}>General Information</th>
                    </tr>
                    {
                      Object.values(this.state.data["general"]).map((obj, index) => {
                        return this.buildDetailView(obj, false, "general")
                      })
                    }

                    <tr>
                      <th style={{ fontSize: "15px" }}>Technologies</th>
                    </tr>

                    {
                      Object.values(this.state.data["tech"]).map((obj, index) => {
                        return this.buildDetailView(obj, true, "tech")
                      })
                    }
                    <tr>
                      <th style={{ fontSize: "15px" }}>Other Information</th>
                    </tr>
                    {
                      Object.values(this.state.data["other"]).map((obj, index) => {
                        return this.buildDetailView(obj, false, "other")
                      })
                    }

                  </tbody>
                </Table>

              </Card>
            </div>
          </Row >
          {/* Dark table */}
        </Container >
      </>
    );
  }
}

export default Tables;
