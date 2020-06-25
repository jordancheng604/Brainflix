import React from 'react';

export default function SideVideo({sideVids}) {
    return(
        <ul className="SideVideo">
            <h5 className="SideVideo__sectionTitle" >NEXT VIDEO</h5>
            {sideVids.map(vidList => <li className="SideVideo__card" key={vidList.id}>
                <img className="SideVideo__image" src={vidList.image} alt='thumbnail to indicate video'/>
                <div>
                <div className="SideVideo__title" >{vidList.title}</div>
            <div className="SideVideo__author" >{vidList.channel}</div>
            </div>
            </li>
            ).slice(0,8)}
        </ul>
    )}