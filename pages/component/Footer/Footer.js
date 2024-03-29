import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='pt-10'>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div className='text-center'>
                    <Link href='/'>
                        <a className="btn btn-ghost normal-case font-bold text-3xl  text-[#292F3D] ">
                            Ekko Marketing</a>
                    </Link>
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer