import React, { useContext, useState } from 'react'
import Container from '../components/Container'
import { FaPlus } from "react-icons/fa6";

import { ApiData } from '../components/ContextApi';

import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import Pagination from '../components/pagination/Pagination';
import Post from '../components/pagination/Post';


const Shop = () => {
  let data = useContext(ApiData)
  let [colorShow, setColorShow] = useState(false)
  let [brandShow, setBrandShow] = useState(false)
  let [categoryShow, setCategoryShow] = useState(true)

  let info = useContext(ApiData)
  let [currentPage, setCurrentPage] = useState(1)
  let [perPage, setPerPage] = useState(6)
  let lastPage = currentPage * perPage;
  let firstPage = lastPage - perPage
  let allPage = info.slice(firstPage, lastPage)


  let pageNumber = []

  for(let i = 0; i < Math.ceil(info.length / perPage); i++) {
    pageNumber.push(i);
  }

  let Paginate = (state)=> {
    setCurrentPage(state + 1)
  }

  return (
    <section className='pt-[124px]'>
      <Container>
        <div className="">
          <h3 className="font-dm font-bold text-[#262626] text-[49px]">Products</h3>
        </div>

        <div className="pt-[100px] flex justify-between">
          <div className="left w-[20%] overflow-y-auto h-[870px] flex flex-col">
            <div className="font-dm">
              <p className="font-bold text-[#262626] text-[20px] flex justify-between items-center py-[15px] pr-5 cursor-pointer" onClick={() => setCategoryShow(!categoryShow)}>Shop by Category {categoryShow == true ? <TiArrowSortedDown /> : <TiArrowSortedUp />}</p>
              {categoryShow &&
                <ul className='py-[35px] cursor-pointer'>
                  <li className="font-normal text-[#767676] text-[16px] flex justify-between py-[15px] pr-5">Category 1<FaPlus /></li>
                  <li className="font-normal text-[#767676] text-[16px] flex justify-between py-[15px] pr-5">Category 2 <FaPlus /></li>
                  <li className="font-normal text-[#767676] text-[16px] flex justify-between py-[15px] pr-5">Category 3 <FaPlus /></li>
                  <li className="font-normal text-[#767676] text-[16px] flex justify-between py-[15px] pr-5">Category 4 <FaPlus /></li>
                  <li className="font-normal text-[#767676] text-[16px] flex justify-between py-[15px] pr-5">Category 5 <FaPlus /></li>
                </ul>
              }
            </div>

            <div className="">
              <p className="font-dm font-bold text-[#262626] text-[20px] flex items-center justify-between pr-5 cursor-pointer" onClick={() => setColorShow(!colorShow)}>Shop by Color {colorShow == true ? <TiArrowSortedDown /> : <TiArrowSortedUp />}</p>
              {colorShow &&
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
              }
            </div>

            <div className="font-dm pb-[53px] pt-[15px]">
              <p className="font-bold text-[#262626] text-[20px] flex items-center justify-between pr-5 cursor-pointer" onClick={() => setBrandShow(!brandShow)}>Shop by Brand {brandShow == true ? <TiArrowSortedDown /> : <TiArrowSortedUp />}</p>
              {brandShow &&
                <ul className="py-[35px] text-[#767676]">
                  <li className="font-normal text-[16px] py-[15px]">Brand 1</li>
                  <li className="font-normal text-[16px] py-[15px]">Brand 2</li>
                  <li className="font-normal text-[16px] py-[15px]">Brand 3</li>
                  <li className="font-normal text-[16px] py-[15px]">Brand 4</li>
                  <li className="font-normal text-[16px] py-[15px]">Brand 5</li>
                </ul>}
            </div>

            <div className="font-dm">
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

          <Post allPage={allPage}/>
        </div>
        <div className="text-center py-[50px]">
          <Pagination pageNumber={pageNumber} Paginate={Paginate}/>
        </div>
      </Container>
    </section>
  )
}

export default Shop