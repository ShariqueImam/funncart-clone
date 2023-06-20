import React from 'react'
import Link from 'next/link'

const style = {
    wrapper: 'flex flex-col my-10 md:my-16',
    headingContainer: 'flex items-center jusitfy-center flex-col my-12',
    smallHeading: 'text-4xl md:text-4xl max-w-fit mx-auto py-2 text-stone-800 text-center',
    btn: 'text-md md:text-lg px-8 md:px-24 py-2 md:py-4 max-w-fit mx-auto bg-green-700 text-stone-100 hover:bg-opacity-[0.9] transition duration-[300ms]',
}
const ProductsButton = () => {
    return (
        <div className={style.wrapper}>
            {/* <div className={style.headingContainer}>
                <h2 className={style.smallHeading} style={{ fontFamily: 'Yeseva One, cursive' }} >Shop Online On Okeere</h2>
            </div> */}
            <Link href="/categories" >
                <button className={style.btn} style={{ fontFamily: 'Poppins, sans-serif' }}>
                    View All Categories
                </button></Link>

        </div>
    )
}

export default ProductsButton