import React from "react"
import { filterEmailsByView } from "./filters"
import data from "../../../data/data.json"
import ItemComponent from "../Item"

export default class ListContainer extends React.PureComponent {  
  constructor(props) {
    super(props)

    const { params: { view } } = props

    this.state  = {
      emails: [],
      filteredEmails: [],
      currView: view || null,
      selectedId: null
    }
  }

  componentDidMount() {
    const { currView } = this.state
    const { user } = this.props
    
    this.setState(() => {
      const filteredEmails = filterEmailsByView(currView, data, user)
      return {
        emails: data,
        filteredEmails
      }
    })
  }

  componentWillReceiveProps(nextProps) {
    const { params: { view }, user } = nextProps
    const { emails, currView } = this.state

    if (currView != view) {
      const filteredEmails = filterEmailsByView(view, emails, user)
      this.setState({
        filteredEmails,
        currView: view
      })
    }
  }

  handleItemClick = selectedId => this.setState({ selectedId })

  render() {
    const { filteredEmails, selectedId } = this.state

    return (
      <div id="list" className="pure-u-1">
        {
          filteredEmails.map(email => (
            <ItemComponent 
              {...email} 
              key={email.id}
              isSelected={selectedId === email.id}
              handleItemClick={this.handleItemClick} 
            />
          ))
        }
      </div>
    )
  }
}