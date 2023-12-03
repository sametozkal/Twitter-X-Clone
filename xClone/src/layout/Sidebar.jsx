import React, { useState } from 'react'
import {
  BookmarksIcon,
  ExploreIcon,
  HomeIcon,
  ListsIcon,
  MessagesIcon,
  MoreIcon,
  NotificationsIcon,
  ProfileIcon,
} from "../icon/Icon"
import twitterLogo from "../images/twitter.svg";
import SOlogo from "../images/SOlogo.png";
import SideLink from '../components/SideLink';
import UserBox from '../components/UserBox';

const sideLinks = [
  {
    name: "Ana Sayfa",
    icon: HomeIcon,
  },
  {
    name: "Keşfet",
    icon: ExploreIcon,
  },
  {
    name: "Bildirimler",
    icon: NotificationsIcon,
  },
  {
    name: "Mesajlar",
    icon: MessagesIcon,
  },
  {
    name: "Yer İşaretleri",
    icon: BookmarksIcon,
  },
  {
    name: "Liseteler",
    icon: ListsIcon,
  },
  {
    name: "Profil",
    icon: ProfileIcon,
  },
  {
    name: "Daha Fazla",
    icon: MoreIcon,
  },
];
const sidebar = () => {
  const [active,setActive] = useState("Home")
  const handleMenuItemClick = (name) => {
    setActive(name)
  }
  return (
    <div className='h-screen sticky top-0 flex flex-col justify-between w-72 px-2'>
      <div>
        <div className=' flex items-center mt-1 mb-2'>
          <img src={twitterLogo} alt="" />
        <img src={SOlogo} alt=""/>
        </div>
         
        <nav className='mt-3'>
          <ul>
          {sideLinks.map(({ name, icon }) => (
              <SideLink
                key={name}
                name={name}
                Icon={icon}
                active={active}
                onMenuItemClick={handleMenuItemClick}
              />
            ))}
          </ul>
        </nav>
        <button className='bg-primary-base hover:bg-primary-dark text-white shadow-lg px-8 py-3 rounded-full w-11/12 transform transition-colors duration-300'>Tweet</button>
      </div>
      <UserBox />
    </div>
  )
}

export default sidebar
