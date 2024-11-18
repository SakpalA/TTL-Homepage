import React from 'react';
import './support.css';
import { PiPackage } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";


const Support = () => {
    return (
        <section className='support-sec'>
            <div className='sup-div'>
                <PiPackage className='text-[#DF3F44] text-5xl'/>
                <h5>Return Policy</h5>
                <h6>We've never had a return. <br />That's hoe confident we are.</h6>
            </div>
            <div className='sup-div'>
                <CiDeliveryTruck className='text-[#DF3F44] text-5xl'/>
                <h5>Fast Delivery</h5>
                <h6>Guaranteed next-day shipping <br /> across New Zealand and Australia.</h6>
            </div>
            <div className='sup-div'>
                <RiCustomerService2Fill className='text-[#DF3F44] text-5xl'/>
                <h5>Customer Support</h5>
                <h6>Contact us for personalised <br /> recommendations.</h6>
            </div>
        </section>
    )
}

export default Support;