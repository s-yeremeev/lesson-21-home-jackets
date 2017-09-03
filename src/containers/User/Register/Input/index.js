import React from "react"

export default ({
  labelText,
  placeholderText,
  typeInput,
  handleBlur,
  isValid,
  inputId,
  validation,
  functionRef
}) => {
  return (
    <div>
      <label className="label">{labelText}</label>
      <p className="control">
        <input
          ref={functionRef}
          className={`input ${!isValid ? null : "is-danger"}`} 
          type={typeInput} 
          placeholder={placeholderText}
          onBlur={({ target: { value }}) => handleBlur(value, inputId, validation)}
        />
      </p>
      {
        !isValid ? null : (<p className="help is-danger">{isValid}</p>)
      }
    </div>
  )
}