import React, { useEffect, useState } from 'react'
import Container from '../Container'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Product from '../../assets/products1.png'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FaPlus, FaMinus } from "react-icons/fa";


const ProductDetails = () => {

  let productId = useParams()
  let naviget = useNavigate()
  let [singleProduct, setSingleProduct] = useState({})

  let singleData = () => {
    axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
      setSingleProduct(response.data);
    })
  }



  useEffect(() => {
    singleData()
  }, [])

  let clientRating = Array.from({ length: 5 }, (_, index) => {
    let number = index + 0.5
    return singleProduct.rating > index + 1 ? <IoMdStar /> : singleProduct.rating > number ? <IoMdStarHalf /> : <IoMdStarOutline />
  })

  let [count, setCount] = useState(1)
  let handlePlus = () => {
    if (count < 20) {
      setCount(count + 1)
    }
  }

  let handleMinus = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  let handleCart = () => {
    toast("Wow so easy!");
    setTimeout(() => {
      naviget('/Cart')
    }, [2000])
  }

  let [featureShow, setFeatureShow] = useState(false)
  let [shippingShow, setShippingShow] = useState(false)
  let handleFeature = () => {
    setFeatureShow(!featureShow)
    setShippingShow("")
  }
  let handleShipping = () => {
    setShippingShow(!shippingShow)
    setFeatureShow("")
  }

  return (
    <section>
      <Container>
        <nav class="flex pt-[220px]" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <Link to="/" href="#" class="inline-flex items-center text-[18px] font-medium text-[#767676]">
                Home
              </Link>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <Link to="/shop" href="#" class="ms-1 text-[18px] font-medium text-[#767676]">Products</Link>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex justify-center py-[80px]">

          <div className="w-[40%] pt-[60px]">
            <img src={singleProduct.thumbnail} alt="" />
          </div>

          <div className="w-[40%]">
            <h3 className='font-dm'>Products</h3>
            <div className="text-[20px] flex items-center gap-1">
              {clientRating}
              <span className='font-dm font-normal text-[#767676] text-[14px]'>Review {singleProduct?.reviews?.length}</span>
            </div>
            <h3 className="font-dm font-bold text-[20px] text-[#262626] pt-[14px]">${singleProduct.price}</h3>
            <div className="flex items-center pt-[48px]">
              <h3 className="font-dm font-bold text-[#262626] text-[16px]">COLOR:</h3>
              <div className="ml-[15px] w-[20px] h-[20px] bg-[#15CBA5] rounded-[50%]"></div>
              <div className="ml-[15px] w-[20px] h-[20px] bg-[#B6B6B6] rounded-[50%]"></div>
              <div className="ml-[15px] w-[20px] h-[20px] bg-[#FF8686] rounded-[50%]"></div>
              <div className="ml-[15px] w-[20px] h-[20px] bg-[#c5d8d4] rounded-[50%]"></div>
            </div>
            <div className="py-[26px]">
              <h3 className="font-dm font-bold text-[16px] text-[#262626]">SIZE:</h3>
              <div className="">
                {/* / */}
              </div>
            </div>
            <div className="flex gap-5">
              <h3 className="font-dm font-bold text-[16px] text-[#262626]">QUANTITY:</h3>
              <div className="flex items-center gap-6">
                <div className="font-dm font-normal text-[16px] text-[#767676] cursor-pointer">
                  <FaMinus onClick={handleMinus} />
                </div>
                <div className="font-dm font-normal text-[16px] text-[#767676]">
                  {count}
                </div>
                <div className="font-dm font-normal text-[16px] text-[#767676] cursor-pointer">
                  <FaPlus onClick={handlePlus} />
                </div>
              </div>
            </div>
            <div className="pt-[45px]">
              <h3 className="font-dm font-bold text-[16px] text-[#262626]">STATUS: <span className="pl-[28px] font-dm font-normal text-[16px] text-[#767676]">In stock</span></h3>
            </div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />

            <div className="py-[50px] font-dm font-bold text-[#262626] text-[14px]">
              <a className='py-[16px] px-[41px] border-[1px] border-[#262626] hover:bg-[#262626] hover:text-[#FFFFFF] duration-300 ease-in-out cursor-pointer'>Add to Wish List</a>
              <a onClick={handleCart} className='py-[16px] px-[57px] border-[1px] border-[#262626] ml-[20px] hover:bg-[#262626] hover:text-[#FFFFFF] duration-300 ease-in-out cursor-pointer'>Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="">
          <div onClick={handleFeature} className="flex cursor-pointer items-center justify-between font-dm font-bold text-[16px] text-[#262626] w-[40%]">
            <h3 className=''>FEATURES  & DETAILS</h3>
            {featureShow == true ? <FaMinus/> : <FaPlus/>}
          </div>

          <div className="py-[8px] w-[40%]">
            {featureShow && "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          </div>

          <div onClick={handleShipping} className="flex cursor-pointer items-center justify-between font-dm font-bold text-[16px] text-[#262626] w-[40%] py-[22px]">
            <h3 className="">SHIPPING & RETURNS</h3>
            {shippingShow == true ? <FaMinus/> : <FaPlus/>}
          </div>
          <div className="w-[30%]">
            {shippingShow && "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductDetails