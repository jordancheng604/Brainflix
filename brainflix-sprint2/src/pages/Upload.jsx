import React from 'react'
import Header from '../components/header/Header'
import logo from '../logo.svg'
import mohan from '../assets/images/mohan.jpg'
import magGlass from '../assets/icons/SVG/Icon-upload.svg'
import upPlus from '../assets/icons/SVG/Icon-upload.svg'
import UploadComponent from '../components/upload/UploadComponent'

export default function Upload() {
    return (
        <div>
            <Header logo={logo} mohan={mohan} magGlass={magGlass} upPlus={upPlus}/> 
            <UploadComponent/>
                   
            {/* <h1>Upload Video</h1>
            <h5>VIDEO THUMBNAIL</h5>
            <img src="" alt=""/>
            <h5>TITLE YOUR VIDEO</h5>
            <input type="text" placeholder="Add a title to your video"/>
            <h5>ADD A VIDEO DESCRIPTION</h5>
            <textarea type="text" placeholder="Add a description of your video"></textarea>
            <button>PUBLISH</button>
            <button>CANCEL</button> */}
        </div>
    )
}
