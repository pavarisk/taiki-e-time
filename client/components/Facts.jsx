import React from 'react'
import { Card, Image } from 'semantic-ui-react'

const CardExampleImageCard = () => (
  <Card centered>
    <Image src='/images/london-fc.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Food Fact</Card.Header>
      <Card.Description>
        The best Fish n Chip shop is London Street Fish and Chips!
      </Card.Description>
    </Card.Content>
  </Card>
)

export default CardExampleImageCard
