import React from 'react'

export default function Comments({commentsSection}){
    return(
        <section className="comments">
            <div className="comments__status"></div>

            <div className="comments__writeOne">
                <img className="comments__image" alt='' src=""
                >
                {/* // {commentsSection.slice(12,1).image} */}
                

                </img>
                <textarea type="text" rows='5' placeholder="Write comment here" className="comments__input"></textarea>
                <button className="comments__button">COMMENT</button>
            </div>
            <h5>3 Comments</h5>

            <ul className="comments__secCards">
            {commentsSection.slice(9).map(commsec => 
            <li className="comments__card" key={commsec.id}>
            <img className="comments__image" alt="" src={commsec.image}/>
            <span className="comments__usrName">{commsec.name}</span>
            <span className="comments__date">{commsec.date}</span>
            <div className="comments__commment">{commsec.comment}</div>
            </li>
            ).slice(0,3)}
            
            </ul>
            
        </section>
    )
}

