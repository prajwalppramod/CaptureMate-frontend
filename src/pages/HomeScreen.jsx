import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CancelIcon from '@mui/icons-material/Cancel';
import { IconButton } from '@mui/material';
import { Send } from '@mui/icons-material';
import { useRecognizeMutation } from '../services/photo/photoApi';
import { useDispatch, useSelector } from 'react-redux';
import { setPhotoId, setRecipients } from '../services/photo/photoSlice';
import { useNavigate } from 'react-router-dom';

const HomeScreen = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const { userId } = useSelector((state) => state.user.user);
    const [recognize, result] = useRecognizeMutation();

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*', // Specify accepted file types
        onDrop: (acceptedFiles) => {
            setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
            // You can call your backend API endpoint to upload files here if needed
        },
    });

    const deleteFile = (fileIndex) => {
        setUploadedFiles((prevFiles) => prevFiles.filter((_, index) => index !== fileIndex));
    };

    const handleSend = async (fileIndex) => {
        const formData = new FormData();
        formData.append('userId', userId);
        formData.append('picture', uploadedFiles[fileIndex]);

        try {
            const result = await recognize(formData);
            if(result?.error || result?.data?.error) {
                console.error('Error recognizing image');
                return;
            }
            dispatch(setPhotoId(result.data.photoId));
            dispatch(setRecipients(result.data.friends));

            navigate('/send-photo');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='h-screen flex flex-col mt-20 items-center gap-5'>
            <div className='flex flex-col justify-center md:pt-20 items-center gap-5'> {/* Default gap of 5 */}
                <img className="h-8" src="/assets/logo.png" alt="a" />
            </div>
            <div className='flex flex-col justify-center items-center gap-3' {...getRootProps()}>
                <input {...getInputProps()} />
                <p className='text-xl'>Drag and drop images here or click to browse.</p>
                <button className="bg-[#F9DF00] text-[#141414] font-bold py-2 px-4 rounded" type='button'>Add Image</button>
            </div>

            <ImageList cols={1}>
                {uploadedFiles.map((file, index) => (
                    <ImageListItem key={index}>
                        <img src={URL.createObjectURL(file)} alt={`Uploaded Image ${index}`} loading="lazy" className='max-h-56'/>
                        <button
                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full h-6 w-6 flex justify-center items-center"
                            onClick={() => deleteFile(index)}
                        >
                            <CancelIcon />
                        </button>
                        <div className='flex items-center justify-center'><IconButton onClick={() => {handleSend(index)}} disabled={result.isLoading}><Send /></IconButton></div>
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    );
};

export default HomeScreen;
