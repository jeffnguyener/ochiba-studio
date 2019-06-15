import React, { Component } from "react";
import Gallery from "react-waterfall-gallery";

import './Portfolio.css'

import eng1 from './Engagement/engage1.jpg'
import eng2 from './Engagement/engage2.jpg'
import eng3 from './Engagement/engage3.jpg'
import eng4 from './Engagement/engage4.jpg'
import eng5 from './Engagement/engage5.jpg'
import eng6 from './Engagement/engage6.jpg'
import eng7 from './Engagement/engage7.jpg'
import eng8 from './Engagement/engage8.jpg'
import eng9 from './Engagement/engage9.jpg'
import eng10 from './Engagement/engage10.jpg'



const engage_img = [ "https://live.staticflickr.com/4240/34964846280_a0c10d4368_k.jpg", eng1, eng2, eng3, eng4, eng5, eng6, eng7, eng8, eng9, eng10 ];

// const engage_set = [
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/20170610-DSC_1527.jpg",
//     "https://live.staticflickr.com/4240/34964846280_a0c10d4368_k.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/20170610-DSC_1649-2.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/DSC_5833.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/DSC_6372.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/DSC_6410.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/DSC_6448.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/DSC_6453.jpg",
//     "https://os-personal-project.s3-us-west-1.amazonaws.com/Engagement/IMG_6762.jpg"
// ];

export default class Engagement extends Component {
  render() {
    return <div className="box-container">
      <Gallery step={100} 
      // images={engage_set} 
      images={engage_img}
      /> 
      </div>
  }
}
