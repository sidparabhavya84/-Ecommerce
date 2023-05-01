import React from 'react'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

function Header() {
    return (
        <header className='header p-3 bg-primary'>
            <div className='container'>
                <div className='row align-item-center'>
                    <div className='logo col-5 text-white'>
                        {/* <img src="img/logo.png" alt="" srcset="" /> */}
                        <h2>
                            Ecommerce.
                        </h2>
                    </div>
                    <nav className='col'>
                        <ul className='list-unstyled d-flex justify-content-end m-0'>
                            <li className='p-2'>
                                <NavLink to='/' className='text-decoration-none text-white fs-6 fw-1'>
                                    Home
                                </NavLink>
                            </li>
                            <li className='p-2 '>
                                <NavLink to='/product' className='text-decoration-none text-white fs-6'>
                                    Product
                                </NavLink>
                            </li>
                            <li className='p-2 '>
                                <NavLink to='/about' className='text-decoration-none text-white fs-6'>
                                    Aboute
                                </NavLink>
                            </li>
                            <li className='p-2'>
                                <NavLink to='/service' className='text-decoration-none text-white fs-6'>
                                    Service
                                </NavLink>
                            </li>
                            <li className='p-2'>
                                <NavLink to='/contact' className='text-decoration-none text-white fs-6'>
                                    Contact
                                </NavLink>
                            </li>
                            {/* <li className='p-2'>
                                <NavLink to='/review' className='text-decoration-none text-white fs-6'>
                                    Review
                                </NavLink>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header