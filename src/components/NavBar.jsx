import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React from 'react'
import { FaUsersBetweenLines } from 'react-icons/fa6';
import { GoHome } from 'react-icons/go';
import { MdOutlinePhoto } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
    const location = useLocation();
    return (
        <BottomNavigation
            showLabels
            value={location.pathname}
        >
            <BottomNavigationAction value={'/'} href='/' label="Home" icon={<GoHome style={{ fontSize: 28 }} />} />
            <BottomNavigationAction value={'/people'} href='/people' label="People" icon={<FaUsersBetweenLines style={{ fontSize: 28 }} />} />
            <BottomNavigationAction value={'/photos'} href='/photos' label="Photos" icon={<MdOutlinePhoto style={{ fontSize: 28 }} />} />
        </BottomNavigation>
    )
}