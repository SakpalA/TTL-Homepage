import React from 'react';
import { PiPackage } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerService2Line } from "react-icons/ri";
import './heroicon.css';

const HeroIconComp = () => {
    const data = [
        {
            icon: <PiPackage />,
            title: 'Never Got Returned Products'
        },
        {
            icon: <CiDeliveryTruck />,
            title: 'Fastest Delivery'
        }, 
        {
            icon: <RiCustomerService2Line />,
            title: 'Customer Support'
        }, 
        {
            icon: <RiCustomerService2Line />,
            title: 'Lorem Ipsum2'
        },
    ]
    return (
        <section className='flex flex-wrap justify-center align-middle hero-icon-container'>
            {data.map((elem, index) => (
                <div 
                key={index}
                className='flex hero-icon-div'>
                    <div className='mr-2 hero-icon'>
                        {elem.icon}
                    </div>
                    <span>{elem.title}</span>
                </div>
            ))}
        </section>
    )
}

export default HeroIconComp;