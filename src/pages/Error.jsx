import React from 'react'
import Container from '../components/Container'
import { FaSearch } from 'react-icons/fa'

const Error = () => {
    return (
        <section className="pt-[180px] pb-[40px]">
            <Container>
                <div className="">
                    <h3 className="font-dm font-bold text-[200px] text-[#262626]">404</h3>
                    <p className="font-dm font-normal text-[16px] text-[#767676] w-[50%]">The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
                    <div className="w-[40%] relative py-[50px]">
                        <input type="search" placeholder='Search Products' className='w-full h-[50px] pl-[21px] pr-[35px] border-[1px]' />
                        <div className="absolute top-[50%] translate-y-[-50%] right-[15px]">
                            <FaSearch />
                        </div>
                    </div>
                    <div className="">
                        <a className='py-[16px] px-[41px] border-[1px] border-[#262626] hover:bg-[#262626] hover:text-[#FFFFFF] duration-300 ease-in-out cursor-pointer'>Add to Wish List</a>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Error