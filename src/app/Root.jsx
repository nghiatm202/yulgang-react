import { BrowserRouter, Route, Routes } from "react-router-dom"
import routes from "./routes"

function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          {routes.map((route, index) =>
            route.index ? (
              <Route index key={index} element={route.element} />
            ) : (
              <Route path={route.path} key={index} element={route.element} />
            )
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Root
