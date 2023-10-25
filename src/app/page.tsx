import { Suspense } from 'react'
import { GithubProfile } from '@/components/github-profile'
import { LongWaitComponent } from '@/components/long-wait-component'

// por padrão, o next aguarda TODOS os componentes finalizem de ser carregados
// para mostrar o conteúdo.

// Suspense API é um componente que pode ser usado em volta de um componente
// que demora a ser carregado, isso faz com que possamos criar as sessões de loading
// na página sem ser global, e sim para elementos separados

export default async function Home() {
  return (
    <div>
      <h1>Home!</h1>

      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
