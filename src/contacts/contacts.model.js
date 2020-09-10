const uuid = require("uuid");

const contacts = [];

exports.ContactModel = class ContactModel {
  addContact(contactParams) {
    const id = uuid.v4();

    const contactAdd = contacts.push({ ...contactParams, id });
    contacts.push(contactAdd);

    return contactAdd;
  }
};

exports.ContactModel = new ContactModel();
