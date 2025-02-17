"use client"
import { useState } from "react";
import IconPicker from "./components/IconPicker";
import Image from 'next/image'
import { Download, icons } from "lucide-react";
import ColorPicker from "./components/ColorPicker";
type IconName = keyof typeof icons;

export default function Home() {
  const [selectedIcon, setSelectedIcon] = useState<IconName>("Apple");
  const SelectedIconComponent = selectedIcon && icons[selectedIcon as IconName] ?
    icons[selectedIcon as IconName] : null;
  const [IconSize, setIconSize] = useState<number>(200)
  const [IconStrokeWidth, setIconStrokeWidth] = useState<number>(3)
  const [IconRotation, setIconRotation] = useState<number>(0)
  const [shadow, setShadow] = useState<string>("shadow-none")
  const [shadowNumber, setShadowNumber] = useState<number>(0)
  const [radius, setRadius] = useState<number>(12)
  const [activeTab, setActiveTab] = useState<"stroke" | "background" | "fill">("stroke")
  const [IconStrokeColor , setIconStrokeColor] = useState<string>("black")


  const handleIconSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIconSize(Number(e.target.value))
  }
  const handleIconStrokeWidth = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIconStrokeWidth(Number(e.target.value))
  }
  const handleRotationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIconRotation(Number(e.target.value))
  }
  const handleShadowNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    setShadowNumber(value)
    switch (value) {
      case 25:
        setShadow("shadow-sm")
        break
      case 50:
        setShadow("shadow-md")
        break;
      case 75:
        setShadow("shadow-lg")
        break;
      case 100:
        setShadow("shadow-2xl")
        break;
      default:
        setShadow("shadow-none")
    }
  }
  const handleRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRadius(Number(e.target.value))
  }

  return (
    <div>
      <section className="flex flex-col md:flex-row md:justify-between">
        <div className="md:w-1/4 p-5">
          <div className="flex items-center justify-center space-x-2 mb-4 w-full">
            <button className={`btn w-1/3 ${activeTab === "stroke" ? "btn-secondary" : ""}`} onClick={() => setActiveTab("stroke")}>
              Bordure
            </button>
            <button className={`btn w-1/3 ${activeTab === "background" ? "btn-secondary" : ""}`} onClick={() => setActiveTab("background")}>
              Arrière-plan
            </button>
            <button className={`btn w-1/3 ${activeTab === "fill" ? "btn-secondary" : ""}`} onClick={() => setActiveTab("fill")}>
              Remplissage
              
            </button>


          </div>
        </div>
          <div>
            // INFO: Selecteur de couleur
            {activeTab === "stroke" && ((
              <ColorPicker color={IconStrokeColor} allowGradient={false} onColorChange={}/>
            )}
          </div>

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
            <div id="iconContainer" className={`w-[450px] h-[450px] flex justify-center items-center ${shadow}`}
              style={{
                borderRadius: `${radius}px`
              }}
            >
              {SelectedIconComponent && (
                <SelectedIconComponent
                  size={IconSize}
                  style={{
                    strokeWidth: IconStrokeWidth,
                    display: "block",
                    transform: `rotate(${IconRotation}deg)`

                  }} />
              )}
            </div>
          </div>
        </div>

        <div className="w-1/4 p-5">
          <div className="mt-4">
            <div className="flex justify-between mb-3 text-gray-500">
              <label className="badge badge-ghost">Taille</label>
              <span>{IconSize} px</span>
            </div>
            <div>
              <input type="range" min="95" max="300" value={IconSize} onChange={handleIconSizeChange} className="range" />            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between mb-3 text-gray-500">
              <label className="badge badge-ghost">Bordure</label>
              <span>{IconStrokeWidth} px</span>
            </div>
            <div>
              <input type="range" min="1" max="4" value={IconStrokeWidth} onChange={handleIconStrokeWidth} className="range" />            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between mb-3 text-gray-500">
              <label className="badge badge-ghost">Rotation</label>
              <span>{IconRotation} °</span>
            </div>
            <div>
              <input type="range" min="-180" max="180" value={IconRotation} onChange={handleRotationChange} className="range" />            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between mb-3 text-gray-500">
              <label className="badge badge-ghost">Ombre</label>
              <span>{shadow.replace("shadow-", "")}</span>
            </div>
            <div>
              <input type="range" min="0" max="100" step={25} value={shadowNumber} onChange={handleShadowNumberChange} className="range" />            </div>
          </div>

          <div className="mt-4">
            <div className="flex justify-between mb-3 text-gray-500">
              <label className="badge badge-ghost">Arrondi</label>
              <span>{radius} px</span>
            </div>
            <div>
              <input type="range" min="0" max="300" step={25} value={radius} onChange={handleRadiusChange} className="range" />            </div>
          </div>
        </div>
      </section>
    </div>
  );
}