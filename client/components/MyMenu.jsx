import React, { useState } from 'react'
import { Menu, Input, Button } from 'semantic-ui-react'
import { getFactByName } from '../apiClient'

export default function MyMenu (props) {
  const [state, setState] = useState({ activeItem: 'home' })
  const { setHomePage } = props
  const { activeItem } = state
  const [search, setSearch] = useState('')

  function handleItemClick (e) {
    e.preventDefault()
    setState({ activeItem: e.target.name })
    setHomePage(true)
  }

  function changeHandler (evt) {
    setSearch(evt.target.value)
  }

  function clickHandler (evt) {
    evt.preventDefault()
    getFactByName(search)
      .then(res => {
        console.log(res)
        return null
      })
      .catch(e => console.log(e))
  }

  return <>
    <Menu secondary>
      <Menu.Item
        name='home'
        active={activeItem === 'home'}
        onClick={handleItemClick}
      />
      <Menu.Menu position='right'>
        <Menu.Item>
          <Input type='text' value={search} onChange={(evt) => changeHandler(evt)} placeholder='Search...' />
          <Button icon='search' onClick={(evt) => clickHandler(evt)} />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  </>
}
