"use client"
import { useState } from "react";
import IconPicker from "./components/IconPicker";

export default function Home() {
  const [selectedIcon, setSelectedIcon] = useState<string>("Apple")
  return (
    <div>
       <IconPicker onIconSelect={setSelectedIcon} selected={selectedIcon}/>
    </div>
  );
}
