import React from 'react'
import Container from '../Container'
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <section>
        <Container>
            <div className="py-[30px] flex justify-between items-center">
                <div className="">
                    <img src={logo} alt="" />
                </div>
                <div className="">
                    <ul className='flex gap-x-[40px]'>
                        <li className='font-normal text-[14px] font-dm'>Home</li>
                        <li className='font-normal text-[14px] font-dm'>Shop</li>
                        <li className='font-normal text-[14px] font-dm'>About</li>
                        <li className='font-normal text-[14px] font-dm'>Contact</li>
                        <li className='font-normal text-[14px] font-dm'>Journal</li>
                    </ul>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Header