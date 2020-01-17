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

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data
const chartData = [
    {
        label: "2005",
        value: "10"
    },
    {
        label: "2006",
        value: "15"
    },
    {
        label: "2007",
        value: "20"
    },
    {
        label: "2008",
        value: "30"
    },
    {
        label: "2009",
        value: "60"
    },
    {
        label: "2010",
        value: "80"
    },
    {
        label: "2011",
        value: "90"
    },
    {
        label: "2012",
        value: "90.8"
    },
    {
        label: "2013",
        value: "91.16"
    },
    {
        label: "2014",
        value: "91.37"
    },
    {
        label: "2015",
        value: "91.66"
    },
    {
        label: "2016",
        value: "91.8"
    }
];

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
    type: "line", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
        // Chart Configuration
        chart: {
            caption: "Salary Graph",
            subCaption: "In MMbbl = One Million barrels",
            xAxisName: "Country",
            yAxisName: "Reserves (MMbbl)",
            theme: "fusion"
        },
        // Chart Data
        data: chartData
    }
};

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
class App extends React.Component {
    render() {
        return (<ReactFC {...chartConfigs} />);
    }
}

export default App;