import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./Layout.jsx"
export default function Main() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Layout />}>
                <Route index element = {<></>}>
                </Route>
            </Route>
        </Routes>
      </BrowserRouter>
  )
}
