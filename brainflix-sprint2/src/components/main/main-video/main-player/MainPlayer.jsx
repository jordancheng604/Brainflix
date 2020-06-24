import React from 'react';

export default function MainPlayer ({mainplay}) {
    return(
        <section className='mainPlayer'>
            {mainplay.slice(8).map(mainplayervid => <video controls src="" poster={mainplayervid.image}className='mainPlayer__video' alt='Main Video' key={mainplayervid.id}>
            <source src="" type=""></source>
            <poster src={mainplayervid.image}></poster>
            </video>).slice(0,1)}
            <div className='mainPlayer__controls'>
            <span className='mainPlayer__rightSide'> 
            <span className='mainPlayer__fullScreen'></span>
            <span className='mainPlayer__volume'></span>
            </span>
            </div>
        </section>
    )
}

