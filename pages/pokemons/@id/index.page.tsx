import PokeApi from "pokeapi-typescript"

import { InferPageProps, PageContextServer } from "../../../renderer/types"

type HasLanguage = {
  language: {
    name: string
  }
}

function findJapanese<T extends HasLanguage>(array: T[]): T | undefined {
  return array.find((it) => it.language.name.includes("ja"))
}

export async function onBeforeRender(context: PageContextServer) {
  const id = context.routeParams.id!
  const [pokemon, species] = await Promise.all([PokeApi.Pokemon.resolve(id), PokeApi.PokemonSpecies.resolve(id)])

  const imageUrl = pokemon.sprites.front_default
  const jpName = findJapanese(species.names)?.name ?? ""
  const jpGenus = findJapanese(species.genera)?.genus ?? ""

  return {
    pageContext: {
      pageProps: {
        imageUrl,
        jpName,
        jpGenus,
      },
    },
  }
}

type PageProps = InferPageProps<typeof onBeforeRender>

export function head(props: PageProps) {
  const title = `${props.jpName} | sample-for-vite-plugin-ssr-with-react`
  const description = `${props.jpName}は${props.jpGenus}です。`

  return (
    <>
      <title>{title}</title>
      <meta name="robots" content="noindex" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:image" content={props.imageUrl} />
    </>
  )
}

export function Page(props: PageProps) {
  return (
    <div
      style={{
        width: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "4px",
      }}
    >
      <img
        style={{
          width: "200px",
          height: "200px",
          borderRadius: "100%",
        }}
        src={props.imageUrl}
        alt="image"
      />
      <div style={{ fontSize: "14px" }}>{props.jpName}</div>
      <div style={{ fontSize: "11px" }}>{props.jpGenus}</div>
    </div>
  )
}
