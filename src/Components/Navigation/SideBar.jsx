import React, { useState } from 'react';
import './navigation.css';
import { IoMenu } from "react-icons/io5";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { Offcanvas } from 'react-bootstrap';
import logo from '../../Assets/Images/ttllogo.png';

const SideBar = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='menu'>
                <CiUser className='user' />
                <IoMenu onClick={handleShow} data-testid="menu-icon" />
            </div>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <img src={logo} alt="logo" />
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className='ver-ul'>
                        <li>Shop All</li>
                        <li>Shop by Benefits</li>
                        <li>About</li>
                        <li>Bundles</li>
                        <li>Contact</li>
                    </ul>
                    <ul className='ver-icon-ul'>
                        <li data-testid ><CiSearch /></li>
                        <li data-testid ><CiShoppingCart /></li>
                        <li data-testid ><CiUser /></li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SideBar;