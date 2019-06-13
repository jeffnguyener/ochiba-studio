import React, { Component } from 'react'
import Gallery from "react-waterfall-gallery";

import './Portfolio.css'

const PORTRAIT_SET = [
  "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/DSC_3201.jpg",
  "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/DSC_3314-2.jpg",
  "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/choly.jpg",
  "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/de.jpg",
  "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/father-son.jpg",
  "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/game-day.jpg",
  "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/rashedia.jpg",
  "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/sergio.jpg",
  "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/valentine.jpg",
  "https://os-personal-project.s3-us-west-1.amazonaws.com/Portraits/zander.jpg"
];

export default class Portraits extends Component {
  render() {
    return <div className="box-container"><Gallery images={PORTRAIT_SET} /> </div>
  }
}
