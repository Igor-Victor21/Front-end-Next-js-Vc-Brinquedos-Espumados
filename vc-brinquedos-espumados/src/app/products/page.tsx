import CardListServer from "@/components/listCardsStore"
import Navbar from "@/components/nav"
import { Suspense } from "react"
import Image from "next/image"
import btnTT from '../assets/images/ttBlueStars.png'




export default function productsPage(){
    return(
        <>
        <Navbar color={false} invert={false} showLoja={false} showPromo={false} showFav={true} showSobre={true} showCtt={true} />
        <section className="flex w-full h-350 justify-center pt-[20%] md:pt-[5%]">
        <div className="flex flex-col">
          <div className="flex w-[90vw] h-30 pb-5 align-end justify-start ml-5 md:justify-center md:ml-0">
            <Image src={btnTT} alt="" draggable="false" className='w-7 h-7 self-end'></Image>
            <h1 className="font-normal text-4xl self-end">Loja</h1>
          </div>
          
          <div className="w-[85vw] min-h-150 mt-5  border-t self-center">
            <div className="flex justify-center md:justify-between">
              <h1 className="text-2xl font-bold tracking-wide p-0 mt-5">Nova Coleção</h1>       
              <input type="text" placeholder="Pesquisar" className="border h-[40px] rounded-2xl self-end pl-4"/>
            </div>

            <div className="flex flex-row gap-5 mt-[2vh] justify-center">
              <button className="w-25 p-1 rounded-md cursor-pointer hover:bg-[#7DACFF] duration-330">Todos</button>
              <button className="w-25 p-1 rounded-md cursor-pointer hover:bg-[#7DACFF] duration-330">kits</button>
              <button className="w-25 p-1 rounded-md cursor-pointer hover:bg-[#7DACFF] duration-330">Promoções</button>
            </div>

            <div className="flex flex-wrap flex-col md:flex-row gap-5 justify-center">
            <Suspense fallback={<div className="mt-50">Carregando produtos...</div>}>
              <CardListServer all={true}/>
            </Suspense>              
            </div>
          </div>
        </div>        
      </section>
        </>
    )
}