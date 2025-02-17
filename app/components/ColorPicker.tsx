import React from 'react'

interface ColorPickerProps {
    color : string;
    onColorChange : (color : string) => void;
    allowGradient : boolean;
}

const ColorPicker: React.FC<ColorPickerProps> = ({color , onColorChange, allowGradient}) => {
  return (
    <div>
      
    </div>
  )
}

export default ColorPicker
