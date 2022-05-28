import Image from 'next/image'
import React from 'react'
import Style from '../../asset/css/Syle.module.css'
import vector from '../../asset/img/vector-bg2.png'
const Research = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div className="hero min-h-screen bg-white">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <Image src={vector} width={1000} height={1000} className="mr-28 rounded-lg w-[400px] " />
                        <div className='mx-20'>
                            <h1 className='my-4 text-4xl font-bold'>Strategy & research </h1>
                            <p className='text-[#292f3d] my-4'>Tristique senectus et netus et malesuada fames ac turpis. Pharetra sit amet aliquam id diam maecenas ultricies.</p>
                            <button  className={Style.btnbutton}>learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Research