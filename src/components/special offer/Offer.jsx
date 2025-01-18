import React, { useContext } from 'react'
import Container from '../Container'
import { ApiData } from '../ContextApi'
import { FaHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const Offer = () => {
    let data = useContext(ApiData)
    return (
        <section className='pb-[128px]'>
            <Container>
                <h3 className="font-dm font-black text-[39px] text-[#262626]">Special Offers</h3>
                <div className="flex flex-wrap justify-between pt-[50px]">
                    {data.slice(24, 28).map((item) => (
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

export default Offer