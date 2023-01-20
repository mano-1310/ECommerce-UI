import React from 'react'
import Ck from './brand_products/ck'
import Puma from './brand_products/puma'
import Zara from './brand_products/zara'
import Adidas from './brand_products/adidas'
const Posts = () => {
  return (
    <div className="min-h-screen px-4" >
      <Adidas/>
      <Ck/>
      <Puma/>
      <Zara/>
    </div>
  )
}


export default Posts