import React from 'react';
import eyeView from '../../../../assets/icons/PNG/Icon-views.png';
import heartLike from '../../../../assets/icons/PNG/Icon-likes.png';

export default function Description({explain}) {
    return(
        <section className="describe">
            {explain.slice(7).map(expDesc => <div><h1 className='describe__title' key={expDesc.id}>
            {expDesc.title}</h1>
            <div className="describe__authToLksContain">
            <span className="describe__authDate">
            <span className="describe__author">{expDesc.channel}</span>
            <span className="describe__date"> {expDesc.timestamp} </span>
            </span>

            <span className="describe__viewLike">
            <span>
            <img className="describe__eyeBall" src={eyeView} alt=''/>
            <span className="describe__views"> {expDesc.views} </span>
            </span>

            <span>
            <img className="describe__heartHeart" src={heartLike} alt=''/>
            <span className="describe__likes"> {expDesc.likes} </span>
            </span>
            </span>
            </div>
            <div className="describe__longContainr">
            <span className="describe__long">{expDesc.description}</span>
            </div>

            </div> ).slice(1,2)}



        {/* // <span className="describe__author"> AUTHOR </span>
        // <span className="describe__date"> DATE </span>
        // <span className="describe__views"> VIEWS </span>
        // <span className="describe__likes"> LIKES </span>
        // <span className="describe__long">LONG DETAILS HERE:</span>)} */}
        
        </section>
    )
}

