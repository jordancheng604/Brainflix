import React from 'react';
import './SideVideo.scss'

export default function SideVideo({sideVids}) {
    return(
        <ul className="SideVideo">
            <h5 className="SideVideo__sectionTitle" >NEXT VIDEO</h5>
            {sideVids.map(videoList => 
            <li className="SideVideo__card" key={videoList.id}>
            <img className="SideVideo__image" src={videoList.image} alt='thumbnail to indicate video'/>
            <div className="SideVideo__title" >{videoList.title}</div>
            <div className="SideVideo__author" >{videoList.channel}</div>
            </li>
            )}
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