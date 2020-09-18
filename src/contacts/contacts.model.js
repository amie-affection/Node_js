const uuid = require("uuid");
const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "../../db/contacts.json");

exports.contactsModel = {
  async addContact(contactParams) {
    try {
      const id = uuid.v4();

      const fileData = await fs.promises.readFile(contactsPath);
      const contacts = JSON.parse(fileData);

      const newContact = { id, ...contactParams };
      contacts.push(newContact);

      await fs.promises.writeFile(contactsPath, JSON.stringify(contacts));

      return newContact;
    } catch (error) {
      console.log("Error!", error);
    }
  },

  findContacts() {
    try {
      return contacts;
    } catch (error) {
      console.log("Error!", error);
    }
  },

  findContactById(contactId) {
    try {
      return contacts.find((contact) => contact.id === contactId);
    } catch (error) {
      console.log("Error!", error);
    }
  },

  updateContact(userId, paramsToUpdate) {
    const contactInd = contacts.findIndex(
      (contact) => contact.id === contactId
    );
    if (!contactInd !== -1) {
      return null;
    }

    contacts[contactInd] = { ...contacts[contactInd], ...paramsToUpdate };

    return contacts[contactInd];
  },

  deleteContactById(contactId) {
    const contactInd = contacts.findIndex(
      (contact) => contact.id === contactId
    );
    if (!contactInd !== -1) {
      return null;
    }

    contacts.splice(contactInd, 1);
  },
};
