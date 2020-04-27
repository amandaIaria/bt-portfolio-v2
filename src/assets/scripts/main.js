// non reusable
// import './components/all-events';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Index from './react/react';

const wrapper = document.getElementById('react-container');
wrapper ? ReactDOM.render(<Index />, wrapper) : false;
