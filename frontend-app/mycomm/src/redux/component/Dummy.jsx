import React from 'react'
import { useSelector } from 'react-redux'

function Dummy() {

    let dataFromNameJSX = useSelector( function(value) {
        if (value.name)
        return value.name + ' is the name';
    } )

  return (
    <> {dataFromNameJSX} </>
  )
}

export default Dummy