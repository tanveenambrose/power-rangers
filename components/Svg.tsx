'use client'
import React from 'react'
import { gsap } from 'gsap';

function Svg() {
    var path = "M 10 250 Q 500 250 990 250";
  var finalPath = "M 10 250 Q 500 250 990 250";

  var string = document.getElementById("string");

  string?.addEventListener('mousemove', function(dets) {
    path = `M 10 250 Q ${dets.x} ${dets.y} 990 250`;

    gsap.to('svg path', {
      duration: 0.3,
      attr: { d: path },
      ease: 'power3.out'
  });
});

  string?.addEventListener('mouseleave', function() {
    gsap.to('svg path', {
      duration: 1.5,
      attr: { d: finalPath },
      ease: 'elastic.out(1, 0.3)'
  });
});

  return (
    <div  className=''>
    <div id='string'>
      <svg width="1000" height="500">
    <path d="M 10 250 Q 500 250 990 250" stroke="black" fill="transparent" />
    </svg>
    </div>
    </div>
  )
}

export default Svg;
