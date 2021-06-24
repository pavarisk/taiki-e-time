import React from 'react'
import { Header, Icon } from 'semantic-ui-react'

const MyHeader = () => (
  <Header as='h2' color='black' icon>
    <Icon name='newspaper outline' />
    Tāiki E Times
    <Header.Subheader>
      Did you know?
    </Header.Subheader>
  </Header>
)

export default MyHeader
