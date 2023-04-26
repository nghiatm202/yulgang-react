import { useState } from "react"
import PropTypes from "prop-types"

const UISelect = ({ options, defaultOptionLabel }) => {
  const [selectedOption, setSelectedOption] = useState("")

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  return (
    <select value={selectedOption} onChange={handleOptionChange}>
      <option value="" disabled>
        {defaultOptionLabel}
      </option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

UISelect.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  defaultOptionLabel: PropTypes.string.isRequired,
}

export default UISelect
