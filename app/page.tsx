"use client"
import { useState } from "react";
import IconPicker from "./components/IconPicker";
import Image from 'next/image'
import { Download, icons } from "lucide-react";
type IconName = keyof typeof icons;

export default function Home() {
  const [selectedIcon, setSelectedIcon] = useState<IconName>("Apple");
  const SelectedIconComponent = icons[selectedIcon];

  return (
    <div>
      <section>
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
              {SelectedIconComponent && (
                <SelectedIconComponent style={{ display: "block" }} />
              )}
            </div>
          </div>
          {/* <div className="w-1/4"></div> */}
        </div>
      </section>
    </div>
  );
}