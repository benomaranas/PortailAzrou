import React, { useState } from 'react'

const SafeImage = ({ src, alt = '', className = '', fallbackSrc = '', ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    setHasError(true)
    setIsLoaded(true)
  }

  // If it's a data URI, show immediately without loading state
  if (src && src.startsWith('data:')) {
    return (
      <img 
        src={src}
        alt={alt}
        className={className}
        {...props}
      />
    )
  }

  return (
    <div className={`${className} ${!isLoaded ? 'bg-gray-200 animate-pulse' : ''}`}>
      <img 
        src={hasError && fallbackSrc ? fallbackSrc : src}
        alt={alt}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  )
}

export default SafeImage
