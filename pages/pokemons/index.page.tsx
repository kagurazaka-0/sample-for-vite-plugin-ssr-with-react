import PokeApi from "pokeapi-typescript"

import { InferPageProps } from "../../renderer/types"

export async function onBeforeRender() {
  const { results } = await PokeApi.Pokemon.listAll()

  return {
    pageContext: {
      pageProps: {
        pokemons: results,
      },
    },
  }
}

type PageProps = InferPageProps<typeof onBeforeRender>

export function Page({ pokemons }: PageProps) {
  return (
    <>
      {pokemons.map((p) => {
        return <div>{p.name}</div>
      })}
    </>
  )
}
