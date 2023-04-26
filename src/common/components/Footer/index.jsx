const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerInner">
        <div className="logo">
          <a href="/">
            <img
              src="//volamchinhtong.com/st/mainsite/imgs/logo.png?v=1"
              alt="Logo"
            />
          </a>
        </div>
        <div className="info">
          <p className="copyright">Bản quyền trò chơi thuộc công ty Kingsoft</p>
          <p>
            Địa chỉ : Số 18 đường số 3 cư xá Đô Thành, phường 3, quận 3, Tp.HCM
          </p>
          <p>Hotline: 0842 665 666</p>
          <ul>
            <li>
              <a href="#">Quyền riêng tư</a>
            </li>
            <li>
              <a href="#">Điều khoản</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
