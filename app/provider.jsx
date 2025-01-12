import React from 'react'
import Header from './_components/Header'

function provider({children}) {
  return (
<div>
    <Header/>

    <div>{children}</div>
</div>
  )
}

export default provider