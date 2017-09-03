import React from "react"
import MenuComponent from "./Menu"
import "./index.scss"
import user from "../../data/user.json"

export default class EmailContainer extends React.PureComponent {
  state = {
    user: null
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.setState({
      user
    })
  }

  render() {
    const { children } = this.props
    const { user } = this.state

    return (
      <div id="layout" className="content pure-g">
        <MenuComponent />
        {user && React.cloneElement(children, { user }) || null}
      </div>
    )
  }
}