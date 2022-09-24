import React from 'react';
var $ = require('jquery');
import Image from 'next/image';
import ocean from '../public/images/ocean-g2ba1bb5c0_1280.jpg';
import sea from '../public/images/sea-g879f4f00d_1280.jpg';
import woman from '../public/images/woman-g0b7a7f5dd_1280.jpg';

if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
  ssr: false,
});

const options = {
  loop: true,
  margin: 10,
  items: 1,
  autoplay: true,
};

export default function Slider() {
  return (
    <div>
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <Image
            src={ocean}
            alt="Ocean"
            width={1280}
            height={853}
          />
        </div>
        <div className="item">
          <Image
            src={sea}
            alt="Sea"
            width={1280}
            height={853}
          />
        </div>
        <div className="item">
          <Image
            src={woman}
            alt="Woman"
            width={1280}
            height={853}
          />
        </div>
      </OwlCarousel>
    </div>
  );
}
