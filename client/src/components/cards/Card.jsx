import { useEffect, useState } from "react";
import { FaGift } from "react-icons/fa6";

function card({ content }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div style={{
      border: '1px solid lightgray',
      width: windowWidth >= 1024 ? `${content?.width}` : '90%',
    }} className=" ml-auto mr-auto rounded-md mb-4 mt-1 pb-[1rem] shadow-sm relative " >
      <div style={{ background: content?.color }} className={`flex items-center py-1 gap-3  text-[#fffffffd] rounded-tr-md rounded-tl-md `} >
        <span className="pl-2" >{content?.icon}</span>
        <p className="font-[500] text-sm " > {content?.title} </p>
      </div>
      <div className=" p-[15px] flex justify-center items-center " >
        <img src={content?.image} className="object-contain " />
      </div>
      <p className="capitalize text-center p-2 text-sm font-normal text-[#313131]">
        {content?.content}
      </p>
      <p className="text-center absolute bottom-[5px] w-full  text-sm text-[#313131] cursor-pointer " >more info... </p>
    </div>
  )
}

export default card