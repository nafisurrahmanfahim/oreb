import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaCodeCompare, FaHeart, FaPlus } from "react-icons/fa6";

const Post = ({allPage}) => {
    
    return (
        <div className="right w-[80%]">
            <div className="flex flex-wrap justify-between pt-4">
                {allPage.map((item) => (
                    <div className="w-[32%]">
                        <div className="relative group overflow-y-hidden bg-[#efefef]">
                            <div className="relative pb-[20px]">
                                <Link to={`${item.id}`}>
                                    <img className='w-[100%]' src={item.thumbnail} alt="" />
                                </Link>
                                <p className='absolute top-[20px] left-[20px] py-[9px] px-[30px] bg-[#262626] text-[#fff] font-dm font-bold text-[14px] inline-block'>{item.discountPercentage} %</p>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full h-[0] opacity-0 bg-[#fff] group-hover:h-[150px] group-hover:opacity-100 duration-300 ease-in-out">
                                <ul className='flex justify-end items-center h-full'>
                                    <Link to={`${item.id}`}>
                                        <div className="pr-[30px]">
                                            <li className='flex gap-x-[15px] items-center justify-end py-1 font-dm font-normal text-[16px] text-[#767676] cursor-pointer'>Add to Wish List <FaHeart /></li>
                                            <li className='flex gap-x-[15px] items-center justify-end py-1 font-dm font-normal text-[16px] text-[#767676] cursor-pointer'>compare <FaCodeCompare /></li>
                                            <li className='flex gap-x-[15px] items-center justify-end py-1 font-dm font-bold text-[16px] text-[#262626] cursor-pointer'>Add to Cart <FaShoppingCart /></li>
                                        </div>
                                    </Link>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-[24px] pb-[15px] flex justify-between items-center px-2">
                            <h3 className='font-dm font-bold text-[17px] text-[#262626]'>{item.title}</h3>
                            <p className="font-dm font-normal text-[16px] text-[#767676]">${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Post