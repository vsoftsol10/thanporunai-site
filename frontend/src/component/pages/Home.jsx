import React from 'react'

const Home = () => {
  return (
    <>
     <div class="h-[580px] flex flex-col items-center justify-center px-4 text-center">
        <h1 class="text-3xl sm:text-5xl md:text-6xl font-bold max-w-4xl text-gray-800">Even a small action can be a big start to social change.</h1>
        <p class="max-w-xl text-center mt-6 px-4">We are a non-profit organization dedicated to supporting individuals and communities in need with compassion, transparency, and service.</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button class="px-7 py-3 rounded bg-[#1C9CEB] hover:bg-[#0f73b1] text-white font-medium">Need Us</button>
        </div>
    </div>
    </>
  )
}

export default Home