/** @jsx React.DOM */

/// <reference path="./require.d.ts" />

import * as React from 'react'
import * as ReactDOM from 'react-dom'

function render(){
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById("INIT")
  );
}

console.log("hello webpack");

window.addEventListener("DOMContentLoaded", render);
