'use client'

import { useState } from "react";

//um componente client, NÂO deve ser usado com um 'async', porque toda vez que
//alterar um estado, o componente vai ser renderizado novamente.
//o fetch de dados, em client component, pode ser feito da forma 'raíz', com 
//useEffect por exemplo :)

interface ProductProps {
  params: {
    data: string[]
  }
}

//Streaming SSR => Ler/escrever dados de forma parcial + Server-Side Rendering
//Renderizar um componente pelo lado do servidor de forma PARCIAL.

//Ou seja, a requisição fica aberta, retornando novos dados, até os dados do
//page.tsx forem carregados.

//Streaming SSR é a funcionalidade do next de trazer na mesma requisição, os dados
//que vão aparecer na tela, e depois que os dados são carregados, substituir os dados
//parciais pelo restante dos dados que vem da API.

export default async function Product({ params }: ProductProps ){
  const [count, setCount] = useState(0)

  console.log(count)
  const [productId, size, color] = params.data;

  await new Promise(resolve => setTimeout(resolve, 2000))

  function addToCart() {
    setCount((state) => state + 1)
  }

  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <button type='button' onClick={addToCart}>Adicionar ao carrinho</button>
    </div>
  )
}
