// import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Item, Wrap, List } from './ContactList.styled';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Contact } from '../Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <div>
      {contacts.length > 0 ? (
        <List>
          {contacts.map(contact => (
            <Item key={contact.id}>
              <Contact contact={contact} />
            </Item>
          ))}
        </List>
      ) : (
        <Wrap>No contacts </Wrap>
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
