import React from 'react';

export default function SideVideo({sideVids}) {
    return(
        <ul>
            {sideVids.map(videoList => 
            <li key={sideVids.id}>
            <div>{videoList.image}</div>
            <div>{videoList.title}</div>
            <div>{videoList.channel}</div>
            </li>)}
        </ul>
    )
   
}

//I have a feeling you're suppose to do a for loop or a for each.
//And not to have all the videos laid out like this right now.
// function SideVideo(){
//     return(
//         <section className='sideVideo'>
//             <span className='sideVideo__nextVideo'>NEXT VIDEO</span>
//             <div className='sideVideo__card'>
//             <img className='sideVideo__image' href='' alt='Side Column Video'/>
//             <title className='sideVideo__title'></title>
//             <div className='sideVideo__author'></div>
//             </div>
//             <div className='sideVideo__card'>
//             <img className='sideVideo__image' href='' alt='Side Column Video'/>
//             <title className='sideVideo__title'></title>
//             <div className='sideVideo__author'></div>
//             </div>
//             <div className='sideVideo__card'>
//             <img className='sideVideo__image' href='' alt='Side Column Video'/>
//             <title className='sideVideo__title'></title>
//             <div className='sideVideo__author'></div>
//             </div>
//             <div className='sideVideo__card'>
//             <img className='sideVideo__image' href='' alt='Side Column Video'/>
//             <title className='sideVideo__title'></title>
//             <div className='sideVideo__author'></div>
//             </div>
//             <div className='sideVideo__card'>
//             <img className='sideVideo__image' href='' alt='Side Column Video'/>
//             <title className='sideVideo__title'></title>
//             <div className='sideVideo__author'></div>
//             </div>
//             <div className='sideVideo__card'>
//             <img className='sideVideo__image' href='' alt='Side Column Video'/>
//             <title className='sideVideo__title'></title>
//             <div className='sideVideo__author'></div>
//             </div>
//             <div className='sideVideo__card'>
//             <img className='sideVideo__image' href='' alt='Side Column Video'/>
//             <title className='sideVideo__title'></title>
//             <div className='sideVideo__author'></div>
//             </div>
//             <div className='sideVideo__card'>
//             <img className='sideVideo__image' href='' alt='Side Column Video'/>
//             <title className='sideVideo__title'></title>
//             <div className='sideVideo__author'></div>
//             </div>
//         </section>
//     )
// }


// export default SideVideo;