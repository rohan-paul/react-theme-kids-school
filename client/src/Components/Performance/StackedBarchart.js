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
      data: [5, 6, 7, 7, 4]
    },
    {
      name: "Kolkata",
      data: [1, 2, 3, 2, 2]
    },
    {
      name: "International",
      data: [3, 4, 4, 2, 5]
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
