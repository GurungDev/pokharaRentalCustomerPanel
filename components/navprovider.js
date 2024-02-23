"use client"
import { store } from '@/redux/store';
import NavbarAuth from './authNavbar';
import Navbar from './navbar';

const Navprovider = () => {
  const state = store.getState();  
  return state.account.loginStatus == true && state.account.token != null ?  <NavbarAuth/> : <Navbar />
  
}

export default Navprovider