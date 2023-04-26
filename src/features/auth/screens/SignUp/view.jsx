import { FaLock, FaUser } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Button from "../../../../common/components/Button"
import CardAuth from "../../components/CardAuth"
import UIInput from "../../components/UIInput"
import UISelect from "../../components/UISelect"
import { useNavigate } from "react-router-dom"

const sexOptions = [
  { value: "male", label: "Nam" },
  { value: "female", label: "Nữ" },
]

const questionOptions = [
  { value: "Người yêu bạn tên gì?", label: "Người yêu bạn tên gì?" },
  {
    value: "Ngôi trường đầu tiên bạn học?",
    label: "Ngôi trường đầu tiên bạn học?",
  },
  {
    value: "Người bạn yêu quý nhất là ai?",
    label: "Người bạn yêu quý nhất là ai?",
  },
]

const SignUp = () => {
  let navigate = useNavigate()

  return (
    <div className="signUpPage">
      <div className="signUpInner">
        <CardAuth title="Đăng Ký Tài Khoản">
          <>
            <form action="#" className="signUpForm">
              <UIInput
                name="username"
                placeholder="Tên tài khoản"
                icon={<FaUser />}
              />
              <UIInput
                type="password"
                name="password"
                placeholder="Mật khẩu cấp 1"
                icon={<FaLock />}
              />
              <UIInput
                type="password"
                name="password"
                placeholder="Mật khẩu cấp 2"
                icon={<FaLock />}
              />
              <UIInput
                type="email"
                name="email"
                placeholder="Địa chỉ Email"
                icon={<MdEmail />}
              />
              <UIInput name="cmnd" placeholder="CMND" icon={<MdEmail />} />
              <UISelect options={sexOptions} defaultOptionLabel="Giới Tính" />
              <UISelect
                options={questionOptions}
                defaultOptionLabel="Câu hỏi bí mật"
              />
              <UIInput name="reply" placeholder="Câu trả lời" />
            </form>

            <div className="btnWrapper">
              <Button className="btnAuth blue">Đăng ký</Button>

              <Button
                className="btnAuth green"
                onClick={() => navigate("/auth/login")}
              >
                Đăng nhập
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

export default SignUp
