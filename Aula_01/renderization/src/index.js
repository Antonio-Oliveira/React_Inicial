import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import "./styles.css"

// Elementos
const element0 = <h1>Hello World</h1>
const element1 = 'Digital Innovation -'
const element2 = '- Olá Turma =D'

// Componente
function App() {
  return (
    <div>
      {element0}
      {element1}
      {element2}
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
