'use client';
import React from 'react'


const page = () => {
    return (
        <div className='w-full my-32 sm:my-48 px-8 sm:px-32 overflow-hidden'>
            <h1 className='text-4xl sm:text-6xl my-8 tracking-tighter'>MITM Attack using ARP Spoofing</h1>

            <iframe
                src="/MITM-manual.pdf"
                className='w-full h-[600px] sm:h-[1000px] border-none'
            />
        </div>
    )
}

export default page