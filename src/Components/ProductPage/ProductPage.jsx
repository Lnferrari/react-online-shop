import React from 'react'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  const {productID} = useParams()
  return (
    <section className='ProductPage'>
      <h2>Product PAGE</h2>
      <h3>{productID}</h3>
    </section>
  )
}

export default ProductPage
