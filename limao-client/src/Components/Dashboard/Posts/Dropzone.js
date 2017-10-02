import React from 'react';
import Dropzone from 'react-dropzone';

const upload = (field) => {
    const file = field.input.value;

    return (
        <div className="dropzone">
            <Dropzone
                name={field.name}
                accept="image/jpeg, image/png, image/gif"
                onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
            >
                <p> Drop the image file here or click to select the file to upload </p>
                <p>Only image files allowed, jpeg, png or gif</p>
            </Dropzone>
            <h2>Accepted files</h2>
            <ul>
                {
                    file.map(f => <li key={f.name}>{f.name} - {f.size} bytes </li>)
                }
            </ul>
        </div>
    );

}

export default upload;