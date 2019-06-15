import React, { Component } from 'react'
import Gallery from "react-waterfall-gallery";

import './Portfolio.css'

import mat1 from './Maternity/maternity1.jpg'
import mat2 from './Maternity/maternity2.jpg'
import mat3 from './Maternity/maternity3.jpg'
import mat4 from './Maternity/maternity4.jpg'
import mat5 from './Maternity/maternity5.jpg'
import mat6 from './Maternity/maternity6.jpg'
import mat7 from './Maternity/maternity7.jpg'
import mat8 from './Maternity/maternity8.jpg'
import mat9 from './Maternity/maternity9.jpg'

const maternity_img = [ mat1, mat2, mat3, mat4, mat5, mat6, mat7, mat8, mat9
];

// const maternity_set = [
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Maternity/20160526-DSC_0717.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Maternity/20160526-DSC_0722.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Maternity/20160605-DSC_0764.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Maternity/20160605-DSC_0790.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Maternity/20160605-DSC_0820.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Maternity/DSC_5520-2.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Maternity/DSC_5605-2.jpg"
// ];

export default class Maternity extends Component {
  render() {
    return <div className="box-container">
      <Gallery step={100} 
      // images={maternity_set} 
      images={maternity_img}
      /> 
      </div>
  }
}
