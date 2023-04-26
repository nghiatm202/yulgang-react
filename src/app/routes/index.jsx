import { Navigate } from "react-router-dom"
import NotFound from "../../common/components/NotFound"
import LoginContainer from "../../features/auth/screens/Login"
import SignUpContainer from "../../features/auth/screens/SignUp"
import HomeContainer from "../screens/Home"

const routes = [
  {
    index: true,
    element: <HomeContainer />,
  },
  {
    path: "/auth",
    element: <Navigate to="/auth/login" />,
  },
  {
    path: "/auth/login",
    element: <LoginContainer />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUpContainer />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

export default routes
