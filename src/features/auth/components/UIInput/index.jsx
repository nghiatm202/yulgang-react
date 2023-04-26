import PropTypes from "prop-types"

const UIInput = ({ type = "text", name, placeholder, icon }) => {
  return (
    <div className="authInput">
      <input type={type} name={name} placeholder={placeholder} />
      {icon}
    </div>
  )
}

export default UIInput

UIInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.element,
}
