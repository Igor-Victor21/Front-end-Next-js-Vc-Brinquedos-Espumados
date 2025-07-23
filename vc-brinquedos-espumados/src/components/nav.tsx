import Image from "next/image";
import logo from '../app/assets/images/Logo.png'
import Link from "next/link";

interface navProps{
    color: boolean
    invert: boolean
    showLoja: boolean
    showPromo: boolean
    showFav: boolean
    showSobre: boolean
    showCtt: boolean
  }

export default function Navbar({color, invert, showLoja, showPromo, showFav, showSobre, showCtt} : navProps) {


  return (
    <div className={`w-full absolute top-0 left-0 z-50 ${color ? 'text-white' : 'text-black'}`}>
      <div className="max-w-7xl mx-auto px-9 py-2 flex items-center justify-between">
  
        <div>
          <Link className="flex items-center" href={"/"}>
            <Image src={logo} alt="VC" width={40} height={40} className={invert ? 'invert' : ''} />
            <h1 className="ml-2 font-extrabold cursor-pointer">Brinquedos Espumados</h1>
          </Link>
        </div>
        <div className="hidden md:flex gap-6 items-center xl:mr-35">
          <Link className={`${showLoja ? 'block' : 'hidden'} cursor-pointer`} href={"/products"}>Loja</Link>
          <Link className={`${showPromo ? 'block' : 'hidden'} cursor-pointer`} href={""}>Promoções</Link>
          <Link className={`${showFav ? 'block' : 'hidden'} cursor-pointer`} href={"/cart"}>Carrinho</Link>
          <Link className={`${showSobre ? 'block' : 'hidden'} cursor-pointer`} href={"/#about"}>Sobre</Link>
          <Link className={`${showCtt ? 'block' : 'hidden'} cursor-pointer`} href={"#footer"}>Contato</Link>
        </div>
        <div className="hidden md:flex gap-6 justify-center items-center">
          <button className={`w-20 py-1 px-3 border rounded-3xl cursor-pointer font-bold duration-450 ${color ? 'text-black hover:text-white' : 'text-white hover:text-black'} ${invert ? 'bg-white hover:bg-black' : 'bg-black hover:bg-white'}`}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}