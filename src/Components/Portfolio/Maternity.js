import React, { Component } from 'react'
import Gallery from "react-waterfall-gallery";

import './Portfolio.css'

const maternity_set = [
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Maternity/20160526-DSC_0717.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Maternity/20160526-DSC_0722.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Maternity/20160605-DSC_0764.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Maternity/20160605-DSC_0790.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Maternity/20160605-DSC_0820.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Maternity/DSC_5520-2.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Maternity/DSC_5605-2.jpg"
];

export default class Maternity extends Component {
  render() {
    return <div className="box-container">
      <Gallery step={100} images={maternity_set} /> 
      </div>
  }
}
