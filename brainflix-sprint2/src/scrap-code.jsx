      

    
        

                    
    
            
        
    


   

//if (true==true)
// {
//     return(
        
//         <ul className="SideVideo">
//             <h5 className="SideVideo__sectionTitle" >NEXT VIDEO</h5>
//             {sideVids.map(
                
//                 vidList => 
            
//                 // <li className="SideVideo__card" key={vidList.id}>
//                 //Why no get id....?....
//                 //Why are they key.id errors...
//             <Link to={`/videos/${vidList.id}`}>
//             <li className="SideVideo__card" key={vidList.id}>
//                 <img className="SideVideo__image" src={vidList.image} alt='thumbnail to indicate video'/>
//                 <div>
//                 <div className="SideVideo__title" >{vidList.title}</div>
//             <div className="SideVideo__author" >{vidList.channel}</div>
//             </div>
//             </li>
//             </Link>
//             )
//             //Maybe you want a different method.
//             //Whatever is selected. and whatever video is to be shown on the mainPlayer; will be hidden.
//             //a new array will be created that doesn't have the selected video that's showing in MainPlayer?
//             }
//         </ul>
//     )
// }



// export default function SideVideo({sideVids}) {
//     console.log('hello');
//     // let noDoubles = "";
//     // if (this.state === MainPlayer.mainplay.id)
//         return(
//             <ul className="SideVideo">
//                 <h5 className="SideVideo__sectionTitle" >NEXT VIDEO</h5>
//                 {sideVids.map(vidList => 
//                 <Link to='/'>
//                 <li className="SideVideo__card" key={vidList.id}>
//                     <img className="SideVideo__image" src={vidList.image} alt='thumbnail to indicate video'/>
//                     <div>
//                     <div className="SideVideo__title" >{vidList.title}</div>
//                 <div className="SideVideo__author" >{vidList.channel}</div>
//                 </div>
//                 </li>
//                 </Link>
//                 ).slice( MainPlayer => MainPlayer.mainplay.id)
//                 }
//             </ul>
//         )
    
//     }





// if(vidList !== undefined )