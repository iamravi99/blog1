import React from 'react'
import trendingData from '../../assets/T.json'

const Trend = () => {
  return (
   <>
   
    <section className="bg-gray-100 py-12 px-6 md:px-20 mt-[70px]">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        🔥 Trending Now
      </h2>

      <div className="flex space-x-6 overflow-x-auto pb-4">
        {trendingData.map((item) => (
          <div
            key={item.id}
            className="min-w-[250px] max-w-[280px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {item.description}
              </p>
              <button className="mt-3 text-sm text-purple-600 hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
   
   
   
   
   
   </>
  )
}

export default Trend