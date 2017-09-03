import React from "react"

export default (props) => {
  const { 
    inputType,
    inputClassNames,
    iconClassNames,
    inputPlaceholder,
    inputRef,
    handlerInputBlur,
    inputId,
    validation,
    isValid
  } = props

  return (
    <p className="control has-icon has-icon-right">
      <input 
        ref={inputRef}
        className={`input ${inputClassNames.join(" ")} ${!isValid ? null : "is-danger"}`}
        type={inputType}
        placeholder={inputPlaceholder}
        onBlur={event => handlerInputBlur(event, inputId, validation)}
      />
      <span className="icon user">
        <i className={`fa ${iconClassNames.join(" ")}`}></i>
      </span>
    </p>
  )
}