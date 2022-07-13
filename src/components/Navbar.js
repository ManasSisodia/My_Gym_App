import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack direction="row" justifyContent="space-around" sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
    <Link to="/">
      <img src={Logo} alt="logo" style={{ width: '60px', height: '60px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <NavLink to="/" style={{ textDecoration: 'none', color: '#3A1212'}} activeClassName='active'>Home</NavLink>
      <NavLink to="/bmi" style={{ textDecoration: 'none', color: '#3A1212'}} activeClassName='active'>Bmi</NavLink>
    </Stack>
  </Stack>
);

export default Navbar;
