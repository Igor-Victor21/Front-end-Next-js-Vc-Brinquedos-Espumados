// components/CardListServer.tsx
import { CardStore } from "./cardsStore";

type Produto = { 
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
}[];

export default async function CardListServer() {
  const res = await fetch("http://localhost:5555/products", {
    cache: "no-store",
  });
  const data: Produto = await res.json();

  return (
    <>
      {data.map((item) => (
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
}
