import React from 'react'
import Ck from './brand_products/ck'
import Puma from './brand_products/puma'
import Allensolly from './brand_products/allensolly'
import Zara from './brand_products/zara'
import Nike from './brand_products/nike'
import Adidas from './brand_products/adidas'
const Posts = () => {
  return (
    <div className="min-h-screen px-4" id='products'>
      <Adidas/>
      <Ck/>
      <Puma/>
      <Zara/>
      <Allensolly/>
      <Nike/>
    </div>
  )
}


export default Posts