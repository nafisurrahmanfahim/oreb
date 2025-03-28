import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from '../Container'
import { RiMenu2Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import image from "../../assets/Image.png"
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux'
import { ApiData } from '../ContextApi';
// import ProductDetails from '../product/ProductDetails';
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
    let [catShow, setCatShow] = useState(false)
    let [userShow, setUserShow] = useState(false)
    let [cartShow, setCartShow] = useState(false)
    let userRef = useRef()
    let catref = useRef()
    let cartRef = useRef()


    let handleCross = () => {
        setCartShow(!cartShow)
    }

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (catref.current.contains(e.target)) {
                setCatShow(!catShow)
            } else {
                setCatShow(false)
            }
            if (userRef.current.contains(e.target)) {
                setUserShow(!userShow)
            } else {
                setUserShow(false)
            }
            if (cartRef.current.contains(e.target)) {
                setCartShow(!cartShow)
            } else {
                setCartShow(false)
            }

        })
    }, [catShow, userShow, cartShow])


    let data = useSelector((state) => state.product.cartItem)

    let info = useContext(ApiData)
    let [search, setSearch] = useState('')
    let [searchFilter, setSearchFilter] = useState([])

    let handleSearch = (e) => {
        setSearch(e.target.value);
        if (e.target.value == "") {
            setSearchFilter([])
        } else {
            let searchOne = info.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
            setSearchFilter(searchOne)
        };
    };


    // let [searchProduct, setSearchProduct] = useState([])
    // let handleDetail = (sItem) => {
    //     let detail = info.filter((item)=> item.title)
    //     console.log(sItem)
    // }


    return (
        <section className='bg-[#DDDDDD] pt-[100px] pb-[25px] fixed z-40 w-full'>
            <Container>
                <div className="flex justify-between items-center">
                    <div className="w-[30%] relative">
                        <div className="flex items-center gap-x-[5px] cursor-pointer w-[130px]" ref={catref}>
                            <RiMenu2Line />
                            <h3 className='font-normal font-dm text-[14px]'>Shop by Category</h3>
                        </div>

                        {catShow &&
                            <div className="absolute top-[60px] w-[300px] z-50">
                                <ul className='bg-[#262626] py-5'>
                                    <li className='text-[rgba(255,255,255,0.71)] pl-5 py-1 hover:pl-10 hover:text-white duration-300 ease-in-out cursor-pointer'>Accesories</li>
                                    <li className='text-[rgba(255,255,255,0.71)] pl-5 py-1 hover:pl-10 hover:text-white duration-300 ease-in-out cursor-pointer'>Furniture</li>
                                    <li className='text-[rgba(255,255,255,0.71)] pl-5 py-1 hover:pl-10 hover:text-white duration-300 ease-in-out cursor-pointer'>Electronics</li>
                                    <li className='text-[rgba(255,255,255,0.71)] pl-5 py-1 hover:pl-10 hover:text-white duration-300 ease-in-out cursor-pointer'>Clothes</li>
                                    <li className='text-[rgba(255,255,255,0.71)] pl-5 py-1 hover:pl-10 hover:text-white duration-300 ease-in-out cursor-pointer'>Bags</li>
                                </ul>
                            </div>
                        }

                    </div>
                    <div className="w-[40%] relative">
                        <input onChange={handleSearch} type="search" placeholder='Search Products' className='w-full h-[50px] pl-[21px] pr-[35px]' />
                        <div className="absolute top-[50%] translate-y-[-50%] right-[15px]">
                            <FaSearch />
                        </div>

                        {searchFilter.length > 0 &&
                            <div className="absolute top-[50px] z-[2] left-0 w-[570px] h-[300px] bg-[gray] overflow-y-scroll">
                                <ul>
                                    {searchFilter.map((item) => (
                                        <li className='flex pl-[5px] items-center gap-2 pt-[4px]'><span className='text-[#000] pr-[4px] font-normal'><CiSearch/></span>{item.title}</li>
                                    ))}
                                </ul>
                            </div>}
                    </div>
                    <div className="w-[30%] relative">
                        <div className="flex justify-end gap-x-[40px]">
                            <div className="flex gap-x-[5px] cursor-pointer" ref={userRef}>
                                <FaUser />
                                <MdOutlineArrowDropDown />
                            </div>
                            <div className="cursor-pointer relative" ref={cartRef}>
                                <FaShoppingCart />
                                {data.length > 0 ? <div className="absolute top-[-9px] right-[-15px] w-[20px] h-[20px] bg-[#000] rounded-full text-[#fff] text-[12px] flex items-center justify-center">
                                    {data.length}
                                </div> : ""}
                            </div>
                        </div>
                        {userShow &&
                            <div className="absolute top-[150%] right-[30px] w-[240px] z-50">
                                <ul className='text-center capitalize font-dm bg-[#fff]'>
                                    <li className='text-[#262626] border-[1px] py-3 duration-300 ease-in-out cursor-pointer bg-[#fff] hover:bg-[#262626] hover:text-[#fff] hover:font-semibold'>my account</li>
                                    <li className='text-[#262626] border-[1px] py-3 duration-300 ease-in-out cursor-pointer hover:bg-[#262626] hover:text-[#fff] hover:font-semibold'>Log out</li>
                                </ul>
                            </div>
                        }
                        {cartShow &&
                            <div className="w-[360px] h-[241px] absolute top-[58px] right-[2px] border-[1px] z-50">
                                <div className="h-[50%] bg-[#F5F5F3] flex items-center px-[20px]">
                                    <div className="w-[30%]">
                                        <img src={image} alt="" />
                                    </div>
                                    <div className="w-[70%] pl-[20px] font-bold font-dm text-[14px]">
                                        <h3>Black Smart Watch</h3>
                                        <h3>$44.00</h3>
                                    </div>
                                    <div className="flex justify-end w-[50px] text-[20px] cursor-pointer" onClick={handleCross}>
                                        <RxCross2 />
                                    </div>
                                </div>
                                <div className="h-[50%] bg-[#FFFFFF] px-[20px]">
                                    <div className="">
                                        <h3 className='font-normal font-dm text-[16px]'>Subtotal:<span className='font-bold font-dm text-[dm]'>Subtotal: $44.00</span></h3>
                                    </div>
                                    <div className="flex pt-[30px] gap-[20px]">
                                        <h3 className='py-[16px] px-[40px] bg-[#262626] text-[#fff] font-bold font-dm text-[14px]'>View Cart</h3>
                                        <h3 className='py-[16px] px-[40px] bg-[#262626] text-[#fff] font-bold font-dm text-[14px]'>Checkout</h3>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Navbar