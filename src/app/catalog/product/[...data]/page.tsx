'use client'

interface ProductProps {
  params: {
    data: string[]
  }
}

export default function Product({ params }: ProductProps ){
  const [productId, size, color] = params.data;

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
