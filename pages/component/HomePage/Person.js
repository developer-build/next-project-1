import React from 'react'
import Group from '../../asset/img/Group_4070.png'
import Style from '../../asset/css/Syle.module.css'
import Image from 'next/image'
const Person = () => {
    return (
        <div id={Style.personaol} className='my-20'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-12 '>
                <div>
                    <Image src={Group} />
                </div>
                <div className="text-center mt-40  ml-4 items-center justify-center">
                    <h1 className='text-white text-xl '>Our services</h1>
                    <h1 className='font-bold text-white uppercase text-4xl mt-2 leading-10'>What Can We Do To <br /> Provide Your Business</h1>
                    <p className='text-center text-white mt-4 ml-4 mb-2'>Our mission is to provide quality English language instruction through a variety of courses to international and local students in a professional and supportive atmosphere utilizing our unique English teaching.</p>
                    <button  className={Style.btnbutonto}>learn more</button>
                </div>
            </div>
        </div>
    )
}

export default Person