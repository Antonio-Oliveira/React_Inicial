// Component é obrigatório caso queira usar classes como componente
import React, { Component } from "react"

// Render
import ReactDOM from "react-dom"

//Css
import "./styles.css"

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      clock: 1000,
      copo: 'água'
    }
  }

  componentDidMount() {
    window.setTimeout(() => {
      // setState serve para alterar valores
      this.setState({
        copo: 'suco'
      })
    }, 3000)
  }

  alterarCopo = () => {
    // setState serve para alterar valores
    this.setState({
      copo: 'refrigerante'
    })
  }

  render() {
    const { clock, copo } = this.state
    return (
      <div>
        <h1>{clock}</h1>
        <button onClick={() => this.alterarCopo()}><h1>{copo}</h1></button>
      </div>
    )
  }
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
