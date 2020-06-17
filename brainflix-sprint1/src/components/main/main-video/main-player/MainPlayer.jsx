import React from 'react';

function MainPlayer (props) {
    return(
        <section className='mainPlayer'>
            <video src={props.main} className='main__video' alt='Main Video'/>
            <div className='main__controls'>scrubber logos
                <span className='main__play'>PLAY</span>
                <span className='main__scrubBar'></span>
                <span className='main__rightSide'>FULLSCREEN VOLUME
                <span className='main__fullScreen'>FULLSCREEN</span>
                <span className='main__volume'>VOLUME</span>
                </span>
            </div>
        </section>
    )
}

export default MainPlayer