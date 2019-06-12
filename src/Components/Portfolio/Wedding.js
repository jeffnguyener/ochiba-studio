import React, { Component } from 'react'
import Gallery from "react-waterfall-gallery";

import './Portfolio.css'

const WEDDING_SET = [
    "https://live.staticflickr.com/4240/34964846280_a0c10d4368_k.jpg",
    "https://live.staticflickr.com/4240/34964846280_a0c10d4368_k.jpg"
];

export default class Wedding extends Component {
  render() {
    return <div className="box-container"><Gallery images={WEDDING_SET} /> </div>
  }
}
