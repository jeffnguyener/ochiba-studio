import React, { Component } from 'react'
import Gallery from "react-waterfall-gallery";

import './Portfolio.css'

const WEDDING_SET = [
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/20140928-DSC_7134.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/20140928-DSC_7183.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/20140928-DSC_7280.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/20140928-DSC_7571.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/20140928-DSC_7722.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/20140928-DSC_7770.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/20140928-IMG_3031.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/_DSC9536.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/_DSC9606.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/_OSJ4217.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/paul-esther.jpg",
    "https://os-personal-project.s3-us-west-1.amazonaws.com/Wedding/paul-esther2.jpg"
];

export default class Wedding extends Component {
  render() {
    return <div className="box-container"><Gallery images={WEDDING_SET} /> </div>
  }
}
