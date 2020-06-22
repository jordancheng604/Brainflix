import React from 'react';
import magMag from '../../assets/icons/PNG/Icon-search.png'

function Header(props){
    return(
        <header className='header'>
        <div className='header__logo'>
        <img src={props.logo} alt='BrainFlix Logo'/>
        </div>
        <input type='text' className="header__textSearchBox" placeholder='Search'/>
        <div className="header__rightSide">
           

        <button className="header__uploadButton"><img src={props.upPlus} alt=''/>  UPLOAD</button>
        <img src={props.mohan} className="header__avatar" alt='mohan'/>
        </div>
        </header>
    )
}




export default Header;