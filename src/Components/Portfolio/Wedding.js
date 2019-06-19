import React, { Component } from 'react'
import Gallery from "react-waterfall-gallery";

import './Portfolio.css'

import wed1 from './Wedding/wedding1.jpg'
import wed2 from './Wedding/wedding2.jpg'
import wed3 from './Wedding/wedding3.jpg'
import wed4 from './Wedding/wedding4.jpg'
import wed5 from './Wedding/wedding5.jpg'
import wed6 from './Wedding/wedding6.jpg'
import wed7 from './Wedding/wedding7.jpg'
import wed8 from './Wedding/wedding8.jpg'
import wed9 from './Wedding/wedding9.jpg'
import wed10 from './Wedding/wedding10.jpg'
import wed11 from './Wedding/wedding11.jpg'
import wed12 from './Wedding/wedding.jpg'

const wedding_set = [ wed1, wed2, wed3, wed4, wed5, wed6, wed7, wed8, wed9, wed10, wed11, wed12]

// const wedding_set = [
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/20140928-DSC_7134.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/20140928-DSC_7183.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/20140928-DSC_7280.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/20140928-DSC_7571.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/20140928-DSC_7722.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/20140928-DSC_7770.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/20140928-IMG_3031.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/_DSC9536.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/_DSC9606.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/_OSJ4217.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/paul-esther.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/paul-esther2.jpg"
// ];

export default class Wedding extends Component {
  render() {
    return <div className="box-container">
      <Gallery step={100} images={wedding_set} /> 
      </div>
  }
}
