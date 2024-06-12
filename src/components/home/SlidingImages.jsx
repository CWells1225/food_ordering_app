import React from 'react';
import images from '../../data/images'; 
import CustomSlider from './custom.slider.js';

export default function SlidingImages() {
  return (
    <div className='images_container'>
        <CustomSlider>
            {images.map((image, index) => {
                return <img key={index} src={image.imgURL} alt={image.imgAlt} />
            })}
        </CustomSlider>
    </div>
  )
}
