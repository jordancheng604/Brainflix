import React from 'react';
import playLogo from '../../../../assets/icons/PNG/Icon-play.png'

export default function MainPlayer ({mainplay}) {
    return(
        <section className='mainPlayer'>
            {/* <video src={props.main} className='main__video' alt='Main Video'/> */}
            {mainplay.splice(8,1).map(mainplayervid => <video src={mainplayervid.image} poster={mainplayervid.image} className='mainPlayer__video' alt='Main Video'key={mainplay.id}/>)}
            <div className='main__controls'>
            {/* <span className='main__play'>             */}
            <img className='main__play' alt="" src={playLogo}/>
            
            <span className='main__scrubBar'></span>
            <img src=""/>
            <span className='main__rightSide'> 
            <span className='main__fullScreen'></span>
            <span className='main__volume'></span>
            </span>
            </div>
        </section>
    )
}

