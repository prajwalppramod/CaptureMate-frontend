import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { FormControl, Input, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useFindPeopleQuery } from '../services/user/userApi';
import ProfilePicture from '../components/ProfilePicture';

// const itemData = [
//   {
//     img: '/assets/prajwal.jpg',
//     title: 'Prajwal',
//   },
//   {
//     img: '/assets/spv.jpg',
//     title: 'SPV',
//   },
//   {
//     img: '/assets/samuel.jpg',
//     title: 'Samuel',
//   },
//   {
//     img: '/assets/baven.jpg',
//     title: 'Baven',
//   },
//   {
//     img: '/assets/mak.jpg',
//     title: 'Mak',
//   },
//   {
//     img: '/assets/kesia.jpg',
//     title: 'Kesia',
//   },
//   {
//     img: '/assets/revand.jpg',
//     title: 'Revand',
//   },
//   {
//     img: '/assets/junior2.jpg',
//     title: 'Junior2',
//   },
//   {
//     img: '/assets/junior1.jpg',
//     title: 'Junior1',
//   },
// ];

export default function PeopleScreen() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const navigate = useNavigate();

  const { isLoading, isError, data, error } = useFindPeopleQuery(searchTerm, { skip: !searchTerm });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // refetch();
  };

  const handleImageClick = (title) => {
    navigate(`/chat/${title}`);
  };

  // const filteredItems = itemData.filter(item =>
  //   item.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className='flex pt-20 md:pt-32 flex-col gap-3 justify-start items-center h-screen'>
      <h1 className='text-3xl fixed top-5'>People</h1>

      <FormControl variant="standard" className='w-[95vw] max-w-xl mt-10'>
        <Input
          id="search"
          value={searchTerm}
          onChange={handleSearchChange}
          startAdornment={
            <InputAdornment position="start">
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          placeholder="Search People"
          autoComplete="off"
        />
      </FormControl>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {error.message ?? error.error ?? error.data.error }</p>}
      <ImageList cols={3} className='w-[95vw] max-w-xl mt-5'>
        {data?.users?.map((user) => (
          <ImageListItem key={user.userId} onClick={() => handleImageClick(user.userId)}>
            <ProfilePicture userId={user.userId} username={user.username}/>
          </ImageListItem>
        )) ?? []}
      </ImageList>
    </div>
  );
}
