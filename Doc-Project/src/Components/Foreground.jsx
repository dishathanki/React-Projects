import React, { useRef } from 'react'
import Card from './Card'

function Foreground() {

    const ref = useRef(null);

    const data =[
        {
            desc: "This is the background color of the card that will be displayed",
            fileSize : ".9Mb" ,
            close : true,
            tag : {
                isOpen : true,
                tagTitle : "Download now",
                tagColor : "green" },
        },

         {
            desc: "This is the background color of the card that will be displayed",
            fileSize : ".9Mb" ,
            close : true,
            tag : {
                isOpen : true,
                tagTitle : "Upload",
                tagColor : "blue" },
        },

         {
            desc: "This is the background color of the card that will be displayed",
            fileSize : ".9Mb" ,
            close : true,
            tag : {
                isOpen : false,
                tagTitle : "green",
                tagColor : "green" },
        }
    ]

  return (
    <div ref={ref} className='fixed z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Card data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground