import Image from 'next/image'
import botaoFavorito from '../app/assets/images/botaoFavorito.png'

import CartBtn from './btnCart'
import FaveBtn from '@/components/btnFave'

interface Props{
    name: string,
    image: string,
    description: string,
    price: number,
    id: number,
}

export const CardStore = ({ name, image, description, price, id } : Props) => {
    return(
        <div className="flex flex-col w-60 self-center md:self-start gap-1 rounded-[25px] shadow-[0px_13px_19px_rgba(0,0,0,0.15)]">
            <div>
               <img src={image} alt={name} width={300} height={200} draggable={false}/>
            </div>
        
            <div className='flex flex-row justify-between'>
                <div className="flex w-50 flex-col ml-5">
                    <h2 className='font-medium'>{name}</h2>
                    <p className="h-5">{description}</p>
                </div>
                <div className='flex w-10 h-10 self-end justify-center mr-5'>
                    <button onClick={FaveBtn} className='cursor-pointer duration-350 hover:bg-black rounded-md'><Image className='duration-350 hover:invert' src={botaoFavorito} alt="" width={30}/></button>
                </div>
            </div>
            <div className="flex mb-10 pt-4 items-baseline justify-center">
                <div className="flex h-10 w-full justify-between items-center">
                    <strong className='ml-5'>R$ {price.toFixed(2)}</strong>
                    <CartBtn id={id} name={name} price={price} image={image}/>
                    {/* <button onClick={} className='right-0 mr-5 cursor-pointer'><Image className="duration-400 hover:invert" src={botaoComprar} alt="" width={40} height={40} draggable={false}/></button> */}
                </div>
            </div>
        </div>
    )
}