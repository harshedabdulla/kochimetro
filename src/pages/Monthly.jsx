import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'

const Monthly = () => {
  // State to store the selected month
  const [selectedMonth, setSelectedMonth] = useState('')

  // Function to handle month selection change
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value)
  }

  // Function to format the selected month for display
  const formatSelectedMonth = (selectedMonth) => {
    if (!selectedMonth) return ''

    const [year, month] = selectedMonth.split('-')
    // Create a date object using the selected year and month
    const date = new Date(year, month - 1)
    // Format the date to a more user-friendly string (e.g., "January 2024")
    return date.toLocaleDateString('default', {
      month: 'long',
      year: 'numeric',
    })
  }

  return (
    <div className="bg-[#F5F5F5] h-screen font-outfit flex">
      <Sidebar />
      <div className="flex-grow">
        <div className="text-[#8799AD] ml-64 sm:ml-64">
          <h1 className="font-semibold text-6xl px-4 pt-4">MONTHLY STATS</h1>
          <div className="px-4 pt-4">
            <label htmlFor="month-picker" className="block text-lg font-medium">
              MONTH
            </label>
            <input
              type="month"
              id="month-picker"
              name="month-picker"
              className="mt-1 block w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={selectedMonth}
              onChange={handleMonthChange}
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

            {selectedMonth && (
              <div className="mt-6 text-3xl">
                {formatSelectedMonth(selectedMonth)}
              </div>
            )}
          </div>

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

export default Monthly
