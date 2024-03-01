import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff'
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded'
import SubwayTwoToneIcon from '@mui/icons-material/SubwayTwoTone'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const path = window.location.pathname.split('/')[1] // This might need to be adjusted depending on your routing setup
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavVisible(!isMobileNavVisible)
  }

  // Helper function to determine if the path is active
  const isActive = (route) => path === route

  return (
    <>
      {/* ... other parts of your component ... */}

      <aside
        id="default-sidebar"
        className="fixed top-18 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#FFBE98]">
          <ul className="space-y-2 font-medium">
            <li className="!my-10">
              <div className="flex flex-col items-center">
                <span className="flex items-center justify-center p-2 rounded-full bg-blue-500 group text-xl">
                  <SubwayTwoToneIcon />
                </span>
                <span className="mt-2 text-3xl font-bold">NATPAC</span>
              </div>
            </li>
            <li className="!my-10">
              <Link
                to="/"
                className={`pl-3 flex items-center p-2 rounded-lg group ${
                  isActive('monthly') ? 'bg-[#B38A6A] shadow-lg' : ''
                } text-xl hover:bg-[#B38A6A] hover:shadow-lg`}
              >
                <DataSaverOffIcon />
                <span className="flex-1 ms-3 whitespace-nowrap">Monthly</span>
              </Link>
            </li>
            <li className="!my-10">
              <Link
                to="/daily"
                className={`pl-3 flex items-center p-2 rounded-lg group ${
                  isActive('daily') ? 'bg-[#B38A6A] shadow-lg' : ''
                } text-xl hover:bg-[#B38A6A] hover:shadow-lg`}
              >
                <DataSaverOffIcon />
                <span className="flex-1 ms-3 whitespace-nowrap">Daily</span>
              </Link>
            </li>
            <li className="!my-10">
              <Link
                to="/hourly"
                className={`pl-3 flex items-center p-2 rounded-lg group ${
                  isActive('hourly') ? 'bg-[#B38A6A] shadow-lg' : ''
                } text-xl hover:bg-[#B38A6A] hover:shadow-lg`}
              >
                <DataSaverOffIcon />
                <span className="flex-1 ms-3 whitespace-nowrap">Hourly</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
