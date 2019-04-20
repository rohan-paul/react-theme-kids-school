import React, { Component, useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import GeographicalDistribution from "./GeographicalDistribution";

const pieChartData = [
  { date: 0, value: 146 },
  { date: 1, value: 784 },
  { date: 2, value: 723 },
  { date: 3, value: 550 },
  { date: 4, value: 197 }
];

const options = {
  chart: {
    type: "spline"
  },
  title: {
    text: "Total number of students (in ,000) over the years"
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6, 6.8, 7.6, 8],
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
        </div>
        <div>
          <GeographicalDistribution />
        </div>
      </section>
    );
  }
}

export default Performance;
