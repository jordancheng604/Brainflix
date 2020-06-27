import React from 'react';
import magGlass from '../../assets/icons/PNG/Icon-search.png';
import { Link } from "react-router-dom";


function Header(props){
    return(
        <header className='header'>
                    
        <div className='header__logo'>
        <Link to='/' className="bfLogo">
        <img src={props.logo} alt='BrainFlix Logo'/>
        </Link>

        </div>

        <div className="header__searchBoxContainer">
        <input type='text' className="header__textSearchBox" placeholder='Search'/>
        <img className="header__searchBoxMagGlass"src="" alt=''/>
        </div>

        <div className="header__rightSide">

        <Link to='/Upload'>
        <button className="header__uploadButton"><img src={props.upPlus} alt=''/>  UPLOAD</button>
        </Link>

        <img src={props.mohan} className="header__avatar" alt='mohan'/>
        </div>
        </header>
    )
}
export default Header;