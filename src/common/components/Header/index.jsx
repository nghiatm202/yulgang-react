import Logo from "../../../app/assets/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="headerInner">
        <div className="headerLeft">
          <ul className="headerList">
            <li>
              <a href="#">官网首页</a>
            </li>
            <li>
              <a href="#">注册账号</a>
            </li>
            <li>
              <a href="#">充值中心</a>
            </li>
            <li>
              <a href="#">账号管理</a>
            </li>
          </ul>
        </div>
        <div className="headerLogo">
          <a href="/">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div className="headerRight">
          <ul className="headerList">
            <li>
              <a href="#">游戏下载</a>
            </li>
            <li>
              <a href="#">等级排行</a>
            </li>
            <li>
              <a href="#">杀人排行</a>
            </li>
            <li>
              <a href="#">武勋排行</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
