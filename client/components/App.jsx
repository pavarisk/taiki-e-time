import React from 'react'
import { Grid, Segment, Button, Icon } from 'semantic-ui-react'

import MyMenu from './MyMenu'
import MyHeader from './MyHeader'
import Facts from './Facts'

const App = () => {
  return (
    <>
      <Grid rows='equal' centered devided inverted padded>
        <Grid.Column color='yellow' centered inverted textAlign='center' padded >
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
        </Grid.Column>
      </Grid>
    </>
  )
}

export default App
