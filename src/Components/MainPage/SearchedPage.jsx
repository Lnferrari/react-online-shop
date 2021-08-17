import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import SearchContext from '../../Contexts/search/SearchContext'
import ProductCard from '../ProductCard/PruductCard'

const SearchedPage = () => {
  const {searchedTerm} = useParams()
  const {productList, API_KEY} = useContext(SearchContext)
  // const productsMarkUp = bestsellers.map(item => (
  //   <ProductCard key={item.asin} asin={item.asin} img={item.image} title={item.title} rank={item.rank} rating={item.rating} total_rating={item.ratings_total} category={item.current_category.id} price={item.price.value} />
  // ))


  return (
    <section className='SearchedPage'>
      <h1>Results for <span className='searchedTerm'>{searchedTerm}</span></h1>
      {
        productList && productList.map(item => {
          const asin = item.url.split('/')[5]
          return (<ProductCard key={asin} asin={asin} img={item.image} bestseller={item.is_best_seller} title={item.name} rating={item.stars} price={item.price} />)
        })
      }
    </section>
  )
}

export default SearchedPage
