import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'

const Daily = () => {
  // State to store the selected month
  const [selectedDate, setSelectedDate] = useState('')

  // Function to handle month selection change
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value)
  }

  // Function to format the selected month for display
  const formatSelectedDate = (selectedDate) => {
    if (!selectedDate) return ''

    const [year, month, day] = selectedDate.split('-')
    // Create a date object using the selected year and month
    const date = new Date(year, month - 1, day)
    // Format the date to a more user-friendly string (e.g., "January 2024")
    return date.toLocaleDateString('default', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <div className="bg-[#F5F5F5] h-screen font-outfit flex">
      <Sidebar />
      <div className="flex-grow">
        <div className="text-[#8799AD] ml-64 sm:ml-64">
          <h1 className="font-semibold text-6xl px-4 pt-4">DAILY STATS</h1>
          <div className="px-4 pt-4">
            <label htmlFor="month-picker" className="block text-lg font-medium">
              DATE
            </label>
            <input
              type="date"
              id="date-picker"
              name="date-picker"
              className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={selectedDate}
              onChange={handleDateChange}
              style={{
                background:
                  'linear-gradient(to right, #b38a6a, #c8ff98, #8cb36a, #bd98ff)',
                color: 'white',
                border: 'none',
                outline: 'none',
                boxShadow:
                  '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
              }}
            />

            {selectedDate && (
              <div className="mt-6 text-3xl">
                {formatSelectedDate(selectedDate)}
              </div>
            )}
          </div>

          <div className="flex  mt-8 px-4">
            {/* Load section graph card */}
            <div className="bg-white rounded-lg  w-2/3 p-4">
              <h2 className="text-xl   mb-4">Load Section 1</h2>
              {/* Fetch and display the load section graph here */}
            </div>

            {/* 3d graph card */}
            <div className="bg-white rounded-lg w-1/3 p-4 ml-4">
              <h2 className="text-xl   mb-4">3D graph</h2>
              {/* Fetch and display the pie chart here */}
            </div>
          </div>

          <div className="flex mt-8 px-4">
            {/* OD matrix card */}
            <div className="bg-white rounded-lg w-2/3 p-4">
              <h2 className="text-xl   mb-4">OD Matrix</h2>
              {/* Fetch and display the OD matrix here */}
            </div>

            {/* load section 2 card */}
            <div className="bg-white rounded-lg  w-1/3 p-4 ml-4">
              <h2 className="text-xl   mb-4">Load Section 2</h2>
              {/* Fetch and display the load section 2 graph here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Daily
