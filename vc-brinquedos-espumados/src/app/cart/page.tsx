import Image from 'next/image'

import Navbar from '@/components/nav'
import CardListServer from "@/components/listCardsStore"

// falta adicionar os produtos aqui pro carrinho, e colocar a lógica de mandar para o whatsapp num component use client


export default function CartPage(){
    return(
        <>
            <Navbar color={false} invert={false} showLoja={false} showFav={true} showCart={false} showSobre={false} showCtt={false} />
            {/* <section className='flex flex-col'> */}
                <section className='flex flex-col w-screen h-200 shadow-xl'>
                    {/* conteúdo da compra */}
                </section>
                <section className='flex flex-col p-5 gap-5'>
                    <div className='flex flex-row justify-between md:justify-around'>
                        <h3>SubTotal</h3>
                        <p>R$: </p>
                    </div>
                    <div className='flex flex-row justify-between md:justify-around'>
                        <h3>Total</h3>
                        <p>R$: </p>
                    </div>
                    <button className='absolute w-52 -bottom-4 self-center p-1 m-8 bg-gray-300 rounded-lg'>Finalizar Compra</button>
                </section>
            {/* </section> */}
        </>
    )
}