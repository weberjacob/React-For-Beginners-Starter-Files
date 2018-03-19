// let's go!
import React from 'react';
// could also import just the { Component } from 'react'
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import './css/style.css';

render(<StorePicker />, document.querySelector('#main'));
