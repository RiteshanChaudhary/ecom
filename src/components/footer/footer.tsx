import Link from 'next/link'
import React from 'react'
import { ImFacebook } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlinePhone } from "react-icons/md";
import { LuMail } from "react-icons/lu";
import { MdOutlineLocationOn } from "react-icons/md";
const Footer = () => {
    return (
        <div className='bg-[#131d30] tracking-wider text-white flex justify-between px-46 py-10'>
            {/* logo */}
            <div>
                <div>
                    <h1 className='font-bold italic'>Web Store</h1>
                </div>
                <p>Your One-Stop Online Shop for Everything!</p>
            </div>

            {/* links */}
            <div >
                <h1 className='font-bold text-xl mb-2'>Quick links</h1>
                <div className='text-lg transition-all duration-300 text-gray-400 hover:text-white' >
                    <Link href='/'>
                        Home
                    </Link>
                </div>
                <div className='text-lg transition-all duration-300 text-gray-400 hover:text-white'>
                    <Link href='/about-us'>
                        About us
                    </Link>
                </div>
                <div className='text-lg transition-all duration-300 text-gray-400 hover:text-white'>
                    <Link href='/contact-us'>
                        Contact us
                    </Link>
                </div>

            </div>

            {/* find us */}
            <div>
                <h1 className='font-bold text-xl mb-2'>Contact</h1>
                <div className=' flex gap-1 items-center text-[16px] transition-all duration-300 text-gray-400 hover:text-white'>
                    <MdOutlinePhone className='text-white' size={20} />
                    <Link href='tel:9703236043' >
                        +977-8764575757
                    </Link>
                </div>
                <div className=' flex gap-1 items-center text-[16px] transition-all duration-300 text-gray-400 hover:text-white'>
                    <LuMail className='text-white' size={20} />

                    <Link href='mailto:riteshanchau15@gmail.com' >
                        abc@gmail.com
                    </Link>
                </div>
                <div className=' flex gap-1 items-center text-[16px] text-white'>
                    <MdOutlineLocationOn className='text-white' size={20} />
                    <p>
                        Dhangadhi, Kailali
                    </p>
                </div>

            </div>

            {/* social links */}
            <div>
                <h1 className='font-bold text-xl mb-2'>Social</h1>
                <div className='flex gap-3'>
                    <div>
                        <Link href='https://facebook.com' target='_blank'>
                            <ImFacebook size={20} />
                        </Link>
                    </div>
                    <div>
                        <Link href='https://github.com' target='_blank'>
                            <FaGithub size={20} />
                        </Link>
                    </div>
                    <div>
                        <Link href='https://linkedin.com' target='_blank'>
                            <FaLinkedin size={20} />
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer