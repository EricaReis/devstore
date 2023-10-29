import Image from 'next/image'

export default function ProductPage() {
  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden ">
        <Image
          src="/moletom-never-stop-learning.png"
          alt=""
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">Moletom</h1>

        <p className="mt-2 leading-relaxed texxt-zinc-400">Descrição</p>

        <div className="mt-8 flex items-center gap-3">
          <span className="inline-block rouded-full bg-violet-500 px-5 py-2.5 font-semibold">
            123
          </span>

          <span className="text-sm text-zinc-400">Em 12x de 10,75</span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full 
              border border-zinc-800 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>

            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full 
              border border-zinc-800 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>

            <button
              type="button"
              className="flex h-9 w-14 items-center justify-center rounded-full 
              border border-zinc-800 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 flex h-12 items-center justify-center
          rounded-full bg-emerald-600 font-semibold text-white"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}
