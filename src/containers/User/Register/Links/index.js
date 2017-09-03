import React from "react"
import Link from "../Link"

const links = [
  {
    linkText: "Login",
    linkHref: "/login"
  }
]
const linksLength = links.length

export default ({}) => {
  return (
    <p className="has-text-centered">
      {
        links.map(({ linkText, linkHref }, index) => (
          <span key={index}>
            <Link 
              linkText={linkText} 
              linkHref={linkHref}
            />
            {
              linksLength == index + 1 ? null : "|"
            }
          </span>
        ))
      }
    </p>
  )
}