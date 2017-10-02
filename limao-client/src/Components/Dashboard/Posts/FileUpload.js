import React from 'react';
import Dropzone from 'react-dropzone';

const FileUpload = (field) => {
    const files = field.input.value;
    
    return (
        <div>
            <Dropzone
                name={field.name}
                onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
            >
                <div>
                    Drop the image here or select it from the folder
                </div>
            </Dropzone>
            {field.meta.touched && field.meta.error &&
                <span className="error">{field.meta.error}</span>}
            {files && Array.isArray(files) && (
                <ul>
                    {files.map((file, i) => <li key={i}> {file.name} - {file.size}</li>)}
                </ul>
            )}
        </div>
    );
};

export default FileUpload;
