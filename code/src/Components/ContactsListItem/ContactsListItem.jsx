import PropTypes from 'prop-types';

const ContactsListItem = ({filter,removeName}) => {
    return ( <>{filter.map(contact=><li key={contact.id}><p>{contact.name}:{contact.number}</p><button type="button" onClick={(e)=>{removeName(contact.name)}}>Delete</button></li>)}</> );
}

ContactsListItem.prototypes ={
    filter: PropTypes.string.isRequired,
    removeName: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default ContactsListItem;