import React from 'react';
import playLogo from '../../../../assets/icons/SVG/Icon-play.svg';
import testIMG from '../../../../assets/images/mohan.jpg';

export default function MainPlayer ({mainplay}) {
    return(
        <section className='mainPlayer'>
            <img className='mainPlayer__play' alt="" src={playLogo}/>
            {/* <video src={props.main} className='main__video' alt='Main Video'/> */}
            {mainplay.slice(8).map(mainplayervid => <video src="" poster={mainplayervid.image} className='mainPlayer__video' alt='Main Video'key={mainplayervid.id}>
            {/* <img className='mainPlayer__testIMG' alt="" src={testIMG}/> */}
            
            </video>).slice(0,1)}
            <div className='mainPlayer__controls'>
            {/* <span className='main__play'>*/}
            {/* <img className='mainPlayer__testIMG' alt="" src={testIMG}/> */}
            

            <span className='mainPlayer__scrubBar'></span>
            <img src="" alt=""/>
            <span className='mainPlayer__rightSide'> 
            <span className='mainPlayer__fullScreen'></span>
            <span className='mainPlayer__volume'></span>
            </span>
            </div>


            {/* <section className="describe">
            {mainplay.splice(8,1).map(mainplayervid => <div><h1 className='describe__title' key={mainplayervid.id}>
            {mainplayervid.title}</h1>
            <span className="describe__author">{mainplayervid.channel}</span>
            <span className="describe__date"> {mainplayervid.timestamp} </span>
            <span className="describe__views"> {mainplayervid.views} </span><span className="describe__likes"> {mainplayervid.likes} </span><span className="describe__long">{mainplayervid.description}</span>
            </div> )}



        {/* // <span className="describe__author"> AUTHOR </span>
        // <span className="describe__date"> DATE </span>
        // <span className="describe__views"> VIEWS </span>
        // <span className="describe__likes"> LIKES </span>
        // <span className="describe__long">LONG DETAILS HERE:</span>)} */}
        
        {/* </section> */} 


        </section>
       
    )
}

