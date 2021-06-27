import React, { useState, useEffect } from 'react'
import { Card, Image } from 'semantic-ui-react'
import { getFacts } from '../apiClient'

// const fact = facts

function Facts () {
  const [facts, setFacts] = useState([])
  console.log(facts)

  useEffect(() => {
    factIs()
  }, [])

  function factIs () {
    return getFacts()
      .then(facts => {
        console.log(facts)
        setFacts(facts)
        return null
      })
      .catch(e => console.log(e))
  }

  return (
    facts.map(fact =>
      <Card centered key={fact.id}>
        <Image src={fact.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{fact.factType}</Card.Header>
          <Card.Description>
            {fact.factDetails}
          </Card.Description>
        </Card.Content>
      </Card>
    )
    // <Card centered>
    //   <Image src='/images/gisborne.jpg' wrapped ui={false} />
    //   <Card.Content>
    //     <Card.Header>factType</Card.Header>
    //     <Card.Description>
    //       factDetails
    //     </Card.Description>
    //   </Card.Content>
    // </Card>
  )
}

export default Facts
