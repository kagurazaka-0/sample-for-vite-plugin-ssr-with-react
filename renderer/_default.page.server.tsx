import { renderToString } from "react-dom/server"
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr"

import { PageLayout } from "./PageLayout"
import { PageContextServer } from "./types"

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps"]

export async function render(pageContext: PageContextServer) {
  const { Page, pageProps, userAgent } = pageContext
  const body = renderToString(
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>,
  )

  let head = ""
  const maybeHeadFn = pageContext.exports.head
  if (typeof maybeHeadFn === "function") {
    head = renderToString(maybeHeadFn(pageProps))
  }

  return escapeInject`<!DOCTYPE html>
    <html lang="ja">
      <head>
      ${dangerouslySkipEscape(head)}
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(body)}</div>
      </body>
    </html>`
}
