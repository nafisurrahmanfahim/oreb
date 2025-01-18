import React from 'react'
import Container from '../Container'
import bestPhoneImg from '../../assets/bestPhone.png'

const BeastPhone = () => {
  return (
    <section className='py-[100px]'>
        <Container>
            <div className="">
                <img src={bestPhoneImg} alt="" />
            </div>
        </Container>
    </section>
  )
}

export default BeastPhone