import React from 'react';
import { PiPackage } from "react-icons/pi";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiCustomerService2Line } from "react-icons/ri";
import './heroicon.css';

const HeroIcon = () => {
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
        <div className='hero-icon-container flex justify-center align-middle flex-wrap'>
            {data.map((elem, index) => (
                <div 
                key={index}
                className='hero-icon-div flex'>
                    <div className='hero-icon mr-2'>
                        {elem.icon}
                    </div>
                    <span>{elem.title}</span>
                </div>
            ))}
        </div>
    )
}

export default HeroIcon;