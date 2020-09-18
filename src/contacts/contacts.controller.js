const { contactsModel } = require("./contacts.model");

exports.addContact = async (req, res, next) => {
  try {
    const newContact = await contactsModel.addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    console.log("Error!", error);
  }
};

exports.getContacts = (req, res, next) => {
  const contacts = contactsModel.findContacts();

  res.status(200).json(contacts);
};

exports.getContact = (req, res, next) => {
  const { contactId } = req.params;

  const contact = contactsModel.findContactById(contactId);
  if (!contact) {
    return res.status(404).json("Contact not found");
  }

  res.status(200).json(contact);
};

exports.updateContact = (req, res, next) => {
  const { contactId } = req.params;

  const contact = contactsModel.findContactById(contactId);
  if (!contact) {
    return res.status(404).json("Contact not found");
  }

  const updatedContact = contactsModel.updateContact(contactId, req.body);

  res.status(200).json(updatedContact);
};

exports.deleteContact = (req, res, next) => {
   const { contactId } = req.params;

   const contact = contactsModel.findContactById(contactId);
   if (!contact) {
     return res.status(404).json("Contact not found");
  }
  
  contactsModel.deleteContactById(contactId);

  res.status(204).json();
}