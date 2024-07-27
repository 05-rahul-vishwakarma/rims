/* eslint-disable react/prop-types */

function QuickLinkCard({ content }) {
    return (
        <div className='w-[10rem] h-[10rem] flex flex-col justify-center items-center    ' >
            <img src={content?.image} alt="" className='w-[65px] h-[65px] ' />
            <p className='break-words text-center line-clamp-1 ' > {content?.title} </p>
        </div>
    )
}

export default QuickLinkCard