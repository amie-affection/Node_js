const uuid = require("uuid");

const contacts = [];

exports.contactsModel = {
  addContact(contactParams) {
    const id = uuid.v4();

    const newContact = contacts.push({ ...contactParams, id });
    contacts.push(newContact);

    return newContact;
  },
};
