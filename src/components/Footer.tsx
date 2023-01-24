const Footer = () => {
  return (
    <footer>
      <div className="min-h-[100px] bg-black text-white">
        <div className="flex lg:text-1xl sm:text-sm  justify-start items-start">
          &copy; 2023 E Fashion, Inc. All rights reserved.
        </div>
        <div className="flex justify-end">
          <button onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }} className="text-white p-3">Scroll to Top</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer