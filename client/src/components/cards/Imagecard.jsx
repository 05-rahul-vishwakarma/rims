import React from 'react'

function Imagecard({content}) {
  return (
    <div style={{boxShadow:"0px 10px 15px rgba(0, 0, 0, 0.10)"}} className='border-2 ' >
        <img src={content?.image} alt="" width={200} />
    </div>
  )
}

export default Imagecard