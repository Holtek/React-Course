import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Boo", age: 10 },
      { name: "Too", age: 20 },
      { name: "Roo", age: 30 }
    ],
    otherState: "some other value",
    showPersons: true
  };

  switchNameHandler = newName => {
    // console.log("was clicked");
    // Don't do this : this.state.persons[0].name = "Booooroo";
    this.setState({
      persons: [
        { name: newName, age: 10 },
        { name: "Toobee", age: 20 },
        { name: "Rootee", age: 30 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Boo", age: 10 },
        { name: event.target.value, age: 20 },
        { name: "Rootee", age: 30 }
      ]
    });
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
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "boo")}
            changed={this.nameChangedHandler}
          >
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
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
