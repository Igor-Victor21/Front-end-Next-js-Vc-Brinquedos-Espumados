import Image from "next/image";
import logo from '../assets/images/Logo.png'

export default function Navbar(){
    return(
        <div className="absolute inset-0 flex flex-col text-white mt-2"> 
        <div className="flex gap-5 justify-start ml-35">
          <div className="flex items-center">
            <Image src={logo} alt="VC" width={40} height={40} className="invert"/>
            <strong className="ml-2 font-extrabold cursor-default">Brinquedos Espumados</strong>          
          </div>
          <div className="flex ml-45 gap-10">
            <button className="cursor-pointer">Loja</button>
            <button className="cursor-pointer">Promoções</button>
            <button className="cursor-pointer">Favoritos</button>
            <button className="cursor-pointer">Sobre</button>
            <button className="cursor-pointer">Contato</button>
            <button className="ml-55 w-20 border rounded-4xl cursor-pointer font-bold text-black bg-white">Login</button>
          </div>
        </div>
      </div>
    )
}