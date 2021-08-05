import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function sum(a, b) {
  return a + b
}


// JSX (+-Razor pages)
function primeiroJSX() {
  return (
    <div className="teste">
      <h1> Introdução a React </h1>
      <br></br>
      <p>Professor: Bruno Carneiro - Introdução ao ReactJS</p>
      <p>Aluno: Antonio Oliveira</p>
      <h1>Soma: {sum(700, 77)}</h1>
      <br></br>
    </div>
  )
}

// Função principal
const App = () => {

  return (
    <div className="App">
      {primeiroJSX()}
    </div>
  )
}

/* 
    Como se fosse Razor Pages do Asp .NET Core 
    Ou seja, esse elemento vai renderizar la no elemento "root"
*/
const rootElement = document.getElementById("root")
const rootElement1 = document.getElementById("root1")
const rootElement2 = document.getElementById("root2")


ReactDOM.render(<App />, rootElement)
ReactDOM.render(<App />, rootElement1)
ReactDOM.render(<App />, rootElement2)

