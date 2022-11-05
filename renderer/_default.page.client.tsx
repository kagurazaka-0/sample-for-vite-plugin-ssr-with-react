import { hydrateRoot } from "react-dom/client"

import { PageLayout } from "./PageLayout"
import { PageContextClient } from "./types"

export async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  hydrateRoot(
    document.getElementById("app")!,
    <PageLayout>
      <Page {...pageProps} />
    </PageLayout>,
  )
}
