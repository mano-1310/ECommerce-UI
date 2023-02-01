import React from 'react'
const Women = () => {
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
  return (
    <div className="min-h-screen px-4">
      
    </div>
  )
}

export default Women