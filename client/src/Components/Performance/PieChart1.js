import React, { Component, useRef, useEffect } from "react";
import * as d3 from "d3";
import keyColors from "./keyColors";

export class PieChart1 extends Component {
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
      kpi: 45,
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

export default PieChart1;

/*
1. d3.entries - https://github.com/d3/d3-collection/blob/master/README.md#entries

Returns an array containing the property keys and values of the specified object (an associative array). Each entry is an object with a key and value attribute.

d3.entries({foo: 42, bar: true}); // [{key: "foo", value: 42}, {key: "bar", value: true}]

2> d.select - https://github.com/d3/d3-selection/blob/master/README.md#select

Selects the first element that matches the specified selector string. If no elements match the selector, returns an empty selection. If multiple elements match the selector, only the first matching element (in document order) will be selected. For example, to select the first anchor element:

const anchor = d3.select("a");

3> selection.attr(name[, value]) - https://github.com/d3/d3-selection/blob/master/README.md#selection_attr

If a value is specified, sets the attribute with the specified name to the specified value on the selected elements and returns this selection. If the value is a constant, all elements are given the same attribute value; otherwise, if the value is a function, it is evaluated for each selected element, in order, being passed the current datum (d), the current index (i), and the current group (nodes), with 'this' as the current DOM element (nodes[i]). The function’s return value is then used to set each element’s attribute. A null value will remove the specified attribute.

4> selection.append(type) - https://github.com/d3/d3-selection/blob/master/README.md#selection_append

If the specified type is a string, appends a new element of this type (tag name) as the last child of each selected element, or before the next following sibling in the update selection if this is an enter selection.

5> arc.startAngle - https://github.com/d3/d3-shape/blob/master/README.md#arc_startAngle
If angle is specified, sets the start angle to the specified function or number and returns this arc generator. If angle is not specified, returns the current start angle accessor, which defaults to:

function startAngle(d) {
  return d.startAngle;
}

6> transition.attrTwin - https://github.com/d3/d3-transition/blob/master/README.md#transition_attrTween

transition.attrTween(name[, factory])

If factory is specified and not null, assigns the attribute tween for the attribute with the specified name to the specified interpolator factory. An interpolator factory is a function that returns an interpolator; when the transition starts, the factory is evaluated for each selected element, in order, being passed the current datum d and index i, with the this context as the current DOM element.

7> d3.interpolate - https://github.com/d3/d3-interpolate/blob/master/README.md#interpolate
Returns an interpolator between the two arbitrary values a and b. The interpolator implementation is based on the type of the end value b


8> <def> and <filter> - https://www.w3schools.com/graphics/svg_fegaussianblur.asp

All internet SVG filters are defined within a <defs> element. The <defs> element is short for definitions and contains definition of special elements (such as filters).

The <filter> element is used to define an SVG filter. The <filter> element has a required id attribute which identifies the filter. The graphic then points to the filter to use.

The <feGaussianBlur> element is used to create blur effects:

9>


**********************


2> d3.pie - https://github.com/d3/d3-shape/blob/master/README.md#pie

Generates a pie for the given array of data, returning an array of objects representing each datum’s arc angles. Any additional arguments are arbitrary; they are simply propagated to the pie generator’s accessor functions along with the this object.
Each object in the returned array has the following properties:

data - the input datum; the corresponding element in the input data array.
value - the numeric value of the arc.
index - the zero-based sorted index of the arc.
startAngle - the start angle of the arc.
endAngle - the end angle of the arc.
padAngle - the pad angle of the arc.

3> d3.arc - https://github.com/d3/d3-shape/blob/master/README.md#arc

Constructs a new arc generator with the default settings. Generates an arc for the given arguments. The arguments are arbitrary; they are simply propagated to the arc generator’s accessor functions along with the this object.

If the radii and angles are instead defined as constants, you can generate an arc without any arguments:

var arc = d3.arc()
    .innerRadius(0)
    .outerRadius(100)
    .startAngle(0)
    .endAngle(Math.PI / 2);

arc(); // "M0,-100A100,100,0,0,1,100,0L0,0Z"

4> d.interpolate = https://github.com/d3/d3-interpolate/blob/master/README.md#interpolate
Returns an interpolator between the two arbitrary values a and b.

*/
