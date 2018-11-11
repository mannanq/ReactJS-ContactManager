import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../../context';

// This is where out contacts state is defined!

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          // eslint-disable-next-line
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List
              </h1>
              {value.contacts.map(contact => (
                // we will "export/use" the contact below to the Contact.js file. We basically passed the prop to the Contact tag that will be used in the Contact.js file"
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
