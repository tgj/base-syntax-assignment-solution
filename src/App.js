import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './App.css';
import UserInput from './UserInput';
import UserOutput from './UserOutput';

class App extends Component {
  state = {
    persons: [
      { id: 0, username: 'tgj', age: 24, role: 'Engineer' },
      { id: 1, username: 'AmandaSlays', age: 28, role: 'Coordinator' },
      { id: 2, username: 'ImAPet', age: 19, role: 'Intern' },
    ],
  };

  changePersonNameHandler = (event, id) => {
    const updatedPersonsArray = this.state.persons;
    updatedPersonsArray.find(x => x.id === id).username = event.target.value;
    this.setState({
      persons: updatedPersonsArray,
    });
  };

  render() {
    return (
      <div className="App">
      <Row>
        <Col xs={12} sm={8} smOffset={2} md={6} smOffset={3}>
        {
          this.state.persons.map(person => (
          <div
            key={person.id}
            style={{outline: 'solid 1px #eee', padding: '20px'}}>
            <UserOutput
              username={person.username}
              occupation={person.role} 
            />
            <UserInput 
              id={person.id}
              username={person.username}
              onChange={this.changePersonNameHandler}              
            />
          </div>))
        }

        </Col>
      </Row>
      </div>
    );
  }
}

export default App;
