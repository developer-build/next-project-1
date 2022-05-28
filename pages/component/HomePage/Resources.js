import React from 'react'
import Style from '../../asset/css/Syle.module.css'
const Resources = () => {
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12 py-10">
                <div className={`card lg:mx-w bg-base-100 shadow-xl ${Style.CardBorder}`}>
                    <figure className="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-1xl">Fully managed</h2>
                        <p className='w-[90%] text-[18px]'>Ornare arcu dui vivamus arcu felis. Nec tincidunt praesent semper feugiat nibh</p>
                    </div>
                </div>
                <div className={`card lg:mx-w bg-base-100 shadow-xl ${Style.CardBorder}`}>
                    <figure className="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-1xl">Fully managed</h2>
                        <p className='w-[90%] text-[18px]'>Ornare arcu dui vivamus arcu felis. Nec tincidunt praesent semper feugiat nibh</p>
                    </div>
                </div>
                <div className={`card lg:mx-w bg-base-100 shadow-xl ${Style.CardBorder}`}>
                    <figure className="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
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
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-1xl">Fully managed</h2>
                        <p className='w-[90%] text-[18px]'>Ornare arcu dui vivamus arcu felis. Nec tincidunt praesent semper feugiat nibh</p>
                    </div>
                </div>
                <div className={`card lg:mx-w bg-base-100 shadow-xl ${Style.CardBorder}`}>
                    <figure className="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-1xl">Fully managed</h2>
                        <p className='w-[90%] text-[18px]'>Ornare arcu dui vivamus arcu felis. Nec tincidunt praesent semper feugiat nibh</p>
                    </div>
                </div>
                <div className={`card lg:mx-w bg-base-100 shadow-xl ${Style.CardBorder}`}>
                    <figure className="px-10 pt-10">
                        <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
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