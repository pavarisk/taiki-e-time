import React, { useState, useEffect } from 'react'
import { Card, Image, Segment, Button, Icon } from 'semantic-ui-react'
import { getFacts, getFactById } from '../apiClient'

function Facts (props) {
  const [facts, setFacts] = useState([])
  const [id, setId] = useState(1)
  console.log(facts)

  useEffect(() => {
    factIs()
  }, [id])

  function factIs () {
    return getFactById(id)
      .then(fact => {
        console.log(fact)
        return setFacts(fact)
      })
      .catch(e => console.log(e))
  }

  function changeId (id) {
    if (id === 3) {
      id = 1
      return setId(id)
    } else return setId(id + 1)
  }

  return (
    // facts.map(fact =>
    //   <Card centered key={fact.id}>
    //     <Image src={fact.image} wrapped ui={false} />
    //     <Card.Content>
    //       <Card.Header>{fact.factType}</Card.Header>
    //       <Card.Description>
    //         {fact.factDetails}
    //       </Card.Description>
    //     </Card.Content>
    //   </Card>
    // )
    <>
      <Card centered>
        <Image src={facts.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{facts.factType}</Card.Header>
          <Card.Description>
            {facts.factDetails}
          </Card.Description>
        </Card.Content>
      </Card>
      <Segment color='yellow' inverted>
        <Button onClick={() => changeId(id)} animated>
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
