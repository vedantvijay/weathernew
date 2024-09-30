"use client"

import { Cloud, Droplets, Search, Sun, Wind } from "lucide-react"
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function GoodMorning() {
  const [greeting, setGreeting] = useState('')
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours()
      if (hour < 12) setGreeting('Good Morning')
      else if (hour < 18) setGreeting('Good Afternoon')
      else setGreeting('Good Evening')
    }

    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }))
    }

    updateGreeting()
    updateTime()

    const timer = setInterval(() => {
      updateGreeting()
      updateTime()
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="text-right">
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl md:text-2xl font-medium text-gray-600"
      >
        {greeting}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-2xl md:text-4xl font-bold text-gray-800"
      >
        {currentTime}
      </motion.p>
    </div>
  )
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
}

export default function WeatherApp() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate search delay
    setTimeout(() => {
      console.log('Searching for:', searchQuery)
      setIsLoading(false)
    }, 1500)
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen w-full p-4 md:p-6 lg:p-10 overflow-auto"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-full md:w-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-2">Multan</h1>
            <p className="text-lg md:text-xl text-gray-600">{currentDate}</p>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onSubmit={handleSearch}
            className="w-full md:w-96"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for a city..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 md:py-3 px-4 pr-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-lg"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <Search className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          </motion.form>
          <GoodMorning />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-16"
        >
          <div className="text-center md:text-left">
            <div className="text-7xl md:text-8xl lg:text-9xl font-bold text-gray-800 leading-none">20°</div>
            <div className="text-3xl md:text-4xl lg:text-5xl font-semibold mt-4 text-gray-700">Cloudy</div>
          </div>
          <div className="flex flex-col justify-center items-center md:items-end">
            <div className="flex items-center mb-4 md:mb-8">
              <Wind className="w-8 h-8 md:w-12 md:h-12 mr-4 text-blue-500" />
              <span className="text-2xl md:text-3xl text-gray-700">6.1 mph</span>
            </div>
            <div className="flex items-center">
              <Droplets className="w-8 h-8 md:w-12 md:h-12 mr-4 text-blue-500" />
              <span className="text-2xl md:text-3xl text-gray-700">90%</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 mb-8 md:mb-16"
        >
          {['Today', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day, index) => (
            <motion.div
              key={day}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center bg-white rounded-3xl p-4 md:p-6 shadow-lg transition-transform hover:scale-105"
            >
              <p className="font-semibold text-base md:text-lg text-gray-600 mb-2">{day}</p>
              <p className="text-2xl md:text-4xl font-bold text-gray-800 my-2 md:my-3">{20 + index * 2}°</p>
              <p className="text-sm md:text-base text-gray-600">{index === 0 ? 'Mist' : index % 2 === 0 ? 'Rainy' : 'Sunny'}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Hourly Forecast</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((hour, index) => (
              <motion.div
                key={hour}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                className="text-center bg-white rounded-3xl p-4 md:p-6 shadow-lg transition-transform hover:scale-105"
              >
                <p className="font-semibold text-base md:text-lg text-gray-600 mb-2">{hour} PM</p>
                <p className="text-2xl md:text-4xl font-bold text-gray-800 my-2 md:my-3">20°</p>
                <p className="text-sm md:text-base text-gray-600">{hour % 2 === 0 ? 'Rainy' : 'Cloudy'}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}