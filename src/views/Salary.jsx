// STEP 1 - Include Dependencies
// Include react
import React from "react";


// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";
import { getUser } from "../assets/api.ts"
// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);




// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: {
                chart: {
                    caption: "Salary Graph",
                    subCaption: "In MMbbl = One Million barrels",
                    xAxisName: "Country",
                    yAxisName: "Reserves (MMbbl)",
                    theme: "fusion"
                },
                // Chart Data
                data: []
            }
        }
    }
    componentDidMount = () => {
        const search = window.location.search;
        const params = new URLSearchParams(search);
        getUser(params.get("userName")).then(response => {
            const data = []
            Object.keys(response.userProfile['salary']).map((obj, index) => {
                const val = {
                    label: obj,
                    value: response.userProfile['salary'][obj]
                }
                data.push(val)
                return ""
            })
            let datasource = this.state.dataSource
            datasource.data = data
            console.log(datasource)
            this.setState({
                datasource: datasource,
            })
        })
    }

    render() {
        return (<ReactFC

            type="Line"
            width="700"
            height="400"
            dataFormat="json"
            dataSource={this.state.dataSource}
        />);
    }
}

export default App;