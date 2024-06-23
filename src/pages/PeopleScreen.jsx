import React from 'react';
// import { useNavigate } from 'react-router-dom';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { FormControl, Input, InputAdornment, IconButton, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useAddOrRemoveFriendMutation, useFindPeopleQuery, useGetFriendsQuery } from '../services/user/userApi';
import ProfilePicture from '../components/ProfilePicture';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
  // const navigate = useNavigate();

  const userId = useSelector((state) => state.user.user.userId);

  const { isLoading: isFindPeopleLoading, isError: isFindPeopleError, data: peopleFoundData, error: findPeopleError } = useFindPeopleQuery({userId, filter: searchTerm}, { skip: !searchTerm });
  const { isLoading: isGetFriendsLoading, isError: isGetFriendsError, data: friendsData, error: getFriendsError } = useGetFriendsQuery(userId);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // refetch();
  };

  const [addOrRemoveFriend, addOrRemoveResult] = useAddOrRemoveFriendMutation();

  // const handleImageClick = (title) => {
  //   navigate(`/chat/${title}`);
  // };

  const getFriendActionText = (userId) => {
    const friend = friendsData.find(friend => friend.userId === userId);
    return friend ? friend.approved ? 'Remove Friend' : 'Requested' : 'Add Friend';
  }

  const handleAddOrRemoveFriend = async (event, friendId) => {
    event.preventDefault();
    const res = await addOrRemoveFriend({ userId, friendId });
    if (res.error || res.data.error) {
        alert('An error occurred. Please try again.');
        console.log(res.error, res.data?.error)
        return;
    }
    // console.log(res);
}

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
      {(searchTerm && isFindPeopleLoading) || (!searchTerm && isGetFriendsLoading) && <p>Loading...</p>}
      <Link to={'/invites'}><Button>Pending Invites</Button></Link>
      {searchTerm && isFindPeopleError && <p>Error: {findPeopleError.message ?? findPeopleError.error ?? findPeopleError.data.error }</p>}
      {!searchTerm && isGetFriendsError && <p>Error: {getFriendsError.message ?? getFriendsError.error ?? getFriendsError.data.error }</p>}
      <ImageList cols={3} className='w-[95vw] max-w-xl mt-5 gap-4'>
        {searchTerm ? peopleFoundData?.users?.map((user) => (
          <ImageListItem className='flex items-center justify-center' key={user.userId}>
            <a className='rounded-full size-20'><ProfilePicture userId={user.userId}/></a>
            <div className='flex flex-col items-center gap-2'><span>{user.username}</span><Button variant='outlined' disabled={isFindPeopleLoading} onClick={(event) => handleAddOrRemoveFriend(event, user.userId)}>{getFriendActionText(user.userId)}</Button></div>
          </ImageListItem>
        )) ?? []
        : friendsData?.map((user) => (
          <ImageListItem className='flex items-center justify-center' key={user.userId}>
            <a href={`/chat/${user.userId}`} className='rounded-full size-20'><ProfilePicture userId={user.userId}/></a>
            <div className='flex flex-col items-center gap-2'><span>{user.username}</span><Button variant='outlined' disabled={isGetFriendsLoading || addOrRemoveResult.isLoading} onClick={(event) => handleAddOrRemoveFriend(event, user.userId)}>{getFriendActionText(user.userId)}</Button></div>
          </ImageListItem>
        )) ?? []
      }
      </ImageList>
    </div>
  );
}
