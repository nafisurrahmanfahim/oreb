import React from 'react'
import Container from '../components/Container'
import product from '../assets/products1.png'
import { Link } from 'react-router-dom'
import { ApiData } from '../components/ContexxtApi'
import airPood1 from '../assets/airPoods.png'
const About = () => {


  return (
    <section className='py-[180px]'>
      <Container>
        <h3 className="font-dm font-bold text-[49px] text-[#262626]">About</h3>
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
        <div className="flex justify-center gap-10 py-[70px]">
          <img src={airPood1} alt="" />
        </div>
        <div className="">
          <a className=''>Our Brands</a>
          <a className=''>Our Stores </a>
        </div>
      </Container>
    </section>
  )
}

export default About