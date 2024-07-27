/* eslint-disable react/prop-types */

function CircleCard({content}) {
    return (
        <div
            style={{ boxShadow: "#e9e9e9 -3px 0px 0px 0px" }}
            className="flex items-center flex-col lg:w-[16rem] lg:h-[16rem] w-full min-h-[10rem] mb-4 rounded-[48%] "
        >
            <img
                src={content?.image}
                alt=""
                className="w-[85px] mt-[1.5rem] transition-transform duration-300 ease-in-out transform hover:translate-y-[-6px]"
            />
            <article className="text-sm font-normal text-center px-3 pt-1 line-clamp-1  w-[80%] ">
               {content?.content}
            </article>
        </div>
    )
}

export default CircleCard