import React from 'react'
import { Outlet } from 'react-router-dom';
import Banner from './banner/Banner'

export const Header = () => {
  return (
    <>
        <Banner />
        {/* <Categories /> */}
        <Outlet />
    </>
  )
}

export default Header
