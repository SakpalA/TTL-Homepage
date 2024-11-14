import React from 'react';
import './product.css';
import product1 from '../../Assets/Images/unlock.png';
import product2 from '../../Assets/Images/flexify.png';
import product3 from '../../Assets/Images/epo-equine.png';
import product4 from '../../Assets/Images/bleeder-shiled.png';
import { GiHorseHead } from "react-icons/gi";
import { RiDeviceRecoverLine } from "react-icons/ri";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { SiOxygen } from "react-icons/si";
import { FaLungs } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Product = () => {
    const data = [
        {
            id: 1,
            image: product1,
            name: 'UN-LOCK+',
            title: 'Horserace performace muscle formula for endurance, fatigue',
            support: <GiHorseHead />,
            supprtName: 'Endurance'
        },
        {
            id: 2,
            image: product2,
            name: 'Flexify-HA',
            title: 'Joint support formula for cartilage, flexibility and joint health',
            support: <MdOutlineHealthAndSafety />,
            supportName: 'Joint Health'
        },
        {
            id: 3,
            image: product3,
            name: 'EPO-Equine',
            title: 'All-natural blood builder optimises oxygen levels for peak performance',
            support: <SiOxygen />,
            supportName: 'Oxygen Level'
        },
        {
            id: 4,
            image: product4,
            name: 'Bleeder Shield',
            title: 'One-of-kind respiratory formula. Now comes in a powder',
            support: <FaLungs />,
            supportName: 'Lungs Support'
        }
    ]
    return (
        <>
            {data.map((elem) => (
                <div key={elem.id}>
                    <div>
                        <img src={elem.image} alt={elem.name} />
                    </div>
                    <div>
                        <h2>{elem.name}</h2>
                        <p>{elem.title}</p>
                        <div>
                            <span>Support : </span>
                            <div>
                                <div>
                                    {elem.support}
                                </div>
                                <span>{elem.supportName}</span>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>$149.00</h3>
                                <span>$0.75 per day</span>
                            </div>
                            <div>
                                <button>Shop Now <FaArrowRightLong /></button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Product;