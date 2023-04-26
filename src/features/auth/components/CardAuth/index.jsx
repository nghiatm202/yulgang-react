import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const CardAuth = ({ children, title, classStyles }) => {
  return (
    <div className={classStyles ? `authBox ${classStyles}` : "authBox"}>
      <div className="authLogo">
        <Link>Hiệp Khách Giang Hồ</Link>
      </div>
      <div className="authCard">
        <div className="cardBody">
          <h2 className="title">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  )
}

CardAuth.propTypes = {
  children: PropTypes.element,
  title: PropTypes.string.isRequired,
  classStyles: PropTypes.string,
}

export default CardAuth
