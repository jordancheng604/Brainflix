import React from 'react';


function Header(props){
    return(
        <header className='header'>
        <div className='header__logo'>
        <img src={props.logo} alt='BrainFlix Logo'/>
        </div>
        <div className="header__rightSide">
            <input type='text' className="textSearchBox"/>Search
            <button className="uploadButton">+ UPLOAD</button>
            <img src={props.mohan} className="avatar" alt='mohan'/>
        </div>
        </header>
    )
}




export default Header;