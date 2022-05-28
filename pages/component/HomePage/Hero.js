import React from 'react'
import Style from '../../asset/css/Syle.module.css'
const Hero = () => {
    return (
        <div className={Style.bgbackground}>
            <div className={Style.BgOberlay}>
                <div className={`hero min-h-screen }`}>
                    <div className="hero-content text-center text-white">
                        <div className='w-[80%]'>
                            <h1 className="text-5xl uppercase font-bold">We help innovatorsbring their business to life</h1>
                            <p className="py-6">There are endless possibilities in building your
                                own business. It all starts with an idea.</p>
                            <button className={Style.btnbutton}>see how</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero