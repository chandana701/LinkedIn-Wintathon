// STEP 1 - Include Dependencies
// Include react
import React from "react";


// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { Col, FormRadio, } from "shards-react";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data
const chartData = [
    {
        label: "Apache",
        value: "32647479"
    },
    {
        label: "Microsoft",
        value: "22100932"
    },
    {
        label: "Zeus",
        value: "14376"
    },
    {
        label: "Other",
        value: "18674221"
    }
]
// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: "pie2d", // The chart type
    width: "400", // Width of the chart
    height: "300", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
        // Chart Configuration
        chart: {
            caption: "Market Share of Web Servers",
            plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
            showlegend: "1",
            showpercentvalues: "1",
            legendposition: "bottom",
            usedataplotcolorforlabels: "1",
            theme: "fusion"
        },
        // Chart Data
        data: chartData
    }
};

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
class App extends React.Component {
    render() {
        return (

            <div>
                <ReactFC {...chartConfigs} />

                <Col sm="12" md="8" className="mb-3 ml-4" width={400}>
                    <fieldset>
                        <FormRadio inline value="total"  >Total</FormRadio>
                        <FormRadio inline value="Male">Male</FormRadio>
                        <FormRadio inline value="Female"> Female</FormRadio>
                    </fieldset>
                </Col>
            </div>

        );
    }
}

export default App;