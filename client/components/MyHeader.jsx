import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const MyHeader = () => (
  <Header as='h1' color='black' icon>
    <Icon name='newspaper outline' />
    Tāiki E Times
    <Header.Subheader>
      Welcome to the land of Gizzy Facts
    </Header.Subheader>
  </Header>
)

export default MyHeader
