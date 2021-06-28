import React from 'react'
// import { Grid, Segment } from 'semantic-ui-react'

import MyMenu from './MyMenu'
import MyHeader from './MyHeader'
import Facts from './Facts'

const App = () => {
  return (
    <>
      {/* <Grid rows='equal' divided padded fluid>
        <Grid.Column color='yellow' textAlign='center'>
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
      </Grid> */}
      <div className="ui container">
        <MyMenu/>
        <MyHeader/>
      </div>
      <div className="content">
        <Facts />
      </div>
    </>
  )
}

export default App
