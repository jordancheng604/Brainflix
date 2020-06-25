import React from 'react'
import mohan from '../../assets/images/mohan.jpg'

export default function Comments({commentsSection}){
    console.log(commentsSection)
    return(
        <div>
            <div className="comments">    
            <h5 className="comments__commStat">3 Comments</h5>
           <h5 className="comments__joinConvo" >JOIN THE CONVERSATION</h5>
           <section className="comments__addComm">
                <img className="comments__image" src={mohan} alt=""></img>
                
            <textarea type="text" rows='4' placeholder="Write comment here" className="comments__input">
                </textarea>
                 <button className="comments__button">COMMENT</button>
                 </section>
                 </div>

        {commentsSection.map(
            commentsSection =>
            <li className="comments__card" > 
            <img className="comments__image2" alt="" src=""/>
           <span className="comments__namDatContain">
          <span className="comments__usrName">{commentsSection.name}</span>
            <span className="comments__date">{commentsSection.timestamp}</span>
            </span>
            <div className="comments__commMent">{commentsSection.comment}</div>
             </li> 
        )
            
                }
{
    // {commentsSection.image}
    // key={commentsSection.id}
        // <section className="comments">    
        //     <h5 className="comments__commStat">3 Comments</h5>
        //     <h5 className="comments__joinConvo" >JOIN THE CONVERSATION</h5>
        //     <div className="comments__addComm">
        //         {/* <img className="comments__image" src={commentsSection.image} alt=""></img> */}
                
        //      <textarea type="text" rows='4' placeholder="Write comment here" className="comments__input">
        //         </textarea>
        //         <button className="comments__button">COMMENT</button>
        //     </div>
        //     <ul className="comments__secCards">
           
        //     {/* <li className="comments__card" key={commentsSection.id}> */}
        //     <img className="comments__image2" alt="" src={commentsSection.image}/>
        //     <span className="comments__namDatContain">
        //     <span className="comments__usrName">{commentsSection.name}</span>
        //     <span className="comments__date">{commentsSection.date}</span>
        //     </span>
        //     <div className="comments__commMent">{commentsSection.comment}</div>
            /* </li> */
            
            /* </ul> */
        // </section>
    }
        </div>
    )
}

