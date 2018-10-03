import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Nav extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu style={{"margin-bottom" : "4rem"}} size="massive">
        <Menu.Item header>Daily News</Menu.Item>
        <Menu.Item href="https://github.com/nickharvey27/Daily-News" name='About' active={activeItem === 'About'} onClick={this.handleItemClick} />
        <Menu.Item href="mailto:nharvey278@gmail.com" name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick} />
      </Menu>
    )
  }
}
