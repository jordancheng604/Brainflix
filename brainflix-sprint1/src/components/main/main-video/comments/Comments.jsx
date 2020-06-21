import React from 'react'

export default function Comments({commentsSection}){
    return(
        <section className="comments">
            {/* <div className="comments__status">

            <div className="comments__writeOne">
            {commentsSection.slice(12).map(addComm =>
            <img className="comments__image" alt='' src={addComm.image}></img>
            
            <textarea type="text" rows='5' placeholder="Write comment here" className="comments__input">
                
            </textarea>

            <button className="comments__button">COMMENT</button>

            )
            }
            </div>
            </div> */}
                {/* // {commentsSection.slice(12,1).image} */}
                

               
            <h5 className="comments__commStat">3 Comments</h5>
            <h5 className="comments__joinConvo" >JOIN THE CONVERSATION</h5>
            <div className="comments__addComm">
                {commentsSection.slice(12).map(commAdd => <img className="comments__image" src={commAdd.image} alt=""></img>
                ).slice(0)}
             <textarea type="text" rows='4' placeholder="Write comment here" className="comments__input">
                
                </textarea>
                <button className="comments__button">COMMENT</button>
            </div>
            <ul className="comments__secCards">
            {commentsSection.slice(9).map(commsec => 
            <li className="comments__card" key={commsec.id}>
            <img className="comments__image2" alt="" src={commsec.image}/>
            <span className="comments__namDatContain">
            <span className="comments__usrName">{commsec.name}</span>
            <span className="comments__date">{commsec.date}</span>
            </span>
            <div className="comments__commMent">{commsec.comment}</div>
            </li>
            ).slice(0,3)}
            
            </ul>
            
        </section>
    )
}

