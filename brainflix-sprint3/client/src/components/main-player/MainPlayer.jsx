import React from 'react';
import {withRouter} from "react-router-dom";
import playButton from "../../assets/icons/SVG/Icon-play.svg"

function MainPlayer ({mainplay}) {
    return(
        <section className='mainPlayer'>
            <video controls src="" className='mainPlayer__video' alt='Main Video' key={mainplay.id} poster={mainplay.image}>
            <source src="" type=""></source>
            </video>
            <div className='mainPlayer__controls'>
                {/* <img className='mainPlayer__playButton' src={playButton} alt=""/>
                <div className='mainPlayer__playButtDiv'></div> */}
            <span className='mainPlayer__rightSide'> 
            <span className='mainPlayer__fullScreen'></span>
            <span className='mainPlayer__volume'></span>
            </span>
            </div>
        </section>
    )
}
export default withRouter(MainPlayer);