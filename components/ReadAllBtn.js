import Link from 'next/link'
import React from 'react'

const ReadAllBtn = () => {
  return (
<Link href="/news">
<div className="w-full flex items-center py-3 px-4 rounded-full justify-start gap-3 mt-2 mb-10 hover:gap-6 font-bold font-raleway transition-all duration-300 text-sm text-white bg-[#A18830]">
        <span className='capitalize'>Read All</span>
        <span>
        <i className="ri-arrow-right-line"></i>
        </span>
    </div>
</Link>
  )
}

export default ReadAllBtn