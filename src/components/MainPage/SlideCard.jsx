import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Link } from "react-router-dom";
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>
    },
  }
  return (
    <div className="sdsliderhomepage">
    <>
      <Slider {...settings}>
        {Sdata.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index}>
                <div className='left'>
                  <Link to={value.link}>
                  <Typography variant="h4" gutterBottom component="div">{value.title}</Typography>
                    <p>{value.desc}</p>
                    <Button variant="contained" type="button" color="secondary">View Product</Button>
                  </Link>
                </div>
                <div className='right'>
                  <Link to={value.link}>
                    <img src={value.cover} alt='' />
                  </Link>
                </div>
              </div>
            </>
          )
        })}
      </Slider>
    </>
    </div>
  )
}

export default SlideCard
