'use client'

interface ProductProps {
  params: {
    data: string[]
  }
}

//Streaming SSR => Ler/escrever dadis de forma parcial + Server-Side Rendering
//Renderizar um componente pelo lado do servidor de forma PARCIAL
//Ou seja, a requisição fica aberta, retornando novos dados, até os dados do
//page.tsx forem carregados.
//Streaming SSR é a funcionalidade do next de trazer na mesma requisição, os dados
//que vão aparecer na tela, e depois que os dados são carregados, substituir os dados
//parciais pelo restante dos dados que vem da API.

export default async function Product({ params }: ProductProps ){
  const [productId, size, color] = params.data;

  await new Promise(resolve => setTimeout(resolve, 2000))

  function addToCart() {
    console.log('Adicionou ao carrinho');
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
