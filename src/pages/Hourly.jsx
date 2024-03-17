import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'

const Hourly = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedHour, setSelectedHour] = useState('')

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value)
    setSelectedHour('')
  }

  const handleHourChange = (event) => {
    setSelectedHour(event.target.value)
  }

  return (
    <div className="bg-[#F5F5F5] h-screen font-outfit flex">
      <Sidebar />
      <div className="flex-grow">
        <div className="text-[#8799AD] ml-64 sm:ml-64">
          <h1 className="font-semibold text-6xl px-4 pt-4">HOURLY STATS</h1>
          <div className="px-4 pt-4 space-y-4">
            <div>
              <label
                htmlFor="date-picker"
                className="block text-lg font-medium"
              >
                DATE
              </label>
              <input
                type="date"
                id="date-picker"
                name="date-picker"
                className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm sm:text-sm"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
            {/* Hour input */}
            {selectedDate && (
              <div>
                <label
                  htmlFor="hour-picker"
                  className="block text-lg font-medium"
                >
                  HOUR
                </label>
                <input
                  type="time"
                  id="hour-picker"
                  name="hour-picker"
                  className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm sm:text-sm"
                  value={selectedHour}
                  onChange={handleHourChange}
                />
              </div>
            )}
          </div>

          {/* The rest of your component */}
          <div className="flex  mt-8 px-4">
            {/* Load section graph card */}
            <div className="bg-white rounded-lg  w-2/3 p-4">
              <h2 className="text-xl font-semibold mb-4">PHPDT Graph</h2>
              {/* Fetch and display the load section graph here */}
            </div>

            {/* Pie chart card */}
            <div className="bg-white rounded-lg w-1/3 p-4 ml-4">
              <h2 className="text-xl font-semibold mb-4">Pie chart</h2>
              {/* Fetch and display the pie chart here */}
            </div>
          </div>

          <div className="flex mt-8 px-4">
            {/* OD matrix card */}
            <div className="bg-white rounded-lg w-2/3 p-4">
              <h2 className="text-xl font-semibold mb-4">OD Matrix</h2>
              {/* Fetch and display the OD matrix here */}
            </div>

            {/* Load section 2 graph card */}
            <div className="bg-white rounded-lg  w-1/3 p-4 ml-4">
              <h2 className="text-xl font-semibold mb-4">
                Load Section 2 Graph
              </h2>
              {/* Fetch and display the load section 2 graph here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hourly
