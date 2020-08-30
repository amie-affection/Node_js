const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");
// console.log(contactsPath);

async function listContacts() {
  const contacts = await fs.promises.readFile(contactsPath);
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  const allContacts = await listContacts();
  const findContact = allContacts.find((contact) => contact.id === contactId);
  // console.log(findContact);
  return findContact;
}

async function removeContact(contactId) {
  const allContacts = await listContacts();
  const newAllContacts = allContacts.filter(
    (contact) => contact.id !== contactId
  );
  // console.log(newAllContacts);
  const contacts = JSON.stringify(newAllContacts);
  // console.log(contacts);
  await fs.promises.writeFile(contactsPath, contacts);
  return newAllContacts;
}

async function addContact(name, email, phone) {
  const allContacts = await listContacts();
  const newId = allContacts[allContacts.length - 1].id + 1;

  const newContact = { id: newId, name, email, phone };
  const newAllContacts = [...allContacts, newContact];
  // console.log(newAllContacts);
  const contacts = JSON.stringify(newAllContacts);
  await fs.promises.writeFile(contactsPath, contacts);
  return newAllContacts;
};

module.exports = { listContacts, getContactById, removeContact, addContact };