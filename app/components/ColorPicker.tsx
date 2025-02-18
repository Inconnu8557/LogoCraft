"use client"
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'

const GradientColorPicker = dynamic(
  () => import('react-best-gradient-color-picker'),
  { ssr: false } // Désactive le rendu côté serveur pour ce composant
)

interface ColorPickerProps {
    color : string;
    onColorChange : (color : string) => void;
    allowGradient : boolean;
}

const ColorPicker: React.FC<ColorPickerProps> = ({color , onColorChange, allowGradient}) => {
  const [currentColor, setCurrentColor]=  useState<string>(color)
  const [isClient , setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  useEffect(() => {
    if (isClient) {
      setCurrentColor(color)
    }
  }, [color, isClient])

  if (!isClient) {
    return null
  }
  const handleColorChange = (newColor : string) => {
    setCurrentColor(newColor)
    onColorChange(newColor)
  }
  return (
    <div className='flex items-center justify-center w-full p-5 border-2 border-base-300 rounded-xl'> 
      <GradientColorPicker width={300} value={currentColor} onChange={handleColorChange} hideColorTypeBtns = {!allowGradient}/>
    </div>
  )
}

export default ColorPicker
