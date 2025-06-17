import React from 'react'
import Name from '../Name/Name'
import Details from '../Details/Details'
import Dummy from '../Dummy'

function ReduxPage() {
  return (
    <div>
        <Name />
        <hr/>
        <Details />
        <h2>Different component :</h2>
        <Dummy />
    </div>
  )
}

export default ReduxPage