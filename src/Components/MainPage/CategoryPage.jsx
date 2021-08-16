import React from 'react'
import { useParams } from 'react-router'
import ProductCard from '../ProductCard/PruductCard'

const CategoryPage = () => {
  const {categoryName} = useParams()
  const bestsellers = JSON.parse(localStorage.getItem('bestsellers'))

  const productsMarkUp = bestsellers.map(item => (
    <ProductCard key={item.asin} asin={item.asin} img={item.image} title={item.title} rank={item.rank} rating={item.rating} total_rating={item.ratings_total} category={item.current_category.id} price={item.price.value} />
  ))
  
  return (
    <section className='Category'>
      <h1>{categoryName}</h1>
      {productsMarkUp}
    </section>
  )
}

export default CategoryPage
