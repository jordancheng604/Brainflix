import React from 'react';


function Header(props){
    return(
        <header className='header'>
        <div className='header__logo'>
        <img src={props.logo} alt='BrainFlix Logo'/>
        </div>
        <div className="header__rightSide">
            <input type='text' className="header__textSearchBox"/>
            <button className="header__uploadButton">+ UPLOAD</button>
            <img src={props.mohan} className="header__avatar" alt='mohan'/>
        </div>
        </header>
    )
}




export default Header;