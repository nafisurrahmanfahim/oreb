import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'
import Product from '../../assets/products1.png'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
// import axios from 'axios';

const ProductDetails = () => {

  // let [singleProduct, setSingleProduct] = useState({})
  // let singleData = () => {
  //   axios.get('https://dummyjson.com/products?sortBy=title&order=asc').then((response) => {
  //     setSingleProduct(response.data);
  //   })
  // }  

  // useEffect(() => {
  //   singleData()
  // }, [])

  return (
    <section>
      <Container>
        <nav class="flex py-[10px]" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li class="inline-flex items-center">
              <Link to="/" href="#" class="inline-flex items-center text-[18px] font-medium text-[#767676] hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <div class="flex items-center">
                <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                </svg>
                <Link to="/shop" href="#" class="ms-1 text-[18px] font-medium text-[#767676] hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Products</Link>
              </div>
            </li>
          </ol>
        </nav>

        <div className="flex justify-center py-[60px]">
          <div className="w-[40%]">
            <img src={Product} alt="" />
          </div>

          <div className="w-[40%]">
            <h3 className='font-dm'>Products</h3>
            <div className="text-[20px] flex items-center gap-1">
              <IoMdStar />
              <IoMdStarHalf />
              <IoMdStarOutline />
              <span className='font-dm font-normal text-[#767676] text-[14px]'>1 Review</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ProductDetails