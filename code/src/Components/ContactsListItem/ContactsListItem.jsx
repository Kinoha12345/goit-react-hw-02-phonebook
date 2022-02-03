const ContactsListItem = ({filter,removeName}) => {
    return ( <>{filter.map(contact=><li key={contact.id}><p>{contact.name}:{contact.number}</p><button type="button" onClick={(e)=>{removeName(contact.name)}}>Delete</button></li>)}</> );
}

export default ContactsListItem;