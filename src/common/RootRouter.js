import React from "react"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import JacketsAllContainer from "../jackets/JacketsStartPage"
import JacketContainer from "../jackets/Jacket"

export default class RootRouter extends React.PureComponent {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <Route path="/jackets" component={JacketsAllContainer}>
            <Route path="/jacket/:jacketId" component={JacketContainer}/>
          </Route>
        </Route>
      </Router>
    )
  }
}