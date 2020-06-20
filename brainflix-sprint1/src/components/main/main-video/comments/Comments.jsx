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

            <ul className="comments__secCard">
                <h5>3 Comments</h5>
            {commentsSection.map(comm => 
            <li className="comments__card" key={comm.id}>
            <img className="comments__image" alt="User Avatar" src={comm.image}/>
            <span className="comments__usrName">{comm.name}</span>
            <span className="comments__date">{comm.date}</span>
            <div className="comments__commment">{comm.comment}</div>
            </li>
            )}
            </ul>
           
        </section>
    )
}

