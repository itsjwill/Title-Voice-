import React from 'react'

const Logo = ({ className = "", showText = false, size = "default" }) => {
  const sizeClasses = {
    small: "w-20 h-20",
    default: "w-28 h-28", 
    large: "w-36 h-36"
  }

  return (
    <div className={`flex items-center h-16 ${className}`}>
      {/* Logo Image */}
      <img 
        src="/logo.png" 
        alt="Title Voice Logo" 
        className={`${sizeClasses[size]} object-contain`}
        onError={(e) => {
          console.error('Logo failed to load:', e);
          e.target.style.display = 'none';
        }}
      />
    </div>
  )
}

export default Logo