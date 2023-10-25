
//um componente client, NÂO deve ser usado com um 'async', porque toda vez que
//alterar um estado, o componente vai ser renderizado novamente.
//o fetch de dados, em client component, pode ser feito da forma 'raíz', com 
//useEffect por exemplo :), ou o reactquery(tanstack query), o SWR, urql...

import { AddToCartButton } from "./add-to-cart-button";

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
  //quando a gente tranforma um componente em client component, é assumido que
  //todo o javascript necessário p/ JS funcionar, vai ser enviado para o 
  //navegador, então deve-se abstrarir ao máximo os client components.

  //ou seja, sempre que for ter alguma interatividade, se der pra isolar, melhor

  const response =  await fetch('https://api.github.com/users/EricaReis')
  const user =  await response.json()

  const [productId, size, color] = params.data;


  return (
    <div>
      <p>Product: {productId}</p>
      <p>Size: {size}</p>
      <p>Color: {color}</p>

      <AddToCartButton />
    </div>
  )
}
