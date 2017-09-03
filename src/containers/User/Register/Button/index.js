import React from "react"

export default ({ 
  classNames,
  buttonText,
  isDisabled,
  handleClick
}) => {
  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`button ${classNames.join(" ")}`}
    >
      {buttonText}
    </button>
  )
}