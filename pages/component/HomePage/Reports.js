import React from 'react'
import Style from '../../asset/css/Syle.module.css'
import Image from 'next/image'
import vector from '../../asset/img/Vector-BG.png'
const Reports = () => {
    return (
        <div>
            <div className="hero min-h-screen px-12">
                <div className="hero-content flex-col lg:flex-row">
                    <Image src={vector} width={1000} height={1000} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mx-20 '>
                        <h1 className="text-5xl font-bold">Reports & Analytics</h1>
                        <p className="py-6">Amet dictum sit amet justo donec enim diam vulputate. Vitae suscipit tellus mauris a diam maecenas sed enim ut..</p>
                        <button  className={Style.btnbutton}>learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reports