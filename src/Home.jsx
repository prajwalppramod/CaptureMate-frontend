import React, { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { GoHome } from "react-icons/go";
import { MdOutlinePhoto } from "react-icons/md";
import { FaUsersBetweenLines } from "react-icons/fa6";
import HomeScreen from './HomeScreen';
import PeopleScreen from './PeopleScreen';
import PhotosScreen from './PhotosScreen';

const Home = () => {
    const [value, setValue] = useState(0);

    // Define a function to render the selected screen based on the value
    const renderScreen = () => {
        switch (value) {
            case 0:
                return <HomeScreen />;
            case 1:
                return <PeopleScreen />;
            case 2:
                return <PhotosScreen />;
            default:
                return <HomeScreen />;
        }
    };

    return (
        <div className='w-full bottom-0'>
            {/* Render the selected screen */}
            {renderScreen()}
            
            {/* BottomNavigation component */}
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Home" style={{fontFamily: 'SF Pro Display'}} icon={<GoHome style={{ fontSize: 28  }} />} />
                <BottomNavigationAction label="People" style={{fontFamily: 'SF Pro Display'}} icon={<FaUsersBetweenLines style={{ fontSize: 28  }} />} />
                <BottomNavigationAction label="Photos" style={{fontFamily: 'SF Pro Display'}} icon={<MdOutlinePhoto C />} />
            </BottomNavigation>
        </div>
    );
};

export default Home;
