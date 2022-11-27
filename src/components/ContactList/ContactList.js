// import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Item } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Contact } from '../Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(contact => (
            <Item key={contact.id}>
              <Contact contact={contact} />
            </Item>
          ))}
        </ul>
      ) : (
        <div>No contacts </div>
      )}
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
