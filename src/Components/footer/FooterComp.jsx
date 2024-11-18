import React from 'react';
import './footer.css';
import drugfree from '../../Assets/Images/drug-free.png';
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const FooterComp = () => {
    return (
        <footer>
            <div className='flex flex-wrap justify-between items-center'>
                <div className='flex flex-wrap items-center drug-free-cont'>
                    <img src={drugfree} alt="drug free" className='drug-free-img' />
                    <div>
                        <h5><span className='text-[#DF3F44]'>Trust</span> in Every Scoop</h5>
                        <h6>Non-swabbale formulas for <br /> your peace of mind</h6>
                    </div>
                </div>
                <div className='flex flex-wrap items-center links-cont'>
                    <div className='links-div'>
                        <h5>Ouick Links</h5>
                        <ul className='link-ul'>
                            <li>Shop</li>
                            <li>About</li>
                            <li>Bundles</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='contact-div'>
                        <h5>Contacts us</h5>
                        <ul className='contact-ul'>
                            <li><IoMdMail className='mr-2'/> contact@company.com</li>
                            <li><FaPhoneAlt className='mr-2'/> (414) 687 - 5892</li>
                            <li><MdLocationOn className='mr-2'/> 794 Mcallister St San Francisco, 94102</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='copyright-div flex flex-wrap justify-between items-center'>
                <p >Copyright © 2024 The Trainer Locker</p>
                <p >All Rights Reserved | Terms and Conditions | Privacy Policy</p>
            </div>
        </footer>
    )
}

export default FooterComp;