import React, { Component } from 'react';

// Now, instead of hard-coding our state into the Contacts.js file, we put it into this context file
const Context = React.createContext();

//For our actions, such as delete. It takes the state and action. If action is Delete, it will return the original state (spread func) filtered through the condition we provide i.e. here not including the delete contact. payload is the data of the contact we're deleting such as id.

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

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
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
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
