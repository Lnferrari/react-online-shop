(this["webpackJsonponline-store"]=this["webpackJsonponline-store"]||[]).push([[0],{70:function(e,t){},71:function(e,t,c){},72:function(e,t,c){"use strict";c.r(t);var a=c(0),r=c.n(a),n=c(38),s=c.n(n),i=c(7),o=Object(a.createContext)(),l=c(1),j=function(e){var t=Object(a.useState)(""),c=Object(i.a)(t,2),r=c[0],n=c[1],s=Object(a.useState)([]),j=Object(i.a)(s,2),d=j[0],u=j[1],b=Object(a.useState)([]),O=Object(i.a)(b,2),h=O[0],p=O[1],x=Object(a.useState)([]),m=Object(i.a)(x,2),f=m[0],g=m[1];return Object(l.jsx)(o.Provider,{value:{searchInput:r,setSearchInput:n,productList:d,setProductList:u,productInfo:h,setProductInfo:p,relatedSearches:f,setRelatedSearches:g,API_KEY:"B95646B9E14943D59764D59BAFE2BB6D"},children:e.children})},d=Object(a.createContext)(),u=function(e){var t=Object(a.useState)(!1),c=Object(i.a)(t,2),r=c[0],n=c[1];return Object(l.jsx)(d.Provider,{value:{isToggled:r,handleToggleSideBar:function(){n(!r)}},children:e.children})},b=c(4),O=c(3),h=c.p+"static/media/logo.d7ae4900.png",p=function(){return Object(l.jsxs)(b.b,{to:"/react-online-shop",className:"logo",children:[Object(l.jsx)("img",{src:h,alt:"company logo"}),"mercado",Object(l.jsx)("br",{}),"libre"]})},x=c(2),m=c.n(x),f=c(8),g=c(6),v=c(10),S=c.n(v),N=function(){var e=Object(a.useContext)(o),t=e.searchInput,c=e.setSearchInput,r=e.setProductList,n=(e.relatedSearches,e.setRelatedSearches),s=e.API_KEY,i=(JSON.parse(localStorage.getItem("bestsellers")),Object(O.f)()),j=function(){var e=Object(f.a)(m.a.mark((function e(c){var a,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),console.log("searching..."),""===t){e.next=11;break}return e.next=5,S()("https://api.rainforestapi.com/request?api_key=".concat(s,"&type=search&amazon_domain=amazon.com&search_term=").concat(t));case 5:return a=e.sent,e.next=8,a.data;case 8:o=e.sent,r(o.search_results),n(o.related_searches);case 11:i.push("/search/".concat(t));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("form",{className:"SearchBar",onSubmit:j,children:[Object(l.jsx)("input",{type:"text",value:t,onChange:function(e){c(e.target.value)},placeholder:"Search..."}),Object(l.jsx)("button",{children:Object(l.jsx)(g.d,{})})]})},C=Object(a.createContext)(),y=function(){var e=Object(a.useContext)(C).cart;return Object(l.jsxs)(b.b,{to:"/basket/checkout",className:"Cart",children:[Object(l.jsx)(g.e,{size:36}),Object(l.jsx)("span",{children:e.length})]})},_=function(){return Object(l.jsxs)("nav",{className:"Navbar",children:[Object(l.jsx)(p,{}),Object(l.jsx)(N,{}),Object(l.jsxs)("div",{className:"nav_options",children:[Object(l.jsxs)("div",{className:"navbar_option",children:[Object(l.jsx)("span",{className:"navbar_option_firstLine",children:"Hello"}),Object(l.jsx)("span",{className:"navbar_option_secondLine",children:"Sign In"})]}),Object(l.jsxs)("div",{className:"navbar_option",children:[Object(l.jsx)("span",{className:"navbar_option_firstLine",children:"Returns"}),Object(l.jsx)("span",{className:"navbar_option_secondLine",children:"& Orders"})]}),Object(l.jsx)(y,{})]})]})},k=function(){var e=Object(a.useContext)(d),t=e.isToggled,c=e.handleToggleSideBar;return Object(l.jsxs)("div",{className:"SubNavbar",children:[Object(l.jsxs)("div",{className:"burgerMenu",onClick:c,children:[t?Object(l.jsx)(g.f,{size:20}):Object(l.jsx)(g.a,{size:20}),Object(l.jsx)("span",{children:"All"})]}),Object(l.jsxs)("div",{className:"links-container",children:[Object(l.jsx)(b.b,{to:"/",className:"link",children:"Today's Deals"}),Object(l.jsx)(b.b,{to:"/",className:"link",children:"Customer Service"}),Object(l.jsx)(b.b,{to:"/",className:"link",children:"Gift Cards"}),Object(l.jsx)(b.b,{to:"/",className:"link",children:"Registry"}),Object(l.jsx)(b.b,{to:"/",className:"link",children:"Sell"})]}),Object(l.jsx)("div",{})]})},I=function(){var e=Object(a.useContext)(d).isToggled,t=(Object(a.useContext)(o).API_KEY,JSON.parse(localStorage.getItem("categories2")));return Object(l.jsxs)("div",{className:e?"SideBar active":"SideBar",children:[Object(l.jsxs)("div",{className:"SideBar_user",children:[Object(l.jsx)(g.g,{size:20}),Object(l.jsx)("span",{children:"Hello, Sign in"})]}),Object(l.jsx)("div",{className:"SideBar_categories",children:t&&t.map((function(e){return Object(l.jsx)(b.b,{to:"/category/".concat(e.name),className:"SideBar_category",id:e.id,children:e.name},e.id)}))})]})},T=function(){return Object(l.jsxs)("header",{children:[Object(l.jsx)(_,{}),Object(l.jsx)(k,{}),Object(l.jsx)(I,{})]})},L=function(){return Object(l.jsx)(r.a.Fragment,{children:Object(l.jsx)(T,{})})},E=c(15),R=c(22),A=Object(a.createContext)(),P=function(e){var t=e.img,c=e.asin,r=e.title,n=e.rank,s=e.rating,i=e.total_rating,o=e.delivery,j=e.price,d=Object(a.useContext)(A),u=d.wishList,O=d.addToWishList,h=d.removeFromWishList,p=Object(a.useContext)(C).addToCart;return Object(l.jsxs)("div",{className:"ProductCard",asin:c,rank:n,children:[Object(l.jsx)("div",{className:"wish",children:u&&u.includes(c)?Object(l.jsx)(g.b,{onClick:function(){return h(c)},size:25}):Object(l.jsx)(g.c,{onClick:function(){return O(c)},size:25})}),Object(l.jsxs)(b.b,{to:"/product/".concat(c),className:"LinkProductCard",children:[Object(l.jsx)("div",{className:"img-container",children:Object(l.jsx)("img",{src:t,alt:r})}),Object(l.jsxs)("div",{className:"info-container",children:[Object(l.jsx)("h3",{children:r}),Object(l.jsxs)("div",{className:"rating",children:[Object(l.jsx)(R.a,{id:c,rating:s,colors:{rear:"#bebebe",mask:"#b1310a"},size:20,noBorder:!0}),Object(l.jsxs)("span",{children:[i," ratings"]})]}),Object(l.jsxs)("div",{className:"price",children:["$",Object(l.jsx)("span",{children:j})]}),o&&Object(l.jsxs)("div",{className:"delivery-date",children:["Get it",Object(l.jsx)("span",{className:"bold",children:o})]})]})]}),Object(l.jsx)("button",{onClick:function(){return p(c)},children:"Add to Basket"})]})},B=(c(70),function(){JSON.parse(localStorage.getItem("categories"));var e=JSON.parse(localStorage.getItem("bestsellers")),t=Object(a.useState)([]),c=Object(i.a)(t,2),r=(c[0],c[1],Object(a.useState)([])),n=Object(i.a)(r,2);n[0],n[1];return Object(l.jsx)("section",{className:"Home",children:e.map((function(e){return Object(l.jsx)(P,{asin:e.asin,img:e.image,title:e.title,rank:e.rank,rating:e.rating,total_rating:e.ratings_total,category:e.current_category.id,price:e.price.value},e.asin)}))})}),D=function(){var e=Object(O.g)().categoryName,t=JSON.parse(localStorage.getItem("bestsellers")),c=Object(a.useContext)(o);c.productList,c.productInfo,c.setProductInfo;return Object(l.jsxs)("section",{className:"Category",children:[Object(l.jsxs)("h1",{children:["Category: ",e]}),t&&t.map((function(e){return Object(l.jsx)(P,{asin:e.asin,img:e.image,title:e.title,rank:e.rank,rating:e.rating,total_rating:e.ratings_total,category:e.current_category.id,price:e.price.value},e.asin)}))]})},w=function(){var e=Object(O.g)().productID,t=Object(a.useState)(),c=Object(i.a)(t,2),r=(c[0],c[1]),n=Object(a.useContext)(A),s=n.wishList,o=n.addToWishList,j=n.removeFromWishList,d=Object(a.useContext)(C),u=(d.cart,d.addToCart),b=function(){var t=Object(f.a)(m.a.mark((function t(){var c,a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c={url:"https://tvb-amazon-data-scraper.p.rapidapi.com/products/".concat(e),params:{api_key:"a438be699e1c4f2b1e62ff649419355b"},headers:{"x-rapidapi-key":"9515fb6270mshf72d632d3de48a7p1c263djsnec4ad8df2195","x-rapidapi-host":"tvb-amazon-data-scraper.p.rapidapi.com"}},t.prev=1,t.next=4,S()(c);case 4:return a=t.sent,t.next=7,a.data;case 7:n=t.sent,r(n),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){b()}),[e]),Object(l.jsxs)("section",{className:"ProductPage",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h2",{children:"Product title"}),Object(l.jsxs)("div",{className:"rating",children:[Object(l.jsx)(R.a,{id:1,rating:4,colors:{rear:"#bebebe",mask:"#b1310a"},size:20,noBorder:!0}),Object(l.jsxs)("span",{children:[5e3," ratings"]})]})]}),Object(l.jsxs)("div",{className:"pruduct-container",children:[Object(l.jsxs)("div",{className:"product-images",children:[Object(l.jsx)("div",{className:"main-image",children:Object(l.jsx)("img",{src:"",alt:""})}),Object(l.jsx)("div",{className:"other-images"})]}),Object(l.jsxs)("div",{className:"product-info",children:[Object(l.jsx)("div",{className:"price"}),Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{onClick:function(){return u(e)},children:"Add to Basket"}),s&&s.includes(e)?Object(l.jsx)("button",{children:Object(l.jsx)(g.b,{onClick:function(){return j(e)}})}):Object(l.jsx)("button",{children:Object(l.jsx)(g.c,{onClick:function(){return o(e)}})})]})]})]})]})},W=function(){var e=Object(O.g)().searchedTerm,t=Object(a.useContext)(o),c=t.productList,r=(t.productInfo,t.setProductInfo,t.relatedSearches);t.API_KEY,JSON.parse(localStorage.getItem("bestsellers"));return Object(l.jsxs)("section",{className:"SearchedPage",children:[Object(l.jsxs)("h1",{children:["Results for ",Object(l.jsx)("span",{className:"searchedTerm",children:e})]}),Object(l.jsx)("div",{className:"relatedSearches",children:r.map((function(e){return Object(l.jsxs)("div",{className:"relatedSearch",children:[Object(l.jsx)(g.d,{}),e.query]})}))}),c&&c.map((function(e){return Object(l.jsx)(P,{asin:e.asin,img:e.image,title:e.title,rank:e.rank,rating:e.rating,total_rating:e.ratings_total,price:e.price.value},e.asin)}))]})},z=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(a.useContext)(C),s=n.cart,o=(n.addToCart,n.decrementItemQuantity,n.removeFromCart,n.clearCart,n.checkOut,function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[],s.map(function(){var e=Object(f.a)(m.a.mark((function e(c){var a,n,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={url:"https://tvb-amazon-data-scraper.p.rapidapi.com/products/".concat(c),params:{api_key:"a438be699e1c4f2b1e62ff649419355b"},headers:{"x-rapidapi-key":"9515fb6270mshf72d632d3de48a7p1c263djsnec4ad8df2195","x-rapidapi-host":"tvb-amazon-data-scraper.p.rapidapi.com"}},e.prev=1,e.next=4,S()(a);case 4:return n=e.sent,e.next=7,n.data;case 7:s=e.sent,t=[].concat(Object(E.a)(t),[s]),r(t),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Object(a.useEffect)((function(){o()}),[s]);c.map((function(e){return Object(l.jsx)("div",{className:"basketProduct"})}));return Object(l.jsxs)("section",{className:"CheckOut",children:[Object(l.jsx)("h1",{children:"Shopping Cart"}),Object(l.jsxs)("span",{children:[s.length," Products"]})]})},F=function(){var e=Object(a.useContext)(d).isToggled;Object(a.useContext)(o).searchInput;return Object(l.jsx)(r.a.Fragment,{children:Object(l.jsxs)(b.a,{children:[Object(l.jsx)(L,{}),Object(l.jsx)(O.c,{children:Object(l.jsxs)("main",{className:e?"inactive":"",children:[Object(l.jsx)(O.a,{path:"/",exact:!0,component:B}),Object(l.jsx)(O.a,{path:"/search/:searchTerm",exact:!0,component:W}),Object(l.jsx)(O.a,{path:"/category/:categoryName",exact:!0,component:D}),Object(l.jsx)(O.a,{path:"/product/:productID",exact:!0,component:w}),Object(l.jsx)(O.a,{path:"/basket/checkout",exact:!0,component:z})]})})]})})},J=function(e,t){var c=t.payload;switch(t.type){case"ADD_TO_WISHLIST":return[c].concat(Object(E.a)(e));case"REMOVE_FROM_WISHLIST":return e.filter((function(e){return e!==c}));case"CLEAR_WISHLIST":return[];default:return e}},M=function(e){var t=e.children,c=null===localStorage.getItem("localWishList")?[]:JSON.parse(localStorage.getItem("localWishList")),r=Object(a.useReducer)(J,c),n=Object(i.a)(r,2),s=n[0],o=n[1];return Object(a.useEffect)((function(){localStorage.setItem("localWishList",JSON.stringify(s))}),[s]),Object(l.jsx)(A.Provider,{value:{wishList:s,dispatch:o,addToWishList:function(e){o({type:"ADD_TO_WISHLIST",payload:e})},removeFromWishList:function(e){o({type:"REMOVE_FROM_WISHLIST",payload:e})},clearWishList:function(){o({type:"CLEAR_WISHLIST"})}},children:t})},H=c(17),q=function(e,t){var c,a=t.payload.product;switch(t.type){case"ADD_TO_CART":return e.find((function(e){return e===a}))?e.map((function(e){return e===a?Object(H.a)(Object(H.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(E.a)(e),[Object(H.a)(Object(H.a)({},a),{},{quantity:1})]);case"REMOVE_FROM_CART":return e.filter((function(e){return e!==a}));case"DECREMENT_QUANTITY":return 1===(null===(c=e.find((function(e){return e===a})))||void 0===c?void 0:c.quantity)?e.filter((function(e){return e!==a})):e.map((function(e){return e===a?Object(H.a)(Object(H.a)({},e),{},{quantity:e.quantity-1}):e}));case"CLEAR_CART":case"CHECKOUT":return[];default:return e}},K=function(e){var t=e.children,c=null===localStorage.getItem("localCart")?[]:JSON.parse(localStorage.getItem("localCart")),r=Object(a.useReducer)(q,c),n=Object(i.a)(r,2),s=n[0],o=n[1];return Object(a.useEffect)((function(){localStorage.setItem("localCart",JSON.stringify(s))}),[s]),Object(l.jsx)(C.Provider,{value:{cart:s,addToCart:function(e){o({type:"ADD_TO_CART",payload:e})},decrementItemQuantity:function(e){o({type:"DECREMENT_QUANTITY",payload:e})},removeFromCart:function(e){o({type:"REMOVE_FROM_CART",payload:e})},clearCart:function(){o({type:"CLEAR_CART"})},checkOut:function(){o({type:"CHECKOUT"})}},children:t})},Y=(c(71),function(){return Object(l.jsx)(r.a.Fragment,{children:Object(l.jsx)(K,{children:Object(l.jsx)(j,{children:Object(l.jsx)(u,{children:Object(l.jsx)(M,{children:Object(l.jsx)(F,{})})})})})})});s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(Y,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.50a66544.chunk.js.map