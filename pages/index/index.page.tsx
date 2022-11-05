import React from "react"
import { Counter } from "./Counter"

export function head() {
  return (
    <>
      <title>WelcomePage</title>
    </>
  )
}

export function Page() {
  return (
    <>
      <h1>Welcome</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}