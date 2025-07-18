
interface Props{
    name: string,
    image: string,
    description: string,
    price: number,
    id: number,
}

export const CardStore = ({ name, image, description, price, id } : Props) => {
    return(
        <div className="flex flex-col gap-5 rounded-[25px] shadow-[0px_13px_19px_rgba(0,0,0,0.15)]">
            <div>
               <img src={image} alt={name} width={300} height={200} draggable={false}/>
            </div>
        
        <div className="flex flex-col ml-5">
            <h2>{name}</h2>
            <p>{description}</p>

            <div className="absolute mt-12 ">
                <strong>R$ {price.toFixed(2)}</strong>
            </div>

            <div>
                <button>{/* ImageFavBtn */}</button>
                <button>{/* ImageBuyBtn*/}</button>
            </div>
        </div>
        </div>
    )
}