'use client'

import { ReactNode, useState } from 'react'

// Qualquer componente que for declarado dentro de um client component vai
// automaticamente se tornar um client component também => Client Boundaries

export function AddToCartButton({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  function addToCart() {
    setCount((state) => state + 1)
  }

  /* A única forma de ter um server component sendo renderizado dentro de
  um client component é usando o children */

  return (
    <div>
      <button onClick={addToCart}>Adicionar ao carrinho ({count})</button>
      {children}
    </div>
  )
}
