import React from 'react'

const Footer = () => {
  return (
    <section className='max-container flex justify-center items-center'>
      <p className='mt-2 text-lg text-slate-500'>Copyright&copy; {new Date().getFullYear()}</p>
    </section>
  )
}

export default Footer