'use client'

import Navbar from '@/components/nav'
import { useEffect, useState } from 'react'

interface CartItem {
  id: number
  quantity: number
}

interface Produto {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export default function CartPage() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem('cart')
    if (!storedCart) return

    const parsedCart: CartItem[] = JSON.parse(storedCart)
    setCartItems(parsedCart)

    // busca todos os produtos
    fetch('http://localhost:5555/products')
      .then(res => res.json())
      .then((allProducts: Produto[]) => {
        // filtra apenas os que estão no carrinho
        const idsNoCarrinho = parsedCart.map(item => item.id)
        const filtrados = allProducts.filter(produto =>
          idsNoCarrinho.includes(produto.id)
        )
        setProdutos(filtrados)
      })
      .catch(err => console.error('Erro ao buscar produtos:', err))
  }, [])

  const getQuantidade = (id: number) =>
    cartItems.find(item => item.id === id)?.quantity ?? 0

  const total = produtos.reduce((acc, produto) => {
    const quantidade = getQuantidade(produto.id)
    return acc + produto.price * quantidade
  }, 0)

  return (
    <>
      <Navbar color={false}
        invert={false}
        showLoja={false}
        showFav={true}
        showCart={false}
        showSobre={false}
        showCtt={false}
      />

      <section className="flex flex-col mt-40 w-screen min-h-[200px] shadow-xl px-6 py-4 gap-4">
        {produtos.length === 0 ? (
          <p className="text-gray-600">Seu carrinho está vazio.</p>
        ) : (
          produtos.map(produto => {
            const quantidade = getQuantidade(produto.id)
            return (
              <div
                key={produto.id}
                className="flex flex-row gap-4 border-b border-gray-300 pb-4"
              >
                <img
                  src={produto.image}
                  alt={produto.name}
                  className="w-24 h-24 rounded-lg object-cover"
                  draggable={false}
                />
                <div className="flex flex-col justify-between flex-grow">
                  <div className="flex flex-row justify-between">
                    <h2 className="text-lg font-medium">{produto.name}</h2>
                    <p className="text-right font-bold">
                      R$ {(produto.price * quantidade).toFixed(2)}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">{produto.description}</p>
                  <p className="text-sm">Quantidade: {quantidade}</p>
                </div>
              </div>
            )
          })
        )}
      </section>

      <section className="flex flex-col p-5 gap-5">
        <div className="flex flex-row justify-between md:justify-around">
          <h3>SubTotal</h3>
          <p>R$: {total.toFixed(2)}</p>
        </div>
        <div className="flex flex-row justify-between md:justify-around">
          <h3>Total</h3>
          <p>R$: {total.toFixed(2)}</p>
        </div>
        <button className="absolute w-52 -bottom-4 self-center p-1 m-8 bg-gray-300 rounded-lg">
          Finalizar Compra
        </button>
      </section>
    </>
  )
}