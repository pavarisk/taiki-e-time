import React, { useState, useEffect } from 'react'
import { Card, Image, Segment, Button, Icon } from 'semantic-ui-react'
import { getRandomFact } from '../apiClient'

function Facts (props) {
  const [fact, setFact] = useState([])

  useEffect(() => {
    loadFact()
  }, [])

  function loadFact () {
    return getRandomFact()
      .then(fact => {
        return setFact(fact)
      })
      .catch(e => console.log(e))
  }

  return (
    <>
      <Card centered>
        <Image src={fact.image} wrapped ui={false} size='big' />
        <Card.Content>
          <Card.Header>{fact.factType}</Card.Header>
          <Card.Meta>
            <span className='reference'>{fact.reference}</span>
          </Card.Meta>
          <Card.Description>
            {fact.factDetails}
          </Card.Description>
        </Card.Content>
      </Card>
      <Segment color='yellow' inverted>
        <Button onClick={() => loadFact()} animated>
          <Button.Content visible>Another One</Button.Content>
          <Button.Content hidden>
            <Icon name='refresh' />
          </Button.Content>
        </Button>
      </Segment>
    </>
  )
}

export default Facts
