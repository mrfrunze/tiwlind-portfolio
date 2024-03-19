import React from 'react'

const Footer = () => {
    const year = new Date()
    console.log(year.getFullYear());
  return (
    <footer className='py-5 flex justify-center'>
      <p className='font-bold capitalize'>©{year.getFullYear()} portfolio tiwling. All rights reserved</p>
    </footer>
  )
}

export default Footer