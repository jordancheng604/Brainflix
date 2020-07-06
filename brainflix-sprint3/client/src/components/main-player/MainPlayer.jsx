import React from 'react';
import {withRouter} from "react-router-dom";
import playButton from "../../assets/icons/SVG/Icon-play.svg"
import scrubber from "../../assets/icons/SVG/Icon-scrubber.svg"
import fullscreen from "../../assets/icons/SVG/Icon-fullscreen.svg"
import speaker from "../../assets/icons/SVG/Icon-volume.svg"

function MainPlayer ({mainplay}) {
    return(
        <section className='mainPlayer'>
            <video controls src="" className='mainPlayer__video' alt='Main Video' key={mainplay.id} poster={mainplay.image}>
            <source src="" type=""></source>
            </video>
            <></>
            <div className='mainPlayer__controls'>
                {/* position relative  */}
                <div>
                <img className='mainPlayer__playButton' src={playButton} alt=""/>
                </div>
                <span>
                    <img className='mainPlayer__scrub' src={scrubber} alt=""/>
                </span>
                {/* //<div className='mainPlayer__playButtDiv'></div> */}
            <span className='mainPlayer__rightSide'> 
            <span className='mainPlayer__fullScreen'>
            <img className='mainPlayer__fullscreenIMG' src={fullscreen} alt=""/>
            </span>
            <span className='mainPlayer__volume'>
            <img className='mainPlayer__volumeIMG' src={speaker} alt=""/>
            </span>
            </span>
            </div>
        </section>
    )
}
export default withRouter(MainPlayer);