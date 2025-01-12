import React from 'react'
import Image from 'next/image'


function Header() {
  return (
    <div className='px-10:'>
        <Image src={'logo.svg'} alt='logo' width={180} height={100} />
    </div>
  )
}

export default Header