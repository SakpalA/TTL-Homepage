import React from 'react';
import './product.css';
import SingleProduct from './SingleProduct';
import { data } from './data';

const ProductSection = () => {
  return (
    <section className='product-sec'>
            <div>
                <h1 className='font-bold'>Our <span className='text-[#df3f44]'>Core</span> Products</h1>
                <p>Keep your horse race-ready with our all-natural, <br />performance-enhancing solutins.</p>
            </div>
            <div className="product-container">
                {data.map((product) => {
                    return <div key={product.id}>
                        <SingleProduct products={product} />
                    </div>
                })}
            </div>
        </section>
  )
}

export default ProductSection