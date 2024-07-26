import React from 'react'

function Links({ content }) {
    console.log(content?.new === true);

    return (
        <div className='mb-7 text-xs font-[500] text-[rgb(0,0,255)] cursor-pointer   '>
            <p className='inline-block underline ' >{content?.data}
                {
                    content?.new &&
                    <img src="/quickLinks/new.gif" alt="" className='inline-block  w-[30px]   ' />
                }
            </p>
        </div>
    )
}

export default Links