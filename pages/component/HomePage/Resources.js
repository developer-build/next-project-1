import React from 'react'

import Image from 'next/image'
import Style from '../../asset/css/Syle.module.css';
import teme1 from '../../asset/img/team1-1.jpg'
import teme2 from '../../asset/img/team2.jpg'
import teme3 from '../../asset/img/team3.jpg'
import teme4 from '../../asset/img/team4.jpg'
import teme5 from '../../asset/img/team5.jpg'

const Resources = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 py-10">
                <div className={`card lg:mx-w bg-base-100 shadow-xl ${Style.CardBorder}`}>
                    <figure className="px-10 pt-10">
                        <Image className="rounded-xl" src={teme1} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-1xl">Fully managed</h2>
                        <p className='w-[90%] text-[18px]'>Ornare arcu dui vivamus arcu felis. Nec tincidunt praesent semper feugiat nibh</p>
                    </div>
                </div>
                <div className={`card lg:mx-w bg-base-100 shadow-xl ${Style.CardBorder}`}>
                    <figure className="px-10 pt-10">
                    <Image className="rounded-xl" src={teme2} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-1xl">Fully managed</h2>
                        <p className='w-[90%] text-[18px]'>Ornare arcu dui vivamus arcu felis. Nec tincidunt praesent semper feugiat nibh</p>
                    </div>
                </div>
                <div className={`card lg:mx-w bg-base-100 shadow-xl ${Style.CardBorder}`}>
                    <figure className="px-10 pt-10">
                    <Image className="rounded-xl" src={teme3} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-1xl">Fully managed</h2>
                        <p className='w-[90%] text-[18px]'>Ornare arcu dui vivamus arcu felis. Nec tincidunt praesent semper feugiat nibh</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
                <div className={`card lg:mx-w bg-base-100 shadow-xl ${Style.CardBorder}`}>
                    <figure className="px-10 pt-10">
                    <Image className="rounded-xl" src={teme1} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-1xl">Fully managed</h2>
                        <p className='w-[90%] text-[18px]'>Ornare arcu dui vivamus arcu felis. Nec tincidunt praesent semper feugiat nibh</p>
                    </div>
                </div>
                <div className={`card lg:mx-w bg-base-100 shadow-xl ${Style.CardBorder}`}>
                    <figure className="px-10 pt-10">
                    <Image className="rounded-xl" src={teme4} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-1xl">Fully managed</h2>
                        <p className='w-[90%] text-[18px]'>Ornare arcu dui vivamus arcu felis. Nec tincidunt praesent semper feugiat nibh</p>
                    </div>
                </div>
                <div className={`card lg:mx-w bg-base-100 shadow-xl ${Style.CardBorder}`}>
                    <figure className="px-10 pt-10">
                    <Image className="rounded-xl" src={teme5} />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-1xl">Fully managed</h2>
                        <p className='w-[90%] text-[18px]'>Ornare arcu dui vivamus arcu felis. Nec tincidunt praesent semper feugiat nibh</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resources