import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 
class CarouselHome extends Component {
    render() {
        return (
            <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
                <div>
                    <img alt='Clingmans Dome' src="https://live.staticflickr.com/5322/30204324484_4230b6e984_k.jpg" />
                    <p className="legend">Clingman's Dome</p>
                </div>
                <div>
                    <img alt='Robyn-Shawn' src="https://live.staticflickr.com/4240/34964846280_a0c10d4368_k.jpg" />
                    <p className="legend">Robyn & Shawn</p>
                </div>
                <div>
                    <img alt='Kissing-Booth' src="https://live.staticflickr.com/1710/24360061700_87dfc418a4_k.jpg" />
                    <p className="legend">Kissing booth</p>
                </div>
                <div>
                    <img alt='Music' src="https://live.staticflickr.com/3785/14314758805_92986722a3_k.jpg" />
                    <p className="legend">Music soothes the soul</p>
                </div>
                <div>
                    <img alt='She-Said' src="https://live.staticflickr.com/733/23101792686_39fec11213_k.jpg" />
                    <p className="legend">She said, yes!</p>
                </div>
            </Carousel>
        );
    }
};

export default CarouselHome; 