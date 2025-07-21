import { CardStore } from "./cardsStore";

type Produto = { 
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
}[];

interface Props{
  all: boolean;
  queryRouter: string;
}

export default async function CardListServer({all, queryRouter} : Props) {

  function removeAcentos(str: string) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  try{
    const res = await fetch("http://localhost:5555/products", {
    cache: "no-store",
  });
  const data: Produto = await res.json();

  const produtos = all ? data : data.slice(0, 3)
  const produtosFiltrados = queryRouter!=="" ? produtos.filter((produto) =>
    removeAcentos(produto.name.toLowerCase()).includes(
        removeAcentos(queryRouter.toLowerCase()))) : produtos;

  if(produtosFiltrados.length === 0) return(<>Nenhum produto foi encontrado!</>)

    return (
      <>
        {produtosFiltrados.map((item) => (
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
  } catch (erro) {
    console.error(erro, "Erro ao carregar produtos");
    return <div>Erro ao carregar produtos</div>;
  }
}
