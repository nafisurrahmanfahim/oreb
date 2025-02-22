import React, { useEffect, useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaCodeCompare, FaHeart, FaPlus } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { FaThList } from "react-icons/fa";

const Post = ({ allPage, categoryFilter }) => {
    let [active, setActive] = useState("");
    let handleActive = () => {
        setActive("active")
    }

    let [showFilter, setShowFilter] = useState([])
    useEffect(() => {
        let filterSlie = categoryFilter.slice(0,5)
        setShowFilter(filterSlie)
    }, [categoryFilter])



    return (

        <div className="right w-[80%]">
            <div className="flex justify-between">
                <div className="flex gap-[20px]">
                    <div onClick={() => setActive("")} className={`${active == "active" ? "flex items-center justify-center w-[36px] h-[36px] border-[2px] text-[#262626] hover:text-[#fff] hover:bg-[#262626] duration-300 ease-in-out cursor-pointer" : "flex items-center justify-center w-[36px] h-[36px] border-[2px] text-[#fff] bg-[#262626] cursor-pointer"}`}>
                        <IoGrid />
                    </div>
                    <div onClick={handleActive} className={`${active == "active" ? "flex items-center justify-center w-[36px] h-[36px] border-[2px] text-[#fff] bg-[#262626] duration-300 ease-in-out cursor-pointer" : "flex items-center justify-center w-[36px] h-[36px] border-[2px] text-[#262626] hover:text-[#fff] hover:bg-[#262626] duration-300 ease-in-out cursor-pointer"}`}>
                        <FaThList />
                    </div>
                </div>

                <div className="flex gap-[100px]">

                    <div className="flex">
                        <h3 className='font-dm font-normal text-[16px] text-[#767676] items-center pr-2 pt-1'>Sort By: </h3>
                        <select name="" id="" className='w-[310px] border-[1px] text-right'>
                            <option value="">Sort 1</option>
                            <option value="">Sort 2</option>
                            <option value="">Sort 3</option>
                            <option value="">Sort 4</option>
                            <option value="">Sort 5</option>
                        </select>
                    </div>

                    <div className="flex">
                        <h3 className='font-dm font-normal text-[16px] text-[#767676] items-center pr-2 pt-1'>Show: </h3>
                        <select name="" id="" className='w-[139px] border-[1px] text-right'>
                            <option value="">10</option>
                            <option value="">20</option>
                            <option value="">30</option>
                            <option value="">40</option>
                            <option value="">50</option>
                        </select>
                    </div>
                </div>
            </div>
            {showFilter.length > 0 ?
                <div className="flex flex-wrap gap-6 pt-4">
                    {showFilter.map((item) => (
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
                </div> : <div className={`${active == "active" ? "w-full" : "flex flex-wrap justify-between pt-4"}`}>
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
                </div>}

        </div>
    )
}

export default Post