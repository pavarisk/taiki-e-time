import React from 'react'
import { Button, Image } from 'semantic-ui-react'

function Landing (props) {
  const { setHomePage } = props
  return (
    <>
      <div>
        <Image src='/images/taiki_e.jpg' alt='Taiki E!' centered size='large' padded rounded/>
      </div>
      <br></br>
      <div>
        <Button onClick={() => setHomePage(false)} padded >Get Random Fact Now!</Button>
      </div>
    </>
  )
}

export default Landing
