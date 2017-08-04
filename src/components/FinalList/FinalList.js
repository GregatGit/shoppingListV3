import React from 'react'
import {List, ListItem} from 'material-ui/List'
import ContentInbox from 'material-ui/svg-icons/content/inbox'
import ActionGrade from 'material-ui/svg-icons/action/grade'
import ContentSend from 'material-ui/svg-icons/content/send'
import ContentDrafts from 'material-ui/svg-icons/content/drafts'
import Divider from 'material-ui/Divider'
import ActionInfo from 'material-ui/svg-icons/action/info'
import Subheader from 'material-ui/Subheader'

class FinalList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      temp: []
    }
  }
  makeListItem (item) {
    return (
      <ListItem primaryText={item.item} rightIcon={< ActionInfo />} />
    )
  }
  render () {
    console.log('props', this.props)
    return (
      <div>
        <List>
          <Subheader>{this.props.items[0].listName}</Subheader>
          { this.props.items[0].items.map(this.makeListItem)}
        </List>
        <Divider />
      </div>
    )
  }
}

export default FinalList
