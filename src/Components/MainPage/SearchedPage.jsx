import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'
import SearchContext from '../../Contexts/search/SearchContext'
import ProductCard from '../ProductCard/PruductCard'

const SearchedPage = () => {
  const {searchedTerm} = useParams()
  const {productList, productInfo, setProductInfo, relatedSearches, API_KEY} = useContext(SearchContext)
  const bestsellers = JSON.parse(localStorage.getItem('bestsellers'))

  // const productsMarkUp = bestsellers.map(item => (
  //   <ProductCard key={item.asin} asin={item.asin} img={item.image} title={item.title} rank={item.rank} rating={item.rating} total_rating={item.ratings_total} category={item.current_category.id} price={item.price.value} />
  // ))


  return (
    <section className='SearchedPage'>
      <h1>Results for <span className='searchedTerm'>{searchedTerm}</span></h1>
      <div className='relatedSearches'>
        {
          relatedSearches.map(item => (
            <div className='relatedSearch'>
              <FaSearch />
              {item.query}
            </div>
          ))
        }
      </div>
      {
        productList && productList.map(item => (
          <ProductCard key={item.asin} asin={item.asin} img={item.image} title={item.title} rank={item.rank} rating={item.rating} total_rating={item.ratings_total} price={item.price.value} />
        ))
      }
    </section>
  )
}

export default SearchedPage
