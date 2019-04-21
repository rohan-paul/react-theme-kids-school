import React, { Component } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "bar"
  },
  title: {
    text: "Total Students Application by Year and Region"
  },
  xAxis: {
    categories: ["2018", "2017", "2016", "2015", "2014"]
  },
  yAxis: {
    min: 0,
    title: {
      text: "Total Applications in hundreds"
    }
  },
  legend: {
    reversed: true
  },
  plotOptions: {
    series: {
      stacking: "normal"
    }
  },
  series: [
    {
      name: "India",
      data: [7, 6, 5, 4, 4]
    },
    {
      name: "Kolkata",
      data: [2, 2, 1, 2, 3]
    },
    {
      name: "International",
      data: [4, 3, 3, 2, 1]
    }
  ]
};

export class StackedBarchart extends Component {
  render() {
    return (
      <div>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    );
  }
}

export default StackedBarchart;
