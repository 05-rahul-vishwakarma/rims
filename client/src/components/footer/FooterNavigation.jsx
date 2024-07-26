import React from 'react'
import { GoDotFill } from "react-icons/go";

function FooterNavigation({content}) {
    return (
        <div className='flex items-center gap-2 mt-2 text-[white] text-sm font-[500] tracking-wide cursor-pointer hover:text-[#010155] ' >
            <GoDotFill className='mt-0.5 ' />
            {content?.link}
        </div>
    )
}

export default FooterNavigation