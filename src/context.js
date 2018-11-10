import React, { Component } from 'react';

// Now, instead of hard-coding our state into the Contacts.js file, we put it into this context file
const Context = React.createContext();

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John Doe',
        email: 'jdoe@test.com',
        phone: '123-555-5555'
      },
      {
        id: 2,
        name: 'Jane Doe',
        email: 'janedoe@test.com',
        phone: '123-999-9999'
      },
      {
        id: 3,
        name: 'John Smith',
        email: 'jsmith@test.com',
        phone: '123-555-8888'
      }
    ]
  };

  render() {
    return (
      // provide here (in value attribute) whatever you want to ba accesible in the application
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
