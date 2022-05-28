import Head from 'next/head'
import React from 'react'

const Services = () => {
    return (
        <div>
            <Head>
                <title>home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            </Head>
            <div className='py-20'>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 px-12'>
                    <div className="card lg:mx-w  bg-base-100 shadow-xl">
                        <h1 className='text-2xl text-center mt-5 font-bold uppercase'>Starter</h1>
                        <figure className="px-10 pt-10">
                            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <i class="lni lni-add-file"></i>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:mx-w   bg-base-100 shadow-xl">
                        <h1 className='text-2xl text-center mt-5 font-bold uppercase'>Starter</h1>
                        <figure className="px-10 pt-10">
                            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <i class="lni lni-add-file"></i>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:mx-w   bg-base-100 shadow-xl">
                        <h1 className='text-2xl text-center mt-5 font-bold uppercase'>Starter</h1>
                        <figure className="px-10 pt-10">
                            <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <i class="lni lni-add-file"></i>
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services