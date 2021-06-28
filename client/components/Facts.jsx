import React, { useState, useEffect } from 'react'
import { Card, Image, Segment, Button, Icon } from 'semantic-ui-react'
import { getFacts, getFactById } from '../apiClient'

const randomInt = Math.floor((Math.random() + 1) * 3)

function Facts (props) {
  const [facts, setFacts] = useState([])
  const [fact, setFact] = useState([])
  const [ranId, setRanId] = useState(randomInt)
  const [id, setId] = useState(1)

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
    // if (id === 3) {
    //   id = 1
    //   return setId(id)
    // } else return setId(id + 1)
    return setId(ranId)
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
