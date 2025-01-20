import React, { useContext } from 'react'
import Container from '../components/Container'
import { IoIosArrowForward } from "react-icons/io";
import { FaCodeCompare, FaHeart, FaPlus } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";
import { ApiData } from '../components/ContextApi';
import { FaShoppingCart } from 'react-icons/fa';


const Shop = () => {
  let data = useContext(ApiData)
  return (
    <section className='py-[124px]'>
      <Container>
        <div className="">
          <h3 className="font-dm font-bold text-[#262626] text-[49px]">Products</h3>
          <p className="font-dm font-normal text-[12px] text-[#767676] flex items-center gap-1">Home <IoIosArrowForward /> Products</p>
        </div>

        <div className="py-[130px] flex justify-between">
          <div className="left w-[20%]">
            <div className="font-dm">
              <p className="font-bold text-[#262626] text-[20px]">Shop by Category</p>
              <ul className='py-[35px]'>
                <li className="font-normal text-[#767676] text-[16px] flex justify-between py-[15px] pr-5">Category 1 <FaPlus /></li>
                <li className="font-normal text-[#767676] text-[16px] flex justify-between py-[15px] pr-5">Category 2 <FaPlus /></li>
                <li className="font-normal text-[#767676] text-[16px] flex justify-between py-[15px] pr-5">Category 3 <FaPlus /></li>
                <li className="font-normal text-[#767676] text-[16px] flex justify-between py-[15px] pr-5">Category 4 <FaPlus /></li>
                <li className="font-normal text-[#767676] text-[16px] flex justify-between py-[15px] pr-5">Category 5 <FaPlus /></li>
              </ul>
            </div>

            <div className="">
              <p className="font-dm font-bold text-[#262626] text-[20px] flex items-center justify-between pr-5">Shop by Color <IoMdArrowDropup /></p>
              <div className="py-[44px]">
                <div className="flex items-center gap-[15px] py-[10px]">
                  <div className="w-[11px] h-[11px] bg-[#000000] rounded-[50%]"></div>
                  <p className="font-dm font-normal text-[#767676] text-[16px]">Color 1</p>
                </div>

                <div className="flex items-center gap-[15px] py-[10px]">
                  <div className="w-[11px] h-[11px] bg-[#FF8686] rounded-[50%]"></div>
                  <p className="font-dm font-normal text-[#767676] text-[16px]">Color 2</p>
                </div>

                <div className="flex items-center gap-[15px] py-[10px]">
                  <div className="w-[11px] h-[11px] bg-[#7ED321] rounded-[50%]"></div>
                  <p className="font-dm font-normal text-[#767676] text-[16px]">Color 3</p>
                </div>

                <div className="flex items-center gap-[15px] py-[10px]">
                  <div className="w-[11px] h-[11px] bg-[#B6B6B6] rounded-[50%]"></div>
                  <p className="font-dm font-normal text-[#767676] text-[16px]">Color 4</p>
                </div>

                <div className="flex items-center gap-[15px] py-[10px]">
                  <div className="w-[11px] h-[11px] bg-[#15CBA5] rounded-[50%]"></div>
                  <p className="font-dm font-normal text-[#767676] text-[16px]">Color 5</p>
                </div>
              </div>

            </div>

            <div className="font-dm py-[53px]">
              <p className="font-bold text-[#262626] text-[20px] flex items-center justify-between pr-5">Shop by Brand <IoMdArrowDropup /></p>
              <ul className="py-[35px] text-[#767676]">
                <li className="font-normal text-[16px] py-[15px]">Brand 1</li>
                <li className="font-normal text-[16px] py-[15px]">Brand 2</li>
                <li className="font-normal text-[16px] py-[15px]">Brand 3</li>
                <li className="font-normal text-[16px] py-[15px]">Brand 4</li>
                <li className="font-normal text-[16px] py-[15px]">Brand 5</li>
              </ul>
            </div>

            <div className="font-dm py-[53px]">
              <p className="font-bold text-[20px]">Shop by Price</p>
              <ul className="font-dm text-[#767676] py-[30px]">
                <li className="font-normal text-[16px] py-[10px]">$0.00 - $9.99</li>
                <li className="font-normal text-[16px] py-[10px]">$10.00 - $19.99</li>
                <li className="font-normal text-[16px] py-[10px]">$20.00 - $29.99</li>
                <li className="font-normal text-[16px] py-[10px]">$30.00 - $39.99</li>
                <li className="font-normal text-[16px] py-[10px]">$40.00 - $69.99</li>
              </ul>
            </div>

          </div>

          <div className="right w-[80%]">
            <div className="flex flex-wrap justify-between">
              {data.map((item) => (
                <div className="w-[24%]">
                  <div className="relative group overflow-y-hidden bg-[#efefef]">
                    <div className="relative pb-[20px]">
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
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Shop