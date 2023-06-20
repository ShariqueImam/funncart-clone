import React from 'react'
import Products from '../../components/Products/Products'
import Animator from '../../components/UI/Animator'
import Cookies from 'js-cookie'
const style = {


}
// Cookies.set("clickedNav", "vintage");

const ProductsRoute = () => {
  return (
    <Animator>
      <Products cat={'vintage'} categoryHeading={'Vintage'}/>
    </Animator>
  )
}

export default ProductsRoute