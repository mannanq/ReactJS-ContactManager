import React, { Component } from 'react';
import Contact from './Contact';

class Contacts extends Component {
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
    const { contacts } = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </React.Fragment>
    );
  }
}

export default Contacts;
