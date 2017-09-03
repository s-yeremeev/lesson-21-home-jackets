import React from "react"
import "./index.scss"

export default ({
  id,
  subject,
  description,
  from: {
    name,
    avatarUrl
  },
  isSelected,
  handleItemClick
}) => {

  return (
    <div
      onClick={() => handleItemClick(id)} 
      className={`email-item ${isSelected && "email-item-selected" || null} pure-g`}>
      <div className="pure-u">
        <img
          width="64"
          height="64"
          alt={`${name} &#x27;s avatar`}
          className="email-avatar"
          src={avatarUrl}
        />
      </div>

      <div className="pure-u-3-4">
        <h5 className="email-name">{name}</h5>
        <h4 className="email-subject">{subject}</h4>
        <p className="email-desc">
          {description}
        </p>
      </div>
    </div>
  )
}