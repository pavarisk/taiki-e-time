import React, { useState, useEffect } from 'react'
import { Grid, Segment, Button, Icon } from 'semantic-ui-react'

import MyMenu from './MyMenu'
import MyHeader from './MyHeader'
import Facts from './Facts'

const App = () => {
  return (
    <>
      <Grid rows='equal' centered devided inverted padded>
        <Grid.Column color='yellow' centered inverted textAlign='centered' padded >
          <Grid.Row>
            <Segment color='yellow' inverted>
              <MyMenu/>
            </Segment>
          </Grid.Row>
          <Grid.Row>
            <MyHeader/>
          </Grid.Row>
          <Grid.Row>
            <Facts />
          </Grid.Row>
          <Grid.Row>
            <Segment color='yellow' inverted>
              <Button animated>
                <Button.Content visible>Another One</Button.Content>
                <Button.Content hidden>
                  <Icon name='refresh' />
                </Button.Content>
              </Button>
            </Segment>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default App
