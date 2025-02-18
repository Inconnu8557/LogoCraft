"use client"
import React, { useState } from 'react'
import GradientColorPicker from 'react-best-gradient-color-picker'

interface ColorPickerProps {
    color : string;
    onColorChange : (color : string) => void;
    allowGradient : boolean;
}

const ColorPicker: React.FC<ColorPickerProps> = ({color , onColorChange, allowGradient}) => {
  const [currentColor, setCurrentColor]=  useState<string>(color)
  const handleColorChange = (newColor : string) => {
    setCurrentColor(newColor)
    onColorChange(newColor)
  }
  return (
    <div className='flex items-center justify-center w-full p-5 border-2 border-base-300 rounded-xl'> 
      <GradientColorPicker width={300} value={currentColor} onChange={handleColorChange} />
    </div>
  )
}

export default ColorPicker
