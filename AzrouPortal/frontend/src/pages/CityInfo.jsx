import React from 'react'

const CityInfo = () => {
  return (
    <div className='max-w-6xl mx-auto p-6'>
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-gray-800 mb-4'>Discover Azrou</h1>
        <p className='text-lg text-gray-600'>A jewel in the Middle Atlas Mountains</p>
      </div>

      {/* Hero Section */}
      <div className='bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg p-8 mb-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
          <div>
            <h2 className='text-3xl font-bold mb-4'>Welcome to Azrou</h2>
            <p className='text-lg opacity-90 mb-4'>
              Located in the heart of Morocco's Middle Atlas Mountains, Azrou is a charming Berber town 
              known for its stunning cedar forests, rich cultural heritage, and vibrant local markets.
            </p>
            <div className='flex items-center gap-4'>
              <div className='text-center'>
                <div className='text-2xl font-bold'>53,100</div>
                <div className='text-sm opacity-75'>Population</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold'>1,250m</div>
                <div className='text-sm opacity-75'>Elevation</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold'>1920</div>
                <div className='text-sm opacity-75'>Founded</div>
              </div>
            </div>
          </div>
          <div className='text-center'>
            <div className='text-8xl'>🏔️</div>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12'>
        <div className='bg-white border rounded-lg p-6 text-center hover:shadow-lg transition-all'>
          <div className='text-4xl mb-4'>🌲</div>
          <h3 className='text-xl font-semibold mb-2'>Cedar Forests</h3>
          <p className='text-gray-600'>Home to the famous Cedars of the Middle Atlas, including centuries-old cedar trees.</p>
        </div>
        
        <div className='bg-white border rounded-lg p-6 text-center hover:shadow-lg transition-all'>
          <div className='text-4xl mb-4'>🎭</div>
          <h3 className='text-xl font-semibold mb-2'>Berber Culture</h3>
          <p className='text-gray-600'>Rich Amazigh heritage with traditional crafts, music, and cultural celebrations.</p>
        </div>
        
        <div className='bg-white border rounded-lg p-6 text-center hover:shadow-lg transition-all'>
          <div className='text-4xl mb-4'>🛍️</div>
          <h3 className='text-xl font-semibold mb-2'>Traditional Markets</h3>
          <p className='text-gray-600'>Vibrant souks offering local handicrafts, carpets, and traditional goods.</p>
        </div>
      </div>

      {/* History Section */}
      <div className='bg-gray-50 rounded-lg p-8 mb-12'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>Our History</h2>
        <div className='max-w-4xl mx-auto'>
          <div className='timeline space-y-8'>
            <div className='flex items-start gap-4'>
              <div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0'>1</div>
              <div>
                <h4 className='font-semibold text-lg'>Ancient Times</h4>
                <p className='text-gray-600'>Originally inhabited by Berber tribes, the area has been a crossroads of trade routes for centuries.</p>
              </div>
            </div>
            
            <div className='flex items-start gap-4'>
              <div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0'>2</div>
              <div>
                <h4 className='font-semibold text-lg'>French Protectorate (1920)</h4>
                <p className='text-gray-600'>Azrou was officially founded as an administrative center during the French protectorate period.</p>
              </div>
            </div>
            
            <div className='flex items-start gap-4'>
              <div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0'>3</div>
              <div>
                <h4 className='font-semibold text-lg'>Modern Era</h4>
                <p className='text-gray-600'>Today, Azrou is a thriving municipality balancing modernization with preservation of its cultural heritage.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tourist Attractions */}
      <div className='mb-12'>
        <h2 className='text-2xl font-bold text-gray-800 mb-8 text-center'>Places to Visit</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all'>
            <div className='bg-green-100 h-32 flex items-center justify-center text-6xl'>🌲</div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>Cedars of the Middle Atlas</h3>
              <p className='text-gray-600 mb-4'>Magnificent cedar forest with trees over 800 years old. Popular for hiking and nature photography.</p>
              <div className='flex items-center gap-2 text-sm text-gray-500'>
                <span>📍</span>
                <span>15 km from city center</span>
              </div>
            </div>
          </div>
          
          <div className='bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all'>
            <div className='bg-blue-100 h-32 flex items-center justify-center text-6xl'>🏛️</div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>Azrou Souk</h3>
              <p className='text-gray-600 mb-4'>Traditional weekly market featuring local crafts, textiles, and fresh produce.</p>
              <div className='flex items-center gap-2 text-sm text-gray-500'>
                <span>📅</span>
                <span>Every Tuesday</span>
              </div>
            </div>
          </div>
          
          <div className='bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all'>
            <div className='bg-purple-100 h-32 flex items-center justify-center text-6xl'>🗿</div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>Rock of Azrou</h3>
              <p className='text-gray-600 mb-4'>Historic volcanic rock formation that gives the city its name (Azrou means "rock" in Berber).</p>
              <div className='flex items-center gap-2 text-sm text-gray-500'>
                <span>📍</span>
                <span>City center</span>
              </div>
            </div>
          </div>
          
          <div className='bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-all'>
            <div className='bg-orange-100 h-32 flex items-center justify-center text-6xl'>🎓</div>
            <div className='p-6'>
              <h3 className='text-xl font-semibold mb-2'>Al Akhawayn University</h3>
              <p className='text-gray-600 mb-4'>Prestigious international university bringing academic excellence to the region.</p>
              <div className='flex items-center gap-2 text-sm text-gray-500'>
                <span>🎓</span>
                <span>Founded 1995</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Climate Info */}
      <div className='bg-blue-50 rounded-lg p-8'>
        <h2 className='text-2xl font-bold text-gray-800 mb-6 text-center'>Climate & Weather</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 text-center'>
          <div>
            <div className='text-3xl mb-2'>🌸</div>
            <h4 className='font-semibold'>Spring</h4>
            <p className='text-sm text-gray-600'>Mild and pleasant<br />15-20°C</p>
          </div>
          <div>
            <div className='text-3xl mb-2'>☀️</div>
            <h4 className='font-semibold'>Summer</h4>
            <p className='text-sm text-gray-600'>Warm and dry<br />25-30°C</p>
          </div>
          <div>
            <div className='text-3xl mb-2'>🍂</div>
            <h4 className='font-semibold'>Autumn</h4>
            <p className='text-sm text-gray-600'>Cool and crisp<br />10-18°C</p>
          </div>
          <div>
            <div className='text-3xl mb-2'>❄️</div>
            <h4 className='font-semibold'>Winter</h4>
            <p className='text-sm text-gray-600'>Cold with snow<br />0-10°C</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CityInfo
