import React from 'react';
var $ = require('jquery');
import Image from 'next/image';

if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery');
}
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from 'next/dynamic';

const myLoader = ({ src, width, quality }) => {
  return `https://pixabay.com//${src}`;
};

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
            loader={myLoader}
            src="get/g6b3df644c65296486b3ee03597bccf48cf74f4b0a9295fd39715ad9abe1dfe463b7662a93097ccb1b47acb42060466452365f1aaeda4f767d8f19446d1cd4ae250a759cfe2eee7e8b6a33c6da93955ab_1280.jpg"
            alt="Picture of the author"
            width={1280}
            height={853}
          />
        </div>
        <div className="item">
          <Image
            loader={myLoader}
            src="get/g0ddd42e68bd52fdd873fb37ae74e5acd915c117facbbcbe88f9166353aca80fb0bbce2c7a3f558e69875dd24b0eef3b2d7d372b3f3fd7c2b7b4c6111b370a88094aa16af377777d64f510c8cb07e0cfd_1280.jpg"
            alt="Picture of the author"
            width={1280}
            height={853}
          />
        </div>
        <div className="item">
          <Image
            loader={myLoader}
            src="get/ga3e87073140dac7eada7ac8671b5643f9dcaf490616fe566a902bf523b1ce436093f83ad6c14832ee8f8673855702f4664c94566c76b7787dec7089eabe833458253e721d98d375a9ad2db3003a5b861_1280.jpg"
            width={1280}
            height={853}
          />
        </div>
      </OwlCarousel>
    </div>
  );
}
