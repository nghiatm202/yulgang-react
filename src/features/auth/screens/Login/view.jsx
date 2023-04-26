import { FaLock, FaUser } from "react-icons/fa"
import CardAuth from "../../components/CardAuth"
import UIInput from "../../components/UIInput"
import Button from "../../../../common/components/Button"
import { useNavigate } from "react-router-dom"

const Login = () => {
  let navigate = useNavigate()

  return (
    <div className="loginPage">
      <div className="loginInner">
        <CardAuth title="Vui lòng đăng nhập để tiếp tục">
          <>
            <form action="#" className="loginForm">
              <UIInput
                name="username"
                placeholder="Tên tài khoản"
                icon={<FaUser />}
              />
              <UIInput
                type="password"
                name="password"
                placeholder="Mật khẩu"
                icon={<FaLock />}
              />
            </form>

            <div className="btnWrapper">
              <Button className="btnAuth blue">Đăng nhập</Button>

              <Button
                className="btnAuth green"
                onClick={() => navigate("/auth/sign-up")}
              >
                Đăng ký tài khoản
              </Button>

              <Button className="btnAuth gray" onClick={() => navigate("/")}>
                Trang chủ
              </Button>
            </div>
          </>
        </CardAuth>
      </div>
    </div>
  )
}

export default Login
