import React, { useState, useEffect } from 'react'
import { Card, Image, Segment, Button, Icon } from 'semantic-ui-react'
import { getFactById } from '../apiClient'

function Facts (props) {
  const [fact, setFact] = useState([])
  const [id, setId] = useState(1)
  const [ranId, setRanId] = useState(1)

  useEffect(() => {
    changeId()
  }, [])

  useEffect(() => {
    factIs()
  }, [id])

  function factIs () {
    return getFactById(id)
      .then(fact => {
        console.log(fact)
        return setFact(fact)
      })
      .catch(e => console.log(e))
  }

  function changeId () {
    const randomid = Math.floor((Math.random() * 10) + 1)
    if (randomid !== ranId) {
      setRanId(randomid)
      setId(ranId)
      console.log('id: ' + id + ', random id: ' + ranId)
    }
    return null
  }

  return (
    <>
      <Card centered>
        <Image src={fact.image} wrapped ui={false} />
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
        <Button onClick={() => changeId()} animated>
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
