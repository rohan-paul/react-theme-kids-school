import React, { Component, useRef, useEffect } from "react";
import * as d3 from "d3";
import keyColors from "./keyColors";

export class PieChart2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyColorStart: keyColors.middleFrom,
      keyColorStop: keyColors.middleTo
    };
  }

  componentDidMount() {
    // In the production app there will be a network call here to get the data
    const dataObj = {
      kpi: 36,
      dots: {
        min: 75,
        max: 90
      }
    };

    const data = d3.entries(dataObj);
    /* 'data' in the above case will be
    [
        { key: "kpi", value: 60},
        { key: "dots", value: {min: 75, max: 90}}
    ]

     */
    const startingAngle = 0;
    const endingAngle = 2 * Math.PI;
    const { width, height } = this.props;
    const radius = Math.min(width, height) / 2;
    const radiusDistance = 20;
    let chartBackground = keyColors.middleBackground;

    //   Dynamically set the colors of the two parts of the circle
    if (dataObj.kpi < dataObj.dots.min) {
      this.setState({
        kpiColorStart: keyColors.lowFrom,
        kpiColorStop: keyColors.lowTo
      });
      chartBackground = keyColors.lowBackground;
    } else if (dataObj.kpi > dataObj.dots.max) {
      this.setState({
        kpiColorStart: keyColors.highFrom,
        kpiColorStop: keyColors.highTo
      });
      chartBackground = keyColors.highBackground;
    }

    // set the attribute value of element svg
    const svg = d3
      .select(this.refs.anchor)
      .attr("width", width)
      .attr("height", height)
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // now set the value of variable arc
    const arc = d3
      .arc()
      .outerRadius(radius)
      .innerRadius(radius - radiusDistance)
      .startAngle(startingAngle);

    svg
      .append("circle")
      .attr("fill", "none")
      .attr("stroke", "#fff")
      .attr("stroke-width", 25)
      .attr("r", radius - 10)
      .attr("filter", "url(#shadowFilter");

    svg
      .append("path")
      .attr("fill", chartBackground)
      .attr("d", arc({ startAngle: startingAngle, endAngle: endingAngle }))
      .attr("cx", 20);

    /* Now control the transition / animation of gradually filling up part of the circle over 1500 microseconds returning an arc starting from angle 0 to angle
    So (data[0].value / 100) * endingAngle will give me >> 0.6 * 2 * Math.PI

    As a side-note remember - the formulae for arc-length is - arc length =	2 * PI * R * (C / 360 )
where:
C  is the central angle of the arc in degrees
R  is the radius of the arc
    */
    svg
      .append("path")
      .attr("class", "kpi")
      .attr("fill", "url(#gradient)")
      .transition()
      .duration(1500)
      .attrTween("d", () => {
        return t => {
          const i = d3.interpolate(0, (data[0].value / 100) * endingAngle);
          return arc({
            startAngle: startingAngle,
            endAngle: i(t)
          });
        };
      });

    // Now include the text (e.g. 60% or 70% International Students) in the middle of the circle
    svg
      .append("text")
      .text(data[0].value)
      .attr("fill", d => (data[0].value <= 0 ? keyColors.lowTo : "#000"))
      .attr("x", 0)
      .attr("y", 0)
      .attr("dy", "0.3em")
      .attr("text-anchor", "middle")
      .attr("font-size", 26)
      .attr("font-family", "Tahoma")
      .append("tspan")
      .text("% Int");
  }

  // Now append to the 'svg' selected element

  render() {
    return (
      <div className="chart">
        <svg
          viewBox="0 0 200 200"
          width={this.props.width}
          height={this.props.height}
          style={{ padding: 15 + "px", overflow: "visible" }}
        >
          <defs>
            <filter
              id="shadowFilter"
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feGaussianBlur
                stdDeviation="3 3"
                in="SourceGraphic"
                result="blur"
              />
              <feFlood floodColor="#000" floodOpacity="0.4" result="flood" />
              <feComposite
                in="flood"
                in2="blur"
                operator="in"
                result="composite"
              />
              <feMerge result="merge">
                <feMergeNode in="composite" result="mergeNode" />
                <feMergeNode in="SourceGraphic" result="mergeNode1" />
              </feMerge>
            </filter>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={this.state.kpiColorStart} />
              <stop offset="90%" stopColor={this.state.kpiColorStop} />
            </linearGradient>
          </defs>
          <g id="pieChart" ref="anchor" />
        </svg>
      </div>
    );
  }
}

export default PieChart2;
