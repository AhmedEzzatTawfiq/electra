import React from 'react'

const Loader = ({ title }: { title?: string }) => {
  return (
    <div className='w-full min-h-screen flex flex-col items-center justify-center z-50'>
      <div className="flex space-x-2">
      <div className="w-4 h-4 bg-black rounded-full animate-bounce-once"></div>
        <div className="w-4 h-4 bg-black rounded-full animate-bounce-once delay-100"></div>
        <div className="w-4 h-4 bg-black rounded-full animate-bounce-once delay-200"></div>
        <div className="w-4 h-4 bg-black rounded-full animate-bounce-once delay-300"></div>
        <div className="w-4 h-4 bg-black rounded-full animate-bounce-once delay-400"></div>
      </div>
      {title && <p className="mt-4 text-lg text-yellow-600">{title}</p>}
    </div>
  )
}

export default Loader
