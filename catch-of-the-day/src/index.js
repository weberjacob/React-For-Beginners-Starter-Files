// let's go!
import React from 'react';
// could also import just the { Component } from 'react'
import { render } from 'react-dom';
import Router from './components/Router';
import './css/style.css';

render(<Router />, document.querySelector('#main'));
