import React, { Component, useRef, useEffect } from "react";
import * as d3 from "d3";

const PieChart = props => {
  const ref = useRef(null);
  const cache = useRef(props.data);

  // Function to create the Pie
  const createPie = d3
    .pie()
    .value(numericArc => numericArc.value)
    .sort(null);

  const createPie = d3
    .arc()
    .innerRadius(props.innerRadius)
    .outerRadius(props.outerRadius);
};

const colors = d3.scaleOrdinal(d3.schemeCategory10);
const format = d3.format(".2f");

useEffect(
  // an effect hook should return nothing or a clean up function. Thats why I am writing the below function separately.
  () => {
    const data = createPie(props.data);
  }
);

export default PieChart;

/* 1> useRef - https://reactjs.org/docs/hooks-reference.html#useref

const refContainer = useRef(initialValue);
useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. A common use case is to access a child imperatively.

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}


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
