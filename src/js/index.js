import React from "react";
import ReactDOM from "react-dom";
import Resume from './components/Resume.jsx';

const wrapper = document.getElementById("content");
console.log(wrapper);
wrapper ? ReactDOM.render(<Resume />, wrapper) : false;