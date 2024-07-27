/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function FooterNavigation({content}) {
    return (
        <div className='flex items-center gap-2 mt-2 text-[white]  font-[500] tracking-wide cursor-pointer hover:text-[#010155] break-words line-clamp-1 overflow-ellipsis ' >
            {content?.icon}
            {content?.content}
        </div>
    )
}

export default FooterNavigation