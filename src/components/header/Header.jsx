import React from 'react'
import Container from '../Container'
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <section className='fixed w-full z-50 bg-[#fff]'>
            <Container>
                <div className="py-[30px] flex justify-between items-center">
                    <div className="">
                        <Link to={"/"}>
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="">
                        <ul className='flex gap-x-[40px]'>
                            <li className='font-normal text-[14px] font-dm'>
                                <Link to={"/"}>Home</Link>
                            </li>
                            <li className='font-normal text-[14px] font-dm'>
                                <Link to={"/shop"}>Shop</Link>
                            </li>
                            <li className='font-normal text-[14px] font-dm'>
                                <Link to={"/about"}>About</Link>
                            </li>
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