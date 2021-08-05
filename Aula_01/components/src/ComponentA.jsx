import React from 'react'

function ComponenteA(props) {
  return (
    <div>
      <p>Componente A =D</p>
      <div>{props.children}</div>
    </div>
  )
}

export default ComponenteA
