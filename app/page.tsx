"use client"
import { useState } from "react";
import IconPicker from "./components/IconPicker";
import Image from 'next/image'
import { Download, icons } from "lucide-react";
type IconName = keyof typeof icons;

export default function Home() {
  const [selectedIcon, setSelectedIcon] = useState<IconName>("Apple");
  const SelectedIconComponent = selectedIcon && icons[selectedIcon as IconName] ?
    icons[selectedIcon as IconName] : null;
  const [IconSize , setIconSize] = useState<number>(200)
  const handleIconSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIconSize(Number (e.target.value))
  }

  return (
    <div>
      <section className="flex flex-col md:flex-row md:justify-between">
        {/* <div className="md:w-1/4"></div> */}
        <div className="md:w-2/4 flex justify-center items-center h-screen bg-[url('/file.svg')] bg-cover bg-center border border-base-200 pt-4 relative">
          <div className="flex items-center justify-between absolute top-0 left-0 bg-base-100 z-50 w-full p-3">
            <div className="flex items-center font-bold italic text-2xl">
              <Image
                src="/logo.png"
                width={500}
                height={500}
                className="w-10 h-10"
                alt="logo"
              />
              <span className="text-secondary ml-2">e</span>Logo
            </div>
            <div className="flex items-center">
              <IconPicker onIconSelect={setSelectedIcon} selected={selectedIcon} />
              <button className="btn ml-5"
                onClick={() => {
                  const m = document.getElementById('my_modal_1') as HTMLDialogElement;
                  if (m) {
                    m.showModal();
                  }
                }}>
                Téléchager <Download className="w-4" />
              </button>
            </div>
          </div>
          <div className="bg-neutral-content/10 hover:bg-neutral-content/20 aspect-square border-2 border-base-300 hover:border-neutral/15 border-dashed p-5 md:p-20">
            <div id="iconContainer" className={`w-[450px] h-[450px] flex justify-center items-center`}>
              {SelectedIconComponent  && (
                <SelectedIconComponent size={} style={{ display: "block" }} />
              )}
            </div>
          </div>
        </div>
        <div className="w-1/4 p-5">
          <div className="flex justify-between mb-3 text-gray-500">
              <label className="badge badge-ghost">Taille</label>
              <span>{IconSize} px</span>
          </div>
          <div>
            <input type="range" min="95" max="300" value={IconSize} onChange={handleIconSizeChange} className="range" />            </div>
        </div>
      </section>
    </div>
  );
}