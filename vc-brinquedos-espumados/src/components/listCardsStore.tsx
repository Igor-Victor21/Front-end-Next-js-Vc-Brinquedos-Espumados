import { CardStore } from "./cardsStore";

type Produto = { 
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
}[];

interface onlyThree{
  all: boolean;
}

export default async function CardListServer({all} : onlyThree) {
  try{
    const res = await fetch("http://localhost:5555/products", {
    cache: "no-store",
  });
  const data: Produto = await res.json();

  const produtos = all ? data : data.slice(0, 3)

  return (
    <>
      {produtos.map((item) => (
        <CardStore
          key={item.id}
          name={item.name}
          description={item.description}
          image={item.image}
          price={item.price}
          id={item.id}
        />
      ))}
    </>
  );
  }catch(erro){
    console.error(erro, "Erro ao carregar Produtos")
    return(
      <div>Erro ao carregar produtos</div>
    )
  }
}
