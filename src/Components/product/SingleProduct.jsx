// SingleProduct.jsx
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import './product.css';

const SingleProduct = ({ products }) => {
    if (!products) {
        console.error('Error: `products` prop is undefined in SingleProduct.');
        return <div>Product information is not available.</div>;
    }

    return (
        <div className="product-div">
            <div className="flex justify-center items-center prod-img-div">
                <img src={products.image} alt={products.name} className='prod-img'/>
            </div>
            <div className="mt-2 prod-content">
                <h4 className="m-0 font-bold prod-name">{products.name}</h4>
                <p className="m-0 p-0">{products.title}</p>
                <div className="flex justify-start items-center">
                    <span className="mr-2 text-[#414142] text-sm">Support : </span>
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center items-center border-gray-600 mr-2 rounded-full w-4 h-4 prod-icon">
                            {products.support}
                        </div>
                        <span className="text-[#414142] text-sm">{products.supportName}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center prod-price-div">
                    <div>
                        <h4 className="m-0">$149.00</h4>
                        <span className="text-[#414142] prod-span">$0.75 per day</span>
                    </div>
                    <div>
                        <button className="flex items-center prod-btn">
                            Shop Now <FaArrowRightLong className='ml-2 arrow-icon'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
