import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "ddas", name: "Boo", age: 10 },
      { id: "bcds", name: "Too", age: 20 },
      { id: "ngtd", name: "Roo", age: 30 }
    ],
    otherState: "some other value",
    showPersons: true
  };

  // switchNameHandler = newName => {
  //   // console.log("was clicked");
  //   // Don't do this : this.state.persons[0].name = "Booooroo";
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 10 },
  //       { name: "Toobee", age: 20 },
  //       { name: "Rootee", age: 30 }
  //     ]
  //   });
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.find(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: [
        { name: "Boo", age: 10 },
        { name: event.target.value, age: 20 },
        { name: "Rootee", age: 30 }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
          ;
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
