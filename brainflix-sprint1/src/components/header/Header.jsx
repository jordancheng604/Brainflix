import React from 'react';


function Header(props){
    return(
        <header className='header'>
        <div className='header__logo'>
        <img src={props.logo} alt='BrainFlix Logo'/>
        </div>
        <div className="header__rightSide">
            <input type='text' className="header__textSearchBox" placeholder='Search'/>
            <img src={props.magGlass} alt=''/>
            <button className="header__uploadButton"><img src={props.upPlus} alt=''/> UPLOAD</button>
            <img src={props.mohan} className="header__avatar" alt='mohan'/>
        </div>
        </header>
    )
}




export default Header;