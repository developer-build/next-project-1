import Head from 'next/head'
import React from 'react'
import logoine from '../../asset/img/Group_4069.png'
import logoine1 from '../../asset/img/Group_4067.png'
import logoine2 from '../../asset/img/Group_4068.png'
import Image from 'next/image';
const Services = () => {
    return (
        <div>
            <Head>
                <title>home</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

            </Head>
            <div className='py-28'>
                <div className="text-center pb-10">
                    <h1 className='text-[#FF9771] text-xl '>Our services</h1>
                    <h1 className='font-bold uppercase text-4xl mt-2 leading-10'>What Can We Do To <br /> Provide Your Business</h1>

                </div>
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 px-12'>

                    <div className="card lg:mx-w  bg-base-100 ">
                        <figure>
                            <Image src={logoine} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Fully Responsive</h2>
                            <p>Serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy.while the lovely valley teems with around.</p>
                        </div>
                    </div>
                    <div className="card lg:mx-w  bg-base-100 ">
                        <figure>
                            <Image src={logoine1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Plans To Success</h2>
                            <p>Our job goes beyond just imagining and creating beautiful digital design concepts. creating beautiful Our job is also to make.</p>
                        </div>
                    </div>
                    <div className="card lg:mx-w  bg-base-100 ">
                        <figure>
                            <Image src={logoine2} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Safe Estate</h2>
                            <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the spectator on a hillside..</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services