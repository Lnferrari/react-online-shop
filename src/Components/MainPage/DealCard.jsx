// import React from 'react'
// import { Link } from 'react-router-dom'

// const DealCard = ({asin, img, title, rating, total_rating, price, freeShipping}) => {


//   return (
//       <Link to={`/product/${asin}`}>
//       <div className='ProductCard' asin={asin} rank={rank} category={category}>
//         <div className='wish'>
//           <FaRegHeart size={25}/>
//           {/* <FaHeart size={25}/> */}
//         </div>
//         <div className='img-container'>
//           <img src={img} alt={title} />
//         </div>
//         <div className='info-container'>
//           <h3>{title}</h3>
//           <div className='rating'>
//             <RatingStar id={asin} rating={rating} colors={{ rear: '#bebebe', mask: '#b1310a'}} size={18} noBorder />
//             <span>{total_rating} ratings</span>
//           </div>
//           <div className='price'>
//             $
//             <span>{price}</span>
//           </div>
//           <div className='delivery-date'>
//             Get it
//             <span className='bold'></span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   )
// }

// export default DealCard