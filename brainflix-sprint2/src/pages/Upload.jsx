import React from 'react';
import Header from '../components/header/Header';
import logo from '../logo.svg';
import mohan from '../assets/images/mohan.jpg';
import magGlass from '../assets/icons/SVG/Icon-upload.svg';
import upPlus from '../assets/icons/SVG/Icon-upload.svg';
import UploadComponent from '../components/Upload/UploadComponent.jsx';

export default function Upload() {
    return (
        <div>
            <Header logo={logo} mohan={mohan} magGlass={magGlass} upPlus={upPlus}/> 
            <UploadComponent/>
        </div>
    )
}
