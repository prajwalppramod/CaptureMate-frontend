import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CancelIcon from '@mui/icons-material/Cancel';

const HomeScreen = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*', // Specify accepted file types
        onDrop: (acceptedFiles) => {
            setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
            // You can call your backend API endpoint to upload files here if needed
        },
    });

    const deleteFile = (fileIndex) => {
        setUploadedFiles((prevFiles) => prevFiles.filter((file, index) => index !== fileIndex));
    };

    return (
        <div className='h-screen flex flex-col justify-center items-center gap-5'>
            <div className='flex flex-col justify-center md:pt-20 items-center gap-5'> {/* Default gap of 5 */}
                <img className="h-8" src="/assets/logo.png" alt="a" />
            </div>
            <div className='flex flex-col justify-center items-center gap-3' {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag and drop images here or click to browse.</p>
                <button className="bg-[#F9DF00] text-[#141414] font-bold py-2 px-4 rounded">Add Image</button>
            </div>

            <ImageList sx={{ width: 400, height: 600 }} cols={2} rowHeight={264}>
                {uploadedFiles.map((file, index) => (
                    <ImageListItem key={index}>
                        <img src={URL.createObjectURL(file)} alt={`Uploaded Image ${index}`} loading="lazy" />
                        <button
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex justify-center items-center"
                            onClick={() => deleteFile(index)}
                        >
                            <CancelIcon />
                        </button>
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
};

export default HomeScreen;
