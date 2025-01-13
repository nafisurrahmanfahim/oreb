import React from 'react'
import Container from '../Container'
import addImg1 from "../../assets/ad_1.png"
import addImg2 from "../../assets/ad_2.png"
import addImg3 from "../../assets/ad_3.png"

const SaleOffer = () => {
  return (
    <section className='pt-[160px] pb-[75px]'>
        <Container>
            <div className="flex justify-between">
              <div className="w-[48%]">
                <img src={addImg1} alt="" />
              </div>
              <div className="w-[48%]">
                <div className="">
                  <img src={addImg2} alt="" />
                </div>
                <div className="pt-7">
                  <img src={addImg3} alt="" />
                </div>
              </div>
            </div>
        </Container>
    </section>
  )
}

export default SaleOffer