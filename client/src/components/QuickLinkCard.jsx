import React from 'react'

function QuickLinkCard({ content }) {
    return (
        <div className='w-[248px]  lg:w-[165px] h-[105px] flex flex-col items-center justify-center gap-2  ' >
            <img src={content?.image} alt="" className='w-[65px] h-[65px] ' />
            <p className='text-[#010155] font-semibold text-sm text-nowrap text-center hover:text-[#555252] active:text-[#555252] ' > {content?.title} </p>
        </div>
    )
}

export default QuickLinkCard