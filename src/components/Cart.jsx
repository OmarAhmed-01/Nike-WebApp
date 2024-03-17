import React, { useState } from 'react'
import { greyX } from '../assets/icons'

export const Cart = ({ closeBag }) => {

  return (
    <section className=" max-container flex justify-end absolute top-0 right-0 z-[200] opacity-1">
        <div className=' container w-[400px] bg-white' >
            <div className=' flex h-[50px] border'>
                <h1 className=' font-palanquin font-bold text-2xl w-[80%] p-2'>Shopping Bag</h1>
                <button className=' w-[20%]  flex justify-center items-center' onClick={closeBag}>
                    <img src={greyX} height={25} width={25}/>
                </button>
            </div> 
            <div className=' h-lvh'>
                
            </div> 
        </div>
    </section>
  )
}


