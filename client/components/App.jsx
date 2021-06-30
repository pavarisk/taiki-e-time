import React, { useState } from 'react'

import MyMenu from './MyMenu'
import MyHeader from './MyHeader'
import Facts from './Facts'
import Landing from './Landing'

const App = () => {
  const [homePage, setHomePage] = useState(true)

  return (
    <>
      <div className="ui container">
        <MyMenu setHomePage={setHomePage}/>
        <MyHeader/>
      </div>
      {homePage ? <Landing setHomePage={setHomePage} /> : <Facts /> }
    </>
  )
}

export default App
