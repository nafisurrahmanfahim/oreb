import React from 'react'
import Ban from "../../assets/banner.png"
import Slider from "react-slick";
import Container from '../Container';
import towImg from "../../assets/two.png"
import returnImg from "../../assets/return.png"
import { MdLocalShipping } from "react-icons/md";


const Banner = () => {
    var settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
                padding: "10px",
                position: "absolute",
                top: "50%",
                left: "8%",
                transform: "translateY(-50%)"
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: i => (
            <div
              style={{
                width: "25px",
                color: "transparent",
                padding: "10px 0",
                borderRight: "2px white solid",
              }}
            >
              0{i + 1}
            </div>
          )
    };

    return (
        <section className='pt-[200px]'>
            <Slider {...settings}>
                <div className="">
                    <a href="#">
                        <img className='w-full' src={Ban} alt="" />
                    </a>
                </div>
                <div className="">
                    <a href="#">
                        <img className='w-full' src={Ban} alt="" />
                    </a>
                </div>
                <div className="">
                    <a href="#">
                        <img className='w-full' src={Ban} alt="" />
                    </a>
                </div>
                <div className="">
                    <a href="#">
                        <img className='w-full' src={Ban} alt="" />
                    </a>
                </div>
            </Slider>
            <Container>
            <div className="flex justify-between py-[30px]">
              <div className="flex items-center gap-[17px]">
                <div className="">
                  <img src={towImg} alt="" />
                </div>
                <p className='font-normal font-dm text-[16px] text-[#6D6D6D]'>Two years warranty</p>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="text-[24px] text-[#262626]">
                  <MdLocalShipping/>
                </div>
                <p className="font-normal font-dm text-[16px] text-[#6D6D6D]">Free shipping</p>
              </div>
              <div className="flex items-center gap-[15px]">
                <div className="">
                  <img src={returnImg} alt="" />
                </div>
                <p className="font-normal font-dm text-[16px] text-[#6D6D6D]">Return policy in 30 days</p>
              </div>
            </div>
            </Container>
        </section>
    )
}

export default Banner