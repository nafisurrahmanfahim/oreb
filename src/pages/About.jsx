import React from 'react'
import Container from '../components/Container'
import { Link } from 'react-router-dom'
import airPood1 from '../assets/airpoods.png'
import airPood2 from '../assets/airpood2.png'

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
          <div className="w-[30%] h-[450px] bg-[#ebeaea] flex flex-col justify-center items-center">
            <img src={airPood1} alt="" />
            <a className='py-[18px] px-[69px] font-dm font-bold text-[16px] text-[#262626] bg-[#FFFFFF] border-[1px] hover:bg-[#262626] hover:text-[#FFFFFF] duration-300 ease-in-out cursor-pointer'>Our Brands</a>
          </div>
          <div className="w-[30%] h-[450px] bg-[#ebeaea] flex flex-col justify-center items-center">
            <img src={airPood2} alt="" />
            <a className="py-[18px] px-[69px] font-dm font-bold text-[16px] text-[#262626] bg-[#FFFFFF] border-[1px] hover:bg-[#262626] hover:text-[#FFFFFF] duration-300 ease-in-out cursor-pointer">Our Stores</a>
          </div>
        </div>
        <div className="text-center">
          <p className='font-dm font-normal text-[39px] text-[#262626]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</p>
        </div>

        <div className="pt-[118px] flex justify-between">
          <div className="w-[32%]">
            <h3 className="font-dm font-bold text-[25px] text-[#262626]">Our Vision</h3>
            <p className="font-dm font-normal text-[16px] text-[#767676] leading-[30px] py-[11px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>

          <div className="w-[32%]">
            <h3 className="font-dm font-bold text-[25px] text-[#262626]">Our Story</h3>
            <p className="font-dm font-normal text-[16px] text-[#767676] leading-[30px] py-[11px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
          </div>

          <div className="w-[32%]">
            <h3 className="font-dm font-bold text-[25px] text-[#262626]">Our Brands</h3>
            <p className="font-dm font-normal text-[16px] text-[#767676] leading-[30px] py-[11px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default About