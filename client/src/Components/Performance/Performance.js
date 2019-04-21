import React, { Component, useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import GeographicalDistribution from "./GeographicalDistribution";
import PieChart1 from "./PieChart1";
import PieChart2 from "./PieChart2";
import PieChart3 from "./PieChart3";
import StackedBarchart from "./StackedBarchart";

const options = {
  chart: {
    type: "spline"
  },
  title: {
    text: "Total number of students (in hundreds) over the years"
  },
  series: [
    {
      data: [3.6, 4, 4.8, 5.0, 5.9, 6, 6.8, 6.9, 7],
      pointStart: 2010
    }
  ]
};

export class Performance extends Component {
  render() {
    return (
      <section id="performance">
        <div style={{ marginLeft: "40%" }}>
          <h1>The School in Numbers</h1>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ maxWidth: "690px" }}>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
          <div style={{ paddingTop: "2%", paddingLeft: "25px" }}>
            <h4 style={{ paddingLeft: "93px" }}>2018</h4>
            <PieChart1 width={220} height={220} />
          </div>
          <div style={{ paddingTop: "2%", paddingLeft: "25px" }}>
            <h4 style={{ paddingLeft: "93px" }}>2017</h4>
            <PieChart2 width={220} height={220} />
          </div>
          <div
            style={{
              paddingTop: "2%",
              paddingLeft: "25px",
              paddingRight: "35px"
            }}
          >
            <h4 style={{ paddingLeft: "93px" }}>2016</h4>
            <PieChart3 width={220} height={220} />
          </div>
          <div style={{ width: "80%" }}>
            <StackedBarchart />
          </div>
        </div>
        <div>
          <GeographicalDistribution />
        </div>
      </section>
    );
  }
}

export default Performance;
