import React, { PropsWithChildren } from "react"

import "./PageLayout.css"

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <React.StrictMode>
      <Layout>
        <Sidebar>
          <a className="navitem" href="/">
            Home
          </a>
          <a className="navitem" href="/about">
            About
          </a>
          <a className="navitem" href="/pokemons">
            Pokemons
          </a>
        </Sidebar>
        <Content>{children}</Content>
      </Layout>
    </React.StrictMode>
  )
}

function Layout({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: 900,
        margin: "auto",
      }}
    >
      {children}
    </div>
  )
}

function Sidebar({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        padding: 20,
        paddingTop: 42,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        lineHeight: "1.8em",
      }}
    >
      {children}
    </div>
  )
}

function Content({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  )
}
