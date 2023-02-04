import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useState } from "react";

export default function Carousel(props) {
 
   var clothesList=props.item
  const settings = {
    dots: false,
    infinite: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    
   
    autoplaySpeed: 2000,
   // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
         infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
         infinite: true,
        },
      },
    ],
  };

  
 
  const clothesView = () => {
    return clothesList.map((item) => {
       return(
        <>
        <div>
             <div key={item.id} style={{height:'100px' ,width:'170px',backgroundImage:`url(${item.pic})`,backgroundSize:'contain',display:'flex',flexDirection:'column',justifyContent:'flex-end',backgroundPosition:'center',backgroundRepeat:"no-repeat"}}>
             <div style={{color:"grey",backgroundColor:"black",paddingLeft:5}}></div>
             </div>
             
       </div>
               
         
        </>
       )
    })
  }   
  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>{clothesView()}</Slider>
    </div>
  );
}