import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Footer = (props : any) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div className="min-h-[100px] bg-black text-white">
      <>{props.children}</>
      <div className="flex justify-end pt-4 mr-4">
        <button   className="">Scroll Top</button>
      </div>
    </div>
  )
}

export default Footer