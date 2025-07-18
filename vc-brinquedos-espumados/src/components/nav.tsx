import Image from "next/image";
import logo from '../app/assets/images/Logo.png'

export default function Navbar() {
  return (
    <div className="w-full absolute top-0 left-0 bg-transparent text-white z-50">
      <div className="max-w-7xl mx-auto px-9 py-2 flex items-center justify-between">
  
        <div className="flex items-center">
          <Image src={logo} alt="VC" width={40} height={40} className="invert" />
          <strong className="ml-2 font-extrabold cursor-default">Brinquedos Espumados</strong>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <button className="cursor-pointer">Loja</button>
          <button className="cursor-pointer">Promoções</button>
          <button className="cursor-pointer">Favoritos</button>
          <button className="cursor-pointer">Sobre</button>
          <button className="cursor-pointer">Contato</button>
        </div>
        <div className="hidden md:flex gap-6 justify-center items-center">
          <button className="w-20 py-1 px-3 border rounded-3xl cursor-pointer font-bold text-black bg-white">
            Login
          </button>
        </div>
      </div>
    </div>
  )
}