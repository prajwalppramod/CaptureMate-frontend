import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { FormControl, Input, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function PeopleScreen() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = itemData.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        />
      </FormControl>

      <ImageList cols={3} className='w-[95vw] max-w-xl mt-5'>
        {filteredItems.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
              className='rounded-full overflow-hidden aspect-square size-full'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: '/assets/prajwal.jpg',
    title: 'Prajwal',
  },
  {
    img: '/assets/spv.jpg',
    title: 'SPV',
  },
  {
    img: '/assets/samuel.jpg',
    title: 'Samuel',
  },
  {
    img: '/assets/baven.jpg',
    title: 'Baven',
  },
  {
    img: '/assets/mak.jpg',
    title: 'Mak',
  },
  {
    img: '/assets/kesia.jpg',
    title: 'Kesia',
  },
  {
    img: '/assets/revand.jpg',
    title: 'Revand',
  },
  {
    img: '/assets/junior2.jpg',
    title: 'Junior2',
  },
  {
    img: '/assets/junior1.jpg',
    title: 'Junior1',
  },
];
