import React from 'react'

function Comments(){
    return(
        <section className="comments">
            <div className="comments__status"></div>

            <div className="comments__writeOne">
                <img className="comments__image" alt='Avatar Image.'></img>
                <input type="text" className="comments_input"></input>
                <button className="comments__button">COMMENT</button>
            </div>
        </section>
    )
}

export default Comments;