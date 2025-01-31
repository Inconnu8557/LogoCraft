"use client"
import { useState } from "react";
import IconPicker from "./components/IconPicker";

export default function Home() {
  const [selectedIcon, setSelectedIcon] = useState<string>("Apple")
  return (
    <div>
      <IconPicker onIconSelect={setSelectedIcon} selected={selectedIcon} />
      <section>
        <div className="md:w-1/4"></div>
        <div className="md:w-2/4 flex justify-center items-center h-screen bg-[url(')]">

        </div>
        <div className="w-1/4"></div>
      </section>

    </div>
  );
}
