import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { Wrap, ContactData } from './Contact.styled';
import { Button } from 'components/RegisterForm/RegisterForm.styled';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <Wrap>
      <ContactData>
        {contact.name}: <span>{contact.number}</span>
      </ContactData>
      <Button onClick={handleDelete}>Delete</Button>
    </Wrap>
  );
};
