import Image from "next/image";
import { useState } from "react";
import btnImg from './assets/images/btnStar.png'
import banner from './assets/images/bannerLP.png'
import Navbar from "./components/nav";



export default function Home() {
  return (
    <section className="relative">
          <Image src={banner} alt="" className='w-full h-180 object-cover'/>       
          <Navbar/> 
        <div className="mt-35 ml-30  absolute inset-0 flex flex-col">
          <h1 className="cursor-default font-extrabold text-6xl text-red-50">Brincar com <br />
          Segurança Nunca <br />
          Foi Tão Divertido!</h1><br />
          <p className="cursor-default text-red-50 font-semibold">
            Bem-vindo à VC Brinquedos Espumados, a loja onde a criatividade encontra a proteção! <br />
            Aqui você encontra brinquedos espumados coloridos, seguros e cheios de possibilidades <br />
            para transformar qualquer espaço em um mundo de alegria. Tudo pensado para estimular <br />
            a imaginação com conforto e confiança!
            </p>
          <button className="flex items-center cursor-pointer p-5 font-medium w-50 h-15 self-start mt-20 border-1 rounded-4xl border-white text-red-50 hover:bg-white hover:bg-clip-text hover:text-transparent">Ver Brinquedos <Image src={btnImg} alt="" className='w-8 h-8 object-cover ml-3'></Image></button>
        </div>
    </section>

  );
}
