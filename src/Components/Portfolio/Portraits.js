import React, { Component } from 'react'
import Gallery from "react-waterfall-gallery";

import './Portfolio.css'

import port1 from './Portraits/portrait1.jpg'
import port2 from './Portraits/portrait2.jpg'
import port3 from './Portraits/portrait3.jpg'
import port4 from './Portraits/portrait4.jpg'
import port5 from './Portraits/portrait5.jpg'
import port6 from './Portraits/portrait6.jpg'
import port7 from './Portraits/portrait7.jpg'
import port8 from './Portraits/portrait8.jpg'
import port9 from './Portraits/portrait9.jpg'
import port10 from './Portraits/portrait10.jpg'
import port11 from './Portraits/portrait11.jpg'
import port12 from './Portraits/portrait12.jpg'



const portrait_img = [ port1, port2, port3, port11, port4, port5, port6, port7, port8, port9, port10, port12 ];

//AWS NOT LOADING PROPERLY, USING LOCAL STORAGE

// const portrait_set = [
//   "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/DSC_3201.jpg",
//   "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/DSC_3314-2.jpg",
//   "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/choly.jpg",
//   "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/de.jpg",
//   "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/father-son.jpg",
//   "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/game-day.jpg",
//   "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/rashedia.jpg",
//   "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/sergio.jpg",
//   "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/valentine.jpg",
//   "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/zander.jpg"
// ];

export default class Portraits extends Component {
  render() {
    return <div className="box-container">
      <Gallery step={100} 
      // images={portrait_set} 
      images={portrait_img}
      /> 
      </div>
  }
}
