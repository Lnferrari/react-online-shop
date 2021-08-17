import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../ProductCard/PruductCard'
import DealCard from './DealCard'
import {FaRegStar, FaRegHeart, FaHeart} from 'react-icons/fa'

const Home = () => {
  const storedCategories = JSON.parse(localStorage.getItem('categories'))
  const bestsellers = JSON.parse(localStorage.getItem('bestsellers'))

  // useEffect(() => {
  //   fetchBestSellers()
  //   // console.log(bestSellers)
  // }, [])

  return (
    <section className='Home'>
      {
        bestsellers.map(item => (
          <ProductCard key={item.asin} asin={item.asin} img={item.image} title={item.title}
          rank={item.rank} rating={item.rating} total_rating={item.ratings_total}
          category={item.current_category.id} price={item.price.value} />
        ))
      }
    </section>
  )
}

export default Home
