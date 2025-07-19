import Image from "next/image";
import logo from '../app/assets/images/Logo.png'
import Link from "next/link";

interface navProps{
    color: boolean
    invert: boolean
}

export default function Navbar({color, invert} : navProps) {


  return (
    <div className={`w-full absolute top-0 left-0 z-50 ${color ? 'text-white' : 'text-black'}`}>
      <div className="max-w-7xl mx-auto px-9 py-2 flex items-center justify-between">
  
        <div className="flex items-center">
          <Image src={logo} alt="VC" width={40} height={40} className={invert ? 'invert' : ''} />
          <Link className="ml-2 font-extrabold cursor-pointer" href={"/"}>Brinquedos Espumados</Link>
        </div>
        <div className="hidden md:flex gap-6 items-center">
          <Link className="cursor-pointer" href={"/products"}>Loja</Link>
          <Link className="cursor-pointer" href={""}>Promoções</Link>
          <Link className="cursor-pointer" href={""}>Favoritos</Link>
          <Link className="cursor-pointer" href={"/#about"}>Sobre</Link>
          <Link className="cursor-pointer" href={""}>Contato</Link>
        </div>
        <div className="hidden md:flex gap-6 justify-center items-center">
          <button className={`w-20 py-1 px-3 border rounded-3xl cursor-pointer font-bold ${color ? 'text-black' : 'text-white'} ${invert ? 'bg-white' : 'bg-black'}`}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}