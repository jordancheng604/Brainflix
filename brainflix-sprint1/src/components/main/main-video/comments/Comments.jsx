import React from 'react'

export default function Comments({commentsSection}){
    return(
        <section className="comments">
            <div className="comments__status"></div>

            <div className="comments__writeOne">
                <img className="comments__image" alt='User Avatar'></img>
                <input type="text" className="comments_input"></input>
                <button className="comments__button">COMMENT</button>
            </div>
            <h5>3 Comments</h5>

            <ul className="comments__secCards">
            {commentsSection.splice(9,3).map(commsec => 
            <li className="comments__card" key={commsec.id}>
            <img className="comments__image" alt="User Avatar" src={commsec.image}/>
            <span className="comments__usrName">{commsec.name}</span>
            <span className="comments__date">{commsec.date}</span>
            <div className="comments__commment">{commsec.comment}</div>
            </li>
            )}
            
            </ul>
            
        </section>
    )
}

