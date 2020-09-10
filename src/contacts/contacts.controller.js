const { contactsModel } = require("./contacts.model");

exports.addContact = (req, res, next) => {
  const newContact = contactsModel.addContact(req.body);
  res.status(201).json(newContact);
};
