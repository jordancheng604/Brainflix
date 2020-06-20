import React from 'react';


export default function Description({explain}) {
    return(
        <section className="describe">
            {explain.map(expDesc => <div><h1 className='describe__title' key={expDesc.id}>
            {expDesc.title}</h1>
            <span className="describe__author">{expDesc.channel}</span>
            <span className="describe__date"> {expDesc.timestamp} </span>
            <span className="describe__views"> {expDesc.views} </span><span className="describe__likes"> {expDesc.likes} </span><span className="describe__long">{expDesc.description}</span>
            </div> ).splice(8,1)}



        {/* // <span className="describe__author"> AUTHOR </span>
        // <span className="describe__date"> DATE </span>
        // <span className="describe__views"> VIEWS </span>
        // <span className="describe__likes"> LIKES </span>
        // <span className="describe__long">LONG DETAILS HERE:</span>)} */}
        
        </section>
    )
}

