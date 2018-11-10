import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

// This is where out contacts state is held!

class Contacts extends Component {
  deleteContact = id => {
    const { contacts } = this.state;

    //filter and give contacts which do not contain the on with the id below
    const newContacts = contacts.filter(contact => contact.id !== id);

    //Now set new state where contacts are the newContacts
    this.setState({
      contacts: newContacts
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {value.contacts.map(contact => (
                // we will "export/use" the contact below to the Contact.js file. We basically passed the prop to the Contact tag that will be used in the Contact.js file"
                <Contact
                  key={contact.id}
                  contact={contact}
                  deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
