import Link from 'next/link'
import React from 'react'

type Props = {
    title?: string,
    frontend?: string,
    backend?: string,
    image?: string,
    frontendLink?: string,
    backendLink?: string
}

export default function Card({ title, frontend, backend, image, frontendLink, backendLink }: Props) {
    return (
        <div className=' rounded-md md:h-[350px] w-[350px] bg-white'>
            <div className=' h-44 w-full'>
                <img className=' rounded-t-md h-full w-full object-scale-down' src={image} alt="Card Image" />
            </div>
            <div className='   text-gray-700 flex flex-col gap-1 my-2 p-4'>
                <p className='text-xl'>{title}</p>
                <div className=' text-sm'>
                    <div className=' hover:bg-slate-900 hover hover:text-white duration-100 px-3 rounded-md'>
                        <Link href={frontendLink ? frontendLink : `#`} >
                            <p>Front End</p>
                            <p className=' text-sm'>{frontend}</p>
                        </Link>
                    </div>
                    <div className=' hover:bg-slate-900 hover hover:text-white duration-100 px-3 rounded-md'>
                        <Link href={backendLink ? backendLink : `#`} >
                            <p>Back End</p>
                            <p className=' text-sm'>{backend}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}