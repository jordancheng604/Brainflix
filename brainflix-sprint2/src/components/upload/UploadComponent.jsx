import React from 'react'

export default function Upload() {
    return (
        <div>
            <h1>Upload Video</h1>
            <h5>VIDEO THUMBNAIL</h5>
            <img src="" alt=""/>
            <h5>TITLE YOUR VIDEO</h5>
            <input type="text" placeholder="Add a title to your video"/>
            <h5>ADD A VIDEO DESCRIPTION</h5>
            <textarea type="text" placeholder="Add a description of your video"></textarea>
            <button>PUBLISH</button>
            <button>CANCEL</button>
        </div>
    )
}
