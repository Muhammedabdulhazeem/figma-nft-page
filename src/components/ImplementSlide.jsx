// import React, { useState } from 'react'
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
// import pic1 from '../assets/images/mostpop1.png'
// import pic2 from '../assets/images/mostpop2.png'
// import pic3 from '../assets/images/mostpop3.png'
// import pic4 from '../assets/images/mostpop4.png'
// import pic5 from '../assets/images/mostpop5.png'

// const slides = [pic1, pic2, pic3, pic4, pic5]

// const CheckOut = () => {
//     const [move, setMove] = useState(100)
//     const [current, setCurrent] = useState(0);
//     const length = slides.length;

//     const nextSlide = () => {
//         setCurrent(current === length - 1 ? 0 : current + 1);
//     };

//     const prevSlide = () => {
//         setCurrent(current === 0 ? length - 1 : current - 1);
//     };

//     if (!Array.isArray(slides) || slides.length <= 0) {
//         return null;
//     }


//     return (
//         <section className='slider'>
//             <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
//             <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
//             {slides.map((slide, index) => {
//                 return (
//                     <div
//                         className={index === current ? 'slide active' : 'slide'}
//                         key={index}
//                     >
//                         {index === current && (
//                             <img src={slide} alt='travel image' className='image' />
//                         )}
//                         {index === current +1 && (
//                             <img src={slide} alt='travel image' className='image' />
//                         )}
//                     </div>
//                 );
//             })}
//         </section>
//     )
// }

// export default CheckOut

// Slider Styles 

// .slider {
//     position: relative;
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
  
//   .image {
//     width: 1000px;
//     height: 600px;
//     border-radius: 10px;
//   }
  
//   .right-arrow {
//     position: absolute;
//     top: 50%;
//     right: 32px;
//     font-size: 3rem;
//     color: #000;
//     z-index: 10;
//     cursor: pointer;
//     user-select: none;
//   }
  
//   .left-arrow {
//     position: absolute;
//     top: 50%;
//     left: 32px;
//     font-size: 3rem;
//     color: #000;
//     z-index: 10;
//     cursor: pointer;
//     user-select: none;
//   }
  
//   .slide {
//     opacity: 0;
//     transition-duration: 1s ease;
//   }
  
//   .slide.active {
//     opacity: 1;
//     transition-duration: 1s;
//     transform: scale(1.08);
//   }