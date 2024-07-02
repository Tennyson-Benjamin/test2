import React from 'react'

function Products({name}) {
  return (
    <div className='text-white w-full h-60 bg-zinc-800'>
      <h1>{name.name1}</h1>
      <h1>{name.age}</h1>
      <h1>{name.height}</h1>
    </div>
  )
}

export default Products
