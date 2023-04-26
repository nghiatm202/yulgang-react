import PropTypes from "prop-types"

const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`${className || null}`}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
