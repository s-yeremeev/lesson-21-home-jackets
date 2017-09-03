import React from "react"
import { Link } from "react-router"
import "./index.scss"

export default (props) => {
  const { inboxCount } = props

  return (
    <div id="nav" className="pure-u">
      <div className="nav-inner">
      <Link to="/email/compose">
        <button className="primary-button pure-button">Compose</button>
      </Link>  

        <div className="pure-menu">
          <ul className="pure-menu-list">
            <li className="pure-menu-item"><Link to="/email/list/inbox" activeClassName="active" className="pure-menu-link">Inbox <span className="email-count">{inboxCount ? `(${inboxCount})` : null}</span></Link></li>
            <li className="pure-menu-item"><Link to="/email/list/important" activeClassName="active" className="pure-menu-link">Important</Link></li>
            <li className="pure-menu-item"><Link to="/email/list/sent" activeClassName="active" className="pure-menu-link">Sent</Link></li>
            <li className="pure-menu-item"><Link to="/email/list/drafts" activeClassName="active" className="pure-menu-link">Drafts</Link></li>
            <li className="pure-menu-item"><Link to="/email/list/trash" activeClassName="active" className="pure-menu-link">Trash</Link></li>
            <li className="pure-menu-heading">Labels</li>
            <li className="pure-menu-item"><Link to="/email/list/personal" activeClassName="active" className="pure-menu-link"><span className="email-label-personal"></span>Personal</Link></li>
            <li className="pure-menu-item"><Link to="/email/list/work" activeClassName="active" className="pure-menu-link"><span className="email-label-work"></span>Work</Link></li>
            <li className="pure-menu-item"><Link to="/email/list/travel" activeClassName="active" className="pure-menu-link"><span className="email-label-travel"></span>Travel</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
}