import React from 'react'
import { useState, useEffect, useRef } from 'react'

function UseRefExample2() {
  const [name, setName] = useState('')

  const renders = useRef(1)
  const preName = useRef('')

  useEffect(() => {
    renders.current = renders.current + 1
    preName.current = name
  })

  return (
    <div>
      <h1>Renders:{renders.current}</h1>
      <h1>Prev Name:{preName.current}</h1>
      <input
        type='text'
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        className='form-control mb-3'
      />
    </div>
  )
}

export default UseRefExample2
