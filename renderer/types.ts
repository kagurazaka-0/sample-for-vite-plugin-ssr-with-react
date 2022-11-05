import type { PageContextBuiltIn } from "vite-plugin-ssr"
import type { PageContextBuiltInClient } from "vite-plugin-ssr/client/router"

// When using Client Routing
// import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client' // When using Server Routing

type Page = (pageProps: PageProps) => React.ReactElement
type PageProps = Record<string, unknown>

export type PageContextCustom = {
  Page: Page
  pageProps?: PageProps
  userAgent?: string
}

export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom
export type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom

type PageContext = PageContextClient | PageContextServer

export type InferPageProps<Fn> = Fn extends () => Promise<{
  pageContext: {
    pageProps: infer P
  }
}>
  ? P
  : never
