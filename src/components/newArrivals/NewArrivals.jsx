import React, { useContext } from 'react'
import Container from '../Container'
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { ApiData } from '../ContextApi';
import { Link } from "react-router";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, position: "absolute", top: "50%", right: "0", transform: "translateY(-50%)", width: "64px", height: "64px", background: "#d8d8d8", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", cursor: "pointer" }}
            onClick={onClick}
        ><FaArrowRightLong /></div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, position: "absolute", top: "50%", left: "0", zIndex: "999", transform: "translateY(-50%)", width: "64px", height: "64px", background: "#d8d8d8", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", cursor: "pointer" }}
            onClick={onClick}
        ><FaArrowLeftLong /></div>
    );
}

const NewArrivals = () => {
    var settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    let data = useContext(ApiData)
    
    return (
        <section className="py-[100px]">
            <Container>
                <h3 className="font-dm font-bold text-[39px] text-[#262626] pb-[48px]">New Arrivals</h3>
                <Slider {...settings2}>
                    {data.map((item) => (
                        <div className="">
                            <div className="w-[90%]">
                                <div className="relative group overflow-y-hidden bg-[#efefef]">
                                    <div className="relative">
                                        <Link to="/shop">
                                            <img className='w-[100%]' src={item.thumbnail} alt="" />
                                        </Link>
                                        <p className='absolute top-[20px] left-[20px] py-[9px] px-[30px] bg-[#262626] text-[#fff] font-dm font-bold text-[14px] inline-block'>New</p>
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-full h-[0] opacity-0 bg-[#fff] group-hover:h-[150px] group-hover:opacity-100 duration-300 ease-in-out">
                                        <ul className='flex justify-end items-center h-full'>
                                            <div className="pr-[30px]">
                                                <li className='flex gap-x-[15px] items-center justify-end py-1 font-dm font-normal text-[16px] text-[#767676] cursor-pointer'>Add to Wish List <FaHeart /></li>
                                                <li className='flex gap-x-[15px] items-center justify-end py-1 font-dm font-normal text-[16px] text-[#767676] cursor-pointer'>compare <FaCodeCompare /></li>
                                                <li className='flex gap-x-[15px] items-center justify-end py-1 font-dm font-bold text-[16px] text-[#262626] cursor-pointer'>Add to Cart <FaShoppingCart /></li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pt-[24px] pb-[15px] flex justify-between items-center px-2">
                                    <h3 className='font-dm font-bold text-[17px] text-[#262626]'>{item.title}</h3>
                                    <p className="font-dm font-normal text-[16px] text-[#767676]">${item.price}</p>
                                </div>
                                <h3 className='font-dm font-normal text-[16px] text-[#767676] pl-2'>{item.category}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>

                <div className="flex flex-wrap justify-between pt-[50px]">
                    {data.slice(4,8).map((item) => (
                        <div className="w-[24%]">
                            <div className="relative group overflow-y-hidden bg-[#efefef]">
                                <div className="relative">
                                    <img className='w-[100%]' src={item.thumbnail} alt="" />
                                    <p className='absolute top-[20px] left-[20px] py-[9px] px-[30px] bg-[#262626] text-[#fff] font-dm font-bold text-[14px] inline-block'>New</p>
                                </div>
                                <div className="absolute bottom-0 left-0 w-full h-[0] opacity-0 bg-[#fff] group-hover:h-[150px] group-hover:opacity-100 duration-300 ease-in-out">
                                    <ul className='flex justify-end items-center h-full'>
                                        <div className="pr-[30px]">
                                            <li className='flex gap-x-[15px] items-center justify-end py-1 font-dm font-normal text-[16px] text-[#767676] cursor-pointer'>Add to Wish List <FaHeart /></li>
                                            <li className='flex gap-x-[15px] items-center justify-end py-1 font-dm font-normal text-[16px] text-[#767676] cursor-pointer'>compare <FaCodeCompare /></li>
                                            <li className='flex gap-x-[15px] items-center justify-end py-1 font-dm font-bold text-[16px] text-[#262626] cursor-pointer'>Add to Cart <FaShoppingCart /></li>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            <div className="pt-[24px] pb-[15px] flex justify-between items-center px-2">
                                <h3 className='font-dm font-bold text-[17px] text-[#262626]'>{item.title}</h3>
                                <p className="font-dm font-normal text-[16px] text-[#767676]">${item.price}</p>
                            </div>
                            <h3 className='font-dm font-normal text-[16px] text-[#767676] pl-2'>{item.category}</h3>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default NewArrivals