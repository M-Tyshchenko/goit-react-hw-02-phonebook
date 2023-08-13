import { DeleteBtn, List, ListItem } from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <ListItem key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>

          <DeleteBtn onClick={() => onDelete(contact.id)}>Delete</DeleteBtn>
        </ListItem>
      ))}
    </List>
  );
};
