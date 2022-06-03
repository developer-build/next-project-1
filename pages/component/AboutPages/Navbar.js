import Link from 'next/link'
import React from 'react'
import Style from '../../asset/css/Syle.module.css'

const Navbar = () => {
    return (
        <div >
            <div className="navbar bg-base-100  container mx-auto sticky top-0 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu uppercase menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <li><Link href='/'><a>home</a></Link></li>

                            <li><Link href='/about'><a>about</a></Link></li>

                            <li><Link href='/blog'><a>blog</a></Link></li>

                            <li><Link href='/services'><a>services</a></Link></li>

                            <li><Link href='/contact'><a>contact</a></Link></li>
                        </ul>
                    </div>
                    <Link href='/'>
                        <a className="btn btn-ghost normal-case font-bold text-3xl  text-[#292F3D] ">
                            Ekko Marketing</a>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal uppercase p-0">

                        <li><Link href='/'><a>home</a></Link></li>

                        <li><Link href='/about'><a>about</a></Link></li>

                        <li><Link href='/blog'><a>blog</a></Link></li>

                        <li><Link href='/services'><a>services</a></Link></li>

                        <li><Link href='/contact'><a>contact</a></Link></li>

                    </ul>
                </div>
                <div className="navbar-end uppercase">
                    <a className={Style.btnHome}>let's talk</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar