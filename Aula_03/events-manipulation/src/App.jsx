import React from "react";

/*
const App = () => {

  const name = "Digital Innovation One"

  const showEvent = (e) => {
    alert(name);
    console.warn(e);
  }

  const deleteButton = <button onClick={showEvent}>Mostrar Evento</button>

  const handleChange = (e) => {
    const {value} = e.target;
    console.log(value);
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <input onChange={handleChange} />
      {deleteButton}
    </div>
  );
};
export default App;
*/



const listCustomer = [
  {
    id: 1,
    name: 'Bruno Carneiro',
    skills: ['React', 'Node', 'CSS', 'Webpack']
  },
  {
    id: 2,
    name: 'Aline Carneiro',
    skills: ['HTML', 'React Native', 'Go', 'JS']
  },
  {
    id: 3,
    name: 'Fulano de Tal',
    skills: ['Assembly']
  },
  {
    id: 4,
    name: 'José Ciclano',
    skills: ['Reason']
  },
  {
    id: 5,
    name: 'Antonio Oliveira',
    skills: ['HTML', 'Css', 'Asp .Net Core', 'C#', 'Java']
  }
]

const App = () => {

  const handleClick = (e, id) => {
    console.log("deletar cliente");
    alert('id do cliente: ' + id);
  }

  const renderSkills = (skill, index) => {
    return (
      <div key={`skill-${index}`}>
        <li >{skill}</li>
      </div>
    )
  }

  const renderCustomers = (customer, index) => {
    return (
      <dir key={`customer-${customer.id}`}>
        <li>{customer.name}  <button onClick={(e) => handleClick(e, customer.id)}>Deletar cliente X</button></li>
        {customer.skills.map(renderSkills)}
      </dir>
    )
  }

  return (
    <div>
      <p>Digital Innovation One</p>
      <p>Bem vindo a nossa aula =D.</p>
      <div>
        <ul>
          {listCustomer.map(renderCustomers)}
        </ul>
      </div>
    </div>
  );
};
export default App;