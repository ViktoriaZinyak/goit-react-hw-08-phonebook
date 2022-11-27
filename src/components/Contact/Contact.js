import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      <p>
        {contact.name}: <span>{contact.number}</span>
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
