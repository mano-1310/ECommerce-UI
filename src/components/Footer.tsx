const Footer = () => {
  return (
    <footer>
      <div className="min-h-[100px] text-black">
        <div className="flex justify-end">
          <button onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          }} className="p-3">Scroll to Top</button>
        </div>
        <div className="flex lg:text-1xl sm:text-sm  justify-center items-center">
          &copy; 2023 E Fashion, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer