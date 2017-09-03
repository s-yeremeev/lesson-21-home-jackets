import React from "react"
import { Link } from "react-router"

export default ({
  linkHref,
  linkText
}) => {
  return (
    <Link to={linkHref}>
      {linkText}
    </Link>
  )
}