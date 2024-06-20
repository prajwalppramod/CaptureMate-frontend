// import React from 'react'

// const PhotosScreen = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default PhotosScreen

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useGetPhotosQuery } from '../services/photo/photoApi';
import { useSelector } from 'react-redux';

export default function PhotosScreen() {
    const user = useSelector(state => state.user.user);
    const {data: images, isLoading, isError, error} = useGetPhotosQuery({userId: user.userId});
    return (
        <div className='flex flex-col gap-5 items-center min-h-screen'>
            <h1 className='text-3xl mt-5'>Photos</h1>
            <ImageList
                variant="quilted"
            >
                {isLoading ? <>Loading...</>
                : isError? <>Error {error.message ?? error.data?.error}</>
                : images.map((item) => (
                    <ImageListItem key={item.id} cols={item.cols || 1} rows={item.rows || 1}>
                        <img
                            src={`${import.meta.env.VITE_API_URL ?? 'http://localhost:3000/'}recognize/photo?id=${item.id}`}
                            alt={item.name}
                            className='max-h-72'
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
            );
}

//             const itemData = [
//             {
//                 img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//             title: 'Breakfast',
//             rows: 2,
//             cols: 2,
//   },
//             {
//                 img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//             title: 'Burger',
//   },
//             {
//                 img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//             title: 'Camera',
//   },
//             {
//                 img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//             title: 'Coffee',
//             cols: 2,
//   },
//             {
//                 img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//             title: 'Hats',
//             cols: 2,
//   },
//             {
//                 img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//             title: 'Honey',
//             author: '@arwinneil',
//             rows: 2,
//             cols: 2,
//   },
//             {
//                 img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//             title: 'Basketball',
//   },
//             {
//                 img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//             title: 'Fern',
//   },
//             {
//                 img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//             title: 'Mushrooms',
//             rows: 2,
//             cols: 2,
//   },
//             {
//                 img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//             title: 'Tomato basil',
//   },
//             {
//                 img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//             title: 'Sea star',
//   },
//             {
//                 img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//             title: 'Bike',
//             cols: 2,
//   },
//             ];