import React from 'react'

export default function UploadComponent() {
    return (
        <div>
            <h1 className="upload__sectionTitle">Upload Video</h1>
            <h5 className="upload__videoTitle">VIDEO THUMBNAIL</h5>
            <img src="" alt=""/>
            <h5 className="upload__yourVideoTitle">TITLE YOUR VIDEO</h5>
            <input className="upload__yourTitleInput" type="text" placeholder="Add a title to your video"/>
            <h5 className="upload__yourVideoDescription">ADD A VIDEO DESCRIPTION</h5>
            <textarea className="upload__yourVideoDetailsInput" type="text" placeholder="Add a description of your video"></textarea>
            <button className="upload__publishButton">PUBLISH</button>
            <button className="upload__cancelButton">CANCEL</button>
        </div>
    )
}
