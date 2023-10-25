// páginas vão provavelmente ser server components
export default async function Home() {
  // componente assíncrono quer dizer que o carregamento de dados pode ser
  // diretamente dentro do componente
  await new Promise((resolve) => setTimeout(resolve, 2000))

  // esse tipo de carregamento de dado só vai ser feito dessa maneira, quando o
  // componente precisar dessa informação pra ser renderizado assim que entrar
  // na tela: (ou seja, não iremos usar quando precisar de uma ação do usuário
  // para renderizar o dado, ex: botão)
  const response = await fetch('https://api.github.com/users/EricaReis')
  const user = await response.json()

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}
