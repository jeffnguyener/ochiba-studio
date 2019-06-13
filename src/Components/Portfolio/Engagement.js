import React, { Component } from "react";
import Gallery from "react-waterfall-gallery";

import './Portfolio.css'

const ENGAGE_SET = [
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/20170610-DSC_1527.jpg",
    "https://live.staticflickr.com/4240/34964846280_a0c10d4368_k.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/20170610-DSC_1649-2.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/DSC_5833.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/DSC_6372.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/DSC_6410.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/DSC_6448.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/DSC_6453.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/IMG_6762.jpg"
];

export default class Engagement extends Component {
  render() {
    return <div className="box-container"><Gallery images={ENGAGE_SET} /> </div>
  }
}
