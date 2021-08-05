import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

const App = () => {

  return (
    <div className="App">
      Hello World
    </div>
  )
}

/* 
    Como se fosse Razor Pages do Asp .NET Core 
    Ou seja, esse o React vai renderizar o conteúdo la no elemento "root"
*/
const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)