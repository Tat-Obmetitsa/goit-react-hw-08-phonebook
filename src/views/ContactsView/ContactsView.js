import React from 'react';
import s from '../ContactsView/ContactsView.module.css';
import AddContact from '../../components/AddContact/AddContact';
import ContactList from '../../components/ContactList/ContactList'
import SearchFilter from '../../components/SearchFilter/SearchFilter';

const ContactsView = () => (
  <div className={s.container}>
  <h1 className={s.container__title}>Phonebook</h1>
  <AddContact />
  <h2 className={s.container__title}>Contacts</h2>
  <SearchFilter  />
  <ContactList />
</div>
);

export default ContactsView;
