import React from 'react'
import {Link} from "react-router-dom"

const Hero = () => {
    return (
        <section className='max-padd-container pt-[99px]'>
            <div className='max-padd-container bg-hero bg-center bg-no-repeat bg-cover h-[655px] w-full rounded-3xl'>
                <div className='relative top-32 xs:top-52 '>
                    <span className='medium-18'>Your Dream Home Awaits</span>
                    <h1 className='h1 capitalize max-w-[40rem] '>Book Property Visits Effortlessly with Homely.com</h1>
                    <p className='my-10 max-w-[33rem]'>Schedule viewings for homes you love with our simple platform. Experience the easiest way to find and visit properties that match your criteria.</p>
                    {/* button */}
                    <div className='inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl'>
                        <div className='text-center regular-14 leading-tight pl-5'>
                            <h5 className='uppercase font-bold'>10% Off</h5>
                            <p className='regular-14'>First-Time Visitors</p>
                        </div>
                        <Link to={'/listing'} className={"btn-secondary rounded-xl flexCenter !py-5"}>Browse Homes</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero