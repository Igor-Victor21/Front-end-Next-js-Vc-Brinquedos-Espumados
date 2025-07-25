"use client"

import Image from "next/image";
import logo from '../app/assets/images/Logo.png'
import Link from "next/link";
import { useState } from "react";

import BtnLogin from '@/components/login'

interface navProps{
    color: boolean
    invert: boolean
    showLoja: boolean
    showFav: boolean
    showCart: boolean
    showSobre: boolean
    showCtt: boolean
  }

export default function Navbar({color, invert, showLoja, showFav, showCart, showSobre, showCtt} : navProps) {

  const [menuOpen, setMenuOpen] = useState(false)

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
          <Link className={`${showFav ? 'block' : 'hidden'} cursor-pointer`} href={"/favorites"}>Favoritos</Link>
          <Link className={`${showCart ? 'block' : 'hidden'} cursor-pointer`} href={"/cart"}>Carrinho</Link>
          <Link className={`${showSobre ? 'block' : 'hidden'} cursor-pointer`} href={"/#about"}>Sobre</Link>
          <Link className={`${showCtt ? 'block' : 'hidden'} cursor-pointer`} href={"#footer"}>Contato</Link>
        </div>
        <div className="hidden md:flex gap-6 justify-center items-center">
          <button onClick={BtnLogin} className={`w-20 py-1 px-3 border rounded-3xl cursor-pointer font-bold duration-450 ${color ? 'text-black hover:text-white' : 'text-white hover:text-black'} ${invert ? 'bg-white hover:bg-black' : 'bg-black hover:bg-white'}`}>
            Login
          </button>
        </div>
        <button className="md:hidden p-2 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>
      </div>
      {menuOpen && (
        <div className="relative md:hidden">
          <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-[-1]"/>
          <div className="flex flex-col items-center bg-transparent px-9 py-4 space-y-4 shadow-md relative z-10">
            {showLoja && <Link href="/products">Loja</Link>}
            {showFav && <Link href="/favorites">Favoritos</Link>}
            {showCart && <Link href="/cart">Carrinho</Link>}
            {showSobre && <Link href="/#about">Sobre</Link>}
            {showCtt && <Link href="#footer">Contato</Link>}
            <button onClick={BtnLogin} className={`w-[25vw] py-1 px-3 border rounded-3xl cursor-pointer font-bold duration-450 ${color ? 'text-black hover:text-white' : 'text-white hover:text-black'} ${invert ? 'bg-white hover:bg-black' : 'bg-black hover:bg-white'}`}>Login</button>
          </div>
        </div>
      )}
    </div>
  )
}