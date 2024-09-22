import React from 'react'
import Card from './Card'


function Fourground() {



    const data=[
        {
        desc: "This is the background color of the Card that will be displayed.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
        },
        {
            desc: "This is the background color of the Card that will be displayed.",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue"},
            },

       {
        desc: "This is the background color of the Card that will be displayed.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue"},
        },

];

return (
    <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index)=> (
        <Card data={item}/>
        ))}
        </div>
  );
}

export default Fourground;