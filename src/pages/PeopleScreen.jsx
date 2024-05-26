import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { FormControl, Input, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function PeopleScreen() {
  return (
    <div className='flex pt-20 md:pt-32 flex-col gap-3 justify-start items-center h-screen'>
      <h1 className='text-3xl fixed top-5'>People</h1>
      <FormControl className='w-4/5' variant="standard">
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
          placeholder="Search"
          // Adding the shrink prop to move the label inside the box
          // when there is input value or focus
          inputProps={{ 'aria-label': 'search' }}
        />
      </FormControl>

      <ImageList cols={3} className='w-[95vw] max-w-xl'>
        {itemData.map((item) => (
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
    title: 'Breakfast',
  },
  {
    img: '/assets/spv.jpg',
    title: 'Burger',
  },
  {
    img: '/assets/samuel.jpg',
    title: 'Camera',
  },
  {
    img: '/assets/baven.jpg',
    title: 'Coffee',
  },
  {
    img: '/assets/mak.jpg',
    title: 'Hats',
  },
  {
    img: '/assets/kesia.jpg',
    title: 'Honey',
  },
  {
    img: '/assets/revand.jpg',
    title: 'Basketball',
  },
  {
    img: '/assets/junior2.jpg',
    title: 'Fern',
  },
  {
    img: '/assets/junior1.jpg',
    title: 'Fern',
  },
];
