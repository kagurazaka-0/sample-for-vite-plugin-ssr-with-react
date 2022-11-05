export { render }

import React from "react"
import { hydrateRoot } from "react-dom/client"
import { PageLayout } from "./PageLayout"

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  hydrateRoot(
    document.getElementById("app")!,
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>
  )
}
