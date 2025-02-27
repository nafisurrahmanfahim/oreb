import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";


const Cart = () => {
  return (
    <section className='pt-[220px]'>
      <Container>
        <h3 className='font-dm font-bold text-[49px] text-[#262626]'>Cart</h3>
        <nav class="flex py-[10px]" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <Link to="/" href="#" class="inline-flex items-center text-[13px] font-medium text-[#767676]">
                Home
              </Link>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <Link to="/shop" href="#" class="ms-1 text-[13px] font-medium text-[#767676]">Products</Link>
              </div>
            </li>
          </ol>
        </nav>

        <div className="pt-[136px] flex justify-between">
          <div className="w-[24%]">
            <h3 className='font-dm font-bold text-[16px] text-[#262626]'>Product</h3>
            <div className="py-[60px] flex items-center">
              <div className="pr-[40px]">
                <RxCross2 />
              </div>
              <div className=""><img src="" alt="img" /></div>
              <div className="pl-[20px] font-dm font-bold text-[20px] text-[#262626]">
                <h3>Product name</h3>
              </div>
            </div>
          </div>

          <div className="w-[24%]">
            <h3 className="font-dm font-bold text-[16px] text-[#262626]">Price</h3>
            <div className="py-[60px]">
              <h3 className="font-dm font-bold text-[20px] text-[#262626]">$44.00</h3>
            </div>
          </div>

          <div className="w-[24%]">
            <div className="font-dm font-bold text-[16px] text-[#262626]">Quantity</div>
            <div className="py-[60px] flex gap-[30px] items-center font-dm font-normal text-[#767676] text-[16px]">
              <FaMinus/>
              <h3 className="font-dm font-normal text-[#767676] text-[16px]">1</h3>
              <FaPlus/>
            </div>
          </div>

          <div className="w-[24%]">
            <h3 className="font-dm font-bold text-[16px] text-[#262626]">Total</h3>
            <div className="py-[60px] flex items-center">
              <h3 className="font-dm font-bold text-[20px] text-[#262626]">$44.00
              </h3>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex items-center">
            <h3 className='font-dm font-normal text-[16px] text-[#767676] pr-[100px]'>SIZE</h3>
            <IoMdArrowDropdown />
            <h3 className="pl-[28px] font-dm font-bold text-[14px] text-[#262626]">Apply coupon</h3>
          </div>
          <h3 className="text-end font-bold font-dm text-[14px] text-[#262626]">Update cart</h3>
        </div>
      </Container>
    </section>
  )
}

export default Cart